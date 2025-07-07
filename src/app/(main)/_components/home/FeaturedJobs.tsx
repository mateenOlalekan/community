import React from 'react';
import { MapPin, Clock, Briefcase, Star, Building, DollarSign, Eye, Heart } from 'lucide-react';
import { Card, CardBody, CardFooter } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { ButtonMain } from '../ui/Button';
import { Job } from '../../_types/index';

interface FeaturedJobsProps {
  jobs: Job[];
}

const companyLogos = [
  'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
  'https://images.pexels.com/photos/7641997/pexels-photo-7641997.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
  'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
  'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
  'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2'
];

export const FeaturedJobs: React.FC<FeaturedJobsProps> = ({ jobs }) => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-teal-100 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 rounded-full px-6 py-2 mb-6">
            <Briefcase className="h-5 w-5 text-blue-600 mr-2" />
            <span className="text-blue-800 font-medium">Featured Opportunities</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Discover Your Next <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Opportunity</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hand-picked jobs from top companies looking for talented individuals like you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job, index) => (
            <Card key={job.id} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white border-0 overflow-hidden relative">
              {/* Company background image */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5 overflow-hidden">
                <img 
                  src={companyLogos[index % companyLogos.length]} 
                  alt="Company"
                  className="w-full h-full object-cover"
                />
              </div>

              <CardBody className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <Building className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{job.title}</h3>
                      <p className="text-gray-600 font-medium">{job.company}</p>
                    </div>
                  </div>
                  {job.urgent && (
                    <Badge variant="error" className="animate-pulse">Urgent</Badge>
                  )}
                </div>
                
                <div className="flex flex-wrap gap-3 mb-4 text-sm text-gray-600">
                  <span className="flex items-center bg-gray-50 px-3 py-1 rounded-full">
                    <MapPin className="h-4 w-4 mr-1" />
                    {job.location.city}, {job.location.state}
                  </span>
                  <span className="flex items-center bg-gray-50 px-3 py-1 rounded-full">
                    <Briefcase className="h-4 w-4 mr-1" />
                    {job.type}
                  </span>
                  {job.deadline && (
                    <span className="flex items-center bg-orange-50 text-orange-600 px-3 py-1 rounded-full">
                      <Clock className="h-4 w-4 mr-1" />
                      {new Date(job.deadline).toLocaleDateString()}
                    </span>
                  )}
                </div>
                
                <p className="text-gray-700 mb-4 line-clamp-3 leading-relaxed">{job.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2 text-gray-800">Key Requirements:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {job.requirements.slice(0, 3).map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-start">
                        <span className="text-blue-600 mr-2 font-bold">•</span>
                        <span>{req}</span>
                      </li>
                    ))}
                    {job.requirements.length > 3 && (
                      <li className="text-blue-600 text-xs font-medium">+ {job.requirements.length - 3} more requirements</li>
                    )}
                  </ul>
                </div>
                
                {job.salary && (
                  <div className="flex items-center mb-4 p-3 bg-green-50 rounded-lg">
                    <DollarSign className="h-5 w-5 text-green-600 mr-2" />
                    <div>
                      <span className="text-sm font-medium text-gray-700">Salary Range:</span>
                      <p className="text-lg font-bold text-green-600">
                        ₦{job.salary.min.toLocaleString()} - ₦{job.salary.max.toLocaleString()}
                      </p>
                      <span className="text-xs text-gray-500">per month</span>
                    </div>
                  </div>
                )}
              </CardBody>
              
              <CardFooter className="bg-gradient-to-r from-gray-50 to-blue-50 border-t-0">
                <div className="flex justify-between items-center w-full">
                  <div className="flex items-center text-xs text-gray-500">
                    <Clock className="h-3 w-3 mr-1" />
                    Posted {new Date(job.postedDate).toLocaleDateString()}
                  </div>
                  <div className="flex space-x-2">
                    <ButtonMain variant="ghost" size="sm" className="text-gray-500 hover:text-red-500">
                      <Heart className="h-4 w-4" />
                    </ButtonMain>
                    <ButtonMain variant="outline" size="sm" className="hover:shadow-md transition-all">
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </ButtonMain>
                    <ButtonMain size="sm" className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 transform hover:scale-105 transition-all">
                      Apply Now
                    </ButtonMain>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <ButtonMain 
            variant="outline" 
            size="lg"
            className="bg-white hover:bg-gray-50 border-2 border-blue-200 hover:border-blue-300 text-blue-600 hover:text-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            <Briefcase className="h-5 w-5 mr-2" />
            View All {jobs.length * 10}+ Jobs
          </ButtonMain>
        </div>
      </div>
    </section>
  );
};