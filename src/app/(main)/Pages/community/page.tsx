'use client'
import React, { useState } from 'react';
import { MessageSquare, Users, TrendingUp, Search, Filter, ThumbsUp, MessageCircle, Share2, Bookmark } from 'lucide-react';
import { Card, CardBody } from '../../_components/ui/Card';
import  ButtonMain  from '../../_components/ui/Button';
import { Badge } from '../../_components/ui/Badge';
import { Avatar } from '../../_components/ui/Avatar';

interface ForumPost {
  id: string;
  title: string;
  content: string;
  author: {
    name: string;
    avatar?: string;
    role: string;
  };
  category: string;
  tags: string[];
  likes: number;
  comments: number;
  shares: number;
  timestamp: string;
}

const mockPosts: ForumPost[] = [
  {
    id: '1',
    title: 'Tips for transitioning from banking to tech',
    content: 'After 8 years in banking, I successfully switched to a tech career. Here are my top strategies and lessons learned...',
    author: {
      name: 'Sarah Johnson',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      role: 'Software Developer'
    },
    category: 'Career Change',
    tags: ['Career Transition', 'Tech Industry', 'Skills Development'],
    likes: 245,
    comments: 56,
    shares: 23,
    timestamp: '2024-03-10T14:30:00Z'
  },
  {
    id: '2',
    title: 'Starting a successful freelance business with no degree',
    content: 'Here\'s how I built my freelance graphic design business from scratch without formal education...',
    author: {
      name: 'Michael Chen',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      role: 'Freelance Designer'
    },
    category: 'Entrepreneurship',
    tags: ['Freelancing', 'Self-Employed', 'Design'],
    likes: 189,
    comments: 42,
    shares: 31,
    timestamp: '2024-03-09T09:15:00Z'
  },
  {
    id: '3',
    title: 'Essential skills for modern electricians',
    content: 'The electrical trade is evolving. Here are the new skills and certifications you need to stay competitive...',
    author: {
      name: 'David Okafor',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
      role: 'Master Electrician'
    },
    category: 'Skilled Trades',
    tags: ['Electrical', 'Trade Skills', 'Certification'],
    likes: 156,
    comments: 28,
    shares: 15,
    timestamp: '2024-03-08T16:45:00Z'
  }
];

export const CommunityForum = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', name: 'All Topics', icon: <MessageSquare className="h-5 w-5" /> },
    { id: 'career-change', name: 'Career Change', icon: <TrendingUp className="h-5 w-5" /> },
    { id: 'skill-development', name: 'Skill Development', icon: <Users className="h-5 w-5" /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Community Forum</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with peers, share experiences, and learn from the community's collective wisdom.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search discussions..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex space-x-2">
              <ButtonMain variant="outline" className="flex items-center">
                <Filter className="h-5 w-5 mr-2" />
                Filters
              </ButtonMain>
              <ButtonMain>Start Discussion</ButtonMain>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.icon}
                <span className="ml-2">{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Forum Posts */}
        <div className="space-y-6">
          {mockPosts.map((post) => (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card key={post.id} hoverable className="overflow-hidden">
              <CardBody>
                <div className="flex items-start space-x-4">
                  <Avatar
                    src={post.author.avatar}
                    name={post.author.name}
                    size="lg"
                  />
                  <div className="flex-grow">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">
                          {post.title}
                        </h3>
                        <div className="flex items-center text-sm text-gray-500">
                          <span className="font-medium text-gray-900">{post.author.name}</span>
                          <span className="mx-2">•</span>
                          <span>{post.author.role}</span>
                          <span className="mx-2">•</span>
                          <span>{new Date(post.timestamp).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Bookmark className="h-5 w-5" />
                      </Button>
                    </div>

                    <p className="mt-3 text-gray-600">{post.content}</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      <Badge variant="primary">{post.category}</Badge>
                      {post.tags.map((tag, index) => (
                        <Badge key={index} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="mt-4 flex items-center space-x-4 text-gray-500">
                      <button className="flex items-center space-x-1 hover:text-blue-600">
                        <ThumbsUp className="h-5 w-5" />
                        <span>{post.likes}</span>
                      </button>
                      <button className="flex items-center space-x-1 hover:text-blue-600">
                        <MessageCircle className="h-5 w-5" />
                        <span>{post.comments}</span>
                      </button>
                      <button className="flex items-center space-x-1 hover:text-blue-600">
                        <Share2 className="h-5 w-5" />
                        <span>{post.shares}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="mt-8 text-center">
          <ButtonMain variant="outline" size="lg">
            Load More Discussions
          </ButtonMain>
        </div>
      </div>
    </div>
  );
};