import "./env.-oldts"; // <-- this runs the env validator (and will throw if missing)

import type { NextConfig } from "next";
import { envServer } from "./env/server";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol:
          new URL(envServer.IMAGE_BASE_URL).protocol === "https:"
            ? "https"
            : "http",
        hostname: new URL(envServer.IMAGE_BASE_URL).hostname,
      },
    ],
  },
  /**
   * Reasons to use `output: process.env.NODE_ENV === "development" ? "standalone" : undefined`
   * when using output:"standalone" as per t3 docs ['https://env.t3.gg/docs/nextjs']
   * running cmd `pnpm start` will cause this warning "⚠ "next start" does not work with "output: standalone" configuration. Use "node .next/standalone/server.js" instead."
   * so to over come the warning during development standalone is use where as during production `undefined` is used
   */
  output: process.env.NODE_ENV === "development" ? "standalone" : undefined,
  transpilePackages: ["@t3-oss/env-nextjs", "@t3-oss/env-core"],
};

export default nextConfig;
