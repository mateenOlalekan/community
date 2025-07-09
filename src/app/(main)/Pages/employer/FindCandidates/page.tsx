'use client'
import React, { useState } from 'react';
import { Search, Filter, MapPin, Star, Download, Eye, MessageSquare, Bookmark } from 'lucide-react';
import { Card, CardBody, CardHeader } from '../../../_components/ui/Card';
import { Button } from '../../../_components/ui/Button';
import { Badge } from '../../../_components/ui/Badge';
import { Avatar } from '../../../_components/ui/Avatar';

interface Candidate {
  id: string;
  name: string;
  avatar?: string;
  title: string;
  location: string;
  experience: string;
  skills: string[];
  rating: number;
  availability: string;
  salaryExpectation: string;
  summary: string;
  verified: boolean;
  responseRate: number;
  lastActive: string;
}

const mockCandidates: Candidate[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
    title: 'Senior Frontend Developer',
    location: 'Lagos, Nigeria',
    experience: '5 years',
    skills: ['React', 'TypeScript', 'Node.js', 'GraphQL', 'AWS'],
    rating: 4.8,
    availability: 'Available immediately',
    salaryExpectation: '₦300,000 - ₦450,000/month',
    summary: 'Experienced frontend developer with a passion for creating user-friendly interfaces. Specialized in React ecosystem with strong backend knowledge.',
    verified: true,
    responseRate: 95,
    lastActive: '2 hours ago'
  },
  {
    id: '2',
    name: 'Michael Chen',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
    title: 'Digital Marketing Specialist',
    location: 'Abuja, Nigeria',
    experience: '3 years',
    skills: ['SEO', 'Google Ads', 'Social Media', 'Content Marketing', 'Analytics'],
    rating: 4.6,
    availability: '2 weeks notice',
    salaryExpectation: '₦180,000 - ₦250,000/month',
    summary: 'Results-driven digital marketer with proven track record of increasing online visibility and driving conversions for various businesses.',
    verified: true,
    responseRate: 88,
    lastActive: '1 day ago'
  },
  {
    id: '3',
    name: 'Amina Bello',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
    title: 'Graphic Designer',
    location: 'Lagos, Nigeria',
    experience: '4 years',
    skills: ['Adobe Creative Suite', 'Figma', 'Branding', 'UI/UX', 'Print Design'],
    rating: 4.9,
    availability: 'Available immediately',
    salaryExpectation: '₦150,000 - ₦220,000/month',
    summary: 'Creative graphic designer with expertise in both digital and print media. Strong eye for detail and brand consistency.',
    verified: false,
    responseRate: 92,
    lastActive: '3 hours ago'
  },
  {
    id: '4',
    name: 'David Okafor',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
    title: 'Electrical Engineer',
    location: 'Port Harcourt, Nigeria',
    experience: '7 years',
    skills: ['Electrical Systems', 'AutoCAD', 'Project Management', 'Safety Protocols', 'Maintenance'],
    rating: 4.7,
    availability: '1 month notice',
    salaryExpectation: '₦250,000 - ₦350,000/month',
    summary: 'Experienced electrical engineer with extensive knowledge in industrial and residential electrical systems. Strong project management skills.',
    verified: true,
    responseRate: 85,
    lastActive: '5 hours ago'
  }
];

export const FindCandidates = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [experienceLevel, setExperienceLevel] = useState('');
  const [location, setLocation] = useState('');

  const allSkills = Array.from(new Set(mockCandidates.flatMap(candidate => candidate.skills)));

  const filteredCandidates = mockCandidates.filter(candidate => {
    const matchesSearch = candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         candidate.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSkills = selectedSkills.length === 0 || 
                         selectedSkills.some(skill => candidate.skills.includes(skill));
    const matchesLocation = !location || candidate.location.toLowerCase().includes(location.toLowerCase());
    
    return matchesSearch && matchesSkills && matchesLocation;
  });

  const toggleSkill = (skill: string) => {
    setSelectedSkills(prev => 
      prev.includes(skill) 
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Find Candidates</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover talented professionals ready to join your team. Search through our database of verified candidates.
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8">
          <CardBody>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search candidates..."
                  className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Location"
                  className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <select 
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={experienceLevel}
                onChange={(e) => setExperienceLevel(e.target.value)}
              >
                <option value="">Experience Level</option>
                <option value="entry">Entry Level (0-2 years)</option>
                <option value="mid">Mid Level (2-5 years)</option>
                <option value="senior">Senior Level (5+ years)</option>
              </select>
              <Button className="flex items-center justify-center">
                <Search className="w-5 h-5 mr-2" />
                Search
              </Button>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">Filter by Skills:</h3>
              <div className="flex flex-wrap gap-2">
                {allSkills.slice(0, 15).map((skill) => (
                  <button
                    key={skill}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      selectedSkills.includes(skill)
                        ? 'bg-blue-100 text-blue-800 border border-blue-300'
                        : 'bg-gray-100 text-gray-700 border border-gray-300 hover:bg-gray-200'
                    }`}
                    onClick={() => toggleSkill(skill)}
                  >
                    {skill}
                  </button>
                ))}
                {selectedSkills.length > 0 && (
                  <button
                    className="px-3 py-1 rounded-full text-sm font-medium text-red-600 hover:text-red-800"
                    onClick={() => setSelectedSkills([])}
                  >
                    Clear all
                  </button>
                )}
              </div>
            </div>
          </CardBody>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar with additional filters */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold flex items-center">
                  <Filter className="h-5 w-5 mr-2" />
                  Advanced Filters
                </h3>
              </CardHeader>
              <CardBody className="space-y-6">
                <div>
                  <h4 className="font-medium mb-2">Availability</h4>
                  <div className="space-y-2">
                    {['Available immediately', 'Within 2 weeks', 'Within 1 month', 'More than 1 month'].map((option) => (
                      <label key={option} className="flex items-center">
                        <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600 mr-2" />
                        <span className="text-sm text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Verification Status</h4>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600 mr-2" />
                      <span className="text-sm text-gray-700">Verified profiles only</span>
                    </label>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Salary Range (Monthly)</h4>
                  <div className="space-y-2">
                    {['Under ₦100k', '₦100k - ₦200k', '₦200k - ₦300k', '₦300k - ₦500k', 'Above ₦500k'].map((range) => (
                      <label key={range} className="flex items-center">
                        <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600 mr-2" />
                        <span className="text-sm text-gray-700">{range}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Rating</h4>
                  <div className="space-y-2">
                    {[5, 4, 3].map((rating) => (
                      <label key={rating} className="flex items-center">
                        <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600 mr-2" />
                        <div className="flex items-center">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-700 ml-1">& up</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>

          {/* Candidate Results */}
          <div className="lg:col-span-3">
            <div className="mb-4 flex justify-between items-center">
              <p className="text-gray-600">{filteredCandidates.length} candidates found</p>
              <div className="flex items-center space-x-2">
                <span className="text-gray-600">Sort by:</span>
                <select className="border border-gray-300 rounded-md px-2 py-1">
                  <option>Best Match</option>
                  <option>Highest Rated</option>
                  <option>Most Recent</option>
                  <option>Salary: Low to High</option>
                  <option>Salary: High to Low</option>
                </select>
              </div>
            </div>

            <div className="space-y-6">
              {filteredCandidates.map((candidate) => (
                <Card key={candidate.id} hoverable className="transition-all duration-300">
                  <CardBody>
                    <div className="flex items-start space-x-4">
                      <Avatar
                        src={candidate.avatar}
                        name={candidate.name}
                        size="lg"
                      />
                      <div className="flex-grow">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <div className="flex items-center">
                              <h3 className="text-xl font-semibold text-gray-900">{candidate.name}</h3>
                              {candidate.verified && (
                                <Badge variant="success" size="sm" className="ml-2">Verified</Badge>
                              )}
                            </div>
                            <p className="text-gray-600">{candidate.title}</p>
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="ghost" size="sm">
                              <Bookmark className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <Eye className="h-4 w-4 mr-1" />
                              View Profile
                            </Button>
                            <Button size="sm">
                              <MessageSquare className="h-4 w-4 mr-1" />
                              Contact
                            </Button>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 text-sm text-gray-600">
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {candidate.location}
                          </div>
                          <div>
                            <strong>Experience:</strong> {candidate.experience}
                          </div>
                          <div>
                            <strong>Availability:</strong> {candidate.availability}
                          </div>
                        </div>

                        <div className="flex items-center mb-3">
                          <div className="flex items-center mr-4">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${i < Math.floor(candidate.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                                />
                              ))}
                            </div>
                            <span className="ml-1 text-sm text-gray-600">{candidate.rating}</span>
                          </div>
                          <div className="text-sm text-gray-600 mr-4">
                            <strong>Response Rate:</strong> {candidate.responseRate}%
                          </div>
                          <div className="text-sm text-gray-600">
                            <strong>Last Active:</strong> {candidate.lastActive}
                          </div>
                        </div>

                        <p className="text-gray-700 mb-4">{candidate.summary}</p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {candidate.skills.map((skill, index) => (
                            <Badge key={index} variant="outline">{skill}</Badge>
                          ))}
                        </div>

                        <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                          <div className="text-sm">
                            <strong className="text-gray-900">Salary Expectation:</strong>
                            <span className="text-gray-600 ml-1">{candidate.salaryExpectation}</span>
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              <Download className="h-4 w-4 mr-1" />
                              Download CV
                            </Button>
                            <Button size="sm" className="bg-green-600 hover:bg-green-700">
                              Send Message
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <Button variant="outline" size="lg">Load More Candidates</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};