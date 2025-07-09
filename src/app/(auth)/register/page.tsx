'use client'
import { useState } from 'react';
import { Card, CardBody } from '../../(main)/_components/ui/Card';
import { ButtonMain } from '../../(main)/_components/ui/Button';
import { Eye, EyeOff, Mail, Lock, User, Briefcase, Building, MapPin, Phone, CheckCircle, ArrowRight, Star, X } from 'lucide-react';
import { AnimatedCard } from '../../(main)/_components/ui/AnimatedCard';
import { GradientText } from '../../(main)/_components/ui/GradientText';
import { FloatingElements } from '../../(main)/_components/ui/FloatingElements';

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [userType, setUserType] = useState<'jobseeker' | 'employer'>('jobseeker');
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    category: '',
    location: '',
    experience: '',
    companyName: '',
    companySize: '',
    industry: '',
    website: '',
    agreeToTerms: false,
    agreeToMarketing: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      console.log('Sign up attempt:', { ...formData, userType });
    }
  };

  const canProceed = () => {
    if (currentStep === 1) {
      return formData.firstName && formData.lastName && formData.email && formData.phone && 
             formData.password && formData.confirmPassword && formData.password === formData.confirmPassword;
    }
    if (currentStep === 2) {
      if (userType === 'jobseeker') {
        return formData.category && formData.location && formData.experience;
      } else {
        return formData.companyName && formData.companySize && formData.industry;
      }
    }
    return formData.agreeToTerms;
  };

  const jobSeekerCategories = [
    { value: 'high-school', label: 'High School Dropout / Early School Leaver' },
    { value: 'graduate', label: 'University Graduate' },
    { value: 'career-changer', label: 'Career Change Seeker' },
    { value: 'experimenter', label: 'Skill Experimenter / New Opportunity Seeker' }
  ];

  const experienceLevels = [
    { value: 'entry', label: 'Entry Level (0-2 years)' },
    { value: 'mid', label: 'Mid Level (2-5 years)' },
    { value: 'senior', label: 'Senior Level (5+ years)' },
    { value: 'executive', label: 'Executive Level' }
  ];

  const companySizes = [
    { value: 'startup', label: 'Startup (1-10 employees)' },
    { value: 'small', label: 'Small (11-50 employees)' },
    { value: 'medium', label: 'Medium (51-200 employees)' },
    { value: 'large', label: 'Large (201-1000 employees)' },
    { value: 'enterprise', label: 'Enterprise (1000+ employees)' }
  ];

  const industries = [
    'Technology', 'Healthcare', 'Finance', 'Education', 'Manufacturing',
    'Retail', 'Construction', 'Hospitality', 'Transportation', 'Agriculture',
    'Media & Entertainment', 'Government', 'Non-profit', 'Other'
  ];

  const stepTitles = ['Basic Information', 'Profile Details', 'Terms & Confirmation'];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-8 bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Left Side - Branding and Info */}
          <div className="lg:w-2/5 bg-gradient-to-b from-green-600 to-green-700 p-8 text-white flex flex-col">
            <AnimatedCard delay={200}>
              <div className="bg-white p-3 rounded-xl shadow-lg inline-flex mb-6">
                <Briefcase className="h-8 w-8 text-green-600" />
              </div>
            </AnimatedCard>

            <AnimatedCard delay={400}>
              <h1 className="text-3xl font-bold mb-2">
                Join <GradientText gradient="white">Career Connect</GradientText>
              </h1>
              <p className="text-green-100 mb-6">
                Create your account and start your career journey with Nigeria's leading job platform
              </p>
            </AnimatedCard>

            <AnimatedCard delay={600}>
              <div className="space-y-3 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-200" />
                  <span className="text-green-50">100% Free for job seekers</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 mr-2 text-green-200" />
                  <span className="text-green-50">Trusted by 150k+ professionals</span>
                </div>
                <div className="flex items-center">
                  <Briefcase className="h-5 w-5 mr-2 text-green-200" />
                  <span className="text-green-50">50k+ active job listings</span>
                </div>
              </div>
            </AnimatedCard>

            {/* User Type Toggle */}
            <AnimatedCard delay={800}>
              <div className="mb-6">
                <p className="text-sm text-green-100 mb-2">I am a:</p>
                <div className="bg-white bg-opacity-10 rounded-xl p-1 shadow border border-green-300 border-opacity-30 inline-flex">
                  <button
                    type="button"
                    className={`px-6 py-2 rounded-lg font-medium text-sm transition-all ${
                      userType === 'jobseeker'
                        ? 'bg-white text-green-700 shadow'
                        : 'text-green-100 hover:bg-white hover:bg-opacity-10'
                    }`}
                    onClick={() => setUserType('jobseeker')}
                  >
                    Job Seeker
                  </button>
                  <button
                    type="button"
                    className={`px-6 py-2 rounded-lg font-medium text-sm transition-all ${
                      userType === 'employer'
                        ? 'bg-white text-green-700 shadow'
                        : 'text-green-100 hover:bg-white hover:bg-opacity-10'
                    }`}
                    onClick={() => setUserType('employer')}
                  >
                    Employer
                  </button>
                </div>
              </div>
            </AnimatedCard>

            {/* Progress Indicator */}
            <AnimatedCard delay={1000}>
              <div className="mt-auto">
                <div className="flex items-center justify-between mb-3">
                  {[1, 2, 3].map((step) => (
                    <div key={step} className="flex flex-col items-center">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                          step <= currentStep
                            ? 'bg-white text-green-700 shadow'
                            : 'bg-white bg-opacity-10 text-green-100'
                        }`}
                      >
                        {step < currentStep ? <CheckCircle className="h-5 w-5" /> : step}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="relative">
                  <div className="absolute h-1.5 w-full bg-white bg-opacity-20 top-1/2 transform -translate-y-1/2 rounded-full"></div>
                  <div
                    className="absolute h-1.5 bg-white top-1/2 transform -translate-y-1/2 transition-all duration-500 rounded-full"
                    style={{
                      width: `${((currentStep - 1) / 2) * 100}%`
                    }}
                  ></div>
                </div>
                <div className="flex justify-between mt-2">
                  {stepTitles.map((title, index) => (
                    <span 
                      key={index}
                      className={`text-xs ${currentStep > index ? 'text-white font-medium' : 'text-green-100'}`}
                    >
                      {title}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedCard>
          </div>

          {/* Right Side - Form */}
          <div className="lg:w-3/5 p-8">
            <AnimatedCard delay={1200}>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Step 1: Basic Information */}
                {currentStep === 1 && (
                  <div className="space-y-5">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800 mb-1">Create your account</h2>
                      <p className="text-gray-500">Tell us a bit about yourself</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                          First Name *
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <User className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            id="firstName"
                            name="firstName"
                            type="text"
                            required
                            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                            placeholder="John"
                            value={formData.firstName}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                          Last Name *
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <User className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            id="lastName"
                            name="lastName"
                            type="text"
                            required
                            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                            placeholder="Doe"
                            value={formData.lastName}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Phone className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                          placeholder="+234 800 000 0000"
                          value={formData.phone}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                          Password *
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Lock className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            id="password"
                            name="password"
                            type={showPassword ? 'text' : 'password'}
                            required
                            className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                            placeholder="••••••••"
                            value={formData.password}
                            onChange={handleInputChange}
                          />
                          <button
                            type="button"
                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                          </button>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                          Confirm Password *
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Lock className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            id="confirmPassword"
                            name="confirmPassword"
                            type={showConfirmPassword ? 'text' : 'password'}
                            required
                            className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                            placeholder="••••••••"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                          />
                          <button
                            type="button"
                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          >
                            {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                          </button>
                        </div>
                        {formData.password && formData.confirmPassword && formData.password !== formData.confirmPassword && (
                          <p className="mt-1 text-sm text-red-600 flex items-center">
                            <X className="h-4 w-4 mr-1" />
                            Passwords do not match
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Profile Details */}
                {currentStep === 2 && (
                  <div className="space-y-5">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800 mb-1">
                        {userType === 'jobseeker' ? 'Career Information' : 'Company Information'}
                      </h2>
                      <p className="text-gray-500">
                        {userType === 'jobseeker'
                          ? 'Help us match you with the right opportunities'
                          : 'Tell us about your organization'}
                      </p>
                    </div>

                    {userType === 'jobseeker' ? (
                      <>
                        <div>
                          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                            Career Category *
                          </label>
                          <select
                            id="category"
                            name="category"
                            required
                            className="block w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                            value={formData.category}
                            onChange={handleInputChange}
                          >
                            <option value="">Select your category</option>
                            {jobSeekerCategories.map((cat) => (
                              <option key={cat.value} value={cat.value}>{cat.label}</option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                            Location *
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <MapPin className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                              id="location"
                              name="location"
                              type="text"
                              required
                              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                              placeholder="Lagos, Nigeria"
                              value={formData.location}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                            Experience Level *
                          </label>
                          <select
                            id="experience"
                            name="experience"
                            required
                            className="block w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                            value={formData.experience}
                            onChange={handleInputChange}
                          >
                            <option value="">Select your experience level</option>
                            {experienceLevels.map((level) => (
                              <option key={level.value} value={level.value}>{level.label}</option>
                            ))}
                          </select>
                        </div>
                      </>
                    ) : (
                      <>
                        <div>
                          <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                            Company Name *
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <Building className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                              id="companyName"
                              name="companyName"
                              type="text"
                              required
                              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                              placeholder="Company Ltd."
                              value={formData.companyName}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="companySize" className="block text-sm font-medium text-gray-700 mb-1">
                              Company Size *
                            </label>
                            <select
                              id="companySize"
                              name="companySize"
                              required
                              className="block w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                              value={formData.companySize}
                              onChange={handleInputChange}
                            >
                              <option value="">Select company size</option>
                              {companySizes.map((size) => (
                                <option key={size.value} value={size.value}>{size.label}</option>
                              ))}
                            </select>
                          </div>

                          <div>
                            <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-1">
                              Industry *
                            </label>
                            <select
                              id="industry"
                              name="industry"
                              required
                              className="block w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                              value={formData.industry}
                              onChange={handleInputChange}
                            >
                              <option value="">Select industry</option>
                              {industries.map((industry) => (
                                <option key={industry} value={industry}>{industry}</option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div>
                          <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
                            Company Website
                          </label>
                          <input
                            id="website"
                            name="website"
                            type="url"
                            className="block w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                            placeholder="https://company.com"
                            value={formData.website}
                            onChange={handleInputChange}
                          />
                        </div>
                      </>
                    )}
                  </div>
                )}

                {/* Step 3: Terms & Confirmation */}
                {currentStep === 3 && (
                  <div className="space-y-5">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800 mb-1">Review and Confirm</h2>
                      <p className="text-gray-500">Please review your information and accept our terms</p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="flex items-center h-5 mt-0.5">
                          <input
                            id="agreeToTerms"
                            name="agreeToTerms"
                            type="checkbox"
                            required
                            className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                            checked={formData.agreeToTerms}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="agreeToTerms" className="text-gray-700">
                            I agree to the{' '}
                            <a href="#" className="text-green-600 hover:text-green-500 font-medium">
                              Terms of Service
                            </a>{' '}
                            and{' '}
                            <a href="#" className="text-green-600 hover:text-green-500 font-medium">
                              Privacy Policy
                            </a>{' '}
                            *
                          </label>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="flex items-center h-5 mt-0.5">
                          <input
                            id="agreeToMarketing"
                            name="agreeToMarketing"
                            type="checkbox"
                            className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                            checked={formData.agreeToMarketing}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="agreeToMarketing" className="text-gray-700">
                            I would like to receive marketing communications and job alerts via email
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">Account Summary</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div className="space-y-2">
                          <p className="text-gray-600">
                            <span className="font-medium">Name:</span> {formData.firstName} {formData.lastName}
                          </p>
                          <p className="text-gray-600">
                            <span className="font-medium">Email:</span> {formData.email}
                          </p>
                          <p className="text-gray-600">
                            <span className="font-medium">Phone:</span> {formData.phone}
                          </p>
                        </div>
                        <div className="space-y-2">
                          <p className="text-gray-600">
                            <span className="font-medium">Account Type:</span>{' '}
                            {userType === 'jobseeker' ? 'Job Seeker' : 'Employer'}
                          </p>
                          {userType === 'jobseeker' ? (
                            <>
                              <p className="text-gray-600">
                                <span className="font-medium">Category:</span>{' '}
                                {jobSeekerCategories.find((c) => c.value === formData.category)?.label}
                              </p>
                              <p className="text-gray-600">
                                <span className="font-medium">Location:</span> {formData.location}
                              </p>
                            </>
                          ) : (
                            <>
                              <p className="text-gray-600">
                                <span className="font-medium">Company:</span> {formData.companyName}
                              </p>
                              <p className="text-gray-600">
                                <span className="font-medium">Industry:</span> {formData.industry}
                              </p>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-6">
                  {currentStep > 1 && (
                    <ButtonMain
                      type="button"
                      variant="outline"
                      onClick={() => setCurrentStep(currentStep - 1)}
                      className="text-gray-700 hover:bg-gray-50 border-gray-300"
                    >
                      Back
                    </ButtonMain>
                  )}
                  <div className="ml-auto">
                    <ButtonMain
                      type="submit"
                      disabled={!canProceed()}
                      className={`${
                        currentStep === 3
                          ? 'bg-green-700 hover:bg-green-800'
                          : 'bg-green-600 hover:bg-green-700'
                      } text-white shadow-sm px-6 py-3`}
                    >
                      {currentStep === 3 ? 'Create Account' : 'Continue'}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </ButtonMain>
                  </div>
                </div>
              </form>

              <div className="mt-6 text-center text-sm text-gray-500">
                Already have an account?{' '}
                <a href="/login" className="font-medium text-green-600 hover:text-green-500">
                  Sign in
                </a>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </div>
    </div>
  );
}