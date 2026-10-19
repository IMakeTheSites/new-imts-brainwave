import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// Lets `npm run dev` serve /api/chat locally (Vercel runs it as a serverless function in production).
// Put LLM_API_KEY=... in a .env.local file for local testing.
const localApi = () => ({
  name: "local-api",
  configureServer(server) {
    server.middlewares.use("/api/chat", async (req, res) => {
      const { default: handler } = await server.ssrLoadModule("/api/chat.js");
      return handler(req, res);
    });
  },
});

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  Object.assign(process.env, loadEnv(mode, process.cwd(), ""));
  return {
    plugins: [react(), localApi()],
  };
});
