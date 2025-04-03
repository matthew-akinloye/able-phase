/* eslint-disable react/no-unescaped-entities */
import { Phone, Mail, Instagram, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

export function Contact() {
  // Initialize form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<string | null>(null);

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Basic form validation
  const validateForm = () => {
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      setFormStatus("Please fill out all fields.");
      return false;
    }
    return true;
  };

  // Handle form submission (redirect to WhatsApp with pre-filled message)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check if the form is valid
    if (!validateForm()) {
      return;
    }
    

    setIsSubmitting(true);
    setFormStatus(null); // Reset status

    // Format the message to send via WhatsApp
    const { name, email, message } = formData;
    const whatsappMessage = `
    Hello, my name is ${name}.I was redirected here from the ABLE PHASE 1 website,
    Email: ${email}
    Message: ${message}
  `.trim();

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // WhatsApp URL
    const whatsappUrl = `https://wa.me/08079531292?text=${encodedMessage}`;

    // Redirect the user to WhatsApp with the pre-filled message
    window.location.href = whatsappUrl;

    // Simulate success status
    setFormStatus("Your message is being sent to WhatsApp...");
    setIsSubmitting(false);
  };

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

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Your Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
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
                  name="email"
                  type="email"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
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
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none resize-none"
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              {formStatus && (
                <div
                  className={`text-center ${formStatus.includes("success") ? "text-green-500" : "text-red-500"
                    }`}
                >
                  {formStatus}
                </div>
              )}

              <Button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
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
