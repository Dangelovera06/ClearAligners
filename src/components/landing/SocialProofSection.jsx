
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Quote,
  Play,
  Heart,
  Star,
  Award
} from "lucide-react";

export default function SocialProofSection() {
  const testimonials = [
    {
      name: "Sarah Martinez",
      age: "28",
      location: "Port St. Lucie",
      quote: "No one even knew I was straightening my teeth. Best decision ever!",
      treatment: "Clear Aligners",
      image: "S"
    },
    {
      name: "Michael Thompson",
      age: "35", 
      location: "Stuart",
      quote: "So comfortable and convenient. I could eat and drink normally throughout treatment.",
      treatment: "Clear Aligners",
      image: "M"
    },
    {
      name: "Jessica Lee",
      age: "42",
      location: "Jensen Beach", 
      quote: "My teeth are perfectly straight now. I can't stop smiling!",
      treatment: "Clear Aligners",
      image: "J"
    }
  ];


  return (
    <section id="testimonials" className="py-12 sm:py-16 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Real Patients. Real{" "}
            <span className="text-blue-600">Transformations.</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Don't take our word for it. Here's what our patients are saying about their life-changing experiences.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="relative mb-6">
                  <Quote className="w-8 h-8 text-blue-200 absolute -top-2 -left-2" />
                  <p className="text-gray-800 font-medium text-lg italic pl-6">
                    "{testimonial.quote}"
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
                      <span className="font-semibold text-blue-700">
                        {testimonial.image}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-600">
                        Age {testimonial.age}, {testimonial.location}
                      </p>
                    </div>
                  </div>
                  <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                    {testimonial.treatment}
                  </Badge>
                </div>

                {/* Rating */}
                <div className="flex items-center justify-center mt-4 pt-4 border-t">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 sm:mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-8 opacity-60">
          <div className="flex items-center space-x-2">
            <Heart className="w-4 sm:w-5 h-4 sm:h-5 text-red-500" />
            <span className="text-xs sm:text-sm text-gray-600">Trusted by 1000+ families</span>
          </div>
          <div className="flex items-center space-x-2">
            <Award className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-500" />
            <span className="text-xs sm:text-sm text-gray-600">Award-winning practice</span>
          </div>
          <div className="flex items-center space-x-2">
            <Star className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-400 fill-current" />
            <span className="text-xs sm:text-sm text-gray-600">4.9/5 patient satisfaction</span>
          </div>
        </div>
      </div>
    </section>
  );
}
