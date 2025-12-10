
'use client'
import React, { useState } from 'react';
import { Card, CardBody } from '../../_components/ui/Card';
import  Button  from '../../_components/ui/Button';
import { Badge } from '../../_components/ui/Badge';
import { Avatar } from '../../_components/ui/Avatar';
import { Quote, TrendingUp, Clock, MapPin, Briefcase, Star } from 'lucide-react';

interface SuccessStory {
  id: string;
  name: string;
  avatar?: string;
  previousRole: string;
  currentRole: string;
  company: string;
  location: string;
  category: 'high-school' | 'graduate' | 'career-changer' | 'experimenter';
  timeToSuccess: string;
  salaryIncrease?: string;
  story: string;
  quote: string;
  skills: string[];
  featured: boolean;
}

const successStories: SuccessStory[] = [
  {
    id: '1',
    name: 'Emeka Johnson',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
    previousRole: 'Unemployed (High School Dropout)',
    currentRole: 'Certified Electrician',
    company: 'PowerTech Solutions',
    location: 'Lagos, Nigeria',
    category: 'high-school',
    timeToSuccess: '8 months',
    salaryIncrease: '₦0 to ₦180,000/month',
    story: 'After dropping out of high school due to financial constraints, I struggled to find stable work. Career Connect helped me discover my aptitude for electrical work through their skills assessment. They connected me with a local apprenticeship program, and I completed my certification in 8 months. Now I have a stable career and earn more than I ever thought possible.',
    quote: 'Career Connect gave me hope when I had none. They showed me that my lack of formal education didn\'t define my potential.',
    skills: ['Electrical Installation', 'Circuit Troubleshooting', 'Safety Protocols', 'Customer Service'],
    featured: true
  },
  {
    id: '2',
    name: 'Amina Bello',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
    previousRole: 'Marketing Graduate (Unemployed)',
    currentRole: 'Digital Marketing Specialist',
    company: 'Global Media Agency',
    location: 'Abuja, Nigeria',
    category: 'graduate',
    timeToSuccess: '3 weeks',
    salaryIncrease: '₦0 to ₦220,000/month',
    story: 'I graduated with a marketing degree but struggled to find relevant work for over a year. The career assessment on Career Connect helped me identify digital marketing as my ideal path, highlighting skills I didn\'t even know I had. Within two weeks of completing their digital marketing course, I had multiple job offers!',
    quote: 'The platform didn\'t just find me a job; it helped me discover my true calling in digital marketing.',
    skills: ['SEO', 'Google Ads', 'Social Media Marketing', 'Content Creation', 'Analytics'],
    featured: true
  },
  {
    id: '3',
    name: 'David Okafor',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
    previousRole: 'Bank Teller',
    currentRole: 'Full-Stack Developer',
    company: 'TechStart Inc.',
    location: 'Lagos, Nigeria',
    category: 'career-changer',
    timeToSuccess: '6 months',
    salaryIncrease: '₦120,000 to ₦350,000/month',
    story: 'After 10 years as a bank teller, I felt stuck and unfulfilled. Career Connect\'s skills assessment revealed my analytical strengths and recommended web development. Their learning platform and mentorship program helped me transition from banking to tech in just 6 months. The career counseling sessions were invaluable in planning my transition.',
    quote: 'At 35, I thought it was too late to change careers. Career Connect proved me wrong and gave me the roadmap to success.',
    skills: ['JavaScript', 'React', 'Node.js', 'Python', 'Database Management'],
    featured: true
  },
  {
    id: '4',
    name: 'Fatima Abdullahi',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
    previousRole: 'Part-time Teacher',
    currentRole: 'Freelance Graphic Designer',
    company: 'Self-Employed',
    location: 'Kano, Nigeria',
    category: 'experimenter',
    timeToSuccess: '4 months',
    salaryIncrease: '₦80,000 to ₦200,000/month',
    story: 'I was teaching part-time but wanted to explore my creative side. Career Connect\'s skills assessment identified my design aptitude, and their freelancing resources helped me build a client base. I started as a side hustle and now it\'s my full-time income. The platform\'s community forum connected me with other freelancers who became mentors.',
    quote: 'Career Connect helped me turn my passion into profit. I never imagined I could make a living from my creativity.',
    skills: ['Adobe Creative Suite', 'Logo Design', 'Brand Identity', 'Client Management', 'Marketing'],
    featured: false
  },
  {
    id: '5',
    name: 'Samuel Adebayo',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
    previousRole: 'Motorcycle Taxi Driver',
    currentRole: 'Logistics Coordinator',
    company: 'Swift Delivery Services',
    location: 'Ibadan, Nigeria',
    category: 'high-school',
    timeToSuccess: '2 months',
    salaryIncrease: '₦60,000 to ₦140,000/month',
    story: 'I was driving a motorcycle taxi to make ends meet when I discovered Career Connect. Their assessment showed I had strong organizational and route-planning skills. They helped me get certified in logistics management and connected me with Swift Delivery. Now I coordinate delivery routes for a team of 20 drivers.',
    quote: 'Career Connect saw potential in me that I didn\'t see in myself. They turned my street knowledge into a professional skill.',
    skills: ['Route Planning', 'Team Management', 'Inventory Control', 'Customer Service', 'Problem Solving'],
    featured: false
  },
  {
    id: '6',
    name: 'Grace Okoro',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
    previousRole: 'Accountant',
    currentRole: 'Data Analyst',
    company: 'FinTech Solutions Ltd',
    location: 'Lagos, Nigeria',
    category: 'career-changer',
    timeToSuccess: '5 months',
    salaryIncrease: '₦180,000 to ₦280,000/month',
    story: 'I was an accountant for 5 years but felt my career had plateaued. Career Connect\'s assessment revealed my analytical strengths and love for data patterns. Their data science course and job matching algorithm connected me with FinTech Solutions. The transition was smooth thanks to their career counseling support.',
    quote: 'Career Connect helped me leverage my existing skills while learning new ones. The transition felt natural and exciting.',
    skills: ['Data Analysis', 'Python', 'SQL', 'Excel', 'Statistical Modeling'],
    featured: false
  }
];

export const SuccessStories  = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showAll, setShowAll] = useState(false);

  const categories = [
    { id: 'all', name: 'All Stories', description: 'View all success stories' },
    { id: 'high-school', name: 'High School Dropouts', description: 'From no formal education to stable careers' },
    { id: 'graduate', name: 'University Graduates', description: 'From unemployment to dream jobs' },
    { id: 'career-changer', name: 'Career Changers', description: 'Successful career transitions' },
    { id: 'experimenter', name: 'Skill Experimenters', description: 'Turning passions into professions' }
  ];

  const filteredStories = selectedCategory === 'all' 
    ? successStories 
    : successStories.filter(story => story.category === selectedCategory);

  const displayedStories = showAll ? filteredStories : filteredStories.slice(0, 6);
  const featuredStories = successStories.filter(story => story.featured);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'high-school': return 'bg-orange-100 text-orange-800';
      case 'graduate': return 'bg-blue-100 text-blue-800';
      case 'career-changer': return 'bg-teal-100 text-teal-800';
      case 'experimenter': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryName = (category: string) => {
    const cat = categories.find(c => c.id === category);
    return cat ? cat.name : category;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Real people, real transformations. Discover how Career Connect has helped thousands of Nigerians find their ideal career paths.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {[
            { icon: <TrendingUp className="h-8 w-8 text-green-600" />, number: "15,000+", label: "Success Stories" },
            { icon: <Clock className="h-8 w-8 text-blue-600" />, number: "3.2 months", label: "Average Time to Success" },
            { icon: <Briefcase className="h-8 w-8 text-orange-600" />, number: "85%", label: "Salary Increase Rate" },
            { icon: <Star className="h-8 w-8 text-purple-600" />, number: "4.8/5", label: "User Satisfaction" }
          ].map((stat, index) => (
            <Card key={index} className="text-center">
              <CardBody>
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </CardBody>
            </Card>
          ))}
        </div>

        {/* Featured Stories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Success Stories</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredStories.map((story) => (
              <Card key={story.id} className="h-full flex flex-col bg-gradient-to-br from-white to-gray-50 border-2 border-blue-100">
                <CardBody className="flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <Avatar src={story.avatar} name={story.name} size="lg" />
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">{story.name}</h3>
                      <p className="text-sm text-gray-600">{story.currentRole}</p>
                      <p className="text-sm text-gray-500">{story.company}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <Quote className="h-6 w-6 text-blue-400 mb-2" />
                    <p className="text-gray-700 italic">"{story.quote}"</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <span className="font-medium text-gray-700">Time to Success:</span>
                      <p className="text-gray-600">{story.timeToSuccess}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Salary Change:</span>
                      <p className="text-green-600 font-medium">{story.salaryIncrease}</p>
                    </div>
                  </div>

                  <div className="mt-auto">
                    <Badge variant="primary" className={getCategoryColor(story.category)}>
                      {getCategoryName(story.category)}
                    </Badge>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`p-4 rounded-lg text-left transition-all ${
                  selectedCategory === category.id
                    ? 'bg-blue-100 border-2 border-blue-500'
                    : 'bg-white border border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
                <p className="text-sm text-gray-600">{category.description}</p>
              </button>
            ))}
          </div>
        </div>

        {/* All Stories */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {selectedCategory === 'all' ? 'All Success Stories' : getCategoryName(selectedCategory)}
            </h2>
            <p className="text-gray-600">{filteredStories.length} stories found</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {displayedStories.map((story) => (
              <Card key={story.id} hoverable className="h-full flex flex-col">
                <CardBody className="flex flex-col h-full">
                  <div className="flex items-start space-x-4 mb-4">
                    <Avatar src={story.avatar} name={story.name} size="md" />
                    <div className="flex-grow">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{story.name}</h3>
                          <p className="text-sm text-gray-600">{story.currentRole} at {story.company}</p>
                          <div className="flex items-center text-sm text-gray-500 mt-1">
                            <MapPin className="h-4 w-4 mr-1" />
                            {story.location}
                          </div>
                        </div>
                        <Badge variant="outline" className={getCategoryColor(story.category)}>
                          {getCategoryName(story.category)}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                      <div>
                        <span className="font-medium text-gray-700">Previous Role:</span>
                        <p className="text-gray-600">{story.previousRole}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Time to Success:</span>
                        <p className="text-gray-600">{story.timeToSuccess}</p>
                      </div>
                    </div>
                    {story.salaryIncrease && (
                      <div className="text-sm">
                        <span className="font-medium text-gray-700">Salary Change:</span>
                        <p className="text-green-600 font-medium">{story.salaryIncrease}</p>
                      </div>
                    )}
                  </div>

                  <p className="text-gray-700 mb-4 flex-grow">{story.story}</p>

                  <div className="mb-4">
                    <h4 className="font-medium text-gray-700 mb-2">Skills Developed:</h4>
                    <div className="flex flex-wrap gap-2">
                      {story.skills.slice(0, 4).map((skill, index) => (
                        <Badge key={index} variant="outline" size="sm">{skill}</Badge>
                      ))}
                      {story.skills.length > 4 && (
                        <Badge variant="outline" size="sm">+{story.skills.length - 4} more</Badge>
                      )}
                    </div>
                  </div>

                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <div className="flex items-start">
                      <Quote className="h-4 w-4 text-blue-400 mr-2 flex-shrink-0 mt-1" />
                      <p className="text-sm text-gray-600 italic">"{story.quote}"</p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>

          {!showAll && filteredStories.length > 6 && (
            <div className="text-center mt-8">
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => setShowAll(true)}
              >
                Load More Stories ({filteredStories.length - 6} remaining)
              </Button>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <Card className="bg-gradient-to-r from-blue-50 to-teal-50">
          <CardBody>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Write Your Success Story?</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Join thousands of Nigerians who have transformed their careers with Career Connect. Your success story could be next.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                <Button size="lg">Start Your Journey</Button>
                <Button variant="outline" size="lg">Take Career Assessment</Button>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};