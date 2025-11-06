
import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  CheckCircle,
  Users,
  ArrowRight,
  Sparkles
} from "lucide-react";

export default function HeroSection() {
  const navigate = useNavigate();
  
  const goToQuiz = () => {
    // Track CTA button click
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'InitiateCheckout', {
        content_name: 'Quiz CTA Click',
        content_category: 'CTA',
        value: 495,
        currency: 'USD'
      });
      console.log('🛒 InitiateCheckout event fired from Hero CTA');
    } else {
      console.log('❌ fbq not available for Hero CTA tracking');
    }
    navigate(createPageUrl('Quiz'));
  };

  // YouTube video tracking (using YouTube IFrame API)
  useEffect(() => {
    // Track video view on component mount
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('trackCustom', 'VideoView', {
        video_title: 'Clear Aligners Transformation Story',
        video_type: 'VSL',
        video_id: 'HSP56h0m0b0',
        platform: 'YouTube'
      });
      console.log('📹 Video view tracked');
    }
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-20" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-100 rounded-full opacity-20" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="max-w-4xl w-full text-center">
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
              Straighten Your Teeth{" "}
              <span className="text-blue-600 relative">
                Without Metal Braces
                <div className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-2 sm:h-3 bg-blue-200/50 -z-10" />
              </span>
            </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
            <span className="underline">Trusted by 1,000+ patients.</span> Get your dream smile with{" "}
            <strong className="text-gray-900">invisible, comfortable clear aligners</strong>.
          </p>

            {/* Video Title */}
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                See How Clear Aligners Transform Your Smile
              </h3>
            </div>

            {/* VSL Video Container */}
            <div className="relative mb-8">
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border-2 sm:border-4 border-white bg-black max-w-3xl mx-auto">
                {/* YouTube Video Player */}
                <div className="relative aspect-video">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/HSP56h0m0b0"
                    title="Clear Aligners Transformation Story"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="space-y-4 sm:space-y-5">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-lg sm:text-xl lg:text-2xl px-8 sm:px-12 lg:px-16 py-4 sm:py-5 lg:py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 shadow-blue-500/25 hover:shadow-blue-500/40 ring-2 ring-blue-500/20 hover:ring-blue-500/30 font-semibold"
                onClick={goToQuiz}
              >
                <Sparkles className="w-5 sm:w-6 lg:w-7 h-5 sm:h-6 lg:h-7 mr-3" />
                Get My Free Smile Consultation
                <ArrowRight className="w-5 sm:w-6 lg:w-7 h-5 sm:h-6 lg:h-7 ml-3" />
              </Button>
              <p className="text-sm sm:text-base lg:text-lg text-gray-500">
                ⏰ Take our 60-second quiz to qualify
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
