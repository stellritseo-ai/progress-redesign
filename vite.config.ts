// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  nitro: {
    preset: process.env["NITRO_PRESET"] || "vercel",
  },
  vite: {
    plugins: [
      {
        name: "dev-api-lead-middleware",
        configureServer(server) {
          server.middlewares.use(async (req, res, next) => {
            if (req.url === "/api/send-lead" && req.method === "POST") {
              let bodyStr = "";
              req.on("data", (chunk) => {
                bodyStr += chunk;
              });
              req.on("end", async () => {
                try {
                  const body = JSON.parse(bodyStr);
                  const { handleLeadEmail } = await server.ssrLoadModule("/src/server/email-handler.ts");
                  const result = await handleLeadEmail(body);
                  res.statusCode = result.success ? 200 : 400;
                  res.setHeader("Content-Type", "application/json");
                  res.end(JSON.stringify(result));
                } catch (e: any) {
                  res.statusCode = 500;
                  res.setHeader("Content-Type", "application/json");
                  res.end(JSON.stringify({ success: false, error: e?.message || "Internal server error" }));
                }
              });
              return;
            }
            next();
          });
        },
      },
    ],
  },
});
