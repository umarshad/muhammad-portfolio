// Portfolio v1.0.2 - Updated with Google Play Store button
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Code,
  Smartphone,
  Database,
  Globe,
  ArrowDown,
  Star,
  ExternalLink,
  Send,
  CheckCircle,
  ChevronUp,
  ChevronDown,
  Building2,
  X,
  Menu,
  Home,
  Play
} from "lucide-react";

function App() {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedScreenshot, setSelectedScreenshot] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [expandedProjects, setExpandedProjects] = useState<{ [key: string]: boolean }>({});
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobileHeaderOpen, setIsMobileHeaderOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [expandedExperience, setExpandedExperience] = useState<{ [key: string]: boolean }>({});
  const [expandedFeaturedProjects, setExpandedFeaturedProjects] = useState<{ [key: string]: boolean }>({});
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const fullText = "Flutter Developer";

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  // Loading screen effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds loading screen

    return () => clearTimeout(timer);
  }, []);

  // Mouse tracking effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);


  // Scroll spy effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'experience', 'projects', 'freelance', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* Floating Tech Icons */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Flutter Icon */}
        <motion.div
          className="absolute top-20 left-10 w-8 h-8 opacity-20"
          animate={{
            x: (mousePosition.x - window.innerWidth / 2) * 0.02,
            y: (mousePosition.y - window.innerHeight / 2) * 0.02,
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <img
            src="https://storage.googleapis.com/cms-storage-bucket/icon_flutter.4fd5520fe28ebf839174.svg"
            alt="Flutter"
            className="w-full h-full"
          />
        </motion.div>

        {/* Code Icon */}
        <motion.div
          className="absolute top-40 right-20 w-6 h-6 opacity-15"
          animate={{
            x: (mousePosition.x - window.innerWidth / 2) * 0.03,
            y: (mousePosition.y - window.innerHeight / 2) * 0.03,
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          <Code className="w-full h-full text-blue-400" />
        </motion.div>

        {/* Database Icon */}
        <motion.div
          className="absolute top-60 left-1/4 w-7 h-7 opacity-10"
          animate={{
            x: (mousePosition.x - window.innerWidth / 2) * 0.025,
            y: (mousePosition.y - window.innerHeight / 2) * 0.025,
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        >
          <Database className="w-full h-full text-green-400" />
        </motion.div>

        {/* Smartphone Icon */}
        <motion.div
          className="absolute top-80 right-1/3 w-5 h-5 opacity-20"
          animate={{
            x: (mousePosition.x - window.innerWidth / 2) * 0.035,
            y: (mousePosition.y - window.innerHeight / 2) * 0.035,
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <Smartphone className="w-full h-full text-purple-400" />
        </motion.div>

        {/* Globe Icon */}
        <motion.div
          className="absolute top-96 left-1/2 w-6 h-6 opacity-15"
          animate={{
            x: (mousePosition.x - window.innerWidth / 2) * 0.02,
            y: (mousePosition.y - window.innerHeight / 2) * 0.02,
            rotate: [0, 360, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Globe className="w-full h-full text-cyan-400" />
        </motion.div>

        {/* Additional floating elements */}
        <motion.div
          className="absolute top-32 right-10 w-4 h-4 bg-red-500/20 rounded-full"
          animate={{
            x: (mousePosition.x - window.innerWidth / 2) * 0.04,
            y: (mousePosition.y - window.innerHeight / 2) * 0.04,
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-72 left-20 w-3 h-3 bg-blue-500/20 rounded-full"
          animate={{
            x: (mousePosition.x - window.innerWidth / 2) * 0.03,
            y: (mousePosition.y - window.innerHeight / 2) * 0.03,
            scale: [1, 2, 1],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />
        <motion.div
          className="absolute top-52 right-1/4 w-5 h-5 bg-green-500/20 rounded-full"
          animate={{
            x: (mousePosition.x - window.innerWidth / 2) * 0.025,
            y: (mousePosition.y - window.innerHeight / 2) * 0.025,
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        />
      </div>

      {/* Loading Splash Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 z-50 flex items-center justify-center overflow-hidden"
          >
            {/* Animated Background */}
            <div className="absolute inset-0">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-3xl"
              />
              <motion.div
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.4, 0.7, 0.4]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-3xl"
              />
            </div>

            <div className="text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
              {/* Logo */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="mb-6 sm:mb-8 lg:mb-10 mt-12 sm:mt-16 lg:mt-20"
              >
                <div className="relative">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-24 h-24 sm:w-32 sm:h-32 lg:w-36 lg:h-36 mx-auto rounded-full border-2 border-white/30 flex items-center justify-center"
                  >
                    <div className="w-16 h-16 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-2xl">
                      <img
                        src="https://storage.googleapis.com/cms-storage-bucket/icon_flutter.4fd5520fe28ebf839174.svg"
                        alt="Flutter"
                        className="w-8 h-8 sm:w-12 sm:h-12 lg:w-14 lg:h-14 filter brightness-0 invert"
                      />
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Typography */}
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="mb-6 sm:mb-8 lg:mb-10"
              >
                <motion.h1
                  className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl font-black text-white mb-3 sm:mb-4 lg:mb-5 tracking-tight leading-tight"
                  style={{
                    fontFamily: 'Inter, system-ui, sans-serif',
                    textShadow: '0 0 30px rgba(239, 68, 68, 0.5)'
                  }}
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  Muhammad
                </motion.h1>

                {/* Animated Divider */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "200px" }}
                  transition={{ duration: 1.5, delay: 1.2 }}
                  className="h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-white/60 to-transparent mx-auto mb-4 sm:mb-6 lg:mb-6 rounded-full"
                />

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1.5 }}
                  className="text-xl sm:text-2xl md:text-3xl lg:text-3xl text-white font-light tracking-widest"
                  style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                >
                  Flutter Developer
                </motion.p>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 1.8 }}
                className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-300 mb-6 sm:mb-8 lg:mb-6 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed font-light px-4"
                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
              >
                Building high quality mobile and web apps for 7 years, expert in firebase & API integration, creating fast, scalable, and user friendly experiences.
              </motion.p>

              {/* Loading Animation */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 2.2 }}
                className="flex flex-col items-center space-y-4 sm:space-y-6 lg:space-y-4"
              >
                {/* Loading Spinner */}
                <div className="relative">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="w-12 h-12 sm:w-16 sm:h-16 lg:w-18 lg:h-18 border-4 border-white/20 border-t-blue-400 rounded-full"
                  />
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 w-12 h-12 sm:w-16 sm:h-16 lg:w-18 lg:h-18 border-4 border-transparent border-r-purple-400 rounded-full"
                  />
                </div>

                {/* Loading Text */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 2.5 }}
                  className="text-center"
                >
                  <motion.p
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="text-sm sm:text-base lg:text-base text-gray-400 font-medium tracking-widest uppercase mb-3 sm:mb-4 lg:mb-4"
                    style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                  >
                    Loading Portfolio
                  </motion.p>

                  {/* Progress Bar */}
                  <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 2.8 }}
                    className="w-64 sm:w-80 lg:w-80 h-1 sm:h-2 bg-white/10 rounded-full overflow-hidden shadow-inner mx-auto"
                  >
                    <motion.div
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 2.2, ease: "easeInOut" }}
                      className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-lg"
                    />
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Footer */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 3.2 }}
                className="mt-6 sm:mt-8 lg:mt-8"
              >
                <p
                  className="text-xs sm:text-sm lg:text-sm text-gray-500 font-light tracking-widest"
                  style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                >
                  © 2024 Muhammad • Flutter Developer
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Layout - Split Screen */}
      <div className="flex flex-col lg:flex-row h-screen">
        {/* Mobile Header - Professional Design */}
        <div className={`lg:hidden fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-gray-900 via-black to-gray-800 border-b border-white/10 backdrop-blur-md ${isLoading ? 'hidden' : ''}`}>
          <div className="flex items-center justify-between px-4 py-3">
            {/* Logo/Name */}
            <div className="flex items-center gap-3">
              <div>
                <h1 className="text-white font-bold text-lg">Muhammad</h1>
                <div className="flex items-center gap-1">
                  <img
                    src="https://storage.googleapis.com/cms-storage-bucket/icon_flutter.4fd5520fe28ebf839174.svg"
                    alt="Flutter"
                    className="w-3 h-3"
                  />
                  <p className="text-gray-400 text-xs">Flutter Developer</p>
                </div>
              </div>
            </div>

            {/* Navigation Toggle */}
            <button
              onClick={() => setIsMobileHeaderOpen(!isMobileHeaderOpen)}
              className="p-2 bg-white/10 rounded-lg text-white hover:bg-white/20 transition-colors border border-white/20"
            >
              {isMobileHeaderOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Collapsible Header */}
        <AnimatePresence>
          {isMobileHeaderOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="lg:hidden w-full bg-gradient-to-br from-gray-900 via-black to-gray-800 border-b border-white/10 mt-16"
            >
              <div className="px-4 py-8 flex flex-col justify-center items-center relative min-h-[500px] pt-16">

                {/* Mobile Hero Content */}
                <div className="text-center w-full max-w-md">
                  {/* Name */}
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-3xl font-bold mb-3 text-white"
                  >
                    Muhammad
                  </motion.h1>

                  {/* Title */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl text-red-400 mb-6 font-medium"
                  >
                    {displayText}
                    <span className="animate-pulse">|</span>
                  </motion.div>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-base text-gray-300 mb-8 leading-relaxed px-4"
                  >
                    Building high quality mobile and web apps for 7 years, expert in firebase & API integration, creating fast, scalable, and user friendly experiences.
                  </motion.p>

                  {/* Social Links */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex justify-center mb-6"
                  >
                    <a href="mailto:mmuaaz69@gmail.com" className="p-2 bg-white/10 rounded-full hover:bg-red-500/20 transition-colors shadow-lg">
                      <Mail className="w-4 h-4" />
                    </a>
                  </motion.div>

                  {/* Contact Info */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                    className="text-center text-xs text-gray-400 space-y-1 mb-6"
                  >
                    <p className="flex items-center justify-center gap-1">
                      <span>📧</span> mmuaaz69@gmail.com
                    </p>
                    <p className="flex items-center justify-center gap-1">
                      <span>📱</span> +44 7427 290505
                    </p>
                  </motion.div>

                  {/* Mobile Navigation */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="w-full"
                  >
                    <div className="grid grid-cols-2 gap-2">
                      {['about', 'skills', 'experience', 'projects'].map((item) => (
                        <button
                          key={item}
                          onClick={() => scrollToSection(item)}
                          className={`py-2 px-3 rounded-lg text-sm font-medium transition-colors capitalize ${activeSection === item
                            ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                            : 'bg-white/10 text-white hover:bg-white/20'
                            }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      {['freelance', 'contact'].map((item) => (
                        <button
                          key={item}
                          onClick={() => scrollToSection(item)}
                          className={`py-2 px-3 rounded-lg text-sm font-medium transition-colors capitalize ${activeSection === item
                            ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                            : 'bg-white/10 text-white hover:bg-white/20'
                            }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Left Side - Fixed Hero Section (Desktop Only) */}
        <div className="hidden lg:flex lg:w-1/3 xl:w-1/4 2xl:w-1/5 lg:fixed lg:left-0 lg:top-0 lg:h-full bg-gradient-to-br from-gray-900 via-black to-gray-800 lg:border-r border-b lg:border-b-0 border-white/10 flex flex-col justify-center items-center px-4 lg:px-6 z-10 h-auto lg:h-full py-8 lg:py-0">

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-16 left-4 bg-black/90 backdrop-blur-md rounded-lg p-4 space-y-2 z-20"
            >
              {['about', 'skills', 'experience', 'projects', 'freelance', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`block w-full text-left py-2 px-4 rounded-lg transition-colors capitalize ${activeSection === item
                    ? 'bg-red-500/20 text-red-500'
                    : 'text-white hover:bg-white/10'
                    }`}
                >
                  {item}
                </button>
              ))}
            </motion.div>
          )}

          {/* Hero Content */}
          <div className="text-center max-w-xs lg:max-w-sm xl:max-w-md">
            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 lg:mb-4"
            >
              <span className="block text-white">Muhammad</span>
            </motion.h1>

            {/* Title with Flutter Logo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl font-semibold mb-4 lg:mb-6 h-10 lg:h-12 flex items-center justify-center"
            >
              <img
                src="https://storage.googleapis.com/cms-storage-bucket/icon_flutter.4fd5520fe28ebf839174.svg"
                alt="Flutter Logo"
                className="w-5 h-5 lg:w-6 lg:h-6 mr-2 lg:mr-3"
              />
              <span className="border-r-2 border-red-500 pr-2">{displayText}</span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-gray-300 mb-6 lg:mb-8 text-xs sm:text-sm leading-relaxed hidden lg:block"
            >
              Building high quality mobile and web apps for 7 years, expert in firebase & API integration, creating fast, scalable, and user friendly experiences.
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex justify-center mb-6 lg:mb-8"
            >
              <a href="mailto:mmuaaz69@gmail.com" className="p-2 lg:p-3 bg-white/10 rounded-full hover:bg-red-500/20 transition-colors">
                <Mail className="w-4 h-4 lg:w-5 lg:h-5" />
              </a>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="space-y-1 lg:space-y-2 text-xs sm:text-sm text-gray-400"
            >
              <div className="flex items-center justify-center">
                <Phone className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2" />
                <span>+44 7427 290505</span>
              </div>
              <div className="flex items-center justify-center">
                <MapPin className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2" />
                <span>England, United kingdom</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Side - Scrollable Content */}
        <div className={`w-full lg:w-2/3 xl:w-3/4 2xl:w-4/5 lg:ml-auto overflow-y-auto ${isMobileHeaderOpen ? 'lg:h-full' : 'h-full'} ${!isMobileHeaderOpen ? 'pt-16' : ''}`}>
          {/* About Section */}
          <section id="about" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
            <div className="max-w-4xl w-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold mb-6">
                  About <span className="bg-gradient-to-r from-red-500 to-white bg-clip-text text-transparent">Me</span>
                </h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                  A passionate Full Stack & Flutter Developer based in Lahore, Pakistan, currently working at DM Worx LLC and Cygnus Ventures.
                  Specializing in creating beautiful, functional mobile and web applications with Firebase, React, and comprehensive full-stack solutions.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {[
                  {
                    icon: Smartphone,
                    title: "Mobile Development",
                    description: "Cross-platform mobile apps with Flutter, native performance, and beautiful UI/UX",
                    color: "from-blue-500 to-cyan-500"
                  },
                  {
                    icon: Database,
                    title: "Backend & APIs",
                    description: "Seamless Firebase integration, RESTful APIs, real-time databases, and cloud functions",
                    color: "from-orange-500 to-yellow-500"
                  },
                  {
                    icon: Globe,
                    title: "Web Development",
                    description: "Professional websites with modern technologies and deployment strategies",
                    color: "from-purple-500 to-pink-500"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <Card className="h-full bg-white/5 border-white/10 hover:border-red-500/30 transition-all duration-300">
                      <CardContent className="p-8 text-center">
                        <div className={`w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center`}>
                          <item.icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                        <p className="text-gray-300">{item.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Featured Projects Section */}
          <section id="projects" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
            <div className="max-w-7xl w-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold mb-6">
                  My Recent <span className="bg-gradient-to-r from-red-500 to-white bg-clip-text text-transparent">Work</span>
                </h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                  A comprehensive showcase of my mobile and web applications, built with excellence and precision.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                {[
                  {
                    title: "My Invoice",
                    description: "Comprehensive invoice management application with PDF generation, Stripe payments, and AI-powered features for seamless financial tracking.",
                    technologies: ["Flutter", "Firebase", "Stripe", "ChatGPT API", "Push Notifications", "Cloud Functions"],
                    features: [
                      "Advanced Firebase integration and real-time database management",
                      "Stripe payment processing with secure transaction handling",
                      "PDF generation and email automation using SMTP",
                      "AI-powered features with ChatGPT API integration",
                      "Push notifications for payment reminders and invoice updates",
                      "Cloud Functions for automated backend processing and data management",
                      "HTML/CSS email templates for professional invoice delivery",
                      "Invoice preview functionality with responsive design"
                    ],
                    url: "https://play.google.com/store/apps/details?id=com.my_invoice.app",
                    color: "from-blue-500 to-cyan-500",
                    status: "Live",
                    statusColor: "green"
                  },
                  {
                    title: "Clika",
                    description: "Sophisticated infrastructure management platform for tower companies and employees, featuring real-time communication and event coordination.",
                    technologies: ["Flutter", "AWS", "Stream Chat", "REST API", "State Management"],
                    features: [
                      "Comprehensive database for tower companies, towers, and employee records",
                      "Architected interlinking system connecting employees to companies and towers",
                      "Super Admin dashboard for creating and managing tower-specific events",
                      "Integrated real-time chat for seamless user communication",
                      "Exclusive user discount system within the tower ecosystem",
                      "Cloud-synced data management with secure access controls"
                    ],
                    url: "#",
                    color: "from-cyan-500 to-blue-500",
                    status: "Featured Project",
                    statusColor: "blue"
                  },
                  {
                    title: "Al Tayyab Recovery",
                    description: "Professional service platform for vehicle recovery with real-time location and request handling.",
                    technologies: ["JavaScript", "HTML", "CSS", "PHP", "Vercel"],
                    features: [
                      "Modern and professional service landing page",
                      "Fully responsive layout for mobile and desktop",
                      "Optimized performance for fast loading times",
                      "SEO-friendly structure for service visibility"
                    ],
                    url: "https://altayyabrecovery.com",
                    color: "from-orange-500 to-red-500",
                    status: "Live",
                    statusColor: "blue"
                  },
                  {
                    title: "My Madina",
                    description: "Navigation platform for pilgrims to locate prayer areas, wudu facilities, and amenities with bilingual support and interactive mapping.",
                    technologies: ["React", "TypeScript", "PostgreSQL", "Supabase", "Express.js", "Tailwind CSS"],
                    features: [
                      "Bilingual support (English/Arabic) with context-based language switching",
                      "Interactive map with coordinate-based location system",
                      "Admin panel for comprehensive content management",
                      "Responsive design with mobile-first approach",
                      "Dark/Light theme support with seamless switching",
                      "Progressive Web App capabilities for offline access"
                    ],
                    url: "https://my-madina-project-o7gw.onrender.com/",
                    color: "from-green-500 to-emerald-500",
                    status: "Live",
                    statusColor: "green"
                  },
                  {
                    title: "Emotion Detection AI",
                    description: "Real-time AI application built on Flutter with a Python backend deployed on AWS, analyzing facial expressions with high accuracy.",
                    technologies: ["Flutter", "Python", "AWS", "Deep Learning", "Computer Vision"],
                    features: [
                      "Real-time camera feed processing for instant emotion detection",
                      "Facial analysis using deep learning models trained for high accuracy",
                      "AWS-deployed backend optimized for low-latency inference",
                      "Interprets emotions from live video streams with precise results"
                    ],
                    url: "#",
                    color: "from-purple-500 to-indigo-500",
                    status: "AI Project",
                    statusColor: "blue"
                  },
                  {
                    title: "My Invoice Landing Page & Admin Panel",
                    description: "Comprehensive administration dashboard and landing page for managing all aspects of the My Invoice ecosystem.",
                    technologies: ["React", "TypeScript", "Firebase", "State Management", "Data Analytics"],
                    features: [
                      "Modern landing page showcasing app features and benefits",
                      "Centralized management for all app data and users",
                      "Real-time reporting and financial analytics",
                      "User permission management and security controls",
                      "Batch processing for invoices and email automation",
                      "Responsive design for desktop and tablet usage"
                    ],
                    url: "https://myinvoice.us",
                    color: "from-blue-600 to-indigo-600",
                    status: "Web Platform",
                    statusColor: "blue"
                  },
                  {
                    title: "Everpure Organics",
                    description: "Full-featured ecommerce platform for organic health products with advanced cart management and WhatsApp business integration.",
                    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Digital Ocean", "Tailwind CSS"],
                    features: [
                      "Advanced product catalog with filtering and dynamic management",
                      "Smart shopping cart with multiple pricing tiers and variants",
                      "WhatsApp Business integration for customer support",
                      "User authentication and comprehensive admin dashboard",
                      "Dynamic content management system with real-time updates",
                      "Performance optimized with SEO and responsive design"
                    ],
                    url: "https://everpureorganics.com",
                    color: "from-purple-500 to-pink-500",
                    status: "Live",
                    statusColor: "green"
                  },
                  {
                    title: "Restaurant App",
                    description: "Comprehensive restaurant management application with real-time order tracking and intuitive order flow.",
                    technologies: ["Flutter", "Firebase", "Payment Integration", "Real-time Database"],
                    features: [
                      "Real-time order tracking and management system",
                      "Integrated payment processing for secure transactions",
                      "Intuitive UI/UX for both staff and customers",
                      "Digital menu management with category filtering",
                      "Push notifications for order status updates"
                    ],
                    url: "#",
                    color: "from-orange-500 to-yellow-500",
                    status: "Completed",
                    statusColor: "blue"
                  },
                  {
                    title: "Whisky App",
                    description: "Specialized inventory and collection management system for whisky enthusiasts and collectors.",
                    technologies: ["Flutter", "Database Management", "Inventory System", "UI/UX Design"],
                    features: [
                      "Comprehensive inventory tracking and management",
                      "User-friendly interface for collection cataloging",
                      "Detailed search and filtering by brand or region",
                      "Integrated database management for offline access"
                    ],
                    url: "#",
                    color: "from-amber-600 to-yellow-700",
                    status: "Completed",
                    statusColor: "blue"
                  },
                  {
                    title: "Chat App",
                    description: "Real-time messaging application with end-to-end encryption and multimedia support.",
                    technologies: ["Flutter", "Real-time Messaging", "Firebase", "Push Notifications"],
                    features: [
                      "Secure real-time messaging with end-to-end encryption",
                      "Group chat and private messaging capabilities",
                      "Multimedia file sharing (images, documents, audio)",
                      "Real-time status updates and delivery receipts"
                    ],
                    url: "#",
                    color: "from-emerald-500 to-teal-600",
                    status: "Completed",
                    statusColor: "blue"
                  }

                ].map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="h-auto min-h-[350px]"
                  >
                    <Card className="h-auto min-h-[350px] bg-gradient-to-br from-white/5 to-white/10 border-white/20 hover:border-white/30 transition-all duration-300 shadow-xl flex flex-col">
                      <CardContent className="p-6 flex flex-col flex-1">
                        {/* Header with Status */}
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <h3 className={`text-2xl font-bold mb-2 bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                              {project.title}
                            </h3>
                          </div>
                          <div className="flex items-center gap-2 ml-2">
                            {project.status && (
                              <div className="flex items-center gap-2">
                                <div className={`w-2 h-2 ${project.statusColor === 'green' ? 'bg-green-400' :
                                  project.statusColor === 'yellow' ? 'bg-yellow-400' :
                                    'bg-blue-400'
                                  } rounded-full animate-pulse`}></div>
                                <Badge
                                  variant="outline"
                                  className={`${project.statusColor === 'green' ? 'border-green-500/50 text-green-400 bg-green-500/10' :
                                    project.statusColor === 'yellow' ? 'border-yellow-500/50 text-yellow-400 bg-yellow-500/10' :
                                      'border-blue-500/50 text-blue-400 bg-blue-500/10'
                                    } px-3 py-1 text-xs font-medium`}
                                >
                                  {project.status}
                                </Badge>
                              </div>
                            )}
                          </div>
                        </div>

                        <p className="text-gray-300 mb-4 text-sm leading-relaxed min-h-[3rem]">{project.description}</p>

                        {/* View Project Button/Image */}
                        <div className="mb-4">
                          {project.title === "My Invoice Landing Page & Admin Panel" ? (
                            <a
                              href={project.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.color} text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm`}
                            >
                              View Project
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </a>
                          ) : project.title === "My Invoice" ? (
                            <a
                              href={project.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-block transition-all duration-300 hover:scale-105"
                            >
                              <img
                                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                                alt="Get it on Google Play"
                                className="h-14 w-auto"
                              />
                            </a>
                          ) : (
                            ["Everpure Organics", "My Madina", "Al Tayyab Recovery"].includes(project.title) && (
                              <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.color} text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm`}
                              >
                                View Project
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                              </a>
                            )
                          )}
                        </div>

                        {/* Expand/Collapse Button */}
                        <button
                          onClick={() => setExpandedFeaturedProjects(prev => ({
                            ...prev,
                            [project.title]: !prev[project.title]
                          }))}
                          className="w-full py-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors border border-white/10 hover:border-white/20 flex items-center justify-center gap-2 text-sm text-gray-300 mt-auto"
                        >
                          {expandedFeaturedProjects[project.title] ? (
                            <>
                              Hide Details
                              <ChevronUp className="w-4 h-4" />
                            </>
                          ) : (
                            <>
                              Show Details
                              <ChevronDown className="w-4 h-4" />
                            </>
                          )}
                        </button>

                        {expandedFeaturedProjects[project.title] && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden mt-4"
                          >
                            {/* Key Features Section */}
                            <div className="mb-6">
                              <h4 className="text-lg font-bold mb-3 text-white flex items-center gap-2">
                                <div className={`w-1 h-5 bg-gradient-to-b ${project.color} rounded-full`}></div>
                                Key Features
                              </h4>
                              <div className="space-y-2">
                                {project.features.map((feature, idx) => (
                                  <div key={idx} className="flex items-start gap-2 p-2 bg-white/5 rounded border border-white/10">
                                    <div className={`w-1.5 h-1.5 bg-gradient-to-r ${project.color} rounded-full mt-1.5 flex-shrink-0`}></div>
                                    <span className="text-gray-300 text-xs leading-relaxed">{feature}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Technologies Section */}
                            <div>
                              <h4 className="text-lg font-bold mb-3 text-white flex items-center gap-2">
                                <div className={`w-1 h-5 bg-gradient-to-b ${project.color} rounded-full`}></div>
                                Technologies Used
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                  <Badge
                                    key={tech}
                                    variant="outline"
                                    className={`border-white/20 text-gray-300 bg-white/5 px-3 py-1 text-xs font-medium hover:bg-white/10 transition-colors`}
                                  >
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 lg:py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.6, 0.3, 0.6]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 4
                }}
              />
            </div>

            <div className="max-w-7xl w-full relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold mb-6">
                  My <span className="bg-gradient-to-r from-red-500 to-white bg-clip-text text-transparent">Skills</span>
                </h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                  A comprehensive overview of my technical expertise and the technologies I work with.
                </p>
              </motion.div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    category: "Core Technologies",
                    skills: ["Flutter", "Dart", "Firebase", "REST APIs", "GitHub"],
                    description: "Primary technologies I work with daily"
                  },
                  {
                    category: "Mobile Development",
                    skills: ["Cross-platform", "Native Performance", "UI/UX Design", "State Management"],
                    description: "Mobile app development expertise"
                  },
                  {
                    category: "Backend & Cloud",
                    skills: ["Firebase", "Cloud Functions", "Real-time DB", "Authentication"],
                    description: "Backend and cloud services"
                  },
                  {
                    category: "Tools & Frameworks",
                    skills: ["VS Code", "Git", "Figma", "Postman", "Android Studio"],
                    description: "Development tools and frameworks"
                  },
                  {
                    category: "Database & Storage",
                    skills: ["Firestore", "SQLite", "Shared Preferences", "Cloud Storage"],
                    description: "Data management and storage"
                  },
                  {
                    category: "Testing & Deployment",
                    skills: ["Unit Testing", "Widget Testing", "Play Store", "App Store"],
                    description: "Testing and deployment strategies"
                  },
                  {
                    category: "E-commerce Platforms",
                    skills: ["Shopify", "TikTok Shop", "E-commerce", "Store Development", "UI/UX Design"],
                    description: "E-commerce platform development and management"
                  }
                ].map((category, index) => (
                  <motion.div
                    key={category.category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ y: -2 }}
                  >
                    <Card className="h-full bg-white/5 border border-white/20 hover:border-white/40 transition-all duration-300">
                      <CardContent className="p-6">
                        {/* Header */}
                        <div className="mb-6">
                          <h3 className="text-xl font-semibold text-white mb-3">{category.category}</h3>
                          <p className="text-gray-400 text-sm leading-relaxed">{category.description}</p>
                        </div>

                        {/* Skills */}
                        <div className="space-y-2">
                          {category.skills.map((skill, skillIndex) => (
                            <motion.div
                              key={skill}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: (index * 0.1) + (skillIndex * 0.05) }}
                              className="flex items-center py-2 px-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors duration-200"
                            >
                              <div className="w-2 h-2 bg-white/60 rounded-full mr-3"></div>
                              <span className="text-white/90 text-sm font-medium">{skill}</span>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>


          {/* Experience Section */}
          <section id="experience" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 lg:py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
            <div className="max-w-6xl w-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold mb-6">
                  Work <span className="bg-gradient-to-r from-red-500 to-white bg-clip-text text-transparent">Experience</span>
                </h2>
                <div className="flex justify-center items-center gap-4 mb-6">
                  <div className="bg-red-500/20 text-red-400 px-6 py-3 rounded-full border border-red-500/30">
                    <span className="text-2xl font-bold">7+</span>
                    <span className="text-sm ml-2">Years Experience</span>
                  </div>
                  <div className="bg-blue-500/20 text-blue-400 px-6 py-3 rounded-full border border-blue-500/30">
                    <span className="text-2xl font-bold">15+</span>
                    <span className="text-sm ml-2">Apps Developed</span>
                  </div>
                </div>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                  My professional journey in mobile app development and software engineering, specializing in Flutter development.
                </p>
              </motion.div>

              <div className="space-y-8">
                {[
                  {
                    title: "Full Stack Developer",
                    company: "Cygnus Ventures",
                    period: "Oct 2025 - Current",
                    location: "Remote",
                    logo: "/cv.png",
                    description: [
                      "Developing My Madina - Navigation platform for pilgrims with bilingual support",
                      "Building Everpure Organics - Full-featured ecommerce platform for organic products",
                      "Implementing comprehensive admin panels and user interfaces",
                      "Working with React, TypeScript, Node.js, and PostgreSQL",
                      "Managing database architecture with Supabase and Neon Database",
                      "Integrating WhatsApp Business API for customer support"
                    ],
                    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Supabase", "Express.js", "Tailwind CSS"]
                  },
                  {
                    title: "Flutter Developer",
                    company: "DM Worx LLC",
                    period: "May 2025 - Current",
                    location: "West Chester, PA, USA • Remote",
                    logo: "https://dmworxllc.com/assets/DM%20Final-01%20(1)-BmXXw5Gw.png",
                    description: [
                      "Developing My Invoice App - comprehensive invoice management system",
                      "Implementing real-time database management and API handling",
                      "Working on payment integration and subscription management",
                      "Creating advanced PDF generation and email automation features",
                      "Integrating AI-powered features and push notifications"
                    ],
                    technologies: ["Flutter", "Firebase", "REST APIs", "State Management", "Payment Integration"]
                  },
                  {
                    title: "Flutter Developer",
                    company: "Solution Soul",
                    period: "June 2024 - Jan 2025",
                    location: "England, United kingdom",
                    logo: "https://bit.ly/4o4sl6E",
                    description: [
                      "Developed Restaurant App - comprehensive restaurant management application",
                      "Created Whisky App - specialized whisky management and inventory system",
                      "Built Chat App - real-time messaging application with encryption",
                      "Developed Mind Script - mental health and mindfulness application",
                      "Created Fit Max App - comprehensive fitness tracking application",
                      "Built Education Learning App - online learning platform with course management",
                      "Developed Weather App - weather forecasting application with real-time data"
                    ],
                    technologies: ["Flutter", "Firebase", "Payment Integration", "Real-time Database", "Restaurant Management"]
                  },
                  {
                    title: "Flutter Developer Intern",
                    company: "Orbilon Technology",
                    period: "March 2024 - June 2024",
                    location: "England, United kingdom",
                    logo: "https://bit.ly/46DkCqv",
                    description: [
                      "Developed Search Screen with dynamic filters and integrated Search API",
                      "Implemented responsive UI using Flutter framework",
                      "Integrated RESTful APIs for efficient data exchange",
                      "Implemented Firebase Authentication for secure user management",
                      "Managed application state using Provider and Riverpod"
                    ],
                    technologies: ["Flutter", "Firebase", "REST APIs", "Provider", "Riverpod"]
                  },
                  {
                    title: "Information Technology Intern",
                    company: "Ibrahim Fibres Ltd",
                    period: "Sept 2023 - Oct 2023",
                    location: "England, United kingdom",
                    logo: "https://bit.ly/46XSUUp",
                    description: [
                      "Installed, configured, and maintained computer systems, peripherals, and software",
                      "Troubleshooted hardware, software, and network issues",
                      "Conducted routine maintenance tasks, including backups and updates",
                      "Monitored system performance, security, and network infrastructure",
                      "Provided technical support to employees, responding to help desk requests"
                    ],
                    technologies: ["IT Support", "System Maintenance", "Troubleshooting", "Network Management"]
                  }
                ].map((job, index) => (
                  <motion.div
                    key={job.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    whileHover={{ scale: 1.01, y: -2 }}
                  >
                    <Card className="bg-white/5 border-white/10 hover:border-red-500/30 transition-all duration-300">
                      <CardContent className="p-8">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                          <div className="flex items-start gap-4 flex-1 mb-3 sm:mb-0">
                            {job.logo && (
                              <div className={`w-16 h-16 ${job.company === 'DM Worx LLC' || job.company === 'Cygnus Ventures' ? 'bg-white' : 'bg-gray-800'} rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0`}>
                                <img
                                  src={job.logo}
                                  alt={job.company}
                                  className="w-full h-full object-contain p-2"
                                />
                              </div>
                            )}
                            <div className="flex-1">
                              <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
                              <div className="flex items-center gap-2 mb-1">
                                <p className="text-red-400 font-semibold text-lg">{job.company}</p>
                                {(job.company === 'DM Worx LLC' || job.company === 'Cygnus Ventures') && (
                                  <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-semibold border border-green-500/30">
                                    Current Company
                                  </div>
                                )}
                              </div>
                              <p className="text-gray-400">{job.period} • {job.location}</p>
                            </div>
                          </div>
                          <div className="flex justify-center sm:justify-start">
                            <button
                              onClick={() => setExpandedExperience(prev => ({
                                ...prev,
                                [`${job.title}-${job.company}`]: !prev[`${job.title}-${job.company}`]
                              }))}
                              className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors border border-white/20 hover:border-white/40 flex-shrink-0 w-fit"
                            >
                              {expandedExperience[`${job.title}-${job.company}`] ? (
                                <ChevronUp className="w-5 h-5 text-white drop-shadow-lg" />
                              ) : (
                                <ChevronDown className="w-5 h-5 text-white drop-shadow-lg" />
                              )}
                            </button>
                          </div>
                        </div>

                        {expandedExperience[`${job.title}-${job.company}`] && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="mb-6">
                              <ul className="space-y-2">
                                {job.description.map((item, idx) => (
                                  <li key={idx} className="flex items-start gap-2">
                                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <span className="text-gray-300">{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="flex flex-wrap gap-2">
                              {job.technologies.map((tech) => (
                                <Badge key={tech} variant="outline" className="border-red-500/30 text-red-400 px-3 py-1 text-sm">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>


          {/* Company Projects Section */}
          <section id="company-projects" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 lg:py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
            <div className="max-w-6xl w-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold mb-6">
                  Company <span className="bg-gradient-to-r from-red-500 to-white bg-clip-text text-transparent">Projects</span>
                </h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                  Individual projects developed during my professional experience at various companies.
                </p>
              </motion.div>

              <div className="space-y-8">
                {[
                  {
                    company: "Cygnus Ventures",
                    logo: "/cv.png",
                    period: "Oct 2025 - Current",
                    location: "Remote",
                    projects: [
                      {
                        title: "My Madina",
                        description: [
                          "Developed navigation platform for pilgrims to locate prayer areas and facilities",
                          "Implemented bilingual support with context-based language switching (English/Arabic)",
                          "Created interactive map with coordinate-based location system",
                          "Built comprehensive admin panel for content management",
                          "Integrated Progressive Web App capabilities for offline access"
                        ],
                        technologies: ["React", "TypeScript", "PostgreSQL", "Supabase", "Express.js", "Tailwind CSS"],
                        status: "Testing Phase"
                      },
                      {
                        title: "Everpure Organics",
                        description: [
                          "Built full-featured ecommerce platform for organic health products",
                          "Implemented advanced product catalog with filtering and dynamic management",
                          "Developed smart shopping cart with multiple pricing tiers and variants",
                          "Integrated WhatsApp Business API for seamless customer support",
                          "Created comprehensive admin dashboard and user authentication system"
                        ],
                        technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Digital Ocean", "Tailwind CSS"],
                        status: "Live"
                      }
                    ]
                  },
                  {
                    company: "DM Worx LLC",
                    logo: "https://dmworxllc.com/assets/DM%20Final-01%20(1)-BmXXw5Gw.png",
                    period: "May 2025 - Current",
                    location: "West Chester, PA, USA • Remote",
                    projects: [
                      {
                        title: "My Invoice App",
                        description: [
                          "Built a complete invoice management system",
                          "Implemented automated billing and payment tracking",
                          "Created PDF generation and email functionality",
                          "Developed client management and reporting features"
                        ],
                        technologies: ["Flutter", "PDF Generation", "Email Integration", "Database Management"],
                        status: "Currently Working"
                      }
                    ]
                  },
                  {
                    company: "Solution Soul",
                    logo: "https://bit.ly/4o4sl6E",
                    period: "June 2024 - Jan 2025",
                    location: "England, United kingdom",
                    projects: [
                      {
                        title: "Restaurant App",
                        description: [
                          "Developed a comprehensive restaurant management application",
                          "Implemented real-time order tracking and management system",
                          "Integrated payment processing and customer management features",
                          "Created intuitive UI/UX for restaurant staff and customers"
                        ],
                        technologies: ["Flutter", "Firebase", "Payment Integration", "Real-time Database"],
                        status: "Completed"
                      },
                      {
                        title: "Whisky App",
                        description: [
                          "Developed a specialized whisky management application",
                          "Implemented inventory tracking and management system",
                          "Created user-friendly interface for whisky enthusiasts",
                          "Integrated database management for whisky collections"
                        ],
                        technologies: ["Flutter", "Database Management", "Inventory System", "UI/UX Design"],
                        status: "Completed"
                      },
                      {
                        title: "Chat App",
                        description: [
                          "Built a real-time messaging application",
                          "Implemented secure chat functionality with encryption",
                          "Created group chat and private messaging features",
                          "Integrated push notifications for real-time updates"
                        ],
                        technologies: ["Flutter", "Real-time Messaging", "Firebase", "Push Notifications"],
                        status: "Completed"
                      },
                      {
                        title: "Mind Script",
                        description: [
                          "Developed a mental health and mindfulness application",
                          "Implemented meditation and relaxation features",
                          "Created user progress tracking and analytics",
                          "Integrated audio and visual meditation guides"
                        ],
                        technologies: ["Flutter", "Audio Integration", "Progress Tracking", "Mental Health"],
                        status: "Completed"
                      },
                      {
                        title: "Fit Max App",
                        description: [
                          "Built a comprehensive fitness tracking application",
                          "Implemented workout planning and tracking features",
                          "Created nutrition and diet management tools",
                          "Integrated fitness analytics and progress monitoring"
                        ],
                        technologies: ["Flutter", "Fitness Tracking", "Nutrition Management", "Analytics"],
                        status: "Completed"
                      },
                      {
                        title: "Education Learning App",
                        description: [
                          "Developed an educational platform for online learning",
                          "Implemented course management and progress tracking",
                          "Created interactive learning modules and quizzes",
                          "Integrated video streaming and content delivery"
                        ],
                        technologies: ["Flutter", "Video Streaming", "Course Management", "Interactive Learning"],
                        status: "Completed"
                      },
                      {
                        title: "Weather App",
                        description: [
                          "Built a comprehensive weather forecasting application",
                          "Implemented real-time weather data integration",
                          "Created location-based weather services",
                          "Integrated weather alerts and notifications"
                        ],
                        technologies: ["Flutter", "Weather API", "Location Services", "Real-time Data"],
                        status: "Completed"
                      }
                    ]
                  },
                  {
                    company: "Orbilon Technology",
                    logo: "https://bit.ly/46DkCqv",
                    period: "March 2024 - June 2024",
                    location: "England, United kingdom",
                    projects: [
                      {
                        title: "Search Screen with Dynamic Filters",
                        description: [
                          "Developed Search Screen with dynamic filters and integrated Search API",
                          "Implemented responsive UI using Flutter",
                          "Integrated RESTful APIs for efficient data exchange",
                          "Implemented Firebase Authentication for secure user management",
                          "Managed application state using Provider and Riverpod"
                        ],
                        technologies: ["Flutter", "REST APIs", "Firebase Authentication", "Provider", "Riverpod"],
                        status: "Completed"
                      }
                    ]
                  }
                ].map((company, index) => {
                  const isExpanded = expandedProjects[company.company] || false;
                  return (
                    <motion.div
                      key={company.company}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 }}
                      whileHover={{ scale: 1.01, y: -2 }}
                    >
                      <Card className="bg-white/5 border-white/10 hover:border-red-500/30 transition-all duration-300">
                        <CardContent className="p-8">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                            <div className="flex items-start gap-4 flex-1 mb-3 sm:mb-0">
                              {company.logo && (
                                <div className={`w-16 h-16 ${company.company === 'DM Worx LLC' || company.company === 'Cygnus Ventures' ? 'bg-white' : 'bg-gray-800'} rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0`}>
                                  <img
                                    src={company.logo}
                                    alt={company.company}
                                    className="w-full h-full object-contain p-2"
                                  />
                                </div>
                              )}
                              <div className="flex-1">
                                <h3 className="text-2xl font-bold mb-2">{company.company}</h3>
                                <div className="flex items-center gap-2 mb-1">
                                  <p className="text-red-400 font-semibold text-lg">{company.period} • {company.location}</p>
                                  {(company.company === 'DM Worx LLC' || company.company === 'Cygnus Ventures') && (
                                    <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-semibold border border-green-500/30">
                                      Current Company
                                    </div>
                                  )}
                                </div>
                                <p className="text-gray-400">{company.projects.length} Project{company.projects.length > 1 ? 's' : ''}</p>
                              </div>
                            </div>
                            <div className="flex justify-center sm:justify-start">
                              <button
                                onClick={() => setExpandedProjects(prev => ({
                                  ...prev,
                                  [company.company]: !prev[company.company]
                                }))}
                                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors border border-white/20 hover:border-white/40 flex-shrink-0 w-fit"
                              >
                                {isExpanded ? (
                                  <ChevronUp className="w-5 h-5 text-white drop-shadow-lg" />
                                ) : (
                                  <ChevronDown className="w-5 h-5 text-white drop-shadow-lg" />
                                )}
                              </button>
                            </div>
                          </div>

                          {isExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="space-y-6">
                                {company.projects.map((project, projectIndex) => (
                                  <div key={projectIndex} className="bg-white/5 rounded-lg p-6 border border-white/10">
                                    <div className="flex items-center justify-between mb-4">
                                      <h4 className="text-xl font-bold text-white">{project.title}</h4>
                                      <Badge
                                        variant="outline"
                                        className={`px-3 py-1 text-sm ${project.status === 'Currently Working'
                                          ? 'border-green-500/30 text-green-400'
                                          : 'border-blue-500/30 text-blue-400'
                                          }`}
                                      >
                                        {project.status}
                                      </Badge>
                                    </div>

                                    <div className="mb-4">
                                      <ul className="space-y-2">
                                        {project.description.map((item, idx) => (
                                          <li key={idx} className="flex items-start gap-2">
                                            <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                            <span className="text-gray-300">{item}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                      {project.technologies.map((tech) => (
                                        <Badge key={tech} variant="outline" className="border-red-500/30 text-red-400 px-3 py-1 text-sm">
                                          {tech}
                                        </Badge>
                                      ))}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>


          {/* Freelance Section */}
          <section id="freelance" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 lg:py-20 bg-gradient-to-br from-gray-900 to-black">
            <div className="max-w-6xl w-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-red-500 to-white bg-clip-text text-transparent">Freelance</span> Work
                </h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                  Independent projects and freelance work showcasing my versatility and expertise.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                {[
                  {
                    title: "LAT Preparation App",
                    description: "Final year project focused on LAT exam preparation with comprehensive study materials and practice tests.",
                    technologies: ["Flutter", "Firebase", "Education", "Study Management"]
                  },
                  {
                    title: "Olizon Mobile App",
                    description: "Complete app UI design and Firebase authentication system integration for modern mobile experience.",
                    technologies: ["Flutter", "Firebase Auth", "UI/UX Design", "Authentication"]
                  },
                  {
                    title: "E-Shop App",
                    description: "Complete e-commerce app UI with Firebase authentication system for online shopping experience.",
                    technologies: ["Flutter", "Firebase Auth", "E-commerce", "UI Design"]
                  },
                  {
                    title: "Gearup Pro",
                    description: "Final year project app with Firebase authentication implementation for enhanced user security.",
                    technologies: ["Flutter", "Firebase Auth", "Project Management", "Security"]
                  },
                  {
                    title: "Advance Case Management System",
                    description: "Complete app UI with Firebase Authentication and Cloud Firestore for case management and tracking.",
                    technologies: ["Flutter", "Firebase Auth", "Cloud Firestore", "Case Management"]
                  },
                  {
                    title: "MIpueblo App",
                    description: "E-commerce app with complete UI design for online marketplace and shopping experience.",
                    technologies: ["Flutter", "E-commerce", "UI/UX Design", "Marketplace"]
                  },
                  {
                    title: "Al Tayyab Recovery",
                    description: "Professional website landing page for recovery services with modern design and responsive layout.",
                    technologies: ["Web Development", "Landing Page", "Responsive Design", "Professional"],
                    url: "https://altayyabrecovery.com"
                  }
                ].map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <Card className="h-full bg-white/5 border-white/10 hover:border-red-500/30 transition-all duration-300">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-bold mb-3">{project.title}</h3>
                        <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                        {project.url && (
                          <div className="mb-4">
                            <a
                              href={project.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors text-sm font-medium"
                            >
                              <ExternalLink className="w-4 h-4" />
                              Visit Live Site
                            </a>
                          </div>
                        )}
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="outline" className="border-white/20 text-white/80 px-2 py-1 text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>


          {/* Contact Section */}
          <section id="contact" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
            <div className="max-w-4xl w-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold mb-6">
                  Get In <span className="bg-gradient-to-r from-red-500 to-white bg-clip-text text-transparent">Touch</span>
                </h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                  Ready to bring your ideas to life? Let's discuss your next project.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center">
                        <Phone className="w-6 h-6 text-red-500" />
                      </div>
                      <div>
                        <p className="font-semibold">Phone & WhatsApp</p>
                        <p className="text-gray-400">+44 7427 290505</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center">
                        <Mail className="w-6 h-6 text-red-500" />
                      </div>
                      <div>
                        <p className="font-semibold">Email</p>
                        <p className="text-gray-400">mmuaaz69@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-red-500" />
                      </div>
                      <div>
                        <p className="font-semibold">Location</p>
                        <p className="text-gray-400">England, United kingdom</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-6">Send Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your Name"
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:border-red-500 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Your Email"
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:border-red-500 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Your Message"
                        rows={4}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:border-red-500 focus:outline-none transition-colors resize-none"
                      ></textarea>
                    </div>

                    {/* Status Messages */}
                    {submitStatus === 'success' && (
                      <div className="p-3 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 text-sm">
                        ✅ Message sent successfully! I'll get back to you soon.
                      </div>
                    )}
                    {submitStatus === 'error' && (
                      <div className="p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 text-sm">
                        ❌ Failed to send message. Please try again.
                      </div>
                    )}

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-red-500 hover:bg-red-600 text-white disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 mr-2 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;