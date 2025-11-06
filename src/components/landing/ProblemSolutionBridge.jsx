import React from "react";

export default function ProblemSolutionBridge() {
  return (
    <section className="bg-white py-6 sm:py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              It's More Than Just Straight Teeth. It's Your Confidence.
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Whether you have crooked teeth, gaps, or crowding that's affecting your confidence—know that a comfortable, invisible solution is within reach. Clear aligners allow you to straighten your smile without the hassle of metal braces, so you can feel confident throughout your entire transformation journey.
            </p>
          </div>
          
          <div className="relative order-1 lg:order-2">
            <div className="rounded-lg sm:rounded-xl overflow-hidden shadow-lg">
              <img
                src="/HAPPY%20SMILE%20%202.png"
                alt="Happy patient with beautiful smile showing quality of life transformation"
                className="w-full h-48 sm:h-56 md:h-64 object-cover"
                onError={(e) => {
                  console.log('Happy smile image failed to load');
                  e.target.src = "/logo.svg";
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}