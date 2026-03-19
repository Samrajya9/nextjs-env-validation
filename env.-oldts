import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  server: {
    IMAGE_BASE_URL: z.url({ error: "Invalid URL" }),
  },

  clientPrefix: "NEXT_PUBLIC_",

  client: {
    NEXT_PUBLIC_APP_URL: z.url({ error: "Invalid URL" }),
    NEXT_PUBLIC_APP_BACKEND_URL: z.url({ error: "Invalid URL" }),
    NEXT_PUBLIC_IMAGE_FULL_URL: z.url({ error: "Invalid URL" }),
  },

  runtimeEnv: process.env,
  emptyStringAsUndefined: true,
});
