import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Rates() {
  const plans = [
    {
      title: "Lodging Package",
      price: "₦150,000",
      features: [
        "All amenities included",
        "24/7 security",
        "Free Wi-Fi",
        "Cable TV",
        "Fully equipped kitchen",
      ],
      popular: false,
    },
    {
      title: "Event Package",
      price: "₦200,000",
      features: [
        "All Lodging Package features",
        "Caution Fee of ₦50,000",
        "Caution Fee Refundable",
      ],
      popular: true,
    },
    {
      title: "Payment Terms",
      price: "",
      features: [
        "All prices are subject to change without notice",
        "Caution fees are refundable upon checkout, provided no damages are incurred",
        "Payments can be made via bank transfer, credit/debit card.",
        "Prices are inclusive of VAT and other applicable taxes",
        "Able Phase 1 Luxury Apartment reserves the right to modify or cancel any booking due to unforeseen circumstances.",
      ],
      popular: false,
    },
  ];

  return (
    <section id="rates" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="border-b-4 border-yellow-500 pb-2">Our Rates</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2 ${
                plan.popular
                  ? "border-2 border-yellow-500 relative"
                  : "border border-gray-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-yellow-500 text-black font-semibold py-1 px-4 text-sm">
                  Most Popular
                </div>
              )}

              <div className="p-8 bg-gray-50">
                <h3 className="text-2xl font-bold text-center">{plan.title}</h3>
                <div className="text-center my-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                </div>
              </div>

              <div className="p-8">
                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Button
                    className={`w-full py-6 ${
                      plan.popular
                        ? "bg-yellow-500 hover:bg-yellow-600 text-black"
                        : "bg-gray-800 hover:bg-gray-900"
                    }`}
                    asChild
                  >
                    <Link href="#booking">Book Now</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-gray-600">
          <p>
            Discounts available for long-term stays. Contact us for custom
            pricing.
          </p>
        </div>
      </div>
    </section>
  );
}
