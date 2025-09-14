import Image from "next/image";
import gambar1 from "@/public/gambar1.png";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Page",
};

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <div className="relative size-72 rounded-full overflow-hidden">
        <Image
          src={gambar1}
          alt="gambar1"
          fill
          className="object-cover"
          loading="eager"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAABAgMAAABrkIxgAAAACVBMVEXp6gfk5Abb2wa92N0wAAAAC0lEQVQI12NQYQAAAEsAJUHl9KcAAAAASUVORK5CYII="
        />
      </div>
    </>
  );
}
