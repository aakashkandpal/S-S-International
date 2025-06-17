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

// Homepage Featured Products (original 10 items for horizontal scroll)
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

// Detailed Products for Services Page (9 products per category)
export const detailedProducts: Product[] = [
  // Lac Products (9 items)
  {
    id: "lac1",
    name: "Lac Decorative Bowls",
    title: "Traditional Lac Work",
    description: "Lustrous lac-finished decorative bowls showcasing ancient Indian techniques.",
    category: "lac",
    image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "lac2",
    name: "Lac Jewelry Boxes",
    title: "Elegant Storage",
    description: "Beautiful lac-finished jewelry boxes with intricate patterns and smooth finish.",
    category: "lac",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "lac3",
    name: "Lac Picture Frames",
    title: "Decorative Frames",
    description: "Ornate lac-finished picture frames perfect for showcasing memories.",
    category: "lac",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "lac4",
    name: "Lac Vases",
    title: "Artistic Vessels",
    description: "Elegant lac-finished vases with traditional motifs and glossy finish.",
    category: "lac",
    image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "lac5",
    name: "Lac Decorative Plates",
    title: "Traditional Dining",
    description: "Handcrafted lac plates featuring classic Indian designs and patterns.",
    category: "lac",
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "lac6",
    name: "Lac Tea Sets",
    title: "Elegant Service",
    description: "Complete lac-finished tea sets perfect for traditional serving.",
    category: "lac",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "lac7",
    name: "Lac Wall Hangings",
    title: "Decorative Art",
    description: "Beautiful lac wall decorations with traditional Indian artwork.",
    category: "lac",
    image: "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "lac8",
    name: "Lac Candle Holders",
    title: "Ambient Lighting",
    description: "Elegant lac-finished candle holders for creating warm ambiance.",
    category: "lac",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "lac9",
    name: "Lac Trinket Boxes",
    title: "Small Storage",
    description: "Delicate lac-finished boxes perfect for storing small treasures.",
    category: "lac",
    image: "https://images.unsplash.com/photo-1587905069134-008460d7a636?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  
  // Felt Products (9 items)
  {
    id: "felt1",
    name: "Felt Handbags",
    title: "Natural Felt Crafts",
    description: "Eco-friendly felt handbags made from natural materials with vibrant colors.",
    category: "felt",
    image: "https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "felt2",
    name: "Felt Coasters",
    title: "Table Protection",
    description: "Colorful felt coasters perfect for protecting surfaces in style.",
    category: "felt",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "felt3",
    name: "Felt Wall Art",
    title: "Decorative Panels",
    description: "Beautiful felt wall art pieces featuring modern and traditional designs.",
    category: "felt",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "felt4",
    name: "Felt Slippers",
    title: "Comfortable Footwear",
    description: "Soft and comfortable felt slippers perfect for home use.",
    category: "felt",
    image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "felt5",
    name: "Felt Rugs",
    title: "Floor Decoration",
    description: "Handmade felt rugs with intricate patterns and natural dyes.",
    category: "felt",
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "felt6",
    name: "Felt Laptop Sleeves",
    title: "Device Protection",
    description: "Protective felt sleeves for laptops and tablets in various sizes.",
    category: "felt",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "felt7",
    name: "Felt Placemats",
    title: "Dining Accessories",
    description: "Elegant felt placemats for protecting dining tables.",
    category: "felt",
    image: "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "felt8",
    name: "Felt Pencil Cases",
    title: "Stationery Storage",
    description: "Colorful felt pencil cases perfect for students and professionals.",
    category: "felt",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "felt9",
    name: "Felt Key Chains",
    title: "Small Accessories",
    description: "Cute felt key chains in various shapes and colors.",
    category: "felt",
    image: "https://images.unsplash.com/photo-1587905069134-008460d7a636?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },

  // Beads Products (9 items)
  {
    id: "beads1",
    name: "Beaded Necklaces",
    title: "Artisan Beadwork",
    description: "Intricate beaded necklaces combining traditional techniques with contemporary designs.",
    category: "beads",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "beads2",
    name: "Beaded Bracelets",
    title: "Elegant Wristwear",
    description: "Beautiful beaded bracelets featuring colorful patterns and designs.",
    category: "beads",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "beads3",
    name: "Beaded Earrings",
    title: "Statement Jewelry",
    description: "Eye-catching beaded earrings perfect for special occasions.",
    category: "beads",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "beads4",
    name: "Beaded Wall Hangings",
    title: "Decorative Art",
    description: "Stunning beaded wall decorations with traditional motifs.",
    category: "beads",
    image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "beads5",
    name: "Beaded Table Runners",
    title: "Dining Elegance",
    description: "Elegant beaded table runners for special dining occasions.",
    category: "beads",
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "beads6",
    name: "Beaded Curtains",
    title: "Room Dividers",
    description: "Beautiful beaded curtains that serve as elegant room dividers.",
    category: "beads",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "beads7",
    name: "Beaded Lampshades",
    title: "Lighting Decor",
    description: "Decorative beaded lampshades that create beautiful light patterns.",
    category: "beads",
    image: "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "beads8",
    name: "Beaded Coasters",
    title: "Table Protection",
    description: "Intricate beaded coasters perfect for protecting surfaces.",
    category: "beads",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "beads9",
    name: "Beaded Bookmarks",
    title: "Reading Accessories",
    description: "Beautiful beaded bookmarks for book lovers.",
    category: "beads",
    image: "https://images.unsplash.com/photo-1587905069134-008460d7a636?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },

  // Ceramic Products (9 items)
  {
    id: "ceramic1",
    name: "Ceramic Pottery",
    title: "Handmade Ceramics",
    description: "Beautiful ceramic pieces crafted with precision and artistic flair.",
    category: "ceramic",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "ceramic2",
    name: "Ceramic Vases",
    title: "Decorative Vessels",
    description: "Elegant ceramic vases perfect for floral arrangements.",
    category: "ceramic",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "ceramic3",
    name: "Ceramic Dinnerware",
    title: "Dining Sets",
    description: "Complete ceramic dinnerware sets for elegant dining.",
    category: "ceramic",
    image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "ceramic4",
    name: "Ceramic Tiles",
    title: "Decorative Tiles",
    description: "Handpainted ceramic tiles for interior decoration.",
    category: "ceramic",
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "ceramic5",
    name: "Ceramic Mugs",
    title: "Beverage Vessels",
    description: "Artistic ceramic mugs perfect for coffee and tea.",
    category: "ceramic",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "ceramic6",
    name: "Ceramic Planters",
    title: "Garden Decor",
    description: "Beautiful ceramic planters for indoor and outdoor plants.",
    category: "ceramic",
    image: "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "ceramic7",
    name: "Ceramic Sculptures",
    title: "Artistic Pieces",
    description: "Unique ceramic sculptures showcasing artistic creativity.",
    category: "ceramic",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "ceramic8",
    name: "Ceramic Bowls",
    title: "Serving Bowls",
    description: "Handcrafted ceramic bowls for serving and decoration.",
    category: "ceramic",
    image: "https://images.unsplash.com/photo-1587905069134-008460d7a636?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "ceramic9",
    name: "Ceramic Candlesticks",
    title: "Lighting Decor",
    description: "Elegant ceramic candlesticks for ambient lighting.",
    category: "ceramic",
    image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },

  // Wood Products (9 items)
  {
    id: "wood1",
    name: "Wooden Crafts",
    title: "Traditional Woodwork",
    description: "Exquisite wooden handicrafts showcasing traditional craftsmanship and modern design.",
    category: "wood",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "wood2",
    name: "Wooden Furniture",
    title: "Handcrafted Furniture",
    description: "Beautiful wooden furniture pieces for home and office.",
    category: "wood",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "wood3",
    name: "Wooden Sculptures",
    title: "Artistic Carvings",
    description: "Intricate wooden sculptures showcasing master craftsmanship.",
    category: "wood",
    image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "wood4",
    name: "Wooden Boxes",
    title: "Storage Solutions",
    description: "Handcrafted wooden boxes for storage and decoration.",
    category: "wood",
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "wood5",
    name: "Wooden Cutting Boards",
    title: "Kitchen Essentials",
    description: "Premium wooden cutting boards for kitchen use.",
    category: "wood",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "wood6",
    name: "Wooden Wall Art",
    title: "Decorative Panels",
    description: "Beautiful wooden wall art pieces for interior decoration.",
    category: "wood",
    image: "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "wood7",
    name: "Wooden Toys",
    title: "Children's Play",
    description: "Safe and eco-friendly wooden toys for children.",
    category: "wood",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "wood8",
    name: "Wooden Clocks",
    title: "Timepieces",
    description: "Handcrafted wooden clocks with unique designs.",
    category: "wood",
    image: "https://images.unsplash.com/photo-1587905069134-008460d7a636?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "wood9",
    name: "Wooden Frames",
    title: "Picture Frames",
    description: "Elegant wooden frames for photographs and artwork.",
    category: "wood",
    image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },

  // Resin Products (9 items)
  {
    id: "resin1",
    name: "Resin Art",
    title: "Modern Resin Crafts",
    description: "Contemporary resin art pieces blending modern techniques with artistic vision.",
    category: "resin",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "resin2",
    name: "Resin Jewelry",
    title: "Fashion Accessories",
    description: "Beautiful resin jewelry pieces with embedded flowers and colors.",
    category: "resin",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "resin3",
    name: "Resin Coasters",
    title: "Table Protection",
    description: "Colorful resin coasters with artistic patterns and designs.",
    category: "resin",
    image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "resin4",
    name: "Resin Bookends",
    title: "Book Support",
    description: "Artistic resin bookends for organizing book collections.",
    category: "resin",
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "resin5",
    name: "Resin Keychains",
    title: "Small Accessories",
    description: "Cute resin keychains with various designs and colors.",
    category: "resin",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "resin6",
    name: "Resin Trays",
    title: "Serving Accessories",
    description: "Elegant resin serving trays for special occasions.",
    category: "resin",
    image: "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "resin7",
    name: "Resin Lamps",
    title: "Decorative Lighting",
    description: "Unique resin lamps that create beautiful ambient lighting.",
    category: "resin",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "resin8",
    name: "Resin Paperweights",
    title: "Desk Accessories",
    description: "Artistic resin paperweights for office and home use.",
    category: "resin",
    image: "https://images.unsplash.com/photo-1587905069134-008460d7a636?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "resin9",
    name: "Resin Magnets",
    title: "Refrigerator Decor",
    description: "Decorative resin magnets for kitchen and office use.",
    category: "resin",
    image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },

  // Horn Bone Products (9 items)
  {
    id: "horn1",
    name: "Horn & Bone",
    title: "Natural Material Crafts",
    description: "Unique horn and bone crafts demonstrating skilled artisanship and natural beauty.",
    category: "horn-bone",
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "horn2",
    name: "Horn Combs",
    title: "Hair Accessories",
    description: "Natural horn combs for healthy hair care and styling.",
    category: "horn-bone",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "horn3",
    name: "Bone Jewelry",
    title: "Traditional Ornaments",
    description: "Handcrafted bone jewelry with traditional patterns.",
    category: "horn-bone",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "horn4",
    name: "Horn Buttons",
    title: "Clothing Accessories",
    description: "Natural horn buttons for clothing and accessories.",
    category: "horn-bone",
    image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "horn5",
    name: "Bone Inlay Boxes",
    title: "Decorative Storage",
    description: "Elegant bone inlay boxes for jewelry and small items.",
    category: "horn-bone",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "horn6",
    name: "Horn Spoons",
    title: "Kitchen Utensils",
    description: "Natural horn spoons for cooking and serving.",
    category: "horn-bone",
    image: "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "horn7",
    name: "Bone Sculptures",
    title: "Artistic Pieces",
    description: "Intricate bone sculptures showcasing traditional craftsmanship.",
    category: "horn-bone",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "horn8",
    name: "Horn Picture Frames",
    title: "Photo Display",
    description: "Natural horn picture frames with unique textures.",
    category: "horn-bone",
    image: "https://images.unsplash.com/photo-1587905069134-008460d7a636?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "horn9",
    name: "Bone Hair Pins",
    title: "Hair Accessories",
    description: "Decorative bone hair pins with traditional designs.",
    category: "horn-bone",
    image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },

  // Metal Products (9 items)
  {
    id: "metal1",
    name: "Metal Crafts",
    title: "Metalwork Art",
    description: "Intricate metalwork showcasing traditional techniques and contemporary appeal.",
    category: "metal",
    image: "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "metal2",
    name: "Metal Sculptures",
    title: "Artistic Pieces",
    description: "Beautiful metal sculptures with modern and traditional designs.",
    category: "metal",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "metal3",
    name: "Metal Lanterns",
    title: "Decorative Lighting",
    description: "Ornate metal lanterns for ambient lighting and decoration.",
    category: "metal",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "metal4",
    name: "Metal Bowls",
    title: "Serving Vessels",
    description: "Handcrafted metal bowls for serving and decoration.",
    category: "metal",
    image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "metal5",
    name: "Metal Wall Art",
    title: "Decorative Panels",
    description: "Stunning metal wall art pieces for interior decoration.",
    category: "metal",
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "metal6",
    name: "Metal Jewelry",
    title: "Fashion Accessories",
    description: "Elegant metal jewelry with traditional and modern designs.",
    category: "metal",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "metal7",
    name: "Metal Candle Holders",
    title: "Lighting Decor",
    description: "Beautiful metal candle holders for creating ambiance.",
    category: "metal",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "metal8",
    name: "Metal Vases",
    title: "Decorative Vessels",
    description: "Artistic metal vases perfect for floral arrangements.",
    category: "metal",
    image: "https://images.unsplash.com/photo-1587905069134-008460d7a636?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "metal9",
    name: "Metal Mirrors",
    title: "Decorative Mirrors",
    description: "Ornate metal mirrors with intricate frame designs.",
    category: "metal",
    image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },

  // Textile Products (9 items)
  {
    id: "textile1",
    name: "Textile Arts",
    title: "Handwoven Textiles",
    description: "Beautiful handwoven textiles featuring traditional patterns and vibrant colors.",
    category: "textile",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "textile2",
    name: "Handwoven Scarves",
    title: "Fashion Accessories",
    description: "Luxurious handwoven scarves with traditional patterns.",
    category: "textile",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "textile3",
    name: "Embroidered Cushions",
    title: "Home Decor",
    description: "Beautiful embroidered cushions for home decoration.",
    category: "textile",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "textile4",
    name: "Woven Bags",
    title: "Fashion Accessories",
    description: "Handwoven bags with traditional techniques and modern designs.",
    category: "textile",
    image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "textile5",
    name: "Traditional Carpets",
    title: "Floor Coverings",
    description: "Handwoven carpets with intricate patterns and rich colors.",
    category: "textile",
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "textile6",
    name: "Textile Wall Hangings",
    title: "Wall Decor",
    description: "Artistic textile wall hangings with traditional motifs.",
    category: "textile",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "textile7",
    name: "Embroidered Tablecloths",
    title: "Dining Decor",
    description: "Elegant embroidered tablecloths for special occasions.",
    category: "textile",
    image: "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "textile8",
    name: "Woven Shawls",
    title: "Traditional Wear",
    description: "Beautiful woven shawls with traditional patterns.",
    category: "textile",
    image: "https://images.unsplash.com/photo-1587905069134-008460d7a636?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "textile9",
    name: "Embroidered Bedspreads",
    title: "Bedroom Decor",
    description: "Luxurious embroidered bedspreads for bedroom decoration.",
    category: "textile",
    image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },

  // Stone Products (9 items)
  {
    id: "stone1",
    name: "Stone Sculpture",
    title: "Carved Stone Art",
    description: "Elegant stone sculptures and decorative pieces carved with precision and artistry.",
    category: "stone",
    image: "https://images.unsplash.com/photo-1587905069134-008460d7a636?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "stone2",
    name: "Stone Vases",
    title: "Decorative Vessels",
    description: "Beautiful carved stone vases for floral arrangements.",
    category: "stone",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "stone3",
    name: "Stone Bowls",
    title: "Serving Vessels",
    description: "Handcrafted stone bowls for serving and decoration.",
    category: "stone",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "stone4",
    name: "Stone Tiles",
    title: "Decorative Tiles",
    description: "Carved stone tiles for interior and exterior decoration.",
    category: "stone",
    image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "stone5",
    name: "Stone Mortar & Pestle",
    title: "Kitchen Tools",
    description: "Traditional stone mortar and pestle for cooking.",
    category: "stone",
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "stone6",
    name: "Stone Decorative Objects",
    title: "Home Decor",
    description: "Artistic stone decorative objects for home and office.",
    category: "stone",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "stone7",
    name: "Stone Coasters",
    title: "Table Protection",
    description: "Natural stone coasters with polished finish.",
    category: "stone",
    image: "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "stone8",
    name: "Stone Candlesticks",
    title: "Lighting Decor",
    description: "Elegant stone candlesticks for ambient lighting.",
    category: "stone",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "stone9",
    name: "Stone Jewelry",
    title: "Fashion Accessories",
    description: "Beautiful stone jewelry with natural patterns.",
    category: "stone",
    image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
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
