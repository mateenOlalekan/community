'use client'
import React, { useState } from 'react';
import { Card, CardBody, CardHeader } from '../../../_components/ui/Card';
import  Button  from '../../../_components/ui/Button';
import { Badge } from '../../../_components/ui/Badge';
import { MapPin, Briefcase, DollarSign, Clock, Users, Plus, X } from 'lucide-react';

export const PostJob: React.FC = () => {
  const [jobType, setJobType] = useState<string>('full-time');
  const [requirements, setRequirements] = useState<string[]>(['']);
  const [benefits, setBenefits] = useState<string[]>(['']);

  const addRequirement = () => {
    setRequirements([...requirements, '']);
  };

  const removeRequirement = (index: number) => {
    setRequirements(requirements.filter((_, i) => i !== index));
  };

  const updateRequirement = (index: number, value: string) => {
    const updated = [...requirements];
    updated[index] = value;
    setRequirements(updated);
  };

  const addBenefit = () => {
    setBenefits([...benefits, '']);
  };

  const removeBenefit = (index: number) => {
    setBenefits(benefits.filter((_, i) => i !== index));
  };

  const updateBenefit = (index: number, value: string) => {
    const updated = [...benefits];
    updated[index] = value;
    setBenefits(updated);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post a Job</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Find the perfect candidates for your open positions. Reach thousands of qualified job seekers in your area.
          </p>
        </div>

        {/* Pricing Banner */}
        <Card className="mb-8 bg-gradient-to-r from-blue-50 to-teal-50 border-blue-200">
          <CardBody>
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Job Posting Packages</h3>
                <p className="text-gray-600">Choose the package that best fits your hiring needs</p>
              </div>
              <div className="mt-4 md:mt-0 flex space-x-4">
                <div className="text-center">
                  <Badge variant="success" className="mb-2">Basic</Badge>
                  <p className="text-2xl font-bold text-gray-900">₦5,000</p>
                  <p className="text-sm text-gray-600">30 days listing</p>
                </div>
                <div className="text-center">
                  <Badge variant="primary" className="mb-2">Featured</Badge>
                  <p className="text-2xl font-bold text-gray-900">₦15,000</p>
                  <p className="text-sm text-gray-600">60 days + priority</p>
                </div>
                <div className="text-center">
                  <Badge variant="accent" className="mb-2">Premium</Badge>
                  <p className="text-2xl font-bold text-gray-900">₦25,000</p>
                  <p className="text-sm text-gray-600">90 days + top placement</p>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>

        <form className="space-y-8">
          {/* Basic Information */}
          <Card>
            <CardHeader>
              <h2 className="text-xl font-semibold flex items-center">
                <Briefcase className="h-5 w-5 mr-2" />
                Job Information
              </h2>
            </CardHeader>
            <CardBody className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Job Title *
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g. Senior Software Developer"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your company name"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Job Category *
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="">Select a category</option>
                    <option value="technology">Technology</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="education">Education</option>
                    <option value="finance">Finance</option>
                    <option value="marketing">Marketing</option>
                    <option value="sales">Sales</option>
                    <option value="construction">Construction</option>
                    <option value="hospitality">Hospitality</option>
                    <option value="retail">Retail</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Employment Type *
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {['full-time', 'part-time', 'contract', 'internship', 'freelance'].map((type) => (
                      <button
                        key={type}
                        type="button"
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                          jobType === type
                            ? 'bg-blue-100 text-blue-800 border border-blue-300'
                            : 'bg-gray-100 text-gray-700 border border-gray-300 hover:bg-gray-200'
                        }`}
                        onClick={() => setJobType(type)}
                      >
                        {type.charAt(0).toUpperCase() + type.slice(1).replace('-', ' ')}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Job Description *
                </label>
                <textarea
                  rows={6}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Provide a detailed description of the role, responsibilities, and what makes this opportunity exciting..."
                  required
                />
              </div>
            </CardBody>
          </Card>

          {/* Location & Compensation */}
          <Card>
            <CardHeader>
              <h2 className="text-xl font-semibold flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                Location & Compensation
              </h2>
            </CardHeader>
            <CardBody className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    City *
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Lagos"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    State *
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="">Select state</option>
                    <option value="lagos">Lagos</option>
                    <option value="abuja">Abuja (FCT)</option>
                    <option value="kano">Kano</option>
                    <option value="rivers">Rivers</option>
                    <option value="oyo">Oyo</option>
                    <option value="kaduna">Kaduna</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Work Arrangement
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="onsite">On-site</option>
                    <option value="remote">Remote</option>
                    <option value="hybrid">Hybrid</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Minimum Salary (₦)
                  </label>
                  <input
                    type="number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="50000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Maximum Salary (₦)
                  </label>
                  <input
                    type="number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="100000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Salary Period
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="monthly">Monthly</option>
                    <option value="annually">Annually</option>
                    <option value="hourly">Hourly</option>
                    <option value="project">Per Project</option>
                  </select>
                </div>
              </div>
            </CardBody>
          </Card>

          {/* Requirements */}
          <Card>
            <CardHeader>
              <h2 className="text-xl font-semibold flex items-center">
                <Users className="h-5 w-5 mr-2" />
                Requirements & Qualifications
              </h2>
            </CardHeader>
            <CardBody className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Experience Level
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="entry">Entry Level (0-1 years)</option>
                  <option value="junior">Junior Level (1-3 years)</option>
                  <option value="mid">Mid Level (3-5 years)</option>
                  <option value="senior">Senior Level (5-8 years)</option>
                  <option value="lead">Lead/Principal (8+ years)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Education Requirements
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="none">No formal education required</option>
                  <option value="high-school">High School Diploma</option>
                  <option value="certificate">Certificate/Diploma</option>
                  <option value="bachelor">Bachelor's Degree</option>
                  <option value="master">Master's Degree</option>
                  <option value="phd">PhD/Doctorate</option>
                </select>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Job Requirements
                  </label>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={addRequirement}
                    className="flex items-center"
                  >
                    <Plus className="h-4 w-4 mr-1" />
                    Add Requirement
                  </Button>
                </div>
                <div className="space-y-2">
                  {requirements.map((req, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <input
                        type="text"
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="e.g. 2+ years experience with React"
                        value={req}
                        onChange={(e) => updateRequirement(index, e.target.value)}
                      />
                      {requirements.length > 1 && (
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => removeRequirement(index)}
                          className="text-red-600 hover:text-red-800"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Benefits & Perks
                  </label>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={addBenefit}
                    className="flex items-center"
                  >
                    <Plus className="h-4 w-4 mr-1" />
                    Add Benefit
                  </Button>
                </div>
                <div className="space-y-2">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <input
                        type="text"
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="e.g. Health insurance, Flexible working hours"
                        value={benefit}
                        onChange={(e) => updateBenefit(index, e.target.value)}
                      />
                      {benefits.length > 1 && (
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => removeBenefit(index)}
                          className="text-red-600 hover:text-red-800"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </CardBody>
          </Card>

          {/* Application Settings */}
          <Card>
            <CardHeader>
              <h2 className="text-xl font-semibold flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                Application Settings
              </h2>
            </CardHeader>
            <CardBody className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Application Deadline
                  </label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Positions
                  </label>
                  <input
                    type="number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="1"
                    min="1"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  How should candidates apply?
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="radio" name="application_method" value="platform" className="mr-2" defaultChecked />
                    <span>Through Career Connect platform</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="application_method" value="email" className="mr-2" />
                    <span>Send applications to email</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="application_method" value="external" className="mr-2" />
                    <span>External application link</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Contact Email
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="hr@company.com"
                />
              </div>
            </CardBody>
          </Card>

          {/* Submit Section */}
          <Card className="bg-gradient-to-r from-blue-50 to-teal-50">
            <CardBody>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Ready to Post Your Job?</h3>
                <p className="text-gray-600 mb-6">
                  Review your job posting and select your preferred package to reach qualified candidates.
                </p>
                <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                  <Button variant="outline" size="lg">
                    Save as Draft
                  </Button>
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700">
                    Post Job - ₦5,000
                  </Button>
                </div>
              </div>
            </CardBody>
          </Card>
        </form>
      </div>
    </div>
  );
};