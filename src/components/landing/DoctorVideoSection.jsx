import React from "react";
import { Badge } from "@/components/ui/badge";
import { Play, CheckCircle, CreditCard, Scan } from "lucide-react";

export default function DoctorVideoSection() {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <Badge className="bg-green-100 text-green-700 mb-4">
            <Play className="w-4 h-4 mr-2" />
            Personal Message
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            A Message from <span className="text-blue-600">Dr. Almanzar</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Learn about our approach to clear aligners and invisible teeth straightening
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Side - Video */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 sm:p-8 shadow-lg order-1 lg:order-1">
            <div className="aspect-video rounded-xl overflow-hidden shadow-lg bg-white">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/1vQFii3kun0"
                title="Meet Dr. Hans Almanzar - Personal Introduction"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Right Side - Practice Features */}
          <div className="space-y-6 order-2 lg:order-2">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                What Sets Our Practice Apart
              </h3>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6">
                At St Lucie Center for Cosmetic Dentistry, we specialize in clear aligner treatments including Invisalign. 
                During your consultation, we'll assess your teeth alignment and create a personalized treatment plan 
                that fits your lifestyle, budget, and smile goals.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">Multiple Treatment Options</h4>
                  <p className="text-sm sm:text-base text-gray-600">Express, Standard, and Comprehensive plans to fit any alignment need.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <CreditCard className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">Flexible Monthly Payment Plans</h4>
                  <p className="text-sm sm:text-base text-gray-600">Affordable financing options to make your dream smile accessible.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Scan className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">Comprehensive Consultation with Free 3D Scan</h4>
                  <p className="text-sm sm:text-base text-gray-600 font-semibold">($495 Value - Free This Month)</p>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 sm:p-4 mt-6 sm:mt-8">
              <p className="text-xs sm:text-sm text-gray-700 font-medium text-center">
                <strong>DISCLAIMER:</strong> Clear Aligner treatment is NOT covered by Medicare. Some dental insurance plans may provide orthodontic benefits.*
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
