export interface Product {
  id: string;
  name: string;
  title: string;
  description: string;
  category: 'lac' | 'felt' | 'beads' | 'ceramic' | 'wood' | 'resin' | 'horn-bone' | 'metal' | 'textile' | 'stone';
  image: string;
}

export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

export interface Partner {
  id: string;
  name: string;
  type: string;
  description: string;
  image: string;
}

export const featuredProducts: Product[] = [
  {
    id: "1",
    name: "Wooden Crafts",
    title: "Traditional Woodwork",
    description: "Exquisite wooden handicrafts showcasing traditional craftsmanship and modern design.",
    category: "wood",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "2",
    name: "Ceramic Pottery",
    title: "Handmade Ceramics",
    description: "Beautiful ceramic pieces crafted with precision and artistic flair.",
    category: "ceramic",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "3",
    name: "Beadwork Jewelry",
    title: "Artisan Beadwork",
    description: "Intricate beadwork jewelry combining traditional techniques with contemporary designs.",
    category: "beads",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "4",
    name: "Felt Products",
    title: "Natural Felt Crafts",
    description: "Eco-friendly felt products made from natural materials with vibrant colors.",
    category: "felt",
    image: "https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "5",
    name: "Lac Decoratives",
    title: "Traditional Lac Work",
    description: "Lustrous lac-finished decorative items showcasing ancient Indian techniques.",
    category: "lac",
    image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "6",
    name: "Resin Art",
    title: "Modern Resin Crafts",
    description: "Contemporary resin art pieces blending modern techniques with artistic vision.",
    category: "resin",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "7",
    name: "Horn & Bone",
    title: "Natural Material Crafts",
    description: "Unique horn and bone crafts demonstrating skilled artisanship and natural beauty.",
    category: "horn-bone",
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "8",
    name: "Metal Crafts",
    title: "Metalwork Art",
    description: "Intricate metalwork showcasing traditional techniques and contemporary appeal.",
    category: "metal",
    image: "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "9",
    name: "Textile Arts",
    title: "Handwoven Textiles",
    description: "Beautiful handwoven textiles featuring traditional patterns and vibrant colors.",
    category: "textile",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "10",
    name: "Stone Sculpture",
    title: "Carved Stone Art",
    description: "Elegant stone sculptures and decorative pieces carved with precision and artistry.",
    category: "stone",
    image: "https://images.unsplash.com/photo-1587905069134-008460d7a636?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  }
];

export const services: Service[] = [
  {
    id: "1",
    title: "Custom Manufacturing",
    subtitle: "SEDEX Compliant Facility",
    description: "State-of-the-art manufacturing facility spanning 27,000 sq ft, ensuring quality production and timely delivery.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "2",
    title: "Global Export",
    subtitle: "Worldwide Delivery",
    description: "Comprehensive export services with efficient logistics and documentation for global market reach.",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "3",
    title: "Quality Assurance",
    subtitle: "Rigorous Standards",
    description: "Comprehensive quality control processes ensuring every product meets international standards and client expectations.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "4",
    title: "Custom Design",
    subtitle: "Tailored Solutions",
    description: "Personalized design consultation and custom product development to meet specific client requirements and market needs.",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "5",
    title: "Packaging Solutions",
    subtitle: "Protective & Attractive",
    description: "Professional packaging services ensuring product safety during transit while maintaining visual appeal and brand identity.",
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "6",
    title: "Customer Support",
    subtitle: "24/7 Assistance",
    description: "Dedicated customer support team providing comprehensive assistance throughout the entire order process and beyond.",
    image: "https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  }
];

export const partners: Partner[] = [
  {
    id: "1",
    name: "Retail Chains",
    type: "Global Retail Partners",
    description: "Partnership with major retail chains across North America and Europe for widespread product distribution.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "2",
    name: "E-commerce Platforms",
    type: "Online Marketplaces",
    description: "Strategic partnerships with leading e-commerce platforms ensuring global online presence and accessibility.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "3",
    name: "Regional Distributors",
    type: "Distribution Network",
    description: "Established network of regional distributors ensuring efficient delivery and local market expertise.",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "4",
    name: "Trade Associations",
    type: "Industry Bodies",
    description: "Active membership in international trade associations promoting handicraft exports and industry standards.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "5",
    name: "Logistics Partners",
    type: "Shipping & Logistics",
    description: "Reliable partnerships with international shipping companies ensuring timely and secure delivery worldwide.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "6",
    name: "Technology Partners",
    type: "Digital Solutions",
    description: "Collaboration with technology providers for advanced manufacturing processes and digital transformation.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  }
];

export const carouselImages = [
  {
    id: "1",
    url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=600",
    alt: "Traditional handicrafts workshop with artisans working"
  },
  {
    id: "2",
    url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=600",
    alt: "Beautiful wooden handicrafts display"
  },
  {
    id: "3",
    url: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=600",
    alt: "Ceramic pottery and crafts"
  },
  {
    id: "4",
    url: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=600",
    alt: "International shipping and export"
  }
];
