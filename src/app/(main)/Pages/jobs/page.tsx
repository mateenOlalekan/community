import React, { useState } from 'react';
import { Search, MapPin, Briefcase, Filter, SlidersHorizontal } from 'lucide-react';
import { Card, CardBody } from '../../_components/ui/Card';
import { Button } from '../../_components/ui/Button';
import { Badge } from '../../_components/ui/Badge';
import { mockJobs } from '../../data/mockData';

export const BrowseJobs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const categories = Array.from(new Set(mockJobs.map(job => job.category)));
  const types = Array.from(new Set(mockJobs.map(job => job.type)));

  const filteredJobs = mockJobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = !location || job.location.city.toLowerCase().includes(location.toLowerCase());
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(job.category);
    const matchesType = selectedTypes.length === 0 || selectedTypes.includes(job.type);
    
    return matchesSearch && matchesLocation && matchesCategory && matchesType;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Browse Jobs</h1>
        <p className="text-lg text-gray-600">Find your next opportunity from our extensive job listings</p>
      </div>

      {/* Search Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Job title or keyword"
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Location"
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <Button className="flex items-center justify-center">
            <Search className="w-5 h-5 mr-2" />
            Search Jobs
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        <div className="lg:col-span-1">
          <Card>
            <CardBody>
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Filters</h3>
                  <Button variant="ghost" size="sm" className="text-sm">
                    Clear all
                  </Button>
                </div>

                <div className="mb-6">
                  <h4 className="font-medium mb-2">Job Categories</h4>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <label key={category} className="flex items-center">
                        <input
                          type="checkbox"
                          className="form-checkbox h-4 w-4 text-blue-600"
                          checked={selectedCategories.includes(category)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedCategories([...selectedCategories, category]);
                            } else {
                              setSelectedCategories(selectedCategories.filter(c => c !== category));
                            }
                          }}
                        />
                        <span className="ml-2 text-gray-700 capitalize">{category.replace('-', ' ')}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-medium mb-2">Job Type</h4>
                  <div className="space-y-2">
                    {types.map((type) => (
                      <label key={type} className="flex items-center">
                        <input
                          type="checkbox"
                          className="form-checkbox h-4 w-4 text-blue-600"
                          checked={selectedTypes.includes(type)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedTypes([...selectedTypes, type]);
                            } else {
                              setSelectedTypes(selectedTypes.filter(t => t !== type));
                            }
                          }}
                        />
                        <span className="ml-2 text-gray-700 capitalize">{type.replace('-', ' ')}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-medium mb-2">Experience Level</h4>
                  <div className="space-y-2">
                    {['Entry Level', 'Mid Level', 'Senior Level'].map((level) => (
                      <label key={level} className="flex items-center">
                        <input
                          type="checkbox"
                          className="form-checkbox h-4 w-4 text-blue-600"
                        />
                        <span className="ml-2 text-gray-700">{level}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Salary Range</h4>
                  <input
                    type="range"
                    className="w-full"
                    min="0"
                    max="1000000"
                    step="10000"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>₦0</span>
                    <span>₦1M+</span>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>

        {/* Job Listings */}
        <div className="lg:col-span-3">
          <div className="mb-4 flex justify-between items-center">
            <p className="text-gray-600">{filteredJobs.length} jobs found</p>
            <div className="flex items-center space-x-2">
              <span className="text-gray-600">Sort by:</span>
              <select className="border border-gray-300 rounded-md px-2 py-1">
                <option>Most Recent</option>
                <option>Salary: High to Low</option>
                <option>Salary: Low to High</option>
                <option>Most Relevant</option>
              </select>
            </div>
          </div>

          <div className="space-y-4">
            {filteredJobs.map((job) => (
              <Card key={job.id} hoverable className="transition-all duration-300">
                <CardBody>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                      <p className="text-gray-600">{job.company}</p>
                    </div>
                    {job.urgent && (
                      <Badge variant="error">Urgent</Badge>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                    <span className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {job.location.city}, {job.location.state}
                    </span>
                    <span className="flex items-center">
                      <Briefcase className="w-4 h-4 mr-1" />
                      {job.type}
                    </span>
                    {job.salary && (
                      <span className="flex items-center">
                        ₦{job.salary.min.toLocaleString()} - ₦{job.salary.max.toLocaleString()}/month
                      </span>
                    )}
                  </div>

                  <p className="text-gray-700 mb-4 line-clamp-2">{job.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.requirements.slice(0, 3).map((req, index) => (
                      <Badge key={index} variant="outline">{req}</Badge>
                    ))}
                    {job.requirements.length > 3 && (
                      <Badge variant="outline">+{job.requirements.length - 3} more</Badge>
                    )}
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      Posted {new Date(job.postedDate).toLocaleDateString()}
                    </span>
                    <div className="space-x-2">
                      <Button variant="outline" size="sm">Save Job</Button>
                      <Button size="sm">Apply Now</Button>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Button variant="outline" size="lg">Load More Jobs</Button>
          </div>
        </div>
      </div>
    </div>
  );
};