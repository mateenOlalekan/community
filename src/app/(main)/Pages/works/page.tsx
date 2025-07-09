import React, { useState } from 'react';
import { Card, CardBody, CardHeader } from '../../_components/ui/Card';
import { Button } from '../../_components/ui/Button';
import { Badge } from '../../_components/ui/Badge';
import { AnimatedCard } from '../../_components/ui/AnimatedCard';
import { GradientText } from '../../_components/ui/GradientText';
import { 
  HelpCircle, 
  UserPlus, 
  Search, 
  Target, 
  BookOpen, 
  Award, 
  Briefcase,
  CheckCircle,
  ArrowRight,
  Play,
  Users,
  Star,
  Clock,
  TrendingUp,
  MessageSquare,
  Bell,
  Shield,
  Zap,
  Globe,
  Heart,
  Lightbulb,
  Rocket
} from 'lucide-react';

interface Step {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  details: string[];
  image: string;
  duration: string;
  difficulty: 'easy' | 'medium' | 'advanced';
}

interface UserJourney {
  type: 'jobseeker' | 'employer';
  title: string;
  description: string;
  steps: Step[];
  benefits: string[];
  successRate: string;
  averageTime: string;
}

const jobSeekerJourney: UserJourney = {
  type: 'jobseeker',
  title: 'Job Seeker Journey',
  description: 'Your path to finding the perfect job opportunity',
  steps: [
    {
      id: '1',
      title: 'Create Your Profile',
      description: 'Sign up and build a comprehensive profile that showcases your skills and experience.',
      icon: <UserPlus className="h-8 w-8" />,
      details: [
        'Complete registration with email verification',
        'Upload your resume and profile photo',
        'Add your work experience and education',
        'List your skills and certifications',
        'Set your job preferences and location'
      ],
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: '10-15 minutes',
      difficulty: 'easy'
    },
    {
      id: '2',
      title: 'Take Skills Assessment',
      description: 'Complete our AI-powered assessment to identify your strengths and career opportunities.',
      icon: <Target className="h-8 w-8" />,
      details: [
        'Answer questions about your experience',
        'Complete practical skill tests',
        'Get personalized career recommendations',
        'Identify skill gaps and learning opportunities',
        'Receive your career compatibility score'
      ],
      image: 'https://images.pexels.com/photos/7641997/pexels-photo-7641997.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: '20-30 minutes',
      difficulty: 'easy'
    },
    {
      id: '3',
      title: 'Explore Job Matches',
      description: 'Browse personalized job recommendations based on your profile and preferences.',
      icon: <Search className="h-8 w-8" />,
      details: [
        'View AI-curated job matches',
        'Filter by location, salary, and type',
        'Save interesting opportunities',
        'Set up job alerts for new matches',
        'Research companies and roles'
      ],
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: '15-20 minutes',
      difficulty: 'easy'
    },
    {
      id: '4',
      title: 'Develop Your Skills',
      description: 'Access learning resources and courses to improve your qualifications.',
      icon: <BookOpen className="h-8 w-8" />,
      details: [
        'Enroll in relevant courses',
        'Complete skill development modules',
        'Earn certificates and badges',
        'Track your learning progress',
        'Get mentorship and guidance'
      ],
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: '1-6 months',
      difficulty: 'medium'
    },
    {
      id: '5',
      title: 'Apply & Get Hired',
      description: 'Apply to jobs with confidence and land your dream position.',
      icon: <Briefcase className="h-8 w-8" />,
      details: [
        'Submit applications with one click',
        'Track application status',
        'Prepare for interviews with our tools',
        'Negotiate salary with market data',
        'Start your new career journey'
      ],
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: '2-8 weeks',
      difficulty: 'medium'
    }
  ],
  benefits: [
    'Personalized job matching',
    'Free skill assessments',
    'Learning resources access',
    'Interview preparation',
    'Salary negotiation support',
    'Career counseling'
  ],
  successRate: '89%',
  averageTime: '3.2 months'
};

const employerJourney: UserJourney = {
  type: 'employer',
  title: 'Employer Journey',
  description: 'Your path to finding and hiring the best talent',
  steps: [
    {
      id: '1',
      title: 'Create Company Profile',
      description: 'Set up your company profile and showcase your organization to potential candidates.',
      icon: <UserPlus className="h-8 w-8" />,
      details: [
        'Register your company account',
        'Add company information and logo',
        'Describe your company culture',
        'Set up hiring team access',
        'Configure notification preferences'
      ],
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: '15-20 minutes',
      difficulty: 'easy'
    },
    {
      id: '2',
      title: 'Post Job Openings',
      description: 'Create detailed job postings that attract the right candidates.',
      icon: <Briefcase className="h-8 w-8" />,
      details: [
        'Use our job posting templates',
        'Define role requirements clearly',
        'Set competitive salary ranges',
        'Choose posting duration and visibility',
        'Add screening questions'
      ],
      image: 'https://images.pexels.com/photos/7641997/pexels-photo-7641997.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: '10-15 minutes',
      difficulty: 'easy'
    },
    {
      id: '3',
      title: 'Review Applications',
      description: 'Efficiently review and manage candidate applications with our ATS.',
      icon: <Search className="h-8 w-8" />,
      details: [
        'View candidate profiles and resumes',
        'Use AI-powered candidate ranking',
        'Filter by skills and experience',
        'Collaborate with your hiring team',
        'Schedule interviews seamlessly'
      ],
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: '30-60 minutes',
      difficulty: 'medium'
    },
    {
      id: '4',
      title: 'Interview & Select',
      description: 'Conduct interviews and make informed hiring decisions.',
      icon: <MessageSquare className="h-8 w-8" />,
      details: [
        'Use our interview scheduling tools',
        'Access candidate assessment reports',
        'Collaborate on candidate feedback',
        'Make data-driven hiring decisions',
        'Send offers through the platform'
      ],
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: '1-3 weeks',
      difficulty: 'medium'
    },
    {
      id: '5',
      title: 'Onboard New Hires',
      description: 'Successfully onboard your new team members.',
      icon: <CheckCircle className="h-8 w-8" />,
      details: [
        'Send welcome packages',
        'Track onboarding progress',
        'Collect feedback and reviews',
        'Build long-term relationships',
        'Access ongoing hiring support'
      ],
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: '1-2 weeks',
      difficulty: 'easy'
    }
  ],
  benefits: [
    'Access to verified candidates',
    'AI-powered matching',
    'Applicant tracking system',
    'Interview scheduling tools',
    'Hiring analytics',
    'Dedicated support'
  ],
  successRate: '94%',
  averageTime: '2.8 weeks'
};

export const HowItWorks: React.FC = () => {
  const [selectedJourney, setSelectedJourney] = useState<'jobseeker' | 'employer'>('jobseeker');
  const [selectedStep, setSelectedStep] = useState<string>('1');

  const currentJourney = selectedJourney === 'jobseeker' ? jobSeekerJourney : employerJourney;
  const currentStep = currentJourney.steps.find(step => step.id === selectedStep);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-blue-200 to-teal-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <AnimatedCard delay={200}>
            <div className="inline-flex items-center bg-blue-100 rounded-full px-6 py-2 mb-6">
              <HelpCircle className="h-5 w-5 text-blue-600 mr-2" />
              <span className="text-blue-800 font-medium">How It Works</span>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={400}>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your Journey to <GradientText gradient="rainbow">Success</GradientText>
            </h1>
          </AnimatedCard>

          <AnimatedCard delay={600}>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover how Career Connect works for both job seekers and employers. Follow our step-by-step process to achieve your goals.
            </p>
          </AnimatedCard>
        </div>

        {/* Stats Section */}
        <AnimatedCard delay={800}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            {[
              { icon: <Users className="h-8 w-8 text-blue-600" />, number: "500,000+", label: "Active Users" },
              { icon: <Briefcase className="h-8 w-8 text-green-600" />, number: "50,000+", label: "Jobs Posted" },
              { icon: <CheckCircle className="h-8 w-8 text-orange-600" />, number: "91%", label: "Success Rate" },
              { icon: <Clock className="h-8 w-8 text-purple-600" />, number: "3.2 months", label: "Avg. Time to Hire" }
            ].map((stat, index) => (
              <Card key={index} className="text-center group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardBody>
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gray-100 rounded-full group-hover:scale-110 transition-transform">
                      {stat.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </AnimatedCard>

        {/* Journey Toggle */}
        <AnimatedCard delay={1000}>
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-2xl p-1 shadow-xl border border-gray-200">
              <button
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  selectedJourney === 'jobseeker'
                    ? 'bg-gradient-to-r from-blue-600 to-teal-600 text-white shadow-lg transform scale-105'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
                onClick={() => setSelectedJourney('jobseeker')}
              >
                <Users className="h-5 w-5 mr-2 inline" />
                Job Seeker Journey
              </button>
              <button
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  selectedJourney === 'employer'
                    ? 'bg-gradient-to-r from-blue-600 to-teal-600 text-white shadow-lg transform scale-105'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
                onClick={() => setSelectedJourney('employer')}
              >
                <Briefcase className="h-5 w-5 mr-2 inline" />
                Employer Journey
              </button>
            </div>
          </div>
        </AnimatedCard>

        {/* Journey Overview */}
        <AnimatedCard delay={1200}>
          <Card className="mb-12 bg-gradient-to-r from-blue-50 to-teal-50 border-blue-200">
            <CardBody className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{currentJourney.title}</h2>
                  <p className="text-lg text-gray-600 mb-6">{currentJourney.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-4 bg-white rounded-lg">
                      <div className="text-2xl font-bold text-green-600">{currentJourney.successRate}</div>
                      <div className="text-sm text-gray-600">Success Rate</div>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">{currentJourney.averageTime}</div>
                      <div className="text-sm text-gray-600">Average Time</div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-900 mb-3">Key Benefits:</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {currentJourney.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700">
                    <Rocket className="mr-2 h-5 w-5" />
                    Start Your Journey
                  </Button>
                </div>

                <div className="hidden lg:block">
                  <div className="relative">
                    <img 
                      src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600" 
                      alt="Journey Overview"
                      className="rounded-2xl shadow-2xl"
                    />
                    <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
                      <div className="flex items-center">
                        <Star className="h-6 w-6 text-yellow-400 mr-2" />
                        <div>
                          <div className="font-bold text-gray-900">4.8/5</div>
                          <div className="text-xs text-gray-600">User Rating</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </AnimatedCard>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Steps Navigation */}
          <div className="lg:col-span-1">
            <AnimatedCard delay={1400}>
              <Card className="sticky top-8">
                <CardHeader>
                  <h3 className="text-xl font-semibold text-gray-900">Journey Steps</h3>
                  <p className="text-gray-600 mt-2">Click on any step to learn more</p>
                </CardHeader>
                <CardBody className="space-y-3">
                  {currentJourney.steps.map((step, index) => (
                    <button
                      key={step.id}
                      className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                        selectedStep === step.id 
                          ? 'bg-blue-100 border-l-4 border-blue-600 shadow-md' 
                          : 'bg-white hover:bg-gray-50 border border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setSelectedStep(step.id)}
                    >
                      <div className="flex items-center mb-2">
                        <div className={`p-2 rounded-lg mr-3 ${
                          selectedStep === step.id ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'
                        }`}>
                          {step.icon}
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">Step {step.id}</div>
                          <div className="text-sm text-gray-600">{step.duration}</div>
                        </div>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-1">{step.title}</h4>
                      <p className="text-sm text-gray-600 line-clamp-2">{step.description}</p>
                    </button>
                  ))}
                </CardBody>
              </Card>
            </AnimatedCard>
          </div>

          {/* Step Details */}
          <div className="lg:col-span-2">
            <AnimatedCard delay={1600}>
              {currentStep && (
                <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
                  <div className="h-64 overflow-hidden relative">
                    <img 
                      src={currentStep.image} 
                      alt={currentStep.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <Badge 
                        variant="outline" 
                        className={`${getDifficultyColor(currentStep.difficulty)} border-0 capitalize`}
                      >
                        {currentStep.difficulty}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex items-center text-sm mb-2">
                        <Clock className="h-4 w-4 mr-1" />
                        {currentStep.duration}
                      </div>
                      <h2 className="text-2xl font-bold">Step {currentStep.id}: {currentStep.title}</h2>
                    </div>
                  </div>

                  <CardBody className="p-8">
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">{currentStep.description}</p>

                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">What You'll Do:</h3>
                      <div className="space-y-3">
                        {currentStep.details.map((detail, index) => (
                          <div key={index} className="flex items-start">
                            <div className="flex-shrink-0 mr-3 mt-1">
                              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                              </div>
                            </div>
                            <p className="text-gray-700">{detail}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        {parseInt(currentStep.id) > 1 && (
                          <Button 
                            variant="outline"
                            onClick={() => setSelectedStep((parseInt(currentStep.id) - 1).toString())}
                          >
                            Previous Step
                          </Button>
                        )}
                        {parseInt(currentStep.id) < currentJourney.steps.length && (
                          <Button 
                            onClick={() => setSelectedStep((parseInt(currentStep.id) + 1).toString())}
                            className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700"
                          >
                            Next Step
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        )}
                      </div>
                      <Button variant="accent" size="lg">
                        <Play className="mr-2 h-5 w-5" />
                        Watch Demo
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              )}
            </AnimatedCard>
          </div>
        </div>

        {/* Features Section */}
        <AnimatedCard delay={1800}>
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose Career Connect?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Zap className="h-8 w-8 text-yellow-500" />,
                  title: 'AI-Powered Matching',
                  description: 'Our advanced AI algorithms ensure perfect matches between candidates and opportunities.',
                  color: 'from-yellow-50 to-orange-50'
                },
                {
                  icon: <Shield className="h-8 w-8 text-green-500" />,
                  title: 'Verified & Secure',
                  description: 'All profiles and companies are verified for authenticity and security.',
                  color: 'from-green-50 to-teal-50'
                },
                {
                  icon: <Heart className="h-8 w-8 text-red-500" />,
                  title: 'Personalized Support',
                  description: 'Get dedicated support throughout your journey with expert guidance.',
                  color: 'from-red-50 to-pink-50'
                }
              ].map((feature, index) => (
                <Card key={index} className={`group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br ${feature.color}`}>
                  <CardBody className="text-center p-8">
                    <div className="flex justify-center mb-4">
                      <div className="p-4 bg-white rounded-full group-hover:scale-110 transition-transform shadow-lg">
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>
        </AnimatedCard>

        {/* CTA Section */}
        <AnimatedCard delay={2000}>
          <Card className="mt-16 bg-gradient-to-r from-blue-600 to-teal-600 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Success"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <CardBody className="relative z-10 p-8 md:p-12">
              <div className="text-center">
                <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="text-blue-100 mb-6 text-lg max-w-2xl mx-auto">
                  Join thousands of successful professionals who have transformed their careers with Career Connect.
                </p>
                <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                  <Button 
                    variant="accent" 
                    size="lg"
                    className="bg-white text-blue-600 hover:bg-gray-100 font-semibold"
                  >
                    <UserPlus className="mr-2 h-5 w-5" />
                    Sign Up Free
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-white text-white hover:bg-white/10"
                  >
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Contact Support
                  </Button>
                </div>
              </div>
            </CardBody>
          </Card>
        </AnimatedCard>
      </div>
    </div>
  );
};