import Link from "next/link"
import { ProductCard } from "../components/ProductCard"
import { Product } from "../types/product";

const Products = async () => {
    const res = await fetch("http://localhost:3000/api/products", {
        cache: "no-store", // har safar fresh data
    });
    const products: Product[] = await res.json();

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Products</h1>
            <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8">
                ← Back to Home
            </Link>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {
                    products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))
                }
            </div>
        </div>
    )
}

export default Products;