import React from 'react';
import { CheckCircle, ArrowRight, Briefcase, BookOpen, Users,Star} from 'lucide-react';
import { ButtonMain } from '../ui/Button';
import { AnimatedCard } from '../ui/AnimatedCard';

export const CallToAction = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-green-600 to-green-700 text-white">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-green-500 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-teal-500 rounded-full opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <AnimatedCard delay={200}>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Find Your Dream Job?
              </h2>
              <p className="text-lg text-green-100 mb-8">
                Join thousands of professionals who found their perfect career match through our platform.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  {
                    text: 'Personalized job recommendations based on your skills',
                    icon: <Briefcase className="h-5 w-5 text-green-300" />
                  },
                  {
                    text: 'Free skill assessments to identify your strengths',
                    icon: <BookOpen className="h-5 w-5 text-green-300" />
                  },
                  {
                    text: 'Learning resources to boost your qualifications',
                    icon: <BookOpen className="h-5 w-5 text-green-300" />
                  },
                  {
                    text: 'Direct connections with top employers',
                    icon: <Users className="h-5 w-5 text-green-300" />
                  }
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-300 mr-3 mt-0.5">{feature.icon}</span>
                    <span className="text-gray-100">{feature.text}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <ButtonMain
                  size="lg"
                  className="bg-white text-green-700 hover:bg-gray-100 font-medium shadow-lg hover:shadow-xl transition-all"
                >
                  Sign Up Free
                  <ArrowRight className="h-5 w-5 ml-2" />
                </ButtonMain>
                <ButtonMain
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10 hover:border-white/80"
                >
                  Browse Jobs
                </ButtonMain>
              </div>
            </div>
          </AnimatedCard>

          {/* Right content */}
          <AnimatedCard delay={400}>
            <div className="relative hidden lg:block">
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-green-400 rounded-full opacity-20"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-teal-400 rounded-full opacity-20"></div>
              
              {/* Main image */}
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Happy professional" 
                className="rounded-xl shadow-2xl relative z-10 border-4 border-white/20"
              />
              
              {/* Notification bubbles */}
              <div className="absolute top-8 -right-8 bg-white text-gray-800 p-3 rounded-lg shadow-lg z-20 max-w-xs transform rotate-3 border border-gray-200">
                <div className="flex items-start">
                  <div className="mr-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  </div>
                  <div>
                    <p className="font-bold text-sm mb-1">New Job Match!</p>
                    <p className="text-xs text-gray-600">Senior Developer at TechStart matches your skills</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white text-gray-800 p-3 rounded-lg shadow-lg z-20 max-w-xs transform -rotate-2 border border-gray-200">
                <div className="flex items-center">
                  <div className="mr-3 bg-green-100 p-1.5 rounded-full">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <p className="font-bold text-sm mb-1">Profile Complete</p>
                    <p className="text-xs text-gray-600">Your profile is now visible to employers</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedCard>
        </div>

        {/* Stats section */}
        <AnimatedCard delay={600}>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { number: '15,000+', label: 'Jobs Available', icon: <Briefcase className="h-6 w-6 text-green-300" /> },
              { number: '85%', label: 'Success Rate', icon: <CheckCircle className="h-6 w-6 text-green-300" /> },
              { number: '3.2 months', label: 'Avg. Placement', icon: <BookOpen className="h-6 w-6 text-green-300" /> },
              { number: '4.9/5', label: 'User Rating', icon: <Star className="h-6 w-6 text-green-300" /> },
            ].map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/20 transition-all">
                <div className="flex justify-center mb-2">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-white">{stat.number}</div>
                <div className="text-xs text-green-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </AnimatedCard>
      </div>
    </section>
  );
};