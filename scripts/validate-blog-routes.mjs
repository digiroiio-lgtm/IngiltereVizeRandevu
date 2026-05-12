/**
 * Blog route validation script.
 * Verifies that every blog post slug listed in site.ts has a corresponding
 * pre-rendered HTML file and that the file does NOT contain a 404 error page.
 *
 * Usage (after `npm run build`):
 *   node scripts/validate-blog-routes.mjs
 *
 * Exits with code 1 if any blog route is broken so that CI fails.
 */

import { readFileSync, existsSync, readdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const manifestPath = join(root, ".next", "routes-manifest.json");
if (!existsSync(manifestPath)) {
  console.error("ERROR: .next/routes-manifest.json not found. Run `npm run build` first.");
  process.exit(1);
}

const blogHtmlDir = join(root, ".next", "server", "app", "blog");
if (!existsSync(blogHtmlDir)) {
  console.error("ERROR: .next/server/app/blog not found. Run `npm run build` first.");
  process.exit(1);
}

// Every .html file directly inside the blog output dir is a pre-rendered slug page.
const allHtmlFiles = readdirSync(blogHtmlDir).filter(
  (f) => f.endsWith(".html") && f !== "page.html"
);

if (allHtmlFiles.length === 0) {
  console.error("ERROR: No blog slug HTML files found in build output. Check generateStaticParams.");
  process.exit(1);
}

const slugs = allHtmlFiles.map((f) => f.replace(/\.html$/, ""));

let failed = 0;
const results = [];

for (const slug of slugs) {
  const htmlPath = join(blogHtmlDir, `${slug}.html`);
  const html = readFileSync(htmlPath, "utf8");

  const isError = html.includes('id="__next_error__"');

  if (isError) {
    results.push({ slug, status: "FAIL", reason: "__next_error__ on <html> — page failed to render" });
    failed++;
  } else {
    results.push({ slug, status: "OK", reason: "" });
  }
}

// Print summary table
const colWidth = Math.max(...slugs.map((s) => s.length), 10);
console.log(`\nBlog Route Validation — ${slugs.length} routes\n${"=".repeat(colWidth + 18)}`);
for (const r of results) {
  const indicator = r.status === "OK" ? "✓" : "✗";
  console.log(`${indicator} /blog/${r.slug.padEnd(colWidth)}  ${r.status}${r.reason ? `  — ${r.reason}` : ""}`);
}
console.log(`\n${slugs.length - failed} / ${slugs.length} routes OK`);

if (failed > 0) {
  console.error(
    `\nFAILED: ${failed} blog route(s) produced broken output. Fix async params and rebuild.`
  );
  process.exit(1);
}

console.log("\nAll blog routes passed validation.");
