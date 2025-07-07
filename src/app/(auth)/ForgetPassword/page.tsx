'use client'; // This makes the entire page a Client Component

import { useState, FormEvent } from 'react';
import { Mail, ArrowLeft, CheckCircle, Briefcase } from 'lucide-react';
import { Card, CardBody } from '../../(main)/_components/ui/Card';
import { ButtonMain } from '../../(main)/_components/ui/Button';
import { AnimatedCard } from '../../(main)/_components/ui/AnimatedCard';
import { GradientText } from '../../(main)/_components/ui/GradientText';
import { FloatingElements } from '../../(main)/_components/ui/FloatingElements';


export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 relative overflow-hidden">
      <FloatingElements />

      <div className="flex items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-md w-full">
          <AnimatedCard delay={200}>
            <div className="text-center mb-8">
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-4 rounded-2xl shadow-lg">
                  <Briefcase className="h-10 w-10 text-white" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                {isSubmitted ? 'Check Your Email' : 'Forgot Password?'}
              </h2>
              <p className="text-gray-600">
                {isSubmitted
                  ? "We've sent password reset instructions to your email"
                  : "No worries! Enter your email and we'll send you reset instructions"}
              </p>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={400}>
            <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
              <CardBody className="p-8">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
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
                          placeholder="Enter your email address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>

                    <ButtonMain
                      type="submit"
                      size="lg"
                      disabled={isLoading}
                      className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 shadow-lg font-semibold"
                    >
                      {isLoading ? (
                        <div className="flex items-center">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Sending...
                        </div>
                      ) : (
                        'Send Reset Instructions'
                      )}
                    </ButtonMain>
                  </form>
                ) : (
                  <div className="text-center space-y-6">
                    <div className="flex justify-center">
                      <div className="bg-green-100 p-4 rounded-full">
                        <CheckCircle className="h-12 w-12 text-green-600" />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Sent!</h3>
                      <p className="text-gray-600 mb-4">
                        We've sent password reset instructions to <strong>{email}</strong>
                      </p>
                      <p className="text-sm text-gray-500">
                        Didn't receive the email? Check your spam folder or try again.
                      </p>
                    </div>

                    <div className="space-y-3">
                      <ButtonMain
                        size="lg"
                        onClick={() => setIsSubmitted(false)}
                        className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 shadow-lg font-semibold"
                      >
                        Try Different Email
                      </ButtonMain>

                      <ButtonMain
                        variant="outline"
                        size="lg"
                        onClick={() => (window.location.href = '/login')}
                        className="hover:shadow-lg transition-all duration-300"
                      >
                        <ArrowLeft className="mr-2 h-5 w-5" />
                        Back to Login
                      </ButtonMain>
                    </div>
                  </div>
                )}
              </CardBody>
            </Card>
          </AnimatedCard>

          {!isSubmitted && (
            <AnimatedCard delay={600}>
              <div className="text-center mt-6">
                <a
                  href="/login"
                  className="inline-flex items-center text-blue-600 hover:text-blue-500 font-medium transition-colors"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Login
                </a>
              </div>
            </AnimatedCard>
          )}

          <AnimatedCard delay={800}>
            <div className="mt-8 text-center">
              <Card className="bg-gradient-to-r from-blue-50 to-teal-50 border-blue-200">
                <CardBody className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Need Help?</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    If you're still having trouble accessing your account, our support team is here to help.
                  </p>
                  <ButtonMain variant="outline" size="sm">
                    Contact Support
                  </ButtonMain>
                </CardBody>
              </Card>
            </div>
          </AnimatedCard>
        </div>
      </div>
    </div>
  );
}
