import { MapPin, ShoppingBag, Utensils, Music } from "lucide-react";

export function Location() {
  return (
    <section id="location" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="border-b-4 border-yellow-500 pb-2">Location</span>
        </h2>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2">
            <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-lg">
              {/* Placeholder for Google Maps iframe */}
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3365.588789623482!2d3.906512556079408!3d6.94642086546107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s31%20Fibigbade%20street%2C%20adjacent%20to%20Onamade%20rentals%2C%20Ago-iwoye%2C%20Ogun%20State!5e0!3m2!1sen!2sng!4v1742662353669!5m2!1sen!2sng"
                  width="600"
                  height="450"
                 
                
                  loading="lazy"
             
                ></iframe>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl font-bold mb-6">Strategically Located</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg">Prime Location</h4>
                  <p className="text-gray-600">
                    Situated in a serene and secure environment at 31 Fibigbade
                    street, adjacent to Onamade rentals, Ago-iwoye, Ogun State.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <ShoppingBag className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg">Shopping Centers</h4>
                  <p className="text-gray-600">
                    Close proximity to major shopping centers for all your
                    needs.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Utensils className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg">Restaurants</h4>
                  <p className="text-gray-600">
                    Variety of dining options within walking distance.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Music className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg">Entertainment</h4>
                  <p className="text-gray-600">
                    Entertainment hubs nearby for your leisure activities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
