import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import fs from "node:fs";
import path from "path";
import type { Plugin } from "vite";
import { componentTagger } from "lovable-tagger";

const serveXmlFile = (routePath: string, filePath: string): Plugin => {
  const serve = (url: string | undefined, res: { setHeader: (name: string, value: string) => void; statusCode: number; end: (body: string) => void; }, next: (error?: Error) => void) => {
    if ((url ?? "").split("?")[0] !== routePath) {
      next();
      return;
    }

    try {
      const xml = fs.readFileSync(path.resolve(__dirname, filePath), "utf8");
      const body = xml.startsWith("<?xml")
        ? xml
        : `<?xml version="1.0" encoding="UTF-8"?>\n${xml}`;

      res.setHeader("Content-Type", "application/xml; charset=UTF-8");
      res.statusCode = 200;
      res.end(body);
    } catch (error) {
      next(error instanceof Error ? error : new Error("Failed to serve XML file."));
    }
  };

  return {
    name: "serve-sitemap-xml",
    configureServer(server) {
      server.middlewares.use((req, res, next) => serve(req.url, res, next));
    },
    configurePreviewServer(server) {
      server.middlewares.use((req, res, next) => serve(req.url, res, next));
    },
  };
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [serveXmlFile("/sitemap.xml", "public/sitemap.xml"), react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
