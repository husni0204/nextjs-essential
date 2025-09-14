import Link from "next/link";
import { Post } from "@/app/types/Post";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Posts Page",
};

const getPosts = async (): Promise<Post[]> => {
  // await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate a 3-second delay

  const res = await fetch("http://localhost:3001/posts");
  const posts = await res.json();
  return posts;
};

const PostsPage = async () => {
  const posts = await getPosts();

  return (
    <div>
      <h1>Posts Page</h1>
      {posts.map((post) => (
        <article key={post.id}>
          <h2>
            <Link href={`/posts/${post.slug}`}>{post.title}</Link>
          </h2>
        </article>
      ))}
    </div>
  );
};

export default PostsPage;
