"use client";
import { useState, useEffect, useRef } from 'react';
import { Menu, X, Search, Bell, Briefcase, BookOpen, Users, ChevronDown, HelpCircle, Star } from 'lucide-react';
import  ButtonMain  from '../ui/Button';

import { Avatar } from '../ui/Avatar';
import Link from 'next/link';

interface NavbarProps {
  userLoggedIn?: boolean;
  userName?: string;
  userAvatar?: string;
}

interface DropdownItem {
  name: string;
  href: string;
  description: string;
}

interface NavItem {
  name: string;
  href: string;
  icon: React.ReactNode;
  dropdown: boolean;
  dropdownItems?: DropdownItem[];
  featured?: boolean;
}

export const Navbar = ({ userLoggedIn, userName, userAvatar }: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [searchFocused, setSearchFocused] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node) && mobileMenuOpen) {
        closeMobileMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navItems: NavItem[] = [
    { 
      name: 'Jobs', 
      href: '/jobs', 
      icon: <Briefcase className="h-4 w-4" />,
      dropdown: true,
      dropdownItems: [
        { name: 'Browse Jobs', href: '/jobs/browse', description: 'Find your next career opportunity' },
        { name: 'Job Alerts', href: '/jobs/alerts', description: 'Get notified about new jobs' },
        { name: 'Salary Calculator', href: '/jobs/salary', description: 'Compare salaries in your field' },
        { name: 'Career Advice', href: '/jobs/advice', description: 'Tips for your job search' }
      ]
    },
    { 
      name: 'Find Talent', 
      href: '/talent', 
      icon: <Users className="h-4 w-4" />,
      dropdown: true,
      dropdownItems: [
        { name: 'Search Candidates', href: '/talent/searchCandidates', description: 'Find qualified professionals' },
        { name: 'Post a Job', href: '/talent/postaJob', description: 'Attract top talent' },
        { name: 'Recruitment Solutions', href: '/talent/recruitmentSolutions', description: 'Enterprise hiring tools' },
        { name: 'Employer Resources', href: '/talent/employerResources', description: 'Hiring guides and tips' }
      ]
    },
    { 
      name: 'Learn', 
      href: '/learn', 
      icon: <BookOpen className="h-4 w-4" />,
      dropdown: true,
      dropdownItems: [
        { name: 'Courses', href: '/learn/courses', description: 'Upskill with expert-led courses' },
        { name: 'Certifications', href: '/learn/certifications', description: 'Validate your skills' },
        { name: 'Career Paths', href: '/learn/paths', description: 'Structured learning journeys' },
        { name: 'Webinars', href: '/learn/webinars', description: 'Live expert sessions' }
      ]
    },
    { 
      name: 'How It Works', 
      href: '/how-it-works', 
      icon: <HelpCircle className="h-4 w-4" />,
      dropdown: false
    },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 sticky top-0 z-50" ref={navRef}>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center group">
              <Link href="/">
                <div className="bg-gradient-to-r from-green-600 to-green-500 p-2 rounded-xl mr-3 group-hover:scale-110 transition-transform duration-300">
                  <Briefcase className="h-6 w-6 text-white" />
                </div>
              </Link>
              <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
                Career
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="  md:ml-8 lg:flex hidden md:space-x-1 relative">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <div 
                    className={`flex items-center text-gray-700 hover:text-green-600 px-2 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-green-50 cursor-pointer ${activeDropdown === item.name ? 'text-green-600 bg-green-50' : ''}`}
                    onClick={() => item.dropdown ? toggleDropdown(item.name) : null}
                  >
                    {item.icon && (
                      <span className="mr-2 group-hover:scale-110 transition-transform">
                        {item.icon}
                      </span>
                    )}
                    {item.name}
                    {item.dropdown && (
                      <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                    )}
                  </div>
                  
                  {/* Dropdown Menu */}
                  {item.dropdown && activeDropdown === item.name && (
                    <div className="absolute left-0 mt-1 w-72 origin-top-left rounded-xl bg-white shadow-lg ring-1 ring-gray-200 focus:outline-none z-50 animate-fadeIn">
                      <div className="py-2 px-3">
                        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-2 pt-2">
                          {item.name} Resources
                        </h3>
                        {item.dropdownItems?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="group flex items-center px-3 py-3 text-sm rounded-lg hover:bg-green-50 transition-colors"
                          >
                            <div className="flex-1 min-w-0">
                              <p className="font-medium text-gray-900 group-hover:text-green-600 truncate">
                                {dropdownItem.name}
                              </p>
                              <p className="text-xs text-gray-500 truncate">
                                {dropdownItem.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Right Side */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Search Bar */}
            <div className={`relative transition-all duration-300 ${searchFocused ? 'w-80' : 'w-64'}`}>
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className={`h-5 w-5 transition-colors ${searchFocused ? 'text-green-600' : 'text-gray-400'}`} />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border-2 border-gray-200 rounded-xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
                placeholder="Search jobs, skills, candidates..."
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
              />
            </div>

            {userLoggedIn ? (
              <div className="flex items-center space-x-3">
                {/* Premium Button */}
                <ButtonMain 
                  variant="outline" 
                  className="hidden lg:flex items-center text-sm font-medium text-amber-700 hover:bg-amber-50 rounded-lg px-3 py-2 transition-colors border border-amber-200"
                >
                  <Star className="h-4 w-4 mr-1 fill-amber-400" />
                  Upgrade
                </ButtonMain>

                {/* Notifications */}
                <button className="relative p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-300">
                  <Bell className="h-6 w-6" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                </button>

                {/* User Menu */}
                <div className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded-lg transition-all duration-300 cursor-pointer group">
                  <Avatar src={userAvatar} name={userName} size="sm" />
                  <div className="hidden lg:block">
                    <span className="text-sm font-medium text-gray-700 group-hover:text-green-600 transition-colors">
                      {userName}
                    </span>
                  </div>
                  <ChevronDown className="h-4 w-4 text-gray-400 group-hover:text-green-600 transition-colors" />
                </div>
              </div>
            ) : (
<div className="flex space-x-4 items-center">
  <Link href="/login"  className="px-5 py-2 rounded-md border border-gray-300 text-gray-700 hover:border-green-500 hover:text-green-600 hover:bg-green-50 transition-all duration-300 text-sm font-medium">
      Log In
  </Link>

  <Link href="/register"  className="px-5 py-2 rounded-md bg-gradient-to-r from-green-600 to-green-500 text-white hover:from-green-700 hover:to-green-600 hover:shadow-md transform hover:scale-105 transition-all duration-300 text-sm font-medium shadow" >
      Sign Up
  </Link>
</div>

            )}
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-500 hover:text-gray-600 focus:outline-none p-2 rounded-lg hover:bg-gray-100 transition-all duration-300"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Slides from right */}
      <div 
        className={`md:hidden fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-white shadow-xl transform ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}
        ref={mobileMenuRef}
      >
        <div className="flex flex-col h-full overflow-y-auto">
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center group">
                <div className="bg-gradient-to-r from-green-600 to-green-500 p-2 rounded-xl mr-3">
                  <Briefcase className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
                  CareerConnect
                </span>
              </div>
              <button
                onClick={closeMobileMenu}
                className="text-gray-400 hover:text-gray-500 p-1 rounded-full hover:bg-gray-100"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>

          <div className="flex-1 px-6 py-4 space-y-6">
            {/* Mobile Search */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="Search jobs, skills..."
              />
            </div>

            {/* Mobile Navigation */}
            <div className="space-y-2">
              {navItems.map((item) => (
                <div key={item.name} className="border-b border-gray-100 last:border-0 pb-2">
                  <div 
                    className={`flex justify-between items-center text-gray-700 hover:bg-green-50 hover:text-green-600 px-3 py-3 rounded-lg text-base font-medium transition-all duration-300 ${activeDropdown === item.name ? 'text-green-600 bg-green-50' : ''}`}
                    onClick={() => item.dropdown ? toggleDropdown(item.name) : null}
                  >
                    <div className="flex items-center">
                      {item.icon && (
                        <span className="mr-3">
                          {item.icon}
                        </span>
                      )}
                      {item.name}
                    </div>
                    {item.dropdown && (
                      <ChevronDown className={`h-5 w-5 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                    )}
                  </div>
                  
                  {/* Mobile Dropdown */}
                  {item.dropdown && activeDropdown === item.name && (
                    <div className="ml-8 mt-1 space-y-2">
                      {item.dropdownItems?.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block px-3 py-3 text-sm rounded-lg hover:bg-green-50 transition-colors border-l-2 border-green-100"
                          onClick={closeMobileMenu}
                        >
                          <p className="font-medium text-gray-900">{dropdownItem.name}</p>
                          <p className="text-xs text-gray-500 mt-1">{dropdownItem.description}</p>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Auth */}
          <div className="px-6 py-6 bg-gray-50">
            {userLoggedIn ? (
              <div className="space-y-4">
                <ButtonMain variant="outline" className="flex items-center justify-center">
                  <Star className="h-4 w-4 mr-2 fill-amber-400" />
                  Upgrade to Premium
                </ButtonMain>
                <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
                  <Avatar src={userAvatar} name={userName} size="sm" />
                  <div>
                    <span className="text-sm font-medium text-gray-700">{userName}</span>
                    <p className="text-xs text-gray-500">View Profile</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                <ButtonMain 
                  variant="outline" 
                  className="hover:bg-green-50 hover:border-green-300 hover:text-green-600"
                  onClick={closeMobileMenu}
                >
                  Log In
                </ButtonMain>
                <ButtonMain 
                  className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600"
                  onClick={closeMobileMenu}
                >
                  Sign Up
                </ButtonMain>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={closeMobileMenu}
        />
      )}
    </nav>
  );
}