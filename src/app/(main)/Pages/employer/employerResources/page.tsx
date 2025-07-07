import React from 'react';
import { Card, CardBody, CardHeader } from '../../../_components/ui/Card';
import { Button } from '../../../_components/ui/Button';
import { Badge } from '../../../_components/ui/Badge';
import { BookOpen, Users, TrendingUp, FileText, Video, Download, ExternalLink, Calendar, MessageSquare } from 'lucide-react';

interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'guide' | 'template' | 'webinar' | 'article' | 'tool';
  category: string;
  downloadUrl?: string;
  externalUrl?: string;
  duration?: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  featured: boolean;
}

const mockResources: Resource[] = [
  {
    id: '1',
    title: 'Complete Guide to Hiring in Nigeria',
    description: 'Comprehensive guide covering legal requirements, best practices, and cultural considerations for hiring in Nigeria.',
    type: 'guide',
    category: 'Hiring',
    downloadUrl: '/resources/hiring-guide-nigeria.pdf',
    difficulty: 'beginner',
    featured: true
  },
  {
    id: '2',
    title: 'Job Description Templates',
    description: 'Ready-to-use job description templates for various roles across different industries.',
    type: 'template',
    category: 'Templates',
    downloadUrl: '/resources/job-description-templates.zip',
    difficulty: 'beginner',
    featured: true
  },
  {
    id: '3',
    title: 'Effective Interview Techniques',
    description: 'Learn how to conduct structured interviews that help you identify the best candidates.',
    type: 'webinar',
    category: 'Interviewing',
    externalUrl: 'https://example.com/webinar',
    duration: '45 minutes',
    difficulty: 'intermediate',
    featured: false
  },
  {
    id: '4',
    title: 'Building Diverse Teams',
    description: 'Strategies for creating inclusive hiring practices and building diverse, high-performing teams.',
    type: 'article',
    category: 'Diversity & Inclusion',
    externalUrl: 'https://example.com/article',
    difficulty: 'intermediate',
    featured: true
  },
  {
    id: '5',
    title: 'Salary Benchmarking Tool',
    description: 'Interactive tool to help you determine competitive salary ranges for different roles in Nigeria.',
    type: 'tool',
    category: 'Compensation',
    externalUrl: 'https://example.com/salary-tool',
    difficulty: 'beginner',
    featured: false
  },
  {
    id: '6',
    title: 'Remote Work Policy Template',
    description: 'Comprehensive template for creating remote work policies that work for Nigerian businesses.',
    type: 'template',
    category: 'Remote Work',
    downloadUrl: '/resources/remote-work-policy.docx',
    difficulty: 'intermediate',
    featured: false
  }
];

export const EmployerResources = () => {
  const [selectedCategory, setSelectedCategory] = React.useState<string>('all');
  const [selectedType, setSelectedType] = React.useState<string>('all');

  const categories = Array.from(new Set(mockResources.map(resource => resource.category)));
  const types = Array.from(new Set(mockResources.map(resource => resource.type)));

  const filteredResources = mockResources.filter(resource => {
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    const matchesType = selectedType === 'all' || resource.type === selectedType;
    return matchesCategory && matchesType;
  });

  const featuredResources = mockResources.filter(resource => resource.featured);

  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'guide':
        return <BookOpen className="h-5 w-5" />;
      case 'template':
        return <FileText className="h-5 w-5" />;
      case 'webinar':
        return <Video className="h-5 w-5" />;
      case 'article':
        return <FileText className="h-5 w-5" />;
      case 'tool':
        return <TrendingUp className="h-5 w-5" />;
      default:
        return <FileText className="h-5 w-5" />;
    }
  };

  const getResourceColor = (type: string) => {
    switch (type) {
      case 'guide':
        return 'primary';
      case 'template':
        return 'success';
      case 'webinar':
        return 'accent';
      case 'article':
        return 'secondary';
      case 'tool':
        return 'warning';
      default:
        return 'outline';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Employer Resources</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Access comprehensive guides, templates, and tools to help you hire effectively and build great teams.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {[
            { icon: <BookOpen className="h-8 w-8 text-blue-600" />, title: "50+ Guides", description: "Comprehensive hiring resources" },
            { icon: <FileText className="h-8 w-8 text-green-600" />, title: "30+ Templates", description: "Ready-to-use documents" },
            { icon: <Video className="h-8 w-8 text-orange-600" />, title: "Weekly Webinars", description: "Expert-led sessions" },
            { icon: <Users className="h-8 w-8 text-purple-600" />, title: "Expert Support", description: "Get help when you need it" }
          ].map((stat, index) => (
            <Card key={index} className="text-center">
              <CardBody>
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{stat.title}</h3>
                <p className="text-gray-600">{stat.description}</p>
              </CardBody>
            </Card>
          ))}
        </div>

        {/* Featured Resources */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredResources.map((resource) => (
              <Card key={resource.id} hoverable className="h-full flex flex-col">
                <CardBody className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-3">
                    <Badge 
                      variant={getResourceColor(resource.type) as any}
                      className="flex items-center"
                    >
                      {getResourceIcon(resource.type)}
                      <span className="ml-1 capitalize">{resource.type}</span>
                    </Badge>
                    <Badge variant="accent" size="sm">Featured</Badge>
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{resource.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span className="capitalize">{resource.category}</span>
                    <Badge 
                      variant="outline" 
                      size="sm"
                      className={
                        resource.difficulty === 'beginner' ? 'bg-green-50 text-green-800' :
                        resource.difficulty === 'intermediate' ? 'bg-yellow-50 text-yellow-800' :
                        'bg-red-50 text-red-800'
                      }
                    >
                      {resource.difficulty}
                    </Badge>
                  </div>
                  
                  <div className="mt-auto">
                    {resource.downloadUrl ? (
                      <Button variant="outline\" fullWidth className="flex items-center justify-center">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    ) : (
                      <Button variant="outline" fullWidth className="flex items-center justify-center">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        {resource.type === 'webinar' ? 'Watch' : 'Access'}
                        {resource.duration && <span className="ml-1">({resource.duration})</span>}
                      </Button>
                    )}
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>

        {/* All Resources */}
        <div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 md:mb-0">All Resources</h2>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
              <select 
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="all">All Categories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              <select 
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                <option value="all">All Types</option>
                {types.map((type) => (
                  <option key={type} value={type} className="capitalize">{type}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredResources.map((resource) => (
              <Card key={resource.id} hoverable>
                <CardBody>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        {getResourceIcon(resource.type)}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold">{resource.title}</h3>
                        <Badge 
                          variant={getResourceColor(resource.type) as any}
                          size="sm"
                          className="capitalize"
                        >
                          {resource.type}
                        </Badge>
                      </div>
                      <p className="text-gray-600 mb-3">{resource.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>{resource.category}</span>
                          <Badge 
                            variant="outline" 
                            size="sm"
                            className={
                              resource.difficulty === 'beginner' ? 'bg-green-50 text-green-800' :
                              resource.difficulty === 'intermediate' ? 'bg-yellow-50 text-yellow-800' :
                              'bg-red-50 text-red-800'
                            }
                          >
                            {resource.difficulty}
                          </Badge>
                        </div>
                        {resource.downloadUrl ? (
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4 mr-1" />
                            Download
                          </Button>
                        ) : (
                          <Button variant="outline" size="sm">
                            <ExternalLink className="h-4 w-4 mr-1" />
                            Access
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>

        {/* Support Section */}
        <Card className="mt-12 bg-gradient-to-r from-blue-50 to-teal-50">
          <CardBody>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Additional Support?</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Our team of hiring experts is here to help you succeed. Get personalized guidance and support for your specific hiring challenges.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                <Button size="lg" className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  Schedule Consultation
                </Button>
                <Button variant="outline" size="lg" className="flex items-center">
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Contact Support
                </Button>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};