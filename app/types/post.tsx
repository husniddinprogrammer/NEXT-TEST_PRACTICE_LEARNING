
export interface Post {
  id: number;
  title: string;
  body: string;
}

export interface PostDetailProps {
  params: Promise<{ id: string }>;
}