import React from 'react';
import { CheckCircle } from 'lucide-react';
import { ButtonMain } from '../ui/Button';

export const CallToAction: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Career Journey?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Join Career Connect today and get access to personalized job matches, skill development resources, and career guidance.
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                'Personalized job recommendations based on your skills',
                'Free skill assessments to identify your strengths',
                'Learning resources to help you grow professionally',
                'Community support from peers and mentors',
                'Real-time notifications for relevant opportunities'
              ].map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-400 mr-2 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <ButtonMain
                variant="accent"
                size="lg"
                className="font-bold"
              >
                Create Free Account
              </ButtonMain>
              <ButtonMain
                variant="outline"
                size="lg"
                className="bg-transparent border-white text-white hover:bg-white hover:text-blue-900"
              >
                Learn More
              </ButtonMain>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-500 rounded-full opacity-20"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-teal-500 rounded-full opacity-20"></div>
            
            <img 
              src="https://images.pexels.com/photos/7641997/pexels-photo-7641997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Career development" 
              className="rounded-lg shadow-2xl relative z-10 border-4 border-white"
            />
            
            <div className="absolute top-6 -right-8 bg-white text-gray-800 p-4 rounded-lg shadow-lg z-20 max-w-xs transform rotate-3">
              <div className="flex items-start">
                <div className="mr-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <p className="font-bold text-sm">Job Match Found!</p>
                  <p className="text-xs text-gray-600">Web Developer position at TechCorp just matched your profile</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white text-gray-800 p-4 rounded-lg shadow-lg z-20 max-w-xs transform -rotate-2">
              <div className="flex items-center">
                <div className="mr-3 bg-blue-100 p-2 rounded-full">
                  <svg className="h-6 w-6 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-sm">Skills Assessment Complete</p>
                  <p className="text-xs text-gray-600">You have 8 highly marketable skills!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};