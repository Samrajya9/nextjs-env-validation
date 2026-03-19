import HomePageClient from "@/components/home-page-client";
import { envClient } from "@/env/client";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center gap-2 bg-white px-16 py-32 dark:bg-black sm:items-start">
        {/* <h1>Hello World</h1>
        <p>{`Mine app url is ${env.NEXT_PUBLIC_APP_URL}`}</p>
        <p>{`Mine app backend url is ${env.NEXT_PUBLIC_APP_BACKEND_URL}`}</p>
        <p>{`Mine image url is ${env.NEXT_PUBLIC_IMAGE_FULL_URL}`}</p>
        <div className="relative h-[500px] w-[800px] overflow-hidden rounded-xl">
          <Image
            src={env.NEXT_PUBLIC_IMAGE_FULL_URL}
            alt="Unsplash example"
            fill
            className="object-cover"
            priority
          />
        </div>{" "} */}
        <HomePageClient />
      </main>
    </div>
  );
}
