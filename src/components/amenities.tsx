import { Wifi, Shield, Utensils, Tv, Home, Bath } from "lucide-react";

export function Amenities() {
  const amenities = [
    {
      icon: <Home className="h-10 w-10 mb-4 text-yellow-500" />,
      title: "Spacious Rooms",
      description: "Comfortable beds and ample living space for relaxation",
    },
    {
      icon: <Utensils className="h-10 w-10 mb-4 text-yellow-500" />,
      title: "Fully Equipped Kitchen",
      description: "Modern appliances for all your cooking needs",
    },
    {
      icon: <Bath className="h-10 w-10 mb-4 text-yellow-500" />,
      title: "Modern Bathrooms",
      description: "Clean and stylish bathrooms with premium fixtures",
    },
    {
      icon: <Shield className="h-10 w-10 mb-4 text-yellow-500" />,
      title: "24/7 Security",
      description: "Round-the-clock security and power supply",
    },
    {
      icon: <Wifi className="h-10 w-10 mb-4 text-yellow-500" />,
      title: "Free Wi-Fi",
      description: "High-speed internet access throughout your stay",
    },
    {
      icon: <Tv className="h-10 w-10 mb-4 text-yellow-500" />,
      title: "Cable TV",
      description: "Entertainment options with premium channels",
    },
  ];

  return (
    <section id="amenities" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="border-b-4 border-yellow-500 pb-2">Amenities</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg text-center transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="flex justify-center">{amenity.icon}</div>
              <h3 className="text-xl font-bold mb-2">{amenity.title}</h3>
              <p className="text-gray-600">{amenity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
