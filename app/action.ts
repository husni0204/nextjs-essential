"use server";

export async function createComment(prevData: any, formData: FormData) {
  const comment = formData.get("comment") as string;

  if (!comment) {
    return { error: "Comment is required" };
  }
}

export async function createLike(postId: string) {
  await new Promise((resolve) => setTimeout(() => resolve(true), 3000));
  console.log("Like, postId:", postId);
}
