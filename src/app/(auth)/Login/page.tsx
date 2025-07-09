'use client'
import { useState } from 'react';
import { Card, CardBody } from '../../(main)/_components/ui/Card';
import { ButtonMain } from '../../(main)/_components/ui/Button';
import { Eye, EyeOff, Mail, Lock, Briefcase, ArrowRight, Shield, Zap, Users, Star } from 'lucide-react';
import { AnimatedCard } from '../../(main)/_components/ui/AnimatedCard';
import { GradientText } from '../../(main)/_components/ui/GradientText';
import { FloatingElements } from '../../(main)/_components/ui/FloatingElements';

export default function  Login(){
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState<'jobseeker' | 'employer'>('jobseeker');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', { ...formData, userType });
  };

  const jobSeekerBenefits = [
    { icon: <Briefcase className="h-5 w-5" />, text: 'Access to 50,000+ job opportunities' },
    { icon: <Star className="h-5 w-5" />, text: 'AI-powered job recommendations' },
    { icon: <Zap className="h-5 w-5" />, text: 'Free skill assessments and development' },
    { icon: <Users className="h-5 w-5" />, text: 'Direct communication with employers' },
  ];

  const employerBenefits = [
    { icon: <Users className="h-5 w-5" />, text: 'Access to 100,000+ verified candidates' },
    { icon: <Zap className="h-5 w-5" />, text: 'Advanced applicant tracking system' },
    { icon: <Star className="h-5 w-5" />, text: 'Targeted job posting and promotion' },
    { icon: <Shield className="h-5 w-5" />, text: 'Dedicated hiring support' },
  ];

  const currentBenefits = userType === 'jobseeker' ? jobSeekerBenefits : employerBenefits;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 relative overflow-hidden">
      <FloatingElements />
      
      <div className="flex items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left side - Branding and benefits */}
          <div className="hidden lg:block">
            <AnimatedCard delay={200} direction="left">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-6">
                  <div className="bg-gradient-to-r from-blue-600 to-green-600 p-4 rounded-2xl">
                    <Briefcase className="h-10 w-10 text-white" />
                  </div>
                  <div className="ml-4">
                    <h1 className="text-3xl font-bold text-gray-900">Career Connect</h1>
                    <p className="text-gray-600">Your Gateway to Success</p>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-3">
                  Welcome Back to Your{' '}
                  <GradientText gradient="rainbow">Career Journey</GradientText>
                </h2>

                <p className="text-xl text-gray-600 mb-4 leading-relaxed">
                  Join over 150,000 professionals who trust Career Connect to advance their careers and find the perfect opportunities.
                </p>

                {/* Benefits showcase */}
                <div className="space-y-4 mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    {userType === 'jobseeker' ? 'Job Seeker Benefits:' : 'Employer Benefits:'}
                  </h3>
                  {currentBenefits.map((benefit, index) => (
                    <AnimatedCard key={index} delay={600 + index * 100} direction="left">
                      <div className="flex items-center p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 group">
                        <div className="text-blue-600 mr-4 group-hover:scale-110 transition-transform">
                          {benefit.icon}
                        </div>
                        <span className="text-gray-700 font-medium">{benefit.text}</span>
                      </div>
                    </AnimatedCard>
                  ))}
                </div>

                {/* Success stats */}
                <AnimatedCard delay={1000} direction="up">
                  <div className="grid grid-cols-3 gap-2 px-6 py-1.5 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl border border-blue-200">
                    <div className="text-center">
                      <div className="text-xl font-bold text-blue-600">92%</div>
                      <div className="text-sm text-gray-600">Success Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-green-600">30 days</div>
                      <div className="text-sm text-gray-600">Avg. Job Find</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-orange-600">4.9/5</div>
                      <div className="text-sm text-gray-600">User Rating</div>
                    </div>
                  </div>
                </AnimatedCard>
              </div>
            </AnimatedCard>
          </div>

          {/* Right side - Login form */}
          <div className="w-full max-w-md mx-auto lg:mx-0">
            <AnimatedCard delay={400} direction="right">
              <div className="text-center mb-8 lg:hidden">
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-r from-blue-600 to-green-600 p-3 rounded-full">
                    <Briefcase className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Welcome Back</h2>
                <p className="mt-2 text-gray-600">Sign in to your Career Connect account</p>
              </div>

              {/* User Type Toggle */}
              <div className="flex justify-center mb-8">
                <div className="bg-white rounded-xl p-1 shadow-lg border border-gray-200">
                  <button
                    type="button"
                    className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                      userType === 'jobseeker'
                        ? 'bg-gradient-to-r from-blue-600 to-green-600 text-white shadow-lg transform scale-105'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                    onClick={() => setUserType('jobseeker')}
                  >
                    Job Seeker
                  </button>
                  <button
                    type="button"
                    className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                      userType === 'employer'
                        ? 'bg-gradient-to-r from-blue-600 to-green-600 text-white shadow-lg transform scale-105'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                    onClick={() => setUserType('employer')}
                  >
                    Employer
                  </button>
                </div>
              </div>

              {/* Login Form */}
              <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
                <CardBody className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Email Field */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
                        </div>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          className="block w-full pl-10 pr-3 py-3 border-2 border-gray-200 rounded-xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    {/* Password Field */}
                    <div>
                      <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                        Password
                      </label>
                      <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
                        </div>
                        <input
                          id="password"
                          name="password"
                          type={showPassword ? 'text' : 'password'}
                          autoComplete="current-password"
                          required
                          className="block w-full pl-10 pr-12 py-3 border-2 border-gray-200 rounded-xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                          placeholder="Enter your password"
                          value={formData.password}
                          onChange={handleInputChange}
                        />
                        <button
                          type="button"
                          className="absolute inset-y-0 right-0 pr-3 flex items-center hover:text-blue-600 transition-colors"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeOff className="h-5 w-5 text-gray-400" />
                          ) : (
                            <Eye className="h-5 w-5 text-gray-400" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Remember Me & Forgot Password */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input
                          id="rememberMe"
                          name="rememberMe"
                          type="checkbox"
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          checked={formData.rememberMe}
                          onChange={handleInputChange}
                        />
                        <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-700">
                          Remember me
                        </label>
                      </div>
                      <div className="text-sm">
                        <a href="#" className="font-medium text-blue-600 hover:text-blue-500 transition-colors">
                          Forgot your password?
                        </a>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <ButtonMain
                      type="submit" 
                      fullWidth 
                      size="lg"
                      className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg font-semibold"
                    >
                      Sign In
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </ButtonMain>

                    {/* Divider */}
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300" />
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-500">Or continue with</span>
                      </div>
                    </div>

                    {/* Social Login Buttons */}
                    <div className="grid grid-cols-2 gap-3">
                      <ButtonMain 
                        variant="outline" 
                        type="button" 
                        className="flex items-center justify-center hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                      >
                        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                          <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                          <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                          <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                          <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                        </svg>
                        Google
                      </ButtonMain>
                      <ButtonMain 
                        variant="outline" 
                        type="button" 
                        className="flex items-center justify-center hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                      >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                        Facebook
                      </ButtonMain>
                    </div>
                  </form>
                </CardBody>
              </Card>

              {/* Sign Up Link */}
              <div className="text-center mt-6">
                <p className="text-gray-600">
                  Don't have an account?{' '}
                  <a href="/signup" className="font-medium text-blue-600 hover:text-blue-500 transition-colors">
                    Sign up for free
                  </a>
                </p>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </div>
    </div>
  );
};