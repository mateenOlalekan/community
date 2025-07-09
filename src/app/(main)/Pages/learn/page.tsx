'use client'
import React from 'react';
import { Card, CardBody } from '../../_components/ui/Card';
import { ButtonMain } from '../../_components/ui/Button';
import { BookOpen, Video, Users, Award } from 'lucide-react';

export const SkillDevelopment = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Skill Development</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Enhance your professional capabilities with our comprehensive learning resources
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            {
              icon: <BookOpen className="h-8 w-8 text-blue-600" />,
              title: "Online Courses",
              description: "Self-paced learning modules"
            },
            {
              icon: <Video className="h-8 w-8 text-green-600" />,
              title: "Video Tutorials",
              description: "Expert-led video content"
            },
            {
              icon: <Users className="h-8 w-8 text-orange-600" />,
              title: "Peer Learning",
              description: "Collaborative learning groups"
            },
            {
              icon: <Award className="h-8 w-8 text-purple-600" />,
              title: "Certifications",
              description: "Industry-recognized credentials"
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
              <h2 className="text-2xl font-bold mb-4">Start Learning Today</h2>
              <p className="text-gray-600">
                Access our library of courses and start developing the skills you need for your career
              </p>
            </div>
            <div className="flex justify-center">
              <ButtonMain size="lg">Browse Courses</ButtonMain>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};