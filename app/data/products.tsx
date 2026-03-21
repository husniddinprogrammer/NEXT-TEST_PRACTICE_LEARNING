import { Product } from '@/app/types/product';

export const products: Product[] = [
  {
    id: 1,
    name: 'Premium Headphones',
    description: 'High-quality wireless headphones with noise cancellation',
    price: 299.99,
    reviews: [
      { id: 1, text: 'Excellent sound quality and comfort!' },
      { id: 2, text: 'Best purchase I made this year' }
    ]
  },
  {
    id: 2,
    name: 'Smart Watch Pro',
    description: 'Advanced fitness tracking and health monitoring',
    price: 399.99,
    reviews: [
      { id: 1, text: 'Perfect for my workouts' },
      { id: 2, text: 'Battery life is amazing' }
    ]
  },
  {
    id: 3,
    name: 'Laptop Stand',
    description: 'Ergonomic aluminum laptop stand for better posture',
    price: 89.99,
    reviews: [
      { id: 1, text: 'Great build quality' },
      { id: 2, text: 'Improved my neck pain significantly' }
    ]
  },
  {
    id: 4,
    name: 'Wireless Mouse',
    description: 'Precision tracking with customizable buttons',
    price: 79.99,
    reviews: [
      { id: 1, text: 'Very responsive and comfortable' },
      { id: 2, text: 'Long battery life' }
    ]
  },
  {
    id: 5,
    name: 'USB-C Hub',
    description: 'Multi-port adapter with 4K HDMI support',
    price: 59.99,
    reviews: [
      { id: 1, text: 'All ports work perfectly' },
      { id: 2, text: 'Compact and reliable' }
    ]
  }
];
