// types.ts

export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface Location {
  city: string;
  state: string;
  coordinates: Coordinates;
  radius: number; // in kilometers
}

export interface Skill {
  id: string;
  name: string;
  category: string;
  proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  verified: boolean;
}

export interface Availability {
  weekdays: boolean[]; // [Mon, Tue, Wed, Thu, Fri, Sat, Sun]
  hours: {
    start: number; // 0-23
    end: number;   // 0-23
  };
  immediateStart: boolean;
}

export interface Experience {
  title: string;
  company: string;
  startDate: string; // YYYY-MM-DD
  endDate?: string;  // YYYY-MM-DD (optional if current)
  current: boolean;
  description: string;
}

export interface Education {
  institution: string;
  degree: string;
  fieldOfStudy: string;
  startYear: number;
  endYear: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  category: 'high-school' | 'graduate' | 'technical' | 'professional';
  skills: Skill[];
  interests: string[];
  availability: Availability;
  location: Location;
  experience: Experience[];
  education: Education[];
}

export interface Salary {
  min: number;
  max: number;
  currency: string;
  period: 'hourly' | 'daily' | 'weekly' | 'monthly' | 'project';
}

export interface Job {
  id: string;
  title: string;
  company: string;
  location: Location;
  description: string;
  requirements: string[];
  type: 'full-time' | 'part-time' | 'contract' | 'internship' | 'remote';
  category: string;
  salary: Salary;
  postedDate: string; // YYYY-MM-DD
  deadline?: string;  // YYYY-MM-DD (optional)
  urgent: boolean;
  benefits?: string[];
  applicationCount?: number;
}

export type ResourceType = 'course' | 'video' | 'article' | 'ebook' | 'podcast';

export interface LearningResource {
  id: string;
  title: string;
  type: ResourceType;
  skillCategory: string;
  duration: number; // in minutes
  level: 'beginner' | 'intermediate' | 'advanced';
  provider: string;
  url: string;
  free: boolean;
  description?: string;
  rating?: number;
  reviews?: number;
  language?: string;
  certification?: boolean;
}

export interface CareerPath {
  id: string;
  title: string;
  description: string;
  skillsRequired: Skill[];
  averageSalary: number;
  growthRate: number; // percentage
  demandLevel: 'low' | 'medium' | 'high';
  educationRequired: string;
  timeToAchieve: number; // in months
  jobTitles?: string[];
  industries?: string[];
}

