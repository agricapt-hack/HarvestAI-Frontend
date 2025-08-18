export interface MarketplaceItem {
  icon: any;
  id: number;
  title: string;
  description: string;
  detailedDescription?: string;
  priceRange: string;
  image?: string;
  color?: string;
  type: 'product' | 'service';
  features?: string[];
  benefits?: string[];
  rating?: number;
  reviewsCount?: number;
}

export const dummyProducts: MarketplaceItem[] = [
  {
      id: 1,
      title: 'Premium Wheat Seeds',
      description: 'High-yield wheat seeds optimized for various climates.',
      detailedDescription: 'Our premium wheat seeds are genetically selected for superior yield and resilience. Suitable for both dry and irrigated farmlands, these seeds have been tested in multiple regions to ensure consistent performance.',
      priceRange: 'Rs. 10 - Rs. 50 per kg',
      image: '/marketplace/wheet-seeds.webp',
      color: 'bg-yellow-100',
      type: 'product',
      features: ['High germination rate', 'Drought resistant', 'Pest tolerant', 'Short maturity period', 'High protein content'],
      benefits: ['Increased crop yield by up to 20%', 'Reduced water usage', 'Lower pesticide costs'],
      rating: 4.8,
      reviewsCount: 156,
      icon: undefined
  },
  {
      id: 2,
      title: 'Organic Fertilizer',
      description: 'Natural fertilizer to boost soil health and crop growth.',
      detailedDescription: 'Composed of natural ingredients including composted manure, plant matter, and minerals. This fertilizer slowly releases nutrients, improving soil structure and microbial activity over time.',
      priceRange: 'Rs. 20 - Rs. 100 per bag',
      image: '/marketplace/organic-fertilizer.jpeg',
      color: 'bg-green-100',
      type: 'product',
      features: ['Eco-friendly', 'Improves soil structure', 'Slow-release nutrients', 'No chemical residues', 'Suitable for all crops'],
      benefits: ['Enhances long-term soil fertility', 'Promotes healthier plant growth', 'Environmentally sustainable'],
      rating: 4.6,
      reviewsCount: 98,
      icon: undefined
  },
  {
      id: 3,
      title: 'Irrigation System',
      description: 'Efficient drip irrigation kit for small to medium farms.',
      detailedDescription: 'Complete kit including pipes, emitters, filters, and controllers. Designed for easy installation and minimal water wastage, perfect for precision agriculture.',
      priceRange: 'Rs. 500 - Rs. 2000',
      image: '/marketplace/irrigation-system.webp',
      color: 'bg-blue-100',
      type: 'product',
      features: ['Water-saving', 'Easy installation', 'Customizable', 'Automated timers', 'Durable materials'],
      benefits: ['Reduces water consumption by 50%', 'Improves crop uniformity', 'Saves labor costs'],
      rating: 4.7,
      reviewsCount: 112,
      icon: undefined
  },
  {
      id: 7,
      title: 'Tractor Tires',
      description: 'Durable tires suitable for various farm tractors.',
      detailedDescription: 'Heavy-duty tires with deep treads for excellent traction in muddy fields. Made from high-quality rubber compounds for longevity and performance.',
      priceRange: 'Rs. 100 - Rs. 300 each',
      image: '/marketplace/tractor-tires.jpeg',
      color: 'bg-gray-100',
      type: 'product',
      features: ['High traction', 'Long-lasting', 'Weather resistant', 'Puncture resistant', 'Multiple sizes available'],
      benefits: ['Improved machine stability', 'Reduced soil compaction', 'Lower replacement frequency'],
      rating: 4.5,
      reviewsCount: 76,
      icon: undefined
  },
  {
      id: 8,
      title: 'Pesticide Sprayer',
      description: 'Portable sprayer for efficient pesticide application.',
      detailedDescription: 'Battery-powered sprayer with adjustable pressure and nozzle settings. Ergonomic design for comfortable use during extended periods.',
      priceRange: 'Rs. 50 - Rs. 150',
      image: '/marketplace/pesticide-sprayer.jpeg',
      color: 'bg-red-100',
      type: 'product',
      features: ['Adjustable nozzle', 'Large capacity', 'Easy to clean', 'Battery operated', 'Lightweight'],
      benefits: ['Precise application reduces chemical waste', 'Saves time on large areas', 'Reduces operator fatigue'],
      rating: 4.4,
      reviewsCount: 89,
      icon: undefined
  },
  {
      id: 9,
      title: 'Greenhouse Film',
      description: 'UV-resistant film for greenhouse construction.',
      detailedDescription: 'Multi-layer polyethylene film with UV inhibitors for extended lifespan. Provides optimal light transmission while protecting against harsh weather.',
      priceRange: 'Rs. 20 - Rs. 100 per roll',
      image: '/marketplace/greenhouse-film.jpeg',
      color: 'bg-green-200',
      type: 'product',
      features: ['Durable', 'Light diffusing', 'Anti-drip', 'UV protected', 'Various widths'],
      benefits: ['Extends growing season', 'Protects crops from elements', 'Improves yield quality'],
      rating: 4.7,
      reviewsCount: 65,
      icon: undefined
  },

];

export const dummyServices: MarketplaceItem[] = [
  {
      id: 4,
      title: 'Crop Consulting',
      description: 'Expert advice on crop selection and management.',
      detailedDescription: 'Personalized consulting sessions with agronomists. Includes soil analysis, crop rotation planning, and yield optimization strategies.',
      priceRange: 'Rs. 100 - Rs. 500 per session',
      image: '/marketplace/crop-consulting.jpeg',
      color: 'bg-purple-100',
      type: 'service',
      features: ['Personalized plans', 'On-site visits', 'Ongoing support', 'Data-driven recommendations', 'Pest management advice'],
      benefits: ['Increased farm productivity', 'Reduced risks', 'Expert knowledge access'],
      rating: 4.9,
      reviewsCount: 45,
      icon: undefined
  },
  {
      id: 5,
      title: 'Machinery Rental',
      description: 'Rent tractors and other farm equipment.',
      detailedDescription: 'Wide range of machinery available for short or long-term rental. Includes delivery, setup, and basic training.',
      priceRange: 'Rs. 50 - Rs. 300 per day',
      image: '/marketplace/machinery-rental.jpg',
      color: 'bg-red-100',
      type: 'service',
      features: ['Various equipment options', 'Maintenance included', 'Flexible terms', 'Insurance coverage', '24/7 support'],
      benefits: ['Access to modern equipment without purchase', 'Cost-effective for seasonal needs', 'Reduces downtime'],
      rating: 4.6,
      reviewsCount: 67,
      icon: undefined
  },
  {
      id: 6,
      title: 'Pest Control Service',
      description: 'Professional pest management for your crops.',
      detailedDescription: 'Integrated pest management using both chemical and biological methods. Includes monitoring and follow-up visits.',
      priceRange: 'Rs. 200 - Rs. 1000 per acre',
      image: '/marketplace/pest-control.jpeg',
      color: 'bg-orange-100',
      type: 'service',
      features: ['Eco-friendly methods', 'Quick response', 'Guaranteed results', 'Trained technicians', 'Custom treatment plans'],
      benefits: ['Minimizes crop damage', 'Reduces chemical usage', 'Improves overall farm health'],
      rating: 4.8,
      reviewsCount: 56,
      icon: undefined
  },
  {
      id: 11,
      title: 'Soil Testing',
      description: 'Comprehensive soil analysis and recommendations.',
      detailedDescription: 'Laboratory testing for nutrients, pH, contaminants, and more. Detailed report with amendment suggestions.',
      priceRange: 'Rs. 50 - Rs. 200 per test',
      image: '/marketplace/soil-testing.jpeg',
      color: 'bg-brown-100',
      type: 'service',
      features: ['Detailed reports', 'Nutrient analysis', 'pH testing', 'Organic matter assessment', 'Recommendations included'],
      benefits: ['Optimized fertilizer use', 'Improved crop selection', 'Early detection of soil issues'],
      rating: 4.7,
      reviewsCount: 78,
      icon: undefined
  },
  {
      id: 12,
      title: 'Farm Labor Supply',
      description: 'Skilled workers for seasonal farm activities.',
      detailedDescription: 'Provision of trained agricultural workers for harvesting, planting, and other tasks. Compliant with labor regulations.',
      priceRange: 'Rs. 15 - Rs. 25 per hour per worker',
      image: '/marketplace/farm-labor.jpeg',
      color: 'bg-green-100',
      type: 'service',
      features: ['Trained personnel', 'Flexible scheduling', 'Insurance covered', 'Equipment provided', 'Supervision optional'],
      benefits: ['Addresses labor shortages', 'Increases efficiency', 'Reduces farmer workload'],
      rating: 4.5,
      reviewsCount: 89,
      icon: undefined
  },
  {
      id: 13,
      title: 'Crop Insurance Consulting',
      description: 'Help with selecting and applying for crop insurance.',
      detailedDescription: 'Expert guidance on insurance options, risk assessment, and claim processing. Tailored to your farm\'s specific needs.',
      priceRange: 'Rs. 100 - Rs. 400 per consultation',
      image: '/marketplace/crop-insurance.webp',
      color: 'bg-blue-100',
      type: 'service',
      features: ['Policy comparison', 'Claim assistance', 'Risk assessment', 'Application support', 'Annual reviews'],
      benefits: ['Better financial protection', 'Optimized coverage', 'Peace of mind'],
      rating: 4.8,
      reviewsCount: 34,
      icon: undefined
  },
  {
      id: 14,
      title: 'Organic Certification Service',
      description: 'Guidance through organic farming certification process.',
      detailedDescription: 'Step-by-step assistance with documentation, inspections, and compliance for organic certification.',
      priceRange: 'Rs. 500 - Rs. 2000',
      image: '/marketplace/organic-certification.jpeg',
      color: 'bg-green-200',
      type: 'service',
      features: ['Documentation help', 'Inspection preparation', 'Ongoing compliance', 'Audit support', 'Certification guarantee'],
      benefits: ['Access to premium markets', 'Higher product value', 'Sustainable farming practices'],
      rating: 4.9,
      reviewsCount: 28,
      icon: undefined
  },
];

export const allItems = [...dummyProducts, ...dummyServices];
