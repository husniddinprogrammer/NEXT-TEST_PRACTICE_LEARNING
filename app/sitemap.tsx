// SiteMap for SEO
const basePath = "http://localhost:3000/";
export default function sitemap() {
  return [
    {
      url: basePath,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: basePath + "/products",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: basePath + "/contact",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}