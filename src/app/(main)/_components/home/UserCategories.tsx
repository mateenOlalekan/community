'use client'
import React from 'react';
import { GraduationCap, Briefcase, Shuffle, Award, ArrowRight, Users, TrendingUp } from 'lucide-react';
import { Card, CardBody } from '../ui/Card';
import { AnimatedCard } from '../ui/AnimatedCard';
import { GradientText } from '../ui/GradientText';

const categories = [
  {
    id: 'high-school',
    title: 'High School Dropouts / Early School Leavers',
    description: 'Find skill-based opportunities, vocational training, and apprenticeships to build your career.',
    icon: <Award className="h-10 w-10" />,
    features: ['Trade skills', 'Apprenticeships', 'Entry-level positions', 'Skill development'],
    ageRange: '16-25 years',
    color: 'from-green-400 to-green-500',
    bgColor: 'bg-gradient-to-br from-green-50 to-green-50',
    borderColor: 'border-green-200',
    successRate: '89%',
    avgSalary: '₦120k',
    image: 'https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=400',
    backgroundImage: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'graduate',
    title: 'University Graduates',
    description: 'Discover professional career paths aligned with your degree and aspirations.',
    icon: <GraduationCap className="h-10 w-10" />,
    features: ['White-collar jobs', 'Professional development', 'Industry connections', 'Graduate programs'],
    ageRange: '21-30 years',
    color: 'from-green-400 to-green-600',
    bgColor: 'bg-gradient-to-br from-green-50 to-green-50',
    borderColor: 'border-green-200',
    successRate: '94%',
    avgSalary: '₦250k',
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400',
    backgroundImage: 'https://images.pexels.com/photos/7641997/pexels-photo-7641997.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'career-changer',
    title: 'Career Change Seekers',
    description: 'Identify transferable skills and find retraining programs to pivot to a new career.',
    icon: <Shuffle className="h-10 w-10" />,
    features: ['Career pivoting', 'Skill assessment', 'Financial planning', 'Transition support'],
    ageRange: '25-45 years',
    color: 'from-green-400 to-green-500',
    bgColor: 'bg-gradient-to-br from-green-50 to-green-50',
    borderColor: 'border-green-200',
    successRate: '87%',
    avgSalary: '₦200k',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
    backgroundImage: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'experimenter',
    title: 'Skill Experimenters / New Opportunity Seekers',
    description: 'Explore new fields, find part-time opportunities, and monetize your passions.',
    icon: <Briefcase className="h-10 w-10" />,
    features: ['Side hustles', 'Creative pursuits', 'Hobby monetization', 'Flexible work'],
    ageRange: '18-50 years',
    color: 'from-green-400 to-green-500',
    bgColor: 'bg-gradient-to-br from-green-50 to-green-50',
    borderColor: 'border-green-200',
    successRate: '91%',
    avgSalary: '₦150k',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
    backgroundImage: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export const UserCategories = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-200 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-green-200 rounded-full opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-200 rounded-full opacity-5 animate-spin" style={{ animationDuration: '20s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8">

          <AnimatedCard delay={400}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <GradientText gradient="rainbow">Career Paths</GradientText> for Everyone
            </h2>
          </AnimatedCard>

          <AnimatedCard delay={600}>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              No matter your educational background or career stage, we have opportunities 
              tailored to your specific needs and goals. Your journey starts here.
            </p>
          </AnimatedCard>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {categories.map((category, index) => (
            <AnimatedCard 
              key={category.id} 
              delay={800 + index * 200}
              className="group"
            >
              <Card className={`${category.bgColor} border-2 ${category.borderColor} hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full overflow-hidden relative`}>
                {/* Background Image */}
                <div className="absolute inset-0 opacity-5">
                  <img 
                    src={category.backgroundImage} 
                    alt={category.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Category Image */}
                <div className="absolute top-4 right-4 w-16 h-16 rounded-xl overflow-hidden opacity-20 group-hover:opacity-40 transition-opacity">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <CardBody className="relative z-10">
                  <div className="flex flex-col items-center text-center h-full">
                    <div className={`mb-6 p-4 rounded-2xl bg-gradient-to-r ${category.color} text-white transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      {category.icon}
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-gray-900 leading-tight">{category.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed flex-grow">{category.description}</p>
                    
                    <div className="w-full space-y-4">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-500">Age Range:</span>
                        <span className="font-medium text-gray-700">{category.ageRange}</span>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2 text-center">
                        <div className="bg-white/70 rounded-lg p-3 backdrop-blur-sm">
                          <div className="text-lg font-bold text-green-600">{category.successRate}</div>
                          <div className="text-xs text-gray-600">Success Rate</div>
                        </div>
                        <div className="bg-white/70 rounded-lg p-3 backdrop-blur-sm">
                          <div className="text-lg font-bold text-green-600">{category.avgSalary}</div>
                          <div className="text-xs text-gray-600">Avg Salary</div>
                        </div>
                      </div>
                      
                      <ul className="space-y-2 text-sm text-gray-700">
                        {category.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center">
                            <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-green-400 rounded-full mr-3 flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      
                      <button className={`w-full mt-4 bg-gradient-to-r ${category.color} text-white py-3 px-4 rounded-xl font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center group`}>
                        Explore Opportunities
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </AnimatedCard>
          ))}
        </div>
        
        <AnimatedCard delay={1600}>
          <div className="text-center bg-gradient-to-r from-green-50 to-green-50 rounded-3xl p-8 border border-green-100 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <img 
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Background"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-4">
                <TrendingUp className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Not sure which category fits you best?</h3>
              </div>
              <p className="text-gray-600 mb-6 text-lg">
                Take our comprehensive career assessment to discover your ideal path
              </p>
              <button className="bg-gradient-to-r from-green-600 to-green-600 text-white font-bold py-4 px-8 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center mx-auto group">
                Take Career Assessment
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </AnimatedCard>
      </div>
    </section>
  );
};