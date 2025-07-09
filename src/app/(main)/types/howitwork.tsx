import { 
    UserPlus, 
    Search, 
    Target, 
    BookOpen, 
    Briefcase,
    CheckCircle,
    MessageSquare,
    Users,
    Star,
    Clock,
    Rocket
  } from 'lucide-react';
  
  export interface Step {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    details: string[];
    image: string;
    duration: string;
    difficulty: 'easy' | 'medium' | 'advanced';
  }
  
  export interface UserJourney {
    type: 'jobseeker' | 'employer';
    title: string;
    description: string;
    steps: Step[];
    benefits: string[];
    successRate: string;
    averageTime: string;
  }
  
  export const jobSeekerJourney: UserJourney = {
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
  
  export const employerJourney: UserJourney = {
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