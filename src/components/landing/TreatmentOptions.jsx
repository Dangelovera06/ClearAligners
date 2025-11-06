import React from "react";
import { useNavigate } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  Star,
  SmilePlus, 
  Smile,
  Crown,
  ArrowRight
} from "lucide-react";

export default function TreatmentOptions() {
  const treatments = [
    {
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=300&fit=crop",
      title: "Clear Aligners Express",
      description: "Quick fixes for minor alignment",
      duration: "3-6 months",
      features: [
        "Perfect for minor spacing issues",
        "Fastest treatment option",
        "Ideal for touch-ups or minor corrections"
      ],
      note: "Best for patients with minimal crowding or spacing.",
      color: "blue",
      popular: false
    },
    {
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=300&fit=crop",
      title: "Clear Aligners Standard",
      description: "Comprehensive smile transformation",
      duration: "6-12 months",
      features: [
        "Corrects moderate alignment issues",
        "Comfortable and virtually invisible",
        "Removable for easy eating and cleaning"
      ],
      note: "Most popular choice for moderate crowding or gaps.",
      color: "purple",
      popular: true
    },
    {
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=300&fit=crop",
      title: "Clear Aligners Comprehensive",
      description: "Advanced orthodontic solution",
      duration: "12-18 months",
      features: [
        "Handles complex bite issues",
        "Includes refinement aligners",
        "Achieves dramatic transformations"
      ],
      note: "Designed for complex cases requiring extensive movement.",
      color: "green",
      popular: false
    }
  ];

  const navigate = useNavigate();
  const goToQuiz = () => {
    navigate(createPageUrl('Quiz'));
  };

  return (
    <section id="treatments" className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Perfect{" "}
            <span className="text-blue-600">Clear Aligner Plan</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Every smile is unique. We offer three treatment tiers designed to straighten your teeth 
            comfortably and effectively, tailored to your specific needs and timeline.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {treatments.map((treatment, index) => (
            <Card key={index} className={`relative overflow-hidden hover:shadow-xl transition-all duration-300 ${treatment.popular ? 'ring-2 ring-blue-500' : ''}`}>
              {treatment.popular && (
                <div className="absolute top-0 right-0">
                  <Badge className="bg-blue-600 text-white rounded-tl-none rounded-br-none">
                    <Star className="w-4 h-4 mr-1 fill-current" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl mb-2">{treatment.title}</CardTitle>
                <p className="text-gray-600">{treatment.description}</p>
                {treatment.duration && (
                  <div className="mt-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                      ⏱️ {treatment.duration}
                    </span>
                  </div>
                )}
              </CardHeader>

              <CardContent>
                {treatment.image && (
                  <div className="mb-6 px-4">
                    <img src={treatment.image} alt={treatment.title} className="w-full h-auto rounded-lg object-cover" />
                  </div>
                )}
                <ul className="space-y-3 mb-6">
                  {treatment.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <p className="text-sm text-gray-600 italic">
                    {treatment.note}
                  </p>
                </div>

                <Button 
                  className="w-full"
                  variant={treatment.popular ? "default" : "outline"}
                  onClick={goToQuiz}
                >
                  Get Pricing
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 text-center">
          <Button 
            size="lg"
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3"
            onClick={goToQuiz}
          >
            Get My Free Consultation
            <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 ml-2" />
          </Button>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 px-4">
            Not sure which plan is right for you? Take our 60-second quiz to get personalized recommendations.
          </p>
        </div>
      </div>
    </section>
  );
}