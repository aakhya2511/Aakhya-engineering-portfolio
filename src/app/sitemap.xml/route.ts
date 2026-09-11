import { projects } from "@/data/projects";

const siteUrl = "https://aakhya-engineering-portfolio.vercel.app";

export function GET() {
  const paths = ["", ...projects.map((project) => `/projects/${project.slug}`)];
  const urls = paths.map((path) => `<url><loc>${siteUrl}${path}</loc></url>`).join("");
  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=0, s-maxage=86400" },
  });
}
