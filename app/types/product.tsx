export interface Review {
  id: number;
  text: string;
}

export interface Product {
  id: number;
  name: string;
  description: string; 
  price: number;
  reviews: Review[];
}

export interface ProductDetailProps {
  params: Promise<{ id: string }>;
}

export interface ReviewPageProps {
  params: Promise<{ id: string }>;
}
