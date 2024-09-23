import { SitemapBuilder } from "react-router-sitemap";
import routes from "./sitemap-routes.js"; // Ensure this exports your routes correctly

function generateSitemap() {
  const sitemap = new SitemapBuilder(routes)
    .applyParams({}) // You can pass dynamic parameters here if needed
    .build("https://localhost.com") // Replace with your actual domain
    .save("./public/sitemap.xml"); // This is where the sitemap will be saved

  return sitemap;
}

// Call the function to generate the sitemap
generateSitemap();
