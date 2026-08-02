/* ===== Fifth Avenue Sushi — IndexNow submitter =====
 *
 *   node indexnow-submit.js
 *
 * Pings IndexNow (Bing, Yandex, and other participating engines — this is also
 * how ChatGPT's Bing-powered search learns about updates fast) with every URL
 * in sitemap.xml so new/changed pages get crawled in minutes instead of days.
 *
 * Run it after each deploy. The key file (072c38759714658a1a6f6e08ca24393b.txt)
 * must be live at the site root — it already is, in this repo.
 */
const fs = require('fs');
const path = require('path');

const KEY = '072c38759714658a1a6f6e08ca24393b';
const HOST = 'www.fifthavenuesushi.ca';
const ENDPOINT = 'https://api.indexnow.org/indexnow';

const sitemap = fs.readFileSync(path.join(__dirname, 'sitemap.xml'), 'utf8');
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);

if (!urlList.length) {
  console.error('No <loc> URLs found in sitemap.xml — nothing to submit.');
  process.exit(1);
}

const body = {
  host: HOST,
  key: KEY,
  keyLocation: `https://${HOST}/${KEY}.txt`,
  urlList,
};

(async () => {
  console.log(`Submitting ${urlList.length} URLs to IndexNow…`);
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(body),
  });
  // IndexNow returns 200 or 202 on success.
  console.log(`IndexNow responded: ${res.status} ${res.statusText}`);
  if (res.status !== 200 && res.status !== 202) {
    console.error('Non-success status — check the key file is live and the host matches.');
    console.error(await res.text().catch(() => ''));
    process.exit(1);
  }
  console.log('Done. Bing/Copilot will recrawl these URLs shortly.');
})();
