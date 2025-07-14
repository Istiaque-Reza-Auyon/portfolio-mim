"use client"

import React, { useState, useEffect } from 'react';
import {
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  TrendingUp,
  Users,
  Target,
  BarChart3,
  Globe,
  Sparkles,
  Award,
  PlayCircle,
  Calendar,
  ArrowRight
} from 'lucide-react';

// shadcn/ui components
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const DigitalMarketingPortfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
        }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Fahima Islam Mim
            </div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Portfolio', 'Services', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-300 hover:text-white transition-colors duration-200 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-pulse"></div>
        <div className="text-center z-10 max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1 animate-spin-slow">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                <TrendingUp className="w-16 h-16 text-purple-400" />
              </div>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent animate-fade-in">
            Digital Marketing
          </h1>
          <h2 className="text-3xl md:text-4xl font-light mb-8 text-gray-300">
            Growth Strategist & Brand Architect
          </h2>

          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Transforming brands through data-driven marketing strategies, creative campaigns, and measurable results that drive exponential growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => scrollToSection('portfolio')}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              View My Work
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-3 text-lg font-semibold transition-all duration-300"
            >
              Get In Touch
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-purple-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-r from-slate-800/50 to-purple-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Passionate digital marketing professional with 5+ years of experience driving brand growth through innovative strategies and creative execution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-8 rounded-2xl backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-4 text-purple-300">My Story</h3>
                <p className="text-gray-300 leading-relaxed"> Hello, I'm Fahima Islam, a dedicated YouTube SEO expert passionate about helping creators, brands, and businesses dominate the platform. My mission is to transform your channel into a thriving hub of engagement, views, and subscribers through proven, data-driven strategies. With a focus on maximizing discover ability and growth, I offer a full suite of YouTube SEO services tailored to your unique needs.

                  My YouTube SEO Services: Keyword Research & Strategy, Video Title Optimization, Thumbnail Design & Optimization, Video Description & Tag Optimization, Channel Audit & Growth Strategy, Competitor Analysis, Algorithm Optimization, End Screen & Card Setup, Playlist Creation & Optimization, Analytics & Performance Tracking, Content Strategy Consultation, YouTube Ads Optimization.

                  Whether you're a solo creator, influencer, or business scaling your brand, my expertise in crafting compelling content and leveraging YouTube's algorithm will elevate your channel to new heights. Subscribe for weekly tips, tutorials, and case studies to supercharge your growth. Ready to dominate YouTube? DM me or send email to collaborate and take your channel to the next level!
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 p-6 rounded-xl text-center">
                  <Award className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white">50+</div>
                  <div className="text-gray-300">Projects Completed</div>
                </div>
                <div className="bg-gradient-to-br from-pink-600/20 to-purple-600/20 p-6 rounded-xl text-center">
                  <Users className="w-8 h-8 text-pink-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white">25+</div>
                  <div className="text-gray-300">Happy Clients</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6 text-purple-300">Skills & Expertise</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: TrendingUp, title: 'Growth Marketing', level: '95%' },
                  { icon: Target, title: 'PPC Advertising', level: '90%' },
                  { icon: BarChart3, title: 'Analytics', level: '85%' },
                  { icon: Globe, title: 'SEO/SEM', level: '88%' },
                  { icon: Users, title: 'Social Media', level: '92%' },
                  { icon: Sparkles, title: 'Brand Strategy', level: '90%' }
                ].map((skill, index) => (
                  <div key={index} className="bg-gradient-to-r from-slate-700/50 to-purple-700/50 p-4 rounded-xl">
                    <div className="flex items-center mb-2">
                      <skill.icon className="w-5 h-5 text-purple-400 mr-2" />
                      <span className="text-sm font-medium">{skill.title}</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: skill.level }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Showcasing successful campaigns and projects that delivered exceptional results for my clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-commerce Growth Campaign",
                description: "Increased online sales by 300% through targeted PPC and conversion optimization.",
                results: "+300% Sales Growth",
                category: "E-commerce",
                image: "🛍️",
                metrics: { roi: "450%", clicks: "2.3M", conversions: "15.2%" }
              },
              {
                title: "SaaS Lead Generation",
                description: "Generated 500+ qualified leads per month through strategic content marketing.",
                results: "+500 Leads/Month",
                category: "SaaS",
                image: "💼",
                metrics: { roi: "320%", clicks: "1.8M", conversions: "8.7%" }
              },
              {
                title: "Brand Awareness Campaign",
                description: "Boosted brand recognition by 250% across all social media platforms.",
                results: "+250% Brand Awareness",
                category: "Branding",
                image: "🎨",
                metrics: { roi: "280%", clicks: "3.1M", conversions: "12.1%" }
              },
              {
                title: "Local Business Growth",
                description: "Helped local restaurant chain expand to 5 new locations through digital marketing.",
                results: "+400% Local Reach",
                category: "Local Business",
                image: "🍕",
                metrics: { roi: "380%", clicks: "950K", conversions: "18.5%" }
              },
              {
                title: "Mobile App Launch",
                description: "Achieved 100K+ downloads in first month with multi-channel marketing strategy.",
                results: "100K+ Downloads",
                category: "Mobile",
                image: "📱",
                metrics: { roi: "520%", clicks: "2.7M", conversions: "6.8%" }
              },
              {
                title: "B2B Content Strategy",
                description: "Increased organic traffic by 400% through comprehensive content marketing.",
                results: "+400% Organic Traffic",
                category: "B2B",
                image: "📊",
                metrics: { roi: "290%", clicks: "1.2M", conversions: "14.3%" }
              }
            ].map((project, index) => (
              <Card key={index} className="bg-gradient-to-br from-slate-800/50 to-purple-900/50 border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 group hover:transform hover:scale-105">
                <CardHeader>
                  <div className="text-4xl mb-4">{project.image}</div>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-purple-300 group-hover:text-purple-200">{project.title}</CardTitle>
                    <Badge variant="secondary" className="bg-purple-500/20 text-purple-300">
                      {project.category}
                    </Badge>
                  </div>
                  <CardDescription className="text-gray-400">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-4 rounded-lg">
                      <div className="text-lg font-bold text-purple-300">{project.results}</div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-sm">
                      <div className="text-center">
                        <div className="font-bold text-white">{project.metrics.roi}</div>
                        <div className="text-gray-400">ROI</div>
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-white">{project.metrics.clicks}</div>
                        <div className="text-gray-400">Clicks</div>
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-white">{project.metrics.conversions}</div>
                        <div className="text-gray-400">CVR</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-r from-slate-800/50 to-purple-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive digital marketing solutions tailored to your business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Growth Marketing",
                description: "Data-driven strategies to accelerate your business growth and maximize ROI."
              },
              {
                icon: Target,
                title: "PPC Advertising",
                description: "Targeted campaigns across Google, Facebook, and other platforms for immediate results."
              },
              {
                icon: BarChart3,
                title: "Analytics & Reporting",
                description: "Comprehensive tracking and reporting to measure and optimize campaign performance."
              },
              {
                icon: Globe,
                title: "SEO & Content",
                description: "Organic growth through strategic SEO and compelling content marketing."
              }
            ].map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-700/50 to-purple-700/50 p-8 rounded-2xl text-center hover:transform hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-purple-300">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to take your digital marketing to the next level? Let's discuss how we can grow your business together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-slate-800/50 to-purple-900/50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6 text-purple-300">Get In Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-12 h-12 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Email</div>
                      <div className="text-gray-300">digitalmarketing.fahima01@gmail.com</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-12 h-12 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Phone</div>
                      <div className="text-gray-300">+1 (555) 123-4567</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-12 h-12 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Location</div>
                      <div className="text-gray-300">San Francisco, CA</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-slate-800/50 to-purple-900/50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6 text-purple-300">Follow Me</h3>
                <div className="flex space-x-4">
                  {[
                    { icon: Linkedin, href: "#", color: "from-blue-500 to-blue-600" },
                    { icon: Twitter, href: "#", color: "from-blue-400 to-blue-500" },
                    { icon: Instagram, href: "https://www.instagram.com/p/DMGXeojT0En/?igsh=bGJrbTM1d3VxNW5j", color: "from-pink-500 to-purple-500" },
                    { icon: Github, href: "#", color: "from-gray-600 to-gray-700" }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className={`bg-gradient-to-r ${social.color} w-12 h-12 rounded-full flex items-center justify-center hover:transform hover:scale-110 transition-all duration-300`}
                    >
                      <social.icon className="w-6 h-6 text-white" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-slate-800/50 to-purple-900/50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-purple-300">Send Message</h3>
              <div className="space-y-6">
                <div>
                  <div className="block text-gray-300 mb-2">Name</div>
                  <div className="w-full bg-slate-700/50 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors duration-200">
                    Your Name
                  </div>
                </div>
                <div>
                  <div className="block text-gray-300 mb-2">Email</div>
                  <div className="w-full bg-slate-700/50 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors duration-200">
                    your@email.com
                  </div>
                </div>
                <div>
                  <div className="block text-gray-300 mb-2">Message</div>
                  <div className="w-full bg-slate-700/50 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors duration-200 min-h-[100px]">
                    Tell me about your project...
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 font-semibold transition-all duration-300">
                  Send Message
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 Fahima Islam Mim. All rights reserved. Built with passion for digital excellence.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default DigitalMarketingPortfolio;