import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

const shippingLocations: Array<{ name: string; coordinates: [number, number] }> = [
  { name: "USA", coordinates: [-100, 40] },
  { name: "Canada", coordinates: [-106, 56] },
  { name: "UK", coordinates: [-1.5, 52] },
  { name: "Europe", coordinates: [10, 50] }, // central Europe
  { name: "Russia", coordinates: [100, 60] },
  { name: "Japan", coordinates: [138, 36] },
  { name: "Australia", coordinates: [133, -25] },
];

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

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <ComposableMap
            projectionConfig={{ scale: 140 }}
            style={{ width: "100%", height: "auto" }}
          >
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#e5e7eb"
                    stroke="#fff"
                    style={{
                      default: { outline: "none" },
                      hover: { fill: "#d1d5db", outline: "none" },
                      pressed: { outline: "none" },
                    }}
                  />
                ))
              }
            </Geographies>

            {shippingLocations.map(({ name, coordinates }) => (
              <Marker key={name} coordinates={coordinates}>
                <circle r={6} fill="#2563eb" stroke="#fff" strokeWidth={2} />
                <text
                  textAnchor="middle"
                  y={-12}
                  style={{
                    fontFamily: "system-ui",
                    fill: "#2563eb",
                    fontSize: 10,
                  }}
                >
                  {name}
                </text>
              </Marker>
            ))}
          </ComposableMap>
        </div>
      </div>
    </section>
  );
}