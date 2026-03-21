import Link from "next/link";
import { products } from "../../../data/products";

const Reviews = async ({ params }: { params: Promise<{ id: string }> }) => {
    const resolvedParams = await params;
    const reviews = products.find((p) => p.id === parseInt(resolvedParams.id))?.reviews;

    return (
        <div>
            <h1>Reviews</h1>
            <p>Product ID: {resolvedParams.id}</p>
            {reviews && (
                <div>
                    <h2>Reviews</h2>
                    {reviews.map((review, index) => (
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