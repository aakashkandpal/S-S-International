import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { partners } from "@/data/products";

export default function PartnersSection() {
  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Global Partners
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Trusted partnerships with leading retailers and distributors
            worldwide, enabling us to deliver quality handicrafts to
            international markets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner) => (
            <Card
              key={partner.id}
              className="text-center card-hover"
            >
              <CardContent className="p-6">
                <div className="w-72 h-72 mx-auto mb-6 rounded-full overflow-hidden shadow-md">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {partner.name}
                </h3>
                <p className="text-gray-600 mb-4">{partner.type}</p>
                <p className="text-gray-500 mb-6">{partner.description}</p>
                <Button
                  variant="secondary"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium"
                >
                  View More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
