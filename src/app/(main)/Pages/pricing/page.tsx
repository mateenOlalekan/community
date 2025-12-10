'use client'
import React, { useState } from 'react';
import { Card, CardBody, CardHeader } from '../../_components/ui/Card';
import  Button  from '../../_components/ui/Button';
import { Badge } from '../../_components/ui/Badge';
import { Check, X, Star, Zap, Crown, Shield } from 'lucide-react';

interface PricingPlan {
  id: string;
  name: string;
  icon: React.ReactNode;
  price: number;
  period: string;
  description: string;
  features: string[];
  limitations: string[];
  popular: boolean;
  recommended: boolean;
  buttonText: string;
  buttonVariant: 'primary' | 'accent' | 'secondary';
}

const jobSeekerPlans: PricingPlan[] = [
  {
    id: 'basic',
    name: 'Basic',
    icon: <Shield className="h-6 w-6" />,
    price: 0,
    period: 'Forever',
    description: 'Perfect for getting started with your job search',
    features: [
      'Create and manage your profile',
      'Apply to up to 10 jobs per month',
      'Basic skill assessments',
      'Access to community forum',
      'Email job alerts',
      'Basic career resources'
    ],
    limitations: [
      'Limited to 10 job applications per month',
      'No priority support',
      'Basic profile visibility'
    ],
    popular: false,
    recommended: false,
    buttonText: 'Get Started Free',
    buttonVariant: 'primary'
  },
  {
    id: 'premium',
    name: 'Premium',
    icon: <Star className="h-6 w-6" />,
    price: 2500,
    period: 'month',
    description: 'Enhanced features for serious job seekers',
    features: [
      'Everything in Basic',
      'Unlimited job applications',
      'Priority profile visibility',
      'Advanced skill assessments',
      'Resume review service',
      'Interview preparation resources',
      'Direct messaging with employers',
      'Priority customer support',
      'Career counseling session (1 per month)'
    ],
    limitations: [
      'Limited to 1 career counseling session per month'
    ],
    popular: true,
    recommended: true,
    buttonText: 'Start Premium',
    buttonVariant: 'accent'
  },
  {
    id: 'professional',
    name: 'Professional',
    icon: <Crown className="h-6 w-6" />,
    price: 5000,
    period: 'month',
    description: 'Complete career development package',
    features: [
      'Everything in Premium',
      'Unlimited career counseling sessions',
      'Personal career coach assignment',
      'Professional resume writing service',
      'LinkedIn profile optimization',
      'Interview coaching sessions',
      'Salary negotiation guidance',
      'Industry networking events access',
      'Job search strategy development',
      'Priority job matching'
    ],
    limitations: [],
    popular: false,
    recommended: false,
    buttonText: 'Go Professional',
    buttonVariant: 'secondary'
  }
];

const employerPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    icon: <Shield className="h-6 w-6" />,
    price: 15000,
    period: 'month',
    description: 'Perfect for small businesses and startups',
    features: [
      'Post up to 3 jobs per month',
      'Access to candidate database',
      'Basic applicant tracking',
      'Email support',
      'Job posting for 30 days',
      'Basic company profile'
    ],
    limitations: [
      'Limited to 3 job postings per month',
      'Basic candidate search filters',
      'No priority placement'
    ],
    popular: false,
    recommended: false,
    buttonText: 'Start Hiring',
    buttonVariant: 'primary'
  },
  {
    id: 'growth',
    name: 'Growth',
    icon: <Zap className="h-6 w-6" />,
    price: 35000,
    period: 'month',
    description: 'Ideal for growing companies with regular hiring needs',
    features: [
      'Post up to 10 jobs per month',
      'Advanced candidate search filters',
      'Priority job placement',
      'Applicant tracking system',
      'Team collaboration tools',
      'Phone and email support',
      'Job posting for 60 days',
      'Enhanced company profile',
      'Candidate screening tools',
      'Interview scheduling system'
    ],
    limitations: [
      'Limited to 10 job postings per month'
    ],
    popular: true,
    recommended: true,
    buttonText: 'Choose Growth',
    buttonVariant: 'accent'
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    icon: <Crown className="h-6 w-6" />,
    price: 75000,
    period: 'month',
    description: 'Complete hiring solution for large organizations',
    features: [
      'Unlimited job postings',
      'Premium candidate database access',
      'Top priority job placement',
      'Advanced analytics and reporting',
      'Dedicated account manager',
      'Custom integrations',
      'White-label solutions',
      'Bulk candidate messaging',
      'Advanced screening tools',
      'Custom workflows',
      'API access',
      '24/7 priority support'
    ],
    limitations: [],
    popular: false,
    recommended: false,
    buttonText: 'Contact Sales',
    buttonVariant: 'secondary'
  }
];

export const PricingPlans: React.FC = () => {
  const [userType, setUserType] = useState<'jobseeker' | 'employer'>('jobseeker');
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annually'>('monthly');

  const currentPlans = userType === 'jobseeker' ? jobSeekerPlans : employerPlans;

  const getDiscountedPrice = (price: number) => {
    return billingPeriod === 'annually' ? Math.round(price * 0.8) : price;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Plan</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Select the perfect plan to accelerate your career or find the best talent for your organization.
          </p>
        </div>

        {/* User Type Toggle */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-md">
            <button
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                userType === 'jobseeker'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              onClick={() => setUserType('jobseeker')}
            >
              Job Seekers
            </button>
            <button
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                userType === 'employer'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              onClick={() => setUserType('employer')}
            >
              Employers
            </button>
          </div>
        </div>

        {/* Billing Period Toggle */}
        {userType === 'employer' && (
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-lg p-1 shadow-md">
              <button
                className={`px-4 py-2 rounded-md font-medium transition-colors ${
                  billingPeriod === 'monthly'
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                onClick={() => setBillingPeriod('monthly')}
              >
                Monthly
              </button>
              <button
                className={`px-4 py-2 rounded-md font-medium transition-colors relative ${
                  billingPeriod === 'annually'
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                onClick={() => setBillingPeriod('annually')}
              >
                Annually
                <Badge variant="success" size="sm" className="absolute -top-2 -right-2">
                  20% off
                </Badge>
              </button>
            </div>
          </div>
        )}

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {currentPlans.map((plan) => (
            <Card 
              key={plan.id} 
              className={`relative ${
                plan.recommended 
                  ? 'ring-2 ring-orange-500 shadow-xl transform scale-105' 
                  : plan.popular 
                    ? 'ring-2 ring-blue-500 shadow-lg' 
                    : 'shadow-md'
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge variant="accent\" className="px-4 py-1">
                    Recommended
                  </Badge>
                </div>
              )}
              {plan.popular && !plan.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge variant="primary" className="px-4 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className={`p-3 rounded-full ${
                    plan.recommended ? 'bg-orange-100 text-orange-600' :
                    plan.popular ? 'bg-blue-100 text-blue-600' :
                    'bg-gray-100 text-gray-600'
                  }`}>
                    {plan.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                <p className="text-gray-600 mt-2">{plan.description}</p>
              </CardHeader>
              
              <CardBody>
                <div className="text-center mb-6">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">
                      ₦{getDiscountedPrice(plan.price).toLocaleString()}
                    </span>
                    {plan.price > 0 && (
                      <span className="text-gray-600 ml-1">
                        /{billingPeriod === 'annually' ? 'year' : plan.period}
                      </span>
                    )}
                  </div>
                  {billingPeriod === 'annually' && plan.price > 0 && (
                    <p className="text-sm text-gray-500 mt-1">
                      <span className="line-through">₦{(plan.price * 12).toLocaleString()}</span>
                      <span className="text-green-600 ml-1">Save 20%</span>
                    </p>
                  )}
                </div>

                <div className="space-y-3 mb-6">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                  {plan.limitations.map((limitation, index) => (
                    <div key={index} className="flex items-start">
                      <X className="h-5 w-5 text-red-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-500">{limitation}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant={plan.buttonVariant}
                  fullWidth
                  size="lg"
                  className={plan.recommended ? 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700' : ''}
                >
                  {plan.buttonText}
                </Button>
              </CardBody>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <Card className="mb-12">
          <CardHeader>
            <h2 className="text-2xl font-bold text-center">Frequently Asked Questions</h2>
          </CardHeader>
          <CardBody>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Can I change my plan anytime?</h3>
                  <p className="text-gray-600">Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Is there a free trial available?</h3>
                  <p className="text-gray-600">Job seekers can use our Basic plan forever for free. Employers can try our Growth plan free for 14 days.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">What payment methods do you accept?</h3>
                  <p className="text-gray-600">We accept all major credit cards, bank transfers, and mobile money payments including MTN Mobile Money and Airtel Money.</p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Do you offer refunds?</h3>
                  <p className="text-gray-600">Yes, we offer a 30-day money-back guarantee for all paid plans if you're not satisfied with our service.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Is my data secure?</h3>
                  <p className="text-gray-600">Absolutely. We use enterprise-grade security measures to protect your data and comply with international privacy standards.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Can I get a custom plan?</h3>
                  <p className="text-gray-600">Yes, we offer custom enterprise solutions for large organizations. Contact our sales team to discuss your specific needs.</p>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Contact Section */}
        <Card className="bg-gradient-to-r from-blue-50 to-teal-50">
          <CardBody>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h3>
              <p className="text-gray-600 mb-6">
                Our team is here to help you choose the right plan for your needs.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                <Button size="lg">Contact Sales</Button>
                <Button variant="outline" size="lg">Schedule Demo</Button>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};