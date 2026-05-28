import { writeFileSync } from "node:fs";

// This is the TanStack Start SSR bundle (Cloudflare Workers-style fetch handler)
const { default: server } = await import("../dist/server/server.js");

const req = new Request("http://localhost/", {
  method: "GET",
  headers: { accept: "text/html,application/xhtml+xml,*/*" },
});

const res = await server.fetch(req, {}, {});
const html = await res.text();

if (res.status !== 200) {
  console.error(`Prerender failed: HTTP ${res.status}\n${html.slice(0, 500)}`);
  process.exit(1);
}

writeFileSync("dist/client/index.html", html, "utf8");
console.log(`OK: dist/client/index.html (${html.length} chars)`);
