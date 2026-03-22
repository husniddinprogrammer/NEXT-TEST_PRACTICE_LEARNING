import Link from 'next/link';
import { Product } from '@/app/types/product';
import Image from 'next/image';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-200">
      <div className="aspect-square bg-gray-100 rounded-lg mb-4 overflow-hidden">
        <Image 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
          src={`https://picsum.photos/seed/product-${product.id}/600/600.jpg`}
          alt={product.name}
          width={600}
          height={600}
        />
      </div>
      
      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
        <p className="text-gray-600 line-clamp-2">{product.description}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-blue-600">
            ${product.price.toFixed(2)}
          </span>
          <span className="text-sm text-gray-500">
            {product.reviews.length} reviews
          </span>
        </div>
        
        <div className="flex gap-2 pt-2">
          <Link 
            href={`/products/${product.id}`}
            className="flex-1 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors text-center font-medium"
          >
            View Details
          </Link>
          <Link 
            href={`/products/${product.id}/reviews`}
            className="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors text-center font-medium"
          >
            Reviews
          </Link>
        </div>
      </div>
    </div>
  );
};
