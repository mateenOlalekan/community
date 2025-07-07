'use client'
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone, Briefcase } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-green-900 via-green-900 to-green-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-32 h-32 bg-green-500 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-green-500 rounded-full opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-green-500 to-green-500 p-3 rounded-xl mr-3">
                <Briefcase className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-green-400 bg-clip-text text-transparent">
                Career Connect
              </h3>
            </div>
            <p className="text-white mb-6 leading-relaxed">
              Bridging the gap between job seekers and employment opportunities through intelligent matching and skill development across Nigeria.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-white">
                <MapPin className="h-4 w-4 mr-2 text-white" />
                <span className="text-sm">Lagos, Nigeria</span>
              </div>
              <div className="flex items-center text-white">
                <Phone className="h-4 w-4 mr-2 text-white" />
                <span className="text-sm">+234 800 CAREER</span>
              </div>
              <div className="flex items-center text-white">
                <Mail className="h-4 w-4 mr-2 text-white" />
                <a href="mailto:info@careerconnect.ng" className="text-sm hover:text-white transition-colors">
                  info@careerconnect.ng
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {[
                { icon: <Facebook size={20} />, href: '#', color: 'hover:text-white' },
                { icon: <Twitter size={20} />, href: '#', color: 'hover:text-white' },
                { icon: <Instagram size={20} />, href: '#', color: 'hover:text-pink-400' },
                { icon: <Linkedin size={20} />, href: '#', color: 'hover:text-white' },
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  className={`text-white ${social.color} transition-all duration-300 p-2 rounded-lg hover:bg-white/10 transform hover:scale-110`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* For Job Seekers */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">For Job Seekers</h3>
            <ul className="space-y-3">
              {[
                'Browse Jobs',
                'Career Assessment', 
                'Skill Development',
                'Career Counseling',
                'Community Forum',
                'Success Stories',
                'Resume Builder',
                'Interview Prep'
              ].map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-white hover:text-white transition-colors duration-300 text-sm flex items-center group"
                  >
                    <span className="w-1 h-1 bg-green-400 rounded-full mr-3 group-hover:w-2 transition-all duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* For Employers */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">For Employers</h3>
            <ul className="space-y-3">
              {[
                'Post a Job',
                'Find Candidates',
                'Employer Resources',
                'Pricing Plans',
                'Applicant Tracking',
                'Company Profiles',
                'Hiring Analytics',
                'Bulk Hiring'
              ].map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-white hover:text-white transition-colors duration-300 text-sm flex items-center group"
                  >
                    <span className="w-1 h-1 bg-green-400 rounded-full mr-3 group-hover:w-2 transition-all duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter & Support */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-green-400">Stay Connected</h3>
            
            {/* Newsletter */}
            <div className="mb-3">
              <h4 className="text-sm font-semibold mb-3 text-white">Subscribe to our newsletter</h4>
              <div className="flex flex-col space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-3 text-green-800 bg-white/90 backdrop-blur-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
                />
                <button className="bg-gradient-to-r from-green-600 to-green-600 hover:from-green-700 hover:to-green-700 px-4 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold mb-3 text-white">Support</h4>
              <ul className="space-y-2">
                {[
                  'Help Center',
                  'Contact Support',
                  'FAQ',
                  'Live Chat'
                ].map((item, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-white hover:text-white transition-colors duration-300 text-sm flex items-center group"
                    >
                      <span className="w-1 h-1 bg-orange-400 rounded-full mr-3 group-hover:w-2 transition-all duration-300"></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-green-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-white text-sm">
                &copy; {new Date().getFullYear()} Career Connect Nigeria. All rights reserved.
              </p>
              <p className="text-green-500 text-xs mt-1">
                Empowering careers across Nigeria since 2024
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              {[
                'Privacy Policy',
                'Terms of Service', 
                'Cookie Policy',
                'Accessibility',
                'Sitemap'
              ].map((item, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="text-white hover:text-white transition-colors duration-300 hover:underline"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          

        </div>
      </div>
    </footer>
  );
};