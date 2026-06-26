export interface Product {
  id: string;
  name: string;
  category: 'Smartphones' | 'Laptops' | 'Audio Devices' | 'Smart Devices' | 'Accessories';
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  image: string;
  description: string;
  featured?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  publishedDate: string;
  readTime: string;
  image: string;
  author: {
    name: string;
    avatar: string;
  };
}

export type ActiveTab = 'home' | 'about' | 'products' | 'blog' | 'contact';
