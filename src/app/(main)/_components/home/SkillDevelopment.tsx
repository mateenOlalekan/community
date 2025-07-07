'use client'
import React from 'react';
import { BookOpen, Video, FileText, Users, ArrowRight } from 'lucide-react';
import { Card, CardBody } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { ButtonMain } from '../ui/Button';
import { LearningResource } from '../../_types';

interface SkillDevelopmentProps {
  resources: LearningResource[];
}

export const SkillDevelopment: React.FC<SkillDevelopmentProps> = ({ resources }) => {
  const resourceTypeIcons = {
    'article': <FileText className="h-4 w-4" />,
    'video': <Video className="h-4 w-4" />,
    'course': <BookOpen className="h-4 w-4" />,
    'mentor': <Users className="h-4 w-4" />,
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Develop Your Skills</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Access high-quality learning resources to improve your skills and increase your job prospects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-semibold mb-4">Popular Skill Categories</h3>
              <ul className="space-y-3">
                {['Technology', 'Digital Marketing', 'Construction', 'Customer Service', 'Beauty & Wellness'].map((category, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="flex items-center justify-between p-3 rounded-md hover:bg-blue-50 transition"
                    >
                      <span className="text-gray-700">{category}</span>
                      <ArrowRight className="h-4 w-4 text-blue-800" />
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <a href="#" className="text-blue-800 font-medium hover:text-blue-900 flex items-center">
                  View all categories
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="bg-teal-700 text-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Skill Assessment</h3>
              <p className="mb-4">
                Not sure which skills to develop? Take our comprehensive assessment to identify your strengths and areas for improvement.
              </p>
              <ButtonMain variant="accent" fullWidth>Start Assessment</ButtonMain>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-semibold mb-4">Recommended Learning Resources</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {resources.map((resource) => (
                <Card key={resource.id} hoverable className="overflow-hidden h-full flex flex-col">
                  <CardBody className="flex flex-col h-full">
                    <div className="flex justify-between items-start mb-3">
                      <Badge 
                        variant={resource.type === 'video' ? 'accent' : 
                                resource.type === 'course' ? 'primary' : 
                                resource.type === 'mentor' ? 'secondary' : 'outline'}
                        className="flex items-center"
                      >
                        {resourceTypeIcons[resource.type]}
                        <span className="ml-1 capitalize">{resource.type}</span>
                      </Badge>
                      {resource.free ? (
                        <Badge variant="success">Free</Badge>
                      ) : (
                        <Badge variant="outline">Premium</Badge>
                      )}
                    </div>
                    
                    <h4 className="text-lg font-medium mb-2">{resource.title}</h4>
                    
                    <div className="flex flex-wrap gap-2 mb-3 text-sm text-gray-600">
                      <span>Provider: {resource.provider}</span>
                      <span>•</span>
                      <span>
                        {resource.duration < 60 ? 
                          `${resource.duration} mins` : 
                          `${Math.floor(resource.duration / 60)}h ${resource.duration % 60}m`}
                      </span>
                    </div>
                    
                    <div className="mb-3">
                      <Badge 
                        variant="outline" 
                        className={
                          resource.level === 'beginner' ? 'bg-green-50 text-green-800' : 
                          resource.level === 'intermediate' ? 'bg-yellow-50 text-yellow-800' : 
                          'bg-red-50 text-red-800'
                        }
                      >
                        {resource.level}
                      </Badge>
                    </div>
                    
                    <div className="mt-auto pt-4">
                      <ButtonMain variant="outline" fullWidth>
                        View Resource
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </ButtonMain>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
            
            <div className="mt-6 text-center">
              <ButtonMain variant="secondary">Browse All Resources</ButtonMain>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};