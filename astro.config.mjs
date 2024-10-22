import { defineConfig } from "astro/config";
import sentry from "@sentry/astro";
import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  integrations: [
    sentry({
      dsn: process.env.SENTRY_URL,
      sourceMapsUploadOptions: {
        project: process.env.SENTRY_PROJECT,
        authToken: process.env.SENTRY_AUTH_TOKEN,
      },
    }),
  ],
  adapter: vercel(),
});
