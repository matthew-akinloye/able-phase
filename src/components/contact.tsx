/* eslint-disable react/no-unescaped-entities */
import { Phone, Mail, Instagram, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="border-b-4 border-yellow-500 pb-2">Contact Us</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
            <p className="mb-8 text-gray-300">
              Don't miss out on this incredible opportunity! Contact us today to
              book your stay at ABLE PHASE 1.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-yellow-500 text-black p-3 rounded-full">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Call or WhatsApp</p>
                  <a
                    href="tel:08079531292"
                    className="text-lg font-semibold hover:text-yellow-400 transition-colors"
                  >
                    08079531292
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-yellow-500 text-black p-3 rounded-full">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email Us</p>
                  <a
                    href="mailto:Ableluxuryapartment@gmail.com"
                    className="text-lg font-semibold hover:text-yellow-400 transition-colors"
                  >
                    Ableluxuryapartment@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-yellow-500 text-black p-3 rounded-full">
                  <Instagram className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Instagram</p>
                  <a
                    href="https://instagram.com/Able_luxury"
                    className="text-lg font-semibold hover:text-yellow-400 transition-colors"
                  >
                    @Able_luxury
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-yellow-500 text-black p-3 rounded-full">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Address</p>
                  <p className="text-lg font-semibold">
                    31 Fibigbade street, adjacent to Onamade rentals, Ago-iwoye,
                    Ogun State
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

            <form
              className="space-y-6"
              action="mailto:Ableluxuryapartment@gmail.com"
            >
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Your Name
                </label>
                <input
                  id="contact-name"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Email Address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3">
                Send Message
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-20 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} ABLE PHASE 1 Luxury Apartments.
            All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
