Resilience Orbit — Debug Helper
===============================

Files:
- debug/build-info.html

What it does:
- Publishes a static page at /debug/build-info.html
- Shows a generated timestamp (at packaging time) and your client time
- HEAD-checks /blog/ and /blog/rss.xml to confirm the blog is deployed

How to use:
1) Add this 'debug' folder to your repo root and commit.
2) Confirm your Cloudflare Pages build settings:
   - Build command: npm run build
   - Output directory: _site
   - Framework preset: None
3) After deploy, open:
   https://www.resilienceorbit.com/debug/build-info.html

If /blog/ is still 404:
- Ensure the Eleventy files are present in repo root:
  package.json, .eleventy.js, blog.njk, blog-rss.njk, _includes/, content/posts/
- Check build logs to verify Eleventy ran and _site/blog/ exists.
- If necessary, push a no-op commit to trigger a fresh build.
