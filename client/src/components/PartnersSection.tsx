import partnersImage from "@assets/pixelcut-export_1750143729239.jpg";

export default function PartnersSection() {
  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Global Partners
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Trusted partnerships with leading retailers and distributors
            worldwide, enabling us to deliver quality handicrafts to
            international markets.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="max-w-4xl w-full">
            <img
              src={partnersImage}
              alt="Our Global Partners - Azure Home, TJX US, Maisons du Monde, Tuesday Morning"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
