
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  backgroundColor: string;
  textColor: string;
}

const TestimonialCarousel = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "I felt like my needs were seen and heard, like I have a personal health guardian",
      name: "A",
      title: "51, BUSINESS MANAGER",
      backgroundColor: "bg-connectu-purple",
      textColor: "text-white"
    },
    {
      quote: "I would be getting to my doctor or know what to ask for without your support",
      name: "D",
      title: "52 CEO, REALESTATE GROUP",
      backgroundColor: "bg-connectu-beige",
      textColor: "text-connectu-purple"
    },
    {
      quote: "ConnectU support pushed me to keep doing the work. It was easy to fit it into my life cause I quickly so a changer for the better",
      name: "G",
      title: "55 ER NURSE",
      backgroundColor: "bg-connectu-purple",
      textColor: "text-white"
    },
    {
      quote: "There are so many offerings but I wanted something that fits my needs. I feel in control of my health now.",
      name: "S",
      title: "46 ACCOUNTANT, MEDICAL DEVICE COMPANY",
      backgroundColor: "bg-connectu-beige",
      textColor: "text-connectu-purple"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Auto-advance the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);

  const current = testimonials[currentIndex];

  return (
    <div className={`${current.backgroundColor} p-6 rounded-lg shadow-md transition-all duration-300 h-full flex flex-col`}>
      <div className="flex-grow flex items-center">
        <div className="w-full">
          <p className={`${current.textColor} text-xl md:text-2xl font-light italic mb-6 leading-relaxed`}>
            "{current.quote}"
          </p>
          <div className={`${current.textColor} font-semibold mt-auto`}>
            {current.name}, <span className="font-normal">{current.title}</span>
          </div>
        </div>
      </div>
      
      <div className="flex justify-between mt-6">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={prevSlide}
          className={`hover:bg-white/10 ${current.textColor}`}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <div className="flex gap-2 items-center">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 rounded-full transition-all ${
                index === currentIndex 
                  ? `${current.textColor} opacity-100 scale-125` 
                  : `${current.textColor} opacity-40`
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={nextSlide}
          className={`hover:bg-white/10 ${current.textColor}`}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
