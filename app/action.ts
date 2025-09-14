"use server";

import { CommentFromState } from "@/app/types/CommentFromState";

export async function createComment(
  prevData: CommentFromState,
  formData: FormData
): Promise<CommentFromState> {
  const comment = formData.get("comment") as string;

  if (!comment) {
    return { error: "Comment is required" };
  }

  return {
    success: true,
  };
}

export async function createLike(postId: string) {
  await new Promise((resolve) => setTimeout(() => resolve(true), 3000));
  console.log("Like, postId:", postId);
}
