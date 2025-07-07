'use client'
import React from 'react';
import { Quote } from 'lucide-react';
import { Card, CardBody } from '../ui/Card';
import { Avatar } from '../ui/Avatar';

interface Testimonial {
  id: string;
  name: string;
  avatar?: string;
  role: string;
  company?: string;
  text: string;
  category: 'high-school' | 'graduate' | 'career-changer' | 'experimenter';
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Emeka Johnson',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
    role: 'Electrician',
    company: 'PowerTech Solutions',
    text: 'I never finished high school, but Career Connect helped me find an apprenticeship in electrical work. Now I have a stable career and earn more than I ever thought possible.',
    category: 'high-school',
  },
  {
    id: '2',
    name: 'Amina Bello',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
    role: 'Digital Marketing Specialist',
    company: 'Global Media Agency',
    text: 'After graduating with a marketing degree, I struggled to find relevant work. The career assessment on this platform helped me identify digital marketing as my ideal path. Within two weeks, I had multiple job offers!',
    category: 'graduate',
  },
  {
    id: '3',
    name: 'David Okafor',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
    role: 'Web Developer',
    company: 'TechStart Inc.',
    text: 'I was a bank teller for 10 years but wanted a change. Career Connect helped me identify my transferable skills and recommended web development. Their learning resources got me job-ready in just 6 months!',
    category: 'career-changer',
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Hear from people who transformed their careers through Career Connect
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.id} 
              className="bg-gray-800 border-none h-full flex flex-col"
              hoverable
            >
              <CardBody className="flex flex-col h-full">
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-blue-400 opacity-50" />
                </div>
                
                <p className="text-gray-300 mb-6 flex-grow">"{testimonial.text}"</p>
                
                <div className="flex items-center mt-auto pt-4 border-t border-gray-700">
                  <Avatar 
                    src={testimonial.avatar} 
                    name={testimonial.name} 
                    size="md"
                  />
                  <div className="ml-3">
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">
                      {testimonial.role}{testimonial.company ? ` at ${testimonial.company}` : ''}
                    </p>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-300 mb-4">Ready to write your own success story?</p>
          <button className="bg-white text-gray-900 hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition-colors">
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
};