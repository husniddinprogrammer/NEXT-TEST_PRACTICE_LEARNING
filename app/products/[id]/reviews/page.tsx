import Link from "next/link";
import { products } from "../../../data/products";
import { Product } from "@/app/types/product";

const Reviews = async ({ params }: { params: Promise<{ id: string }> }) => {
    const resolvedParams = await params;
    const res = await fetch(`http://localhost:3000/api/products/${resolvedParams.id}`, {
        cache: "no-store", // har safar fresh data
    });
    const product: Product = await res.json();
    return (
        <div>
            <h1>Reviews</h1>
            <p>Product ID: {resolvedParams.id}</p>
            {product.reviews && (
                <div>
                    <h2>Reviews</h2>
                    {product.reviews.map((review, index) => (
                        <div key={index}>
                            <p>{review.text}</p>
                        </div>
                    ))}
                </div>
            )}
            <Link className="bg-red-500 text-white px-4 py-2 rounded" href={`/products/${resolvedParams.id}`}>Back to Product</Link>
        </div>
    );
};

export default Reviews;