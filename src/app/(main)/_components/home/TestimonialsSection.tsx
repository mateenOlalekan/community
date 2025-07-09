import React, { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star, MapPin, Briefcase, TrendingUp, Clock } from 'lucide-react';
import { Card, CardBody } from '../ui/Card';
import { Avatar } from '../ui/Avatar';
import { AnimatedCard } from '../ui/AnimatedCard';
import { GradientText } from '../ui/GradientText';

interface Testimonial {
  id: string;
  name: string;
  avatar?: string;
  role: string;
  company?: string;
  location: string;
  text: string;
  category: 'high-school' | 'graduate' | 'career-changer' | 'experimenter';
  rating: number;
  timeToSuccess: string;
  salaryIncrease: string;
  beforeImage?: string;
  afterImage?: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Emeka Johnson',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
    role: 'Certified Electrician',
    company: 'PowerTech Solutions',
    location: 'Lagos, Nigeria',
    text: 'I never finished high school, but this job portal helped me find an apprenticeship in electrical work. The skills assessment showed me I had natural technical abilities. Now I have a stable career and earn more than I ever thought possible.',
    category: 'high-school',
    rating: 5,
    timeToSuccess: '8 months',
    salaryIncrease: '₦0 to ₦180k/month',
    beforeImage: 'https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=300',
    afterImage: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    id: '2',
    name: 'Amina Bello',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
    role: 'Digital Marketing Specialist',
    company: 'Global Media Agency',
    location: 'Abuja, Nigeria',
    text: 'After graduating with a marketing degree, I struggled to find relevant work. This portal helped me identify digital marketing as my ideal path. Their job matching was incredible. Within two weeks, I had multiple offers!',
    category: 'graduate',
    rating: 5,
    timeToSuccess: '3 weeks',
    salaryIncrease: '₦0 to ₦220k/month',
    beforeImage: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=300',
    afterImage: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  // Add more testimonials as needed
];

export const TestimonialsSection: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const currentTestimonialData = testimonials[currentTestimonial];

  // Time color based on duration
  const getTimeColor = (time: string) => {
    const months = parseInt(time.split(' ')[0]);
    if (months <= 3) return 'text-green-400'; // Fast success (green)
    if (months <= 6) return 'text-white';     // Medium (white)
    return 'text-gray-400';                   // Longer (gray/black)
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-green-100 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <AnimatedCard delay={200}>
            <div className="inline-flex items-center bg-green-100 rounded-full px-6 py-2 mb-6">
              <Star className="h-5 w-5 text-green-600 mr-2" />
              <span className="text-green-800 font-medium">Success Stories</span>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={400}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <GradientText gradient="green">Real People,</GradientText> Real Career Growth
            </h2>
          </AnimatedCard>

          <AnimatedCard delay={600}>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See how our job portal has helped candidates find their dream careers
            </p>
          </AnimatedCard>
        </div>

        {/* Testimonial card */}
        <AnimatedCard delay={800}>
          <div className="relative">
            <Card className="bg-white border border-gray-200 shadow-xl overflow-hidden">
              <CardBody className="p-6 md:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  {/* Testimonial content */}
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <Avatar
                        src={currentTestimonialData.avatar}
                        name={currentTestimonialData.name}
                        size="lg"
                        className="ring-2 ring-green-500"
                      />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{currentTestimonialData.name}</h3>
                        <p className="text-green-600">{currentTestimonialData.role}</p>
                        <p className="text-gray-500 text-sm">{currentTestimonialData.company}</p>
                        <div className="flex items-center mt-1">
                          <MapPin className="h-4 w-4 text-gray-400 mr-1" />
                          <span className="text-gray-500 text-sm">{currentTestimonialData.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${i < currentTestimonialData.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>

                    <div className="relative">
                      <Quote className="h-8 w-8 text-green-200 opacity-50 absolute -top-2 -left-1" />
                      <p className="text-gray-700 leading-relaxed pl-6">
                        "{currentTestimonialData.text}"
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-50 rounded-lg p-3 text-center border border-gray-200">
                        <div className={`text-xl font-bold ${getTimeColor(currentTestimonialData.timeToSuccess)}`}>
                          {currentTestimonialData.timeToSuccess}
                        </div>
                        <div className="text-xs text-gray-500">Time to Success</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3 text-center border border-gray-200">
                        <div className="text-xl font-bold text-green-600">{currentTestimonialData.salaryIncrease}</div>
                        <div className="text-xs text-gray-500">Salary Change</div>
                      </div>
                    </div>
                  </div>

                  {/* Before/After images */}
                  <div className="hidden lg:block">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">Before</h4>
                        <div className="relative overflow-hidden rounded-lg h-40">
                          <img
                            src={currentTestimonialData.beforeImage}
                            alt="Before"
                            className="w-full h-full object-cover filter grayscale"
                          />
                        </div>
                      </div>
                      <div className="text-center">
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">After</h4>
                        <div className="relative overflow-hidden rounded-lg h-40 border-2 border-green-400">
                          <img
                            src={currentTestimonialData.afterImage}
                            alt="After"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>

            {/* Navigation buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-100 border border-gray-200 rounded-full p-2 shadow-md transition-all duration-200"
            >
              <ChevronLeft className="h-5 w-5 text-gray-700" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-100 border border-gray-200 rounded-full p-2 shadow-md transition-all duration-200"
            >
              <ChevronRight className="h-5 w-5 text-gray-700" />
            </button>
          </div>
        </AnimatedCard>

        {/* Indicators */}
        <AnimatedCard delay={1000}>
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? 'bg-green-600 scale-150' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                onClick={() => {
                  setCurrentTestimonial(index);
                  setIsAutoPlaying(false);
                }}
              />
            ))}
          </div>
        </AnimatedCard>

        {/* Stats */}
        <AnimatedCard delay={1200}>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { number: '10,000+', label: 'Jobs Posted', icon: <Briefcase className="h-6 w-6 text-green-600" /> },
              { number: '85%', label: 'Success Rate', icon: <TrendingUp className="h-6 w-6 text-green-600" /> },
              { number: '3.5 months', label: 'Avg. Placement', icon: <Clock className="h-6 w-6 text-green-600" /> },
              { number: '4.8/5', label: 'User Rating', icon: <Star className="h-6 w-6 text-green-600" /> },
            ].map((stat, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:shadow-md transition-shadow">
                <div className="flex justify-center mb-2">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </AnimatedCard>
        
        {/* CTA */}
        <AnimatedCard delay={1400}>
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready for Your Career Breakthrough?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands who found their dream jobs through our platform.
            </p>
            <button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-medium py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              Browse Jobs Now
            </button>
          </div>
        </AnimatedCard>
      </div>
    </section>
  );
};