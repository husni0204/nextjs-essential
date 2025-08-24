import { Post } from "@/app/types/Post";
import CommentForm from "@/app/posts/[slug]/comment-form";
import { LikeButton } from "@/app/posts/[slug]/like-button";

async function getPost(slug: string): Promise<Post> {
  const res = await fetch("http://localhost:3001/posts/?slug=" + slug);
  const [post] = await res.json();
  return post;
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  console.log(post);
  return (
    <>
      <article>
        <h1 className="text-lg">Judul : {post.title}</h1>
        <p>{post.content}</p>
        <hr className="my-4" />
        <LikeButton postId={post.id} />
      </article>
      <section className="mt-4">
        <h2 className="text-lg">Comments</h2>
        <CommentForm />
      </section>
    </>
  );
}
