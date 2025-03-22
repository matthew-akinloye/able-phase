/* eslint-disable react/no-unescaped-entities */
"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function BookingForm() {
  const [checkIn, setCheckIn] = useState<Date | undefined>(undefined);
  const [checkOut, setCheckOut] = useState<Date | undefined>(undefined);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    }, 1500);
  };

  return (
    <section id="booking" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="border-b-4 border-yellow-500 pb-2">
            Book Your Stay
          </span>
        </h2>

        <div className="max-w-3xl mx-auto bg-white rounded-lg overflow-hidden">
          <div className="p-8">
            {isSuccess ? (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Booking Request Sent!
                </h3>
                <p className="text-gray-600">
                  We'll contact you shortly to confirm your reservation.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Full Name
                    </label>
                    <Input id="name" placeholder="John Doe" required />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      placeholder="+234 800 000 0000"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="guests"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Number of Guests
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select number of guests" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Guest</SelectItem>
                        <SelectItem value="2">2 Guests</SelectItem>
                        <SelectItem value="3">3 Guests</SelectItem>
                        <SelectItem value="4">4 Guests</SelectItem>
                        <SelectItem value="5">5+ Guests</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Check-in Date
                    </label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !checkIn && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {checkIn ? (
                            format(checkIn, "PPP")
                          ) : (
                            <span>Select date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={checkIn}
                          onSelect={setCheckIn}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Check-out Date
                    </label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !checkOut && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {checkOut ? (
                            format(checkOut, "PPP")
                          ) : (
                            <span>Select date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={checkOut}
                          onSelect={setCheckOut}
                          initialFocus
                          disabled={(date) =>
                            (checkIn ? date < checkIn : false) ||
                            date < new Date()
                          }
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="md:col-span-2">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Special Requests
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Any special requirements or requests?"
                      rows={4}
                    />
                  </div>
                </div>

                <div className="text-center">
                  <Button
                    type="submit"
                    className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-6 text-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      "Request Booking"
                    )}
                  </Button>
                </div>
              </form>
            )}
          </div>

          <div className="bg-gray-50 p-6 text-center">
            <p className="text-gray-600">
              You can also book by calling us at{" "}
              <a
                href="tel:08079531292"
                className="font-semibold text-yellow-600 hover:underline"
              >
                08079531292
              </a>{" "}
              or sending an email to{" "}
              <a
                href="mailto:Ableluxuryapartment@gmail.com"
                className="font-semibold text-yellow-600 hover:underline"
              >
                Ableluxuryapartment@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-6">
            Book with Google Calendar
          </h3>
          <p className="text-center mb-8">
            You can also book your stay directly through our Google Calendar
            integration. Select your preferred dates and we'll confirm your
            booking.
          </p>

          <div className="bg-white rounded-lg p-4 h-96 flex items-center justify-center">
            <div className="text-center">
              <p className="text-gray-500 mb-4">Google Calendar Integration</p>
              <Button
                className="bg-blue-500 hover:bg-blue-600"
                onClick={() =>
                  window.open(
                    "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0Vxu_7-dOOdBUMsz_zMVH5MJB-OxpTqJfGGJBOoH5NfB1mQLXCwzjYOQyEMRfCz4phh1fzGVSl",
                    "_blank"
                  )
                }
              >
                Open Booking Calendar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
