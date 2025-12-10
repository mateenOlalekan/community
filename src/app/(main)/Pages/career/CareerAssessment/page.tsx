import React from 'react';
import { Card, CardBody } from '../../../_components/ui/Card';
import  Button  from '../../../_components/ui/Button';
import { Brain, Target, Clock, Award } from 'lucide-react';

export const CareerAssessment = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Career Assessment</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover your ideal career path through our comprehensive assessment tools
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            {
              icon: <Brain className="h-8 w-8 text-blue-600" />,
              title: "Personality Profile",
              description: "Understand your work style and preferences"
            },
            {
              icon: <Target className="h-8 w-8 text-green-600" />,
              title: "Skills Analysis",
              description: "Evaluate your current skillset"
            },
            {
              icon: <Clock className="h-8 w-8 text-orange-600" />,
              title: "20 Minutes",
              description: "Quick assessment process"
            },
            {
              icon: <Award className="h-8 w-8 text-purple-600" />,
              title: "Detailed Report",
              description: "Get actionable career insights"
            }
          ].map((item, index) => (
            <Card key={index} className="text-center">
              <CardBody>
                <div className="flex justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </CardBody>
            </Card>
          ))}
        </div>

        <Card className="mb-12">
          <CardBody>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4">Start Your Career Assessment</h2>
              <p className="text-gray-600">
                Take our comprehensive assessment to discover your ideal career path and get personalized recommendations
              </p>
            </div>
            <div className="flex justify-center">
              <Button size="lg">Begin Assessment</Button>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};