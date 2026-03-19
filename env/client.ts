import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const envClient = createEnv({
  client: {
    NEXT_PUBLIC_APP_URL: z.url({ error: "Invalid URL" }),
    NEXT_PUBLIC_APP_BACKEND_URL: z.url({ error: "Invalid URL" }),
    NEXT_PUBLIC_IMAGE_FULL_URL: z.url({ error: "Invalid URL" }),
  },
  runtimeEnv: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NEXT_PUBLIC_APP_BACKEND_URL: process.env.NEXT_PUBLIC_APP_BACKEND_URL,
    NEXT_PUBLIC_IMAGE_FULL_URL: process.env.NEXT_PUBLIC_IMAGE_FULL_URL,
  },
});
