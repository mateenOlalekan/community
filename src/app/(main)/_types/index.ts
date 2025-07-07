export interface User {
    id: string;
    name: string;
    email: string;
    avatar?: string;
    category: UserCategory;
    skills: Skill[];
    interests: string[];
    availability: Availability;
    location: Location;
    experience: Experience[];
  }
  
  export type UserCategory = 'high-school' | 'graduate' | 'career-changer' | 'experimenter';
  
  export interface Skill {
    id: string;
    name: string;
    category: SkillCategory;
    proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert';
    verified: boolean;
  }
  
  export type SkillCategory = 
    | 'corporate' | 'technology' | 'healthcare' | 'education' | 'legal'  // White-collar
    | 'construction' | 'automotive' | 'beauty' | 'culinary' | 'tech-trades'  // Skilled labor
    | 'visual-arts' | 'performing-arts' | 'writing' | 'crafts'  // Creative
    | 'service' | 'logistics' | 'agriculture' | 'general';  // Unskilled
  
  export interface Availability {
    weekdays: boolean[];  // Sunday to Saturday
    hours: {
      start: number;  // 0-23
      end: number;    // 0-23
    };
    immediateStart: boolean;
  }
  
  export interface Location {
    city: string;
    state: string;
    coordinates?: {
      latitude: number;
      longitude: number;
    };
    radius: number;  // km
  }
  
  export interface Experience {
    title: string;
    company?: string;
    startDate: string;
    endDate?: string;
    current: boolean;
    description: string;
  }
  
  export interface Job {
    id: string;
    title: string;
    company: string;
    location: Location;
    description: string;
    requirements: string[];
    type: 'full-time' | 'part-time' | 'contract' | 'gig' | 'internship';
    category: SkillCategory;
    salary?: {
      min: number;
      max: number;
      currency: string;
    };
    postedDate: string;
    deadline?: string;
    urgent: boolean;
  }
  
  export interface LearningResource {
    id: string;
    title: string;
    type: 'article' | 'video' | 'course' | 'mentor';
    skillCategory: SkillCategory;
    duration: number;  // minutes
    level: 'beginner' | 'intermediate' | 'advanced';
    provider: string;
    url: string;
    free: boolean;
  }
  
  export interface CareerPath {
    id: string;
    title: string;
    description: string;
    skillsRequired: Skill[];
    averageSalary: number;
    growthRate: number;
    demandLevel: 'low' | 'medium' | 'high';
    educationRequired: string;
    timeToAchieve: number;  // months
  }