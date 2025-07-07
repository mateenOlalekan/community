'use client'
import React, { useState, useEffect } from 'react';
import { Search, TrendingUp, Target, Clock, ChevronRight, Play, Star, Users, Briefcase, MapPin, Filter } from 'lucide-react';
import { AnimatedCard } from '../ui/AnimatedCard';
import { ButtonMain } from '../ui/Button';
import { GradientText } from '../ui/GradientText';
import { FloatingElements } from '../ui/FloatingElements';
// Main Hero Component
export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [jobType, setJobType] = useState('');

  const heroImages = [
    'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/7641997/pexels-photo-7641997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  ];

  const stats = [
    { icon: <Briefcase className="h-5 w-5" />, number: '75K+', label: 'Active Jobs', color: 'bg-green-100 text-green-600' },
    { icon: <Users className="h-5 w-5" />, number: '150K+', label: 'Job Seekers', color: 'bg-emerald-100 text-emerald-600' },
    { icon: <Star className="h-5 w-5" />, number: '4.9/5', label: 'User Rating', color: 'bg-teal-100 text-teal-600' },
    { icon: <TrendingUp className="h-5 w-5" />, number: '97%', label: 'Success Rate', color: 'bg-green-100 text-green-600' },
  ];

  const popularSearches = ['Software Engineer', 'Digital Marketing', 'Data Analyst', 'Project Manager', 'UI/UX Designer'];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <div className="relative bg-gradient-to-br from-green-50 via-white to-emerald-50 overflow-hidden min-h-min py-10 flex items-center">
      <FloatingElements />
      
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='0.1'%3E%3Ccircle cx='40' cy='40' r='3'/%3E%3Cpath d='M40 0v80M0 40h80' stroke='%2310b981' stroke-width='1' opacity='0.3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-8 h-full">
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-2">
            <AnimatedCard delay={200} direction="left">
              <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-emerald-100 border border-green-200 rounded-full px-4 py-2 shadow-sm">
                <span className="text-lg mr-2">🌟</span>
                <span className="text-sm font-semibold text-green-800">Nigeria's Premier Career Platform</span>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={400} direction="left">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-800">
                Discover Your{' '}
                <GradientText gradient="nature" className="animate-pulse">
                  Dream Career
                </GradientText>
                <span className="text-2xl md:text-4xl ml-2 lg:text-5xl">Journey</span>
              </h1>
            </AnimatedCard>

            <AnimatedCard delay={600} direction="left">
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
                Unlock opportunities that match your unique skills and ambitions. 
                From entry-level positions to executive roles, your perfect career awaits.
              </p>
            </AnimatedCard>
            
            <AnimatedCard delay={800} direction="up">
              <div className="bg-white rounded-2xl p-6 shadow-xl border border-green-100">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search className="h-4 w-4 text-green-500" />
                    </div>
                    <input
                      type="text"
                      placeholder="Job title, skill..."
                      className="block w-full pl-10 pr-3 py-3 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all hover:border-green-300"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MapPin className="h-4 w-4 text-green-500" />
                    </div>
                    <select 
                      className="block w-full pl-10 pr-8 py-3 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all appearance-none bg-white hover:border-green-300"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    >
                      <option value="">Any Location</option>
                      <option value="Lagos">Lagos</option>
                      <option value="Abuja">Abuja</option>
                      <option value="Port Harcourt">Port Harcourt</option>
                      <option value="Ibadan">Ibadan</option>
                      <option value="Kano">Kano</option>
                    </select>
                  </div>
                  
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Filter className="h-4 w-4 text-green-500" />
                    </div>
                    <select 
                      className="block w-full pl-10 pr-8 py-3 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all appearance-none bg-white hover:border-green-300"
                      value={jobType}
                      onChange={(e) => setJobType(e.target.value)}
                    >
                      <option value="">Job Type</option>
                      <option value="Full-time">Full-time</option>
                      <option value="Part-time">Part-time</option>
                      <option value="Contract">Contract</option>
                      <option value="Internship">Internship</option>
                      <option value="Remote">Remote</option>
                    </select>
                  </div>
                </div>
                
                <ButtonMain 
                  className="w-full text-base py-3 mb-4"
                  size="lg"
                >
                  <Search className="h-4 w-4 mr-2" />
                  Find My Dream Job
                </ButtonMain>
                
                <div className="flex flex-wrap gap-2 text-sm text-gray-600">
                  <span className="font-semibold text-gray-800">Trending:</span>
                  {popularSearches.map((term, index) => (
                    <button 
                      key={index}
                      className="bg-green-50 text-green-700 px-3 py-1 rounded-full hover:bg-green-100 transition-colors transform hover:scale-105 text-xs"
                      onClick={() => setSearchTerm(term)}
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            </AnimatedCard>
            


            <AnimatedCard delay={1200} direction="up">
              <div className="flex flex-col sm:flex-row gap-4">
                <ButtonMain
                  variant="primary"
                  size="md"
                  className="flex-1"
                >
                  Get Started Today
                  <ChevronRight className="ml-2 h-4 w-4" />
                </ButtonMain>
                <ButtonMain
                  variant="outline"
                  size="md"
                  className="flex-1"
                >
                  <Play className="mr-2 h-4 w-4" />
                  Success Stories
                </ButtonMain>
              </div>
            </AnimatedCard>
          </div>
          
          {/* Right Content - Image Section */}
          <div className="lg:w-1/2 relative">
            <AnimatedCard delay={600} direction="right">
              <div className="relative">
                {/* Enhanced image carousel */}
                <div className="relative overflow-hidden rounded-2xl shadow-2xl h-80 lg:h-96">
                  {heroImages.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Career success ${index + 1}`}
                      className={`w-full h-full object-cover transition-all duration-1000 ${
                        index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110 absolute inset-0'
                      }`}
                    />
                  ))}
                  
                  {/* Enhanced carousel indicators */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {heroImages.map((_, index) => (
                      <button
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentSlide ? 'bg-green-500 w-6' : 'bg-white/60 hover:bg-white/80'
                        }`}
                        onClick={() => setCurrentSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Enhanced floating success cards */}
                <div className="absolute -bottom-6 -left-6 bg-white text-gray-800 p-4 rounded-xl shadow-xl max-w-44 transform rotate-3 hover:rotate-0 transition-all duration-300 border border-green-100">
                  <div className="flex items-center">
                    <div className="bg-green-100 p-2 rounded-full mr-3">
                      <TrendingUp className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="font-bold text-sm text-gray-800">97% Success</p>
                      <p className="text-xs text-gray-600">Dream jobs found</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-6 -right-6 bg-white text-gray-800 p-4 rounded-xl shadow-xl max-w-44 transform -rotate-3 hover:rotate-0 transition-all duration-300 border border-green-100">
                  <div className="flex items-center">
                    <div className="bg-emerald-100 p-2 rounded-full mr-3">
                      <Target className="h-4 w-4 text-emerald-600" />
                    </div>
                    <div>
                      <p className="font-bold text-sm text-gray-800">Perfect Match!</p>
                      <p className="text-xs text-gray-600">AI-powered</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedCard>
            <AnimatedCard delay={1000} direction="up" className='mt-20'>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="bg-white p-4 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105 border border-green-100">
                      <div className={`${stat.color} p-2 rounded-full mb-2 mx-auto w-fit`}>
                        {stat.icon}
                      </div>
                      <div className="text-lg font-bold text-gray-800">{stat.number}</div>
                      <span className="text-xs text-gray-600 font-medium">{stat.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedCard>
          </div>
        </div>
      </div>

      {/* Enhanced animated wave at bottom */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                className="fill-green-50 opacity-80"></path>
        </svg>
      </div>
    </div>
  );
};