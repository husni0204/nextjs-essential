"use client";

import { createLike } from "@/app/action";
import { useTransition } from "react";

export function LikeButton({ postId }: { postId: string }) {
  const [pending, startTransition] = useTransition();

  async function handleLike() {
    startTransition(async () => {
      await createLike(postId);
    });
  }

  return (
    <button
      className="bg-green-500 text-black py-1 px-2 rounded"
      onClick={handleLike}
    >
      {pending ? "Liking..." : "Like"}
    </button>
  );
}
