"use client";

import { envClient } from "@/env/client";
import { envServer } from "@/env/server";
import Image from "next/image";

export default function HomePageClient() {
  return (
    <>
      <h1>Hello World</h1>
      <p>{`Mine app url is ${envClient.NEXT_PUBLIC_APP_URL}`}</p>
      <p>{`Mine app backend url is ${envClient.NEXT_PUBLIC_APP_BACKEND_URL}`}</p>
      <p>{`Mine image url is ${envClient.NEXT_PUBLIC_IMAGE_FULL_URL}`}</p>

      <p>{`Mine image base url in serveris ${envServer.IMAGE_BASE_URL}`}</p>
      <div className="relative h-[500px] w-[800px] overflow-hidden rounded-xl">
        <Image
          src={envClient.NEXT_PUBLIC_IMAGE_FULL_URL}
          alt="Unsplash example"
          fill
          className="object-cover"
          priority
        />
      </div>
    </>
  );
}
