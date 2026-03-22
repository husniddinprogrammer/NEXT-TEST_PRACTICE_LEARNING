import Link from "next/link";
import { Product } from "../../types/product";
type Props = {
    params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props) {
    const id = (await params).id;
    return {
        title: `Product ${id}`,
    };
}

const ProductDetail = async ({ params }: { params: Promise<{ id: string }> }) => {
    const resolvedParams = await params;
    const res = await fetch(`http://localhost:3000/api/products/${resolvedParams.id}`, {
        cache: "no-store", // har safar fresh data
    });
    const product: Product = await res.json();

    return (
        <div>
            <h1>Product Detail</h1>
            <p>Product ID: {product?.id}</p>
            {product && (
                <div>
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                </div>
            )}
            <div className="flex gap-4 mt-6">
                <Link className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors" href="/products">Back to Products</Link>
                <Link className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors" href={`/products/${product?.id}/reviews`}>Reviews</Link>
            </div>
        </div>
    )
}

export default ProductDetail;