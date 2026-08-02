/**
 * Fifth Avenue Sushi — edge redirect worker.
 *
 * Runs in front of the static assets (see wrangler.toml `run_worker_first`) and
 * enforces a single canonical origin so search engines never see duplicate
 * content across www/non-www or http/https:
 *
 *   http://…            → https://…            (301)
 *   https://fifthavenuesushi.ca/…  → https://www.fifthavenuesushi.ca/…  (301)
 *
 * It also maps a couple of short / legacy paths to their real destinations:
 *
 *   /ordering  → OpenTable reservations (301)
 *   /menu      → /menus/               (301)
 *   /blank     → /  (fallback for a stray Google Ads sitelink that 404'd)
 *
 * Everything else falls straight through to the ASSETS binding unchanged.
 *
 * NOTE: for the apex (non-www) redirect to actually fire, BOTH
 * `fifthavenuesushi.ca` and `www.fifthavenuesushi.ca` must be attached to this
 * Worker as custom domains/routes in the Cloudflare dashboard.
 */
const CANONICAL_HOST = "www.fifthavenuesushi.ca";
const OPENTABLE = "https://www.opentable.com/r/fifth-avenue-sushi-calgary";

// Short/legacy path → destination (absolute URL, or site-relative path).
// Keys are matched lowercase with any trailing slash removed.
const PATH_REDIRECTS = {
  "/ordering": OPENTABLE,
  "/menu": "/menus/",
  "/blank": "/",
};

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    let changed = false;

    if (url.protocol === "http:") {
      url.protocol = "https:";
      changed = true;
    }
    // Redirect the bare apex (and any non-canonical host) to www.
    if (url.hostname === "fifthavenuesushi.ca") {
      url.hostname = CANONICAL_HOST;
      changed = true;
    }

    if (changed) {
      return Response.redirect(url.toString(), 301);
    }

    // Short / legacy path redirects (e.g. /ordering, /menu).
    const key = url.pathname.replace(/\/+$/, "").toLowerCase() || "/";
    if (PATH_REDIRECTS[key]) {
      const dest = PATH_REDIRECTS[key];
      const target = dest.startsWith("http") ? dest : new URL(dest, url).toString();
      return Response.redirect(target, 301);
    }

    return env.ASSETS.fetch(request);
  },
};
