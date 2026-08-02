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
 * Everything else falls straight through to the ASSETS binding unchanged.
 *
 * NOTE: for the apex (non-www) redirect to actually fire, BOTH
 * `fifthavenuesushi.ca` and `www.fifthavenuesushi.ca` must be attached to this
 * Worker as custom domains/routes in the Cloudflare dashboard.
 */
const CANONICAL_HOST = "www.fifthavenuesushi.ca";

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

    return env.ASSETS.fetch(request);
  },
};
