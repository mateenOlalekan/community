import React from 'react';
import { MapPin, Clock, Briefcase, Star, Building, DollarSign, Eye, Heart, ArrowRight } from 'lucide-react';
import { Card, CardBody, CardFooter } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { ButtonMain } from '../ui/Button';
import { Job } from '../../_types/index';

interface FeaturedJobsProps {
  jobs: Job[];
  title?: string;
  subtitle?: string;
  showViewAll?: boolean;
  maxCards?: number;
}

const companyLogos = [
  'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
  'https://images.pexels.com/photos/7641997/pexels-photo-7641997.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
  'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
  'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
  'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2'
];

const getTimeAgo = (dateString: string) => {
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000); // Fixed: Added missing closing parenthesis
  
  if (diffInSeconds < 60) return 'Just now';
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
  if (diffInSeconds < 2592000) return `${Math.floor(diffInSeconds / 86400)}d ago`;
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
};

export const FeaturedJobs: React.FC<FeaturedJobsProps> = ({ 
  jobs, 
  title = "Discover Your Next Opportunity", 
  subtitle = "Hand-picked jobs from top companies looking for talented individuals like you",
  showViewAll = true,
  maxCards = 8
}) => {
  const displayedJobs = jobs.slice(0, maxCards);

  return (
    <section className="py-8 md:py-12 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-64 h-64 bg-green-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-teal-100 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center bg-green-100 rounded-full px-4 py-1.5 mb-2 md:mb-3">
            <Briefcase className="h-4 w-4 md:h-5 md:w-5 text-green-600 mr-2" />
            <span className="text-sm md:text-base text-green-800 font-medium">Featured Opportunities</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-1.5 md:mb-2">
            {title.includes('Opportunity') ? (
              <>
                {title.split('Opportunity')[0]}
                <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                  Opportunity
                </span>
              </>
            ) : title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {displayedJobs.map((job, index) => (
            <Card 
              key={job.id} 
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white border border-gray-100 overflow-hidden relative"
            >
              {/* Company logo */}
              <div className="absolute top-4 right-4 w-12 h-12 rounded-lg overflow-hidden border border-gray-100">
                <img 
                  src={companyLogos[index % companyLogos.length]} 
                  alt={job.company}
                  className="w-full h-full object-cover"
                />
              </div>

              <CardBody className="relative z-10 pt-6 pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center mr-3 group-hover:rotate-6 transition-transform">
                      <Building className="h-5 w-5 text-white" />
                    </div>
                    <div className="pr-4 flex flex-col">
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-green-600 transition-colors line-clamp-1">
                        {job.title}
                      </h3>
                      <p className="text-sm text-gray-600 font-medium line-clamp-1">{job.company}</p>
                    </div>
                  </div>
                </div>
                


                
                <div className="flex items-center justify-between gap-2 mb-4 text-xs text-gray-600">
                  <div className="flex items-center gap-2"> 
                    {job.urgent && (
                      <Badge variant="error" className=" animate-pulse">Urgent</Badge>
                    )}
                  </div>
                  <div className='flex items-center justify-center gap-2'>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-3 w-3 mr-1" />
                      {job.location.city}
                    </div>
                  
                  <div className="flex items-center">
                    <Briefcase className="h-3 w-3 mr-1" />
                    {job.type.replace('-', ' ')}
                  </div>
                  </div>
                </div>
                
                <p className="text-sm text-gray-700 mb-4 line-clamp-3 leading-relaxed">
                  {job.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-xs font-semibold mb-2 text-gray-800 uppercase tracking-wide">Requirements:</h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {job.requirements.slice(0, 2).map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-start">
                        <span className="text-green-500 mr-1.5 font-bold">•</span>
                        <span className="line-clamp-1">{req}</span>
                      </li>
                    ))}
                    {job.requirements.length > 2 && (
                      <li className="text-green-600 text-xs font-medium">
                        + {job.requirements.length - 2} more
                      </li>
                    )}
                  </ul>
                </div>
                
                {job.salary && (
                  <div className="flex  items-center mb-2 p-2 bg-green-50 rounded-lg">
                    <div className="flex justify-between items-center gap-2">
                      <span className="text-sm font-normal text-gray-700">Salary :</span>
                      <p className="text-sm font-[200] text-green-600">
                        ₦{job.salary.min.toLocaleString()} - ₦{job.salary.max.toLocaleString()}
                        <span className="text-xs text-gray-500 ml-1 font-[200]">/month</span>
                      </p>
                    </div>
                  </div>
                )}
              </CardBody>
              
              <CardFooter className="bg-gray-50 border-t border-gray-100 px-4 py-3">
                <div className="flex justify-between items-center w-full">
                  <div className="flex items-center text-xs text-gray-500">
                    <Clock className="h-3 w-3 mr-1" />
                    {getTimeAgo(job.postedDate)}
                  </div>
                  <div className="flex space-x-2">
                    <ButtonMain 
                      variant="ghost" 
                      size="xs" 
                      className="text-gray-400 hover:text-red-500 p-1.5"
                      aria-label="Save job"
                    >
                      <Heart className="h-4 w-4" />
                    </ButtonMain>
                    <ButtonMain 
                      size="xs" 
                      className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white px-3"
                    >
                      Apply
                      <ArrowRight className="h-3 w-3 ml-1" />
                    </ButtonMain>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-4 flex justify-center w-full">
          {showViewAll && jobs.length > maxCards && (
            <ButtonMain 
              variant="outline" 
              size="md"
              className="bg-white hover:bg-gray-50 border-2 border-green-200 hover:border-green-300 text-green-600 hover:text-green-700 transform hover:scale-105 transition-all duration-300 shadow-md"
            >
              <Briefcase className="h-5 w-5 mr-2" />
              View All {jobs.length}+ Jobs
            </ButtonMain>
          )}
        </div>
      </div>
    </section>
  );
};