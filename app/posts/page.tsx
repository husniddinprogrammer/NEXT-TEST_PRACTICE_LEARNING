import { Post } from "../types/post";

async function getData(): Promise<Post[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
}

export default async function Page() {
  const data: Post[] = await getData();

  return (
    <div>
      {data.map((item: Post) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
}