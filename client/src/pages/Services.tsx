import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { featuredProducts, type Product } from "@/data/products";

export default function Services() {
  const [location] = useLocation();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(featuredProducts);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get("category");
    
    if (category && category !== "all") {
      setSelectedCategory(category);
      setFilteredProducts(
        featuredProducts.filter((product) => product.category === category)
      );
    } else {
      setSelectedCategory("all");
      setFilteredProducts(featuredProducts);
    }
  }, [location]);

  const categories = [
    { label: "All Products", value: "all" },
    { label: "Lac", value: "lac" },
    { label: "Felt", value: "felt" },
    { label: "Beads", value: "beads" },
    { label: "Ceramic", value: "ceramic" },
    { label: "Wood", value: "wood" },
    { label: "Resin", value: "resin" },
    { label: "Horn Bone", value: "horn-bone" },
    { label: "Metal", value: "metal" },
    { label: "Textile", value: "textile" },
    { label: "Stone", value: "stone" },
  ];

  const filterProducts = (category: string) => {
    setSelectedCategory(category);
    if (category === "all") {
      setFilteredProducts(featuredProducts);
    } else {
      setFilteredProducts(
        featuredProducts.filter((product) => product.category === category)
      );
    }
    
    // Update URL without navigating
    const newUrl = category === "all" ? "/services" : `/services?category=${category}`;
    window.history.pushState({}, "", newUrl);
  };

  return (
    <div className="min-h-screen pt-16">
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services - Product Gallery
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive range of handcrafted products, each
              piece representing our commitment to quality and traditional
              artistry.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.value}
                onClick={() => filterProducts(category.value)}
                variant={selectedCategory === category.value ? "default" : "outline"}
                className={`${
                  selectedCategory === category.value
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "border-blue-600 text-blue-600 hover:bg-blue-50"
                }`}
              >
                {category.label}
              </Button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="card-hover">
                <CardContent className="p-6">
                  <div className="w-full h-96 mb-4 rounded-lg overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-2">{product.title}</p>
                  <p className="text-gray-500 text-sm">{product.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No products found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
