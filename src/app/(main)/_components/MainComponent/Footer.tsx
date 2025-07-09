'use client'
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone, Briefcase } from 'lucide-react';
import { ButtonMain } from '../ui/Button';
import { AnimatedCard } from '../ui/AnimatedCard';

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-green-800 to-green-900 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-green-500 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-teal-500 rounded-full opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <AnimatedCard delay={200}>
            <div className="md:col-span-1">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-green-500 to-teal-500 p-2 rounded-lg mr-3">
                  <Briefcase className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-green-300 to-teal-400 bg-clip-text text-transparent">
                  CareerConnect
                </h3>
              </div>
              <p className="text-green-100 mb-6 leading-relaxed">
                Connecting talent with opportunity across Nigeria through intelligent job matching and career development.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-green-100">
                  <MapPin className="h-4 w-4 mr-2 text-green-300" />
                  <span className="text-sm">Lagos, Abuja, Port Harcourt</span>
                </div>
                <div className="flex items-center text-green-100">
                  <Phone className="h-4 w-4 mr-2 text-green-300" />
                  <span className="text-sm">+234 800 555 1234</span>
                </div>
                <div className="flex items-center text-green-100">
                  <Mail className="h-4 w-4 mr-2 text-green-300" />
                  <a href="mailto:contact@careerconnect.ng" className="text-sm hover:text-white transition-colors">
                    contact@careerconnect.ng
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-3">
                {[
                  { icon: <Facebook size={18} />, href: '#', label: 'Facebook' },
                  { icon: <Twitter size={18} />, href: '#', label: 'Twitter' },
                  { icon: <Instagram size={18} />, href: '#', label: 'Instagram' },
                  { icon: <Linkedin size={18} />, href: '#', label: 'LinkedIn' },
                ].map((social, index) => (
                  <a 
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="text-green-100 hover:text-white hover:bg-white/10 p-2 rounded-full transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </AnimatedCard>
          
          {/* For Job Seekers */}
          <AnimatedCard delay={300}>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Job Seekers</h3>
              <ul className="space-y-3">
                {[
                  'Browse Jobs',
                  'Career Assessment', 
                  'Skill Development',
                  'Resume Builder',
                  'Interview Prep',
                  'Salary Calculator',
                  'Job Alerts',
                  'Success Stories'
                ].map((item, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-green-100 hover:text-white transition-colors duration-300 text-sm flex items-center group"
                    >
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-3 group-hover:bg-teal-400 transition-all duration-300"></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedCard>
          
          {/* For Employers */}
          <AnimatedCard delay={400}>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Employers</h3>
              <ul className="space-y-3">
                {[
                  'Post Jobs',
                  'Browse Candidates',
                  'Recruitment Solutions',
                  'Employer Dashboard',
                  'Bulk Hiring',
                  'Company Profiles',
                  'Pricing Plans',
                  'Hiring Insights'
                ].map((item, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-green-100 hover:text-white transition-colors duration-300 text-sm flex items-center group"
                    >
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-3 group-hover:bg-teal-400 transition-all duration-300"></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedCard>
          
          {/* Newsletter */}
          <AnimatedCard delay={500}>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Stay Updated</h3>
              
              <div className="mb-6">
                <p className="text-green-100 text-sm mb-4">
                  Get the latest job opportunities and career tips delivered to your inbox
                </p>
                <div className="flex flex-col space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="px-4 py-2.5 text-gray-800 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm transition-all duration-300"
                  />
                  <ButtonMain 
                    className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700"
                    size="sm"
                  >
                    Subscribe
                  </ButtonMain>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold mb-3 text-white">Support</h4>
                <ul className="space-y-2">
                  {[
                    'Help Center',
                    'Contact Us',
                    'FAQs',
                    'Community'
                  ].map((item, index) => (
                    <li key={index}>
                      <a 
                        href="#" 
                        className="text-green-100 hover:text-white transition-colors duration-300 text-sm flex items-center group"
                      >
                        <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 group-hover:bg-orange-500 transition-all duration-300"></span>
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedCard>
        </div>
        
        {/* Bottom Section */}
        <AnimatedCard delay={600}>
          <div className="border-t border-green-700 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0 text-center md:text-left">
                <p className="text-green-100 text-sm">
                  &copy; {new Date().getFullYear()} CareerConnect. All rights reserved.
                </p>
                <p className="text-green-400 text-xs mt-1">
                  Empowering Nigerian professionals since 2024
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm">
                {[
                  'Privacy Policy',
                  'Terms of Service', 
                  'Cookie Policy',
                  'Accessibility'
                ].map((item, index) => (
                  <a 
                    key={index}
                    href="#" 
                    className="text-green-100 hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </AnimatedCard>
      </div>
    </footer>
  );
};