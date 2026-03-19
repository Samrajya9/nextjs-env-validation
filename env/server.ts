"use server";
import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const envServer = createEnv({
  server: {
    IMAGE_BASE_URL: z.url({ error: "Invalid URL" }),
  },
  // If you're using Next.js < 13.4.4, you'll need to specify the runtimeEnv manually
  // runtimeEnv: {
  //   DATABASE_URL: process.env.DATABASE_URL,
  //   OPEN_AI_API_KEY: process.env.OPEN_AI_API_KEY,
  // },
  // For Next.js >= 13.4.4, you can just reference process.env:
  //   experimental__runtimeEnv: process.env,
  runtimeEnv: {
    IMAGE_BASE_URL: process.env.IMAGE_BASE_URL,
  },
});
