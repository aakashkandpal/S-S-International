import { Card, CardContent } from "@/components/ui/card";
import { featuredProducts } from "@/data/products";

export default function FeatureCards() {
  return (
    <section id="featured-products" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Featured Products
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our extensive range of handcrafted products, each piece
            reflecting our commitment to quality and traditional artistry.
          </p>
        </div>

        <div className="overflow-x-auto pb-4">
          <div className="flex space-x-6 w-max">
            {featuredProducts.map((product) => (
              <Card
                key={product.id}
                className="flex-shrink-0 w-80 card-hover"
              >
                <CardContent className="p-6">
                  <div className="w-72 h-72 mx-auto mb-4 rounded-lg overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-2">{product.title}</p>
                  <p className="text-gray-500 text-sm">{product.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
