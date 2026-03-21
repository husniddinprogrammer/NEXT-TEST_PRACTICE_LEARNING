import { Post, PostDetailProps } from "../../types/post";

export default async function PostDetail({ params }: PostDetailProps) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${(await params).id}`
  );

  const post: Post = await res.json();

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}