import React from 'react';
import { Card, CardBody } from '../../../_components/ui/Card';
import { Button } from '../../../_components/ui/Button';
import { MessageSquare, Calendar, Video, Users } from 'lucide-react';

export const CareerCounseling = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Career Counseling</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get expert guidance to navigate your career path and achieve your professional goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            {
              icon: <MessageSquare className="h-8 w-8 text-blue-600" />,
              title: "1-on-1 Sessions",
              description: "Personal guidance from expert counselors"
            },
            {
              icon: <Calendar className="h-8 w-8 text-green-600" />,
              title: "Flexible Scheduling",
              description: "Book sessions at your convenience"
            },
            {
              icon: <Video className="h-8 w-8 text-orange-600" />,
              title: "Virtual Meetings",
              description: "Connect from anywhere"
            },
            {
              icon: <Users className="h-8 w-8 text-purple-600" />,
              title: "Expert Network",
              description: "Access to industry professionals"
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
              <h2 className="text-2xl font-bold mb-4">Schedule Your First Session</h2>
              <p className="text-gray-600">
                Book a consultation with one of our career counselors and take the first step towards your dream career
              </p>
            </div>
            <div className="flex justify-center">
              <Button size="lg">Book Consultation</Button>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};