import { Product, BlogPost } from './types';

export const products: Product[] = [
  // Smartphones
  {
    id: 'zphone-x15',
    name: 'ZPhone X15',
    category: 'Smartphones',
    price: 49999,
    originalPrice: 54999,
    rating: 4.8,
    reviewsCount: 1240,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80',
    description: 'The ultimate flagship smartphone from Zentronix. Featuring a beautiful 120Hz AMOLED display, exceptional triple-lens camera, and ultra-fast custom AI processor.',
    featured: true
  },
  {
    id: 'novaphone-ultra',
    name: 'NovaPhone Ultra',
    category: 'Smartphones',
    price: 59999,
    originalPrice: 64999,
    rating: 4.9,
    reviewsCount: 852,
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80',
    description: 'Experience professional-grade mobile photography with a 200MP sensor, titanium frame, and 2-day battery life.',
    featured: false
  },
  {
    id: 'galaxy-prime-a7',
    name: 'Galaxy Prime A7',
    category: 'Smartphones',
    price: 32999,
    originalPrice: 35999,
    rating: 4.5,
    reviewsCount: 2150,
    image: 'https://images.unsplash.com/photo-1565630916779-e303be97b6f5?auto=format&fit=crop&w=600&q=80',
    description: 'A powerful mid-ranger designed for longevity. Features water resistance, vibrant display, and versatile cameras.',
    featured: false
  },

  // Laptops
  {
    id: 'zenbook-pro-14',
    name: 'ZenBook Pro 14',
    category: 'Laptops',
    price: 79999,
    originalPrice: 84999,
    rating: 4.7,
    reviewsCount: 412,
    image: 'https://cdn.cs.1worldsync.com/syndication/mediaserverredirect/1f267907bc8026f3da9c19b31517367a/original.jpg',
    description: 'A masterpiece of engineering for professionals. Thin, featherlight, yet packed with unmatched graphics power and a breathtaking OLED color-accurate screen.',
    featured: true
  },
  {
    id: 'ultralite-x1',
    name: 'UltraLite X1',
    category: 'Laptops',
    price: 64999,
    originalPrice: 69999,
    rating: 4.6,
    reviewsCount: 198,
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=600&q=80',
    description: 'The perfect companion for students and digital nomads. Offers 18 hours of battery life and an incredibly sleek aluminum body.',
    featured: false
  },
  {
    id: 'gaming-beast-g5',
    name: 'Gaming Beast G5',
    category: 'Laptops',
    price: 94999,
    originalPrice: 104999,
    rating: 4.9,
    reviewsCount: 310,
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=600&q=80',
    description: 'Dominate every battlefield with high-refresh rate display, mechanical keyboard feeling, and top-tier dedicated thermal cooling.',
    featured: false
  },

  // Audio Devices
  {
    id: 'sonicpods-air',
    name: 'SonicPods Air',
    category: 'Audio Devices',
    price: 4999,
    originalPrice: 6999,
    rating: 4.6,
    reviewsCount: 5630,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=80',
    description: 'True wireless earbuds with crystal-clear active noise cancellation, deep acoustic bass tuning, and water-resistant nano coating.',
    featured: true
  },
  {
    id: 'basswave-headphones',
    name: 'BassWave Headphones',
    category: 'Audio Devices',
    price: 6499,
    originalPrice: 7999,
    rating: 4.7,
    reviewsCount: 1420,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80',
    description: 'Immersive over-ear headphones that bring recording studio quality straight to your ears. Premium leather cushions for ultimate comfort.',
    featured: false
  },
  {
    id: 'soundsphere-speaker',
    name: 'SoundSphere Speaker',
    category: 'Audio Devices',
    price: 8999,
    originalPrice: 10999,
    rating: 4.5,
    reviewsCount: 580,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=600&q=80',
    description: '360-degree room-filling acoustic smart speaker with built-in voice assistants and flawless multi-room linking setup.',
    featured: false
  },

  // Smart Devices
  {
    id: 'smartfit-watch-s3',
    name: 'SmartFit Watch S3',
    category: 'Smart Devices',
    price: 8499,
    originalPrice: 11999,
    rating: 4.5,
    reviewsCount: 2840,
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=600&q=80',
    description: 'Elevate your fitness journey with high-accuracy sleep analytics, blood oxygen tracking, dynamic GPS routes, and custom offline watch faces.',
    featured: true
  },
  {
    id: 'homecam-secure',
    name: 'HomeCam Secure',
    category: 'Smart Devices',
    price: 6999,
    originalPrice: 8999,
    rating: 4.4,
    reviewsCount: 930,
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=600&q=80',
    description: 'Secure your family with 2K ultra-clear infrared night vision, smart person detection alerts, and dual-axis silent panning coverage.',
    featured: true
  },
  {
    id: 'smarthome-hub',
    name: 'SmartHome Hub',
    category: 'Smart Devices',
    price: 12999,
    originalPrice: 14999,
    rating: 4.8,
    reviewsCount: 340,
    image: 'https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?auto=format&fit=crop&w=600&q=80',
    description: 'The nerve center for your smart house. Integrates locks, security cams, lights, and appliances into an intuitive 8-inch high-definition touch panel.',
    featured: false
  },

  // Accessories
  {
    id: 'powermax-20k',
    name: 'PowerMax 20K Power Bank',
    category: 'Accessories',
    price: 2499,
    originalPrice: 3499,
    rating: 4.7,
    reviewsCount: 3120,
    image: 'https://m.media-amazon.com/images/I/71d8msp1v+L._AC_SL1500_.jpg',
    description: 'High-density lithium battery carrying 22.5W super-fast charge capabilities, supporting triple device outputs simultaneously.',
    featured: true
  },
  {
    id: 'turbocharge-adapter',
    name: 'TurboCharge Adapter',
    category: 'Accessories',
    price: 1299,
    originalPrice: 1999,
    rating: 4.6,
    reviewsCount: 1750,
    image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=600&q=80',
    description: '65W GaN adapter offering lightning-fast power delivery in a compact pocket size. Perfect for powering both smartphones and ultrabooks.',
    featured: false
  },
  {
    id: 'wireless-charging-pad',
    name: 'Wireless Charging Pad',
    category: 'Accessories',
    price: 1799,
    originalPrice: 2499,
    rating: 4.4,
    reviewsCount: 840,
    image: 'https://m.media-amazon.com/images/I/71c9U4sdMSL._AC_SL1500_.jpg',
    description: '15W rapid wireless charging with advanced temperature controls and anti-slip silicone rings, matching modern Qi-enabled phones and earbuds.',
    featured: false
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'Top 5 Smartphones to Buy in 2026',
    excerpt: 'Discover the best smartphones offering excellent camera performance, battery life, and gaming experience.',
    content: `Technology advances at a breakneck speed, and 2026 is proving to be a revolutionary year for mobile innovations. Today, a smartphone is more than just a communications device; it is your pocket-sized workstation, professional studio, and portable gaming console.\n\nAt Zentronix, we have audited dozens of devices to highlight the ultimate models that redefine parameters. In this guide, we dive deep into performance, battery endurance, display innovations, and AI capabilities that make these five smartphones stand out from the crowd.\n\n### Key Pillars of a Modern Smartphone:\n1. **Advanced Processing Units**: Next-generation 3nm processors offer unmatched computing power and visual capabilities without draining your battery.\n2. **AI-Driven Camera Systems**: Automatic post-processing helps capture rich low-light environments and hyper-stabilized videos.\n3. **Longevity & Sustainability**: Titanium structures and longer software support lifespans ensure your investment remains modern for years to come.`,
    category: 'Smartphones',
    publishedDate: 'June 15, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80',
    author: {
      name: 'Aditya Sharma',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80'
    }
  },
  {
    id: 'blog-2',
    title: 'How to Choose the Perfect Laptop for Work and Gaming',
    excerpt: 'Learn what specifications matter most when selecting a laptop for productivity and entertainment.',
    content: `Finding a single machine that excels at corporate productivity while rendering next-generation graphic assets can feel overwhelming. Many buyers struggle with the trade-offs between portability, thermal noise, and computational power.\n\nTo help you strike the perfect balance, we break down the vital components you need to examine.\n\n### What Specifications Actually Matter?\n* **The CPU (Central Processing Unit)**: Look for at least an Intel Core i7 or AMD Ryzen 7 chip for high workload handling.\n* **The GPU (Graphics Processing Unit)**: Dedicated graphics cards are non-negotiable for gaming or video rendering, while integrated ones are best if you prioritize battery life.\n* **RAM (Memory)**: 16GB is the modern sweet spot. It allows you to run modern browser tabs alongside active developer tools or game client servers seamlessly.\n* **Display Refreshes**: A screen with a 120Hz refresh rate or higher reduces strain on your eyes during long shifts and responds instantly in gaming matches.`,
    category: 'Laptops',
    publishedDate: 'June 10, 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=600&q=80',
    author: {
      name: 'Rohan Mehta',
      avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&q=80'
    }
  },
  {
    id: 'blog-3',
    title: 'Smart Home Devices That Make Life Easier',
    excerpt: 'Explore smart security cameras, voice assistants, and automation gadgets transforming modern homes.',
    content: `Imagine waking up to a house that has already brewed your favorite coffee, adjusted temperature controls to match your morning mood, and scanned your perimeter for peace of mind. This isn't science fiction anymore—this is the reality of a modern connected smart home.\n\nIn this article, we demonstrate how starting small with a few simple gadgets can completely transform your domestic environment.\n\n### The Foundational Blocks of a Smart Home:\n1. **Smart Hubs**: Connect all your miscellaneous electronics under a single intuitive interface.\n2. **Ambient Security**: Install cameras and sensors that distinguish between delivery agents, pets, or intruders, sending notifications directly to your phone.\n3. **Efficient Smart Plugs**: Schedule power outlets to cut off vampire energy draw from idle appliances, saving massive amounts on monthly bills.`,
    category: 'Smart Devices',
    publishedDate: 'June 5, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=600&q=80',
    author: {
      name: 'Priya Patel',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80'
    }
  },
  {
    id: 'blog-4',
    title: 'Essential Accessories Every Tech Enthusiast Should Own',
    excerpt: 'From power banks to wireless chargers, discover accessories that complement your devices.',
    content: `We spend thousands of rupees on premium smartphones and laptops, but often ignore the peripheral ecosystem that unlocks their true potential. High-quality accessory components can amplify your productivity, preserve device lifecycles, and save you during travel emergencies.\n\n### The Core Gear Checklist:\n* **High-Capacity Power Banks**: Don't let your smartphone die when filming important events or navigating unfamiliar streets.\n* **Gallium Nitride (GaN) Adapters**: Replace three heavy charging blocks with one ultra-compact, high-wattage plug.\n* **Wireless Charging Stations**: Minimize table clutter with elegant charging stations that fuel your watch, phone, and earbuds at once.`,
    category: 'Accessories',
    publishedDate: 'May 30, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=600&q=80',
    author: {
      name: 'Vikram Rao',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
    }
  }
];

export const whyChooseUs = [
  {
    id: 'w1',
    title: 'Premium Quality Products',
    description: 'We curate only premium products that undergo rigorous, state-of-the-art testing to guarantee durability and flawless performance.',
    icon: 'ShieldCheck'
  },
  {
    id: 'w2',
    title: 'Secure Online Payments',
    description: 'Your payment security is our top priority. We use industry-standard encryption protocols to process transactions safely.',
    icon: 'CreditCard'
  },
  {
    id: 'w3',
    title: 'Fast Delivery Across India',
    description: 'Our robust logistical network ensures products reach your doorstep within 2 to 4 business days in perfect condition.',
    icon: 'Truck'
  },
  {
    id: 'w4',
    title: '24/7 Customer Support',
    description: 'Have a question? Our support specialists are available around the clock to provide timely, personalized guidance.',
    icon: 'Headphones'
  },
  {
    id: 'w5',
    title: 'Easy Returns & Warranty Support',
    description: 'Enjoy peace of mind with our transparent 10-day replacement window and straightforward warranty claims processes.',
    icon: 'RotateCcw'
  }
];

export const coreValues = [
  {
    id: 'cv1',
    title: 'Customer Satisfaction',
    description: 'We place our customers at the center of every choice, ensuring their happiness is our defining success parameter.'
  },
  {
    id: 'cv2',
    title: 'Innovation',
    description: 'We continuously adapt and embrace modern, cutting-edge technology to offer futuristic shopping solutions.'
  },
  {
    id: 'cv3',
    title: 'Quality Assurance',
    description: 'Every electronic device undergoes thorough diagnostic checklists before being dispatched to our customers.'
  },
  {
    id: 'cv4',
    title: 'Transparency',
    description: 'Honesty and clarity dictate our pricing, return policies, and product details. No hidden fees, ever.'
  },
  {
    id: 'cv5',
    title: 'Reliability',
    description: 'We build relationships on absolute trust, remaining a partner you can count on for your everyday tech needs.'
  }
];

export const testmonials = [
  {
    id: 't1',
    name: 'Anjali Verma',
    role: 'Tech Consultant',
    text: 'Zentronix is my absolute favorite store for buying gadgets. I ordered the ZenBook Pro 14, and it arrived in Mumbai in pristine packaging within 2 days! Excellent support service.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 't2',
    name: 'Kabir Das',
    role: 'Creative Designer',
    text: 'The SonicPods Air are incredibly light and deliver high-definition audio that isolates outside noise perfectly. Paying with their secure gateway was quick and painless.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 't3',
    name: 'Neha Roy',
    role: 'Software Developer',
    text: 'I bought the SmartFit Watch S3 and the PowerMax power bank. Both devices are super high-quality and perform exactly as described. Zentronix has earned a lifetime customer!',
    rating: 4.8,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80'
  }
];
