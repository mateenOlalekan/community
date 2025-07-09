'use client'
import { useState } from 'react';
import { TrendingUp, Award, Clock, DollarSign } from 'lucide-react';
import { Card, CardBody } from '../ui/Card';
import { ButtonMain } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { CareerPath } from '../../_types/index';

interface CareerPathwaysProps {
  careerPaths: CareerPath[];
}

export const CareerPathways: React.FC<CareerPathwaysProps> = ({ careerPaths }) => {
  const [selectedPath, setSelectedPath] = useState<CareerPath | null>(null);

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore Career Pathways</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover potential career paths based on your skills and interests, with clear roadmaps to achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold mb-4">Popular Career Paths</h3>
            <div className="space-y-3 grid grid-cols-2">
              {careerPaths.map((path) => (
                <button
                  key={path.id}
                  className={`w-full text-left p-4 rounded-lg transition-all ${
                    selectedPath?.id === path.id 
                      ? 'bg-blue-100 border-l-4 border-blue-800' 
                      : 'bg-white hover:bg-gray-50 border border-gray-200'
                  }`}
                  onClick={() => setSelectedPath(path)}
                >
                  <div className="flex justify-between items-center">
                    <h4 className="font-medium">{path.title}</h4>
                    <Badge 
                      variant={
                        path.demandLevel === 'high' ? 'success' : 
                        path.demandLevel === 'medium' ? 'warning' : 
                        'error'
                      }
                      size="sm"
                    >
                      {path.demandLevel}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 mt-1 line-clamp-1">{path.description}</p>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            {selectedPath ? (
              <Card className="h-full shadow-lg">
                <CardBody>
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedPath.title}</h3>
                    <p className="text-gray-600">{selectedPath.description}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-blue-50 rounded-lg p-4 flex items-center">
                      <div className="bg-blue-100 p-2 rounded-full mr-3">
                        <DollarSign className="h-5 w-5 text-blue-800" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Average Salary</p>
                        <p className="font-semibold">{selectedPath.averageSalary.toLocaleString()} NGN/month</p>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 rounded-lg p-4 flex items-center">
                      <div className="bg-green-100 p-2 rounded-full mr-3">
                        <TrendingUp className="h-5 w-5 text-green-800" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Growth Rate</p>
                        <p className="font-semibold">{selectedPath.growthRate}% per year</p>
                      </div>
                    </div>
                    
                    <div className="bg-orange-50 rounded-lg p-4 flex items-center">
                      <div className="bg-orange-100 p-2 rounded-full mr-3">
                        <Award className="h-5 w-5 text-orange-800" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Education Required</p>
                        <p className="font-semibold">{selectedPath.educationRequired}</p>
                      </div>
                    </div>
                    
                    <div className="bg-purple-50 rounded-lg p-4 flex items-center">
                      <div className="bg-purple-100 p-2 rounded-full mr-3">
                        <Clock className="h-5 w-5 text-purple-800" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Time to Achieve</p>
                        <p className="font-semibold">
                          {selectedPath.timeToAchieve < 12 
                            ? `${selectedPath.timeToAchieve} months` 
                            : `${Math.floor(selectedPath.timeToAchieve / 12)} year${Math.floor(selectedPath.timeToAchieve / 12) > 1 ? 's' : ''}`}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3">Required Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedPath.skillsRequired.map((skill) => (
                        <Badge 
                          key={skill.id} 
                          variant="outline"
                          className="px-3 py-1"
                        >
                          {skill.name}
                          <span className="ml-1 text-xs opacity-70">({skill.proficiency})</span>
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                    <ButtonMain size="lg">Start This Path</ButtonMain>
                    <ButtonMain variant="outline" size="lg">Find Related Jobs</ButtonMain>
                  </div>
                </CardBody>
              </Card>
            ) : (
              <div className="flex flex-col items-center justify-center border-2 border-gray-300 h-full bg-g rounded-lg p-8 text-center">
                <div className="mb-4">
                  <Award className="h-16 w-16 text-gray-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">Select a Career Path</h3>
                <p className="text-gray-500 max-w-md">
                  Choose a career path from the list to see detailed information about requirements, salary, and growth potential.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};