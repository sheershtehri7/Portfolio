/* @jsxImportSource react */
import React, { useEffect, useMemo, useState, useRef } from "react";
import { 
  ChevronDown, Github, Linkedin, Mail, Phone, ExternalLink, MapPin, 
  Star, Award, Rocket, User, Moon, Sun, Globe2, 
  GraduationCap, Cpu, TerminalSquare, Bot, ShieldCheck, Compass, 
  Trophy, ChevronRight, Briefcase, Code, Database, Cloud, Zap,
  Send, MessageCircle, Heart, Calendar, Users, Target, Coffee,
  Download, Eye, Play, BookOpen, Lightbulb, CheckCircle, Menu,
  Sparkles
} from "lucide-react";
import profileImage from "./assets/profile.jpg";

// Tailwind config for custom xs breakpoint
const tailwindConfig = {
  theme: {
    extend: {
      screens: {
        'xs': '360px',
      },
    },
  },
};

// ==========================
// DATA
// ==========================
const INFO = {
  name: "Sheersh Tehri",
  headline: "Software Developer • AR, Mobile & Web Specialist",
  location: "Gurugram, Haryana, India",
  email: "sheershtehri@gmail.com",
  phone: "+91-9258591695",
  summary: "Pre-Final year B.Tech CSE student and Full-Stack MERN, Mobile & GenAI Developer with 3+ internships, 5+ deployed applications, and proven experience delivering 2 International and 3 National-level Freelance projects. Passionate about building scalable software solutions and solving real-world problems.",
  links: {
    github: "https://github.com/sheershtehri7",
    linkedin: "https://www.linkedin.com/in/sheersh-tehri-19b740288/",
    starmapPlayStore: "https://play.google.com/store/apps/details?id=com.starrydelight.starmap&pcampaignid=web_share",
    starryDelights: "https://starrydelights.com/",
    theHCorp: "https://thehcorp.in/",
    citeRouge: "https://cite-rouge.vercel.app/",
    portfolioDrive: "https://drive.google.com/drive/folders/14ilYR60PQGp8logpkqGvRUqZJ9Vur0Xx?usp=sharing",
    groceryApp: "https://play.google.com/store/apps/groceryapp",
    reliefaDemo: "https://reliefa-demo.com"
  },
  profileImage: profileImage,
};

const EDUCATION = {
  institution: "Central University of Haryana",
  location: "Gurugram, India",
  degree: "B.Tech, Computer Science and Engineering",
  period: "August 2023 - June 2027",
  cgpa: "7.5",
};

const SKILLS = {
  Languages: ["JavaScript", "Python", "Dart", "Java", "C++", "C"],
  "Frameworks & Libraries": [
    "React.js", "Node.js", "Express.js", "LangChain", "LlamaIndex", "Flutter", "GenAI APIs (OpenAI GPT, Gemini)", "AR Plugins (ARCore/ARKit)"
  ],
  Databases: ["MongoDB", "PostgreSQL", "Firebase", "Supabase", "SQLite"],
  "Tools & Technologies": [
    "Git", "Docker", "GitHub CI/CD", "AWS EC2/S3", "Prompt Engineering", "Fine-tuning Large Language Models (LLMs)", "AdMob", 
    "Stripe", "Razorpay", "PhonePe", "FCM", "Google Maps/MapBox"
  ],
  "Architecture & Systems": [
    "Retrieval-Augmented Generation (RAG) Systems", "MVVM", "MVC", "MVP", "Clean Architecture"
  ],
};

const EXPERIENCE = [
  {
    role: "Full-Stack Application Developer",
    org: "MemoNeet (1M+ PlayStore)",
    location: "Chennai, India",
    period: "April 2025 – July 2025",
    bullets: [
      "Architected AdMob banner and interstitial ads integration driving revenue optimization on platform serving 1M+ downloads while maintaining seamless user experience.",
      "Engineered high-performance Bootcamp UI serving 10K+ daily active users using Clean Architecture MVVM pattern with Firebase Realtime Database and Authentication.",
      "Developed gamified app ecosystem including MCQ sections, freebies module, and interactive learning paths with dynamic animations and sound design to boost user engagement.",
    ],
  },
  {
    role: "Freelancer (AR + Full-Stack)",
    org: "StarCanvas",
    location: "NY, USA (Remote)",
    period: "May 2025 – Present",
    bullets: [
      "Built advanced AR star locator Mobile App rendering 100+ celestial objects with NASA’s .glb models, integrated via Starium API.",
      "Engineered Node.js/Express backend with MongoDB and JWT authentication, processing transactions via Stripe with a 99.9% success rate and deployed on AWS.",
    ],
    links: [
      { label: "Live App Link", href: INFO.links.starmapPlayStore },
    ],
  },
  {
    role: "Mobile Application Developer",
    org: "QuantaPixel Software Solutions",
    location: "Bengaluru, India (Remote)",
    period: "December 2024 – Present",
    bullets: [
      "Successfully managed 5+ projects simultaneously, launching multiple client applications with 2 apps on stores.",
      "Conducted client meetings, delivered presentations, and gathered requirements aligning with business goals.",
      "Achieved early increment within first month, showcasing exceptional performance and client satisfaction.",
    ],
  },
];

const PROJECTS = [
  {
    title: "YouTube RAG Chatbot Pipeline – Chrome Extension",
    stack: ["React.js", "Flutter", "Tailwind CSS", "FastAPI", "LangChain", "FAISS", "AWS"],
    summary: "Built a Chrome extension enabling contextual Q&A on YouTube videos using a RAG pipeline with LangChain and FAISS vector DB. Deployed backend on AWS (FastAPI + Docker) with Gemini integration, ensuring real-time response in 2s.",
    ctas: [
      { label: "Demo LINK", href: INFO.links.portfolioDrive },
      { label: "Github", href: INFO.links.github },
    ],
    icon: <Bot className="w-5 h-5" />,
  },
  {
    title: "StarCanvas - (NY, USA)",
    stack: ["Flutter", "ARCore/ARKit", "React.js", "TailwindCSS", "Node.js", "Express", "MongoDB", "Stripe", "AWS"],
    summary: "Built advanced AR star locator Mobile App rendering 100+ celestial objects with NASA’s .glb models, integrated via Starium API. Engineered Node.js/Express backend with MongoDB and JWT authentication, processing transactions via Stripe with a 99.9% success rate and deployed on AWS.",
    ctas: [
      { label: "Live App Link", href: INFO.links.starmapPlayStore },
    ],
    icon: <Star className="w-5 h-5" />,
    featured: true,
  },
  {
    title: "UNIYATRA — National Science Day Winner 🏆",
    stack: ["Flutter", "Google Maps APIs", "Dialogflow v2", "AI/ML", "Firebase", "Supabase", "IoT"],
    summary: "Transport tracking for 6,000+ students with GPS tracking, real-time ETA and AI chatbot; built full-stack with emergency features.",
    ctas: [
      { label: "Demo", href: INFO.links.portfolioDrive },
      { label: "Certificate", href: INFO.links.portfolioDrive },
    ],
    icon: <Compass className="w-5 h-5" />,
    featured: true,
  },
  {
    title: "TheHCorp",
    stack: ["React.js", "Tailwind", "Firebase", "LlamaIndex", "RAG System"],
    summary: "Built a modern, animated website with React.js and Tailwind CSS, backend on Firebase Firestore and Realtime DB, and integrating a Gemini-based GenAI chatbot.",
    ctas: [{ label: "LIVE Link", href: INFO.links.theHCorp }],
    icon: <Globe2 className="w-5 h-5" />,
  },
  {
    title: "Full Stack Grocery Warehouse App",
    stack: ["Flutter", "REST APIs", "Provider", "MVP Clean Architecture"],
    summary: "Complete grocery app with user/admin panels, cart functionality, PDF invoices, and Excel exports. Live on Play Store.",
    ctas: [{ label: "Play Store", href: INFO.links.groceryApp }],
    icon: <ShieldCheck className="w-5 h-5" />,
    featured: true,
  },
  {
    title: "Online Indian Citation Generator — Certified",
    stack: ["React", "JavaScript", "pdf.js"],
    summary: "Automated citation generator parsing academic PDFs for APA/MLA/IEEE formats. Certified by Prof. Dr. Naresh Kumar.",
    ctas: [
      { label: "Live", href: INFO.links.citeRouge },
      { label: "Certificate", href: INFO.links.portfolioDrive },
    ],
    icon: <GraduationCap className="w-5 h-5" />,
  },
  {
    title: "Reliefa — Menstrual Tracker Application",
    stack: ["Flutter", "Pedometer", "Human Body Simulation", "REST APIs"],
    summary: "Holistic wellness app with period, step, and sleep tracking, featuring 360° human body simulation and multilingual support.",
    ctas: [
      { label: "Website", href: INFO.links.reliefaDemo },
      { label: "Demo", href: INFO.links.portfolioDrive }
    ],
    icon: <Heart className="w-5 h-5" />,
  },
  {
    title: "Dog Sterilization App — Govt. of AP",
    stack: ["Flutter", "REST APIs", "Provider", "Clean Architecture"],
    summary: "Government app for Andhra Pradesh with 100+ dogs registered, real-time status updates, and district-wise search.",
    ctas: [{ label: "Demo", href: INFO.links.portfolioDrive }],
    icon: <ShieldCheck className="w-5 h-5" />,
  },
];

const LEADERSHIP = [
  "Beta Microsoft Student Ambassador — Delivered 5+ technical workshops reaching 200+ students on Microsoft developer tools and achieved 95% participant satisfaction in GitHub sessions.",
  "Selected as Mentor for Highways Project at GSSOC’25 - Merged 23 PR’s.",
  "Manager at Bytecode Coding Club — Led 100+ students, conducted Development seminars.",
  "Emerging CEO, Coding Ninjas 10X Club (CUH).",
  "Core team leader (24 members) for Advik'24 Techfest at Central University of Haryana.",
  "LeetCode: 200+ problems solved.",
  "GeeksForGeeks: 50+ problems solved.",
];

const ACHIEVEMENTS = [
  "National Science Day Winner — Solved Mobility for 6000+ Students with my Solution - UNIYATRA.",
  "Got 2nd position in IdeathonX event conducted by CodingNinjas.",
];

// ==========================
// COMPONENTS
// ==========================

const ScrollAnimatedDiv = ({ children, className = "", animation = "fade-up", threshold = 0.2, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay * 100);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, delay]);

  const animationStyles = {
    "fade-up": isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95",
    "fade-in": isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95",
    "slide-left": isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16",
    "slide-right": isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16",
  };

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-700 ease-out ${animationStyles[animation]} ${className}`}
    >
      {children}
    </div>
  );
};

const Badge = ({ children, variant = "default", className = "", onClick }) => {
  const baseClasses = "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors xs:text-[0.7rem]";
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800",
    secondary: "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100",
    success: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  };
  
  return (
    <span 
      className={`${baseClasses} ${variants[variant]} ${onClick ? 'cursor-pointer' : ''} ${className}`}
      onClick={onClick}
    >
      {children}
    </span>
  );
};

const Button = ({ children, variant = "default", size = "default", className = "", onClick, ...props }) => {
  const baseClasses = "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 hover:scale-105 min-w-[44px] min-h-[44px]";
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-blue-500/25 dark:bg-blue-500 dark:hover:bg-blue-600",
    outline: "border border-gray-300 bg-transparent hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-800 hover:shadow-lg",
    ghost: "hover:bg-gray-100 dark:hover:bg-gray-800",
    success: "bg-green-600 text-white hover:bg-green-700 shadow-lg hover:shadow-green-500/25",
  };
  const sizes = {
    default: "h-10 px-4 py-2 xs:h-9 xs:px-3 xs:text-sm",
    sm: "h-9 px-3 text-xs xs:text-[0.7rem]",
    lg: "h-12 px-6 xs:h-10 xs:px-4 xs:text-sm",
    icon: "h-10 w-10 xs:h-9 xs:w-9",
  };
  
  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

const Card = ({ children, className = "", hover = false }) => (
  <div className={`rounded-xl border bg-white shadow-sm dark:bg-gray-900 dark:border-gray-800 transition-all duration-300 ${hover ? 'hover:shadow-xl hover:scale-[1.02]' : ''} ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ children, className = "" }) => (
  <div className={`flex flex-col space-y-1.5 p-6 xs:p-4 ${className}`}>
    {children}
  </div>
);

const CardTitle = ({ children, className = "" }) => (
  <h3 className={`text-2xl xs:text-xl font-semibold leading-none tracking-tight ${className}`}>
    {children}
  </h3>
);

const CardContent = ({ children, className = "" }) => (
  <div className={`p-6 pt-0 xs:p-4 xs:pt-0 ${className}`}>
    {children}
  </div>
);

const Input = ({ className = "", ...props }) => (
  <input
    className={`flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm xs:text-xs placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-400 dark:focus:ring-blue-400 min-h-[44px] ${className}`}
    {...props}
  />
);

const TextArea = ({ className = "", ...props }) => (
  <textarea
    className={`flex min-h-[80px] w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm xs:text-xs placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-400 dark:focus:ring-blue-400 ${className}`}
    {...props}
  />
);

const SectionTitle = ({ icon, title, kicker }) => (
  <ScrollAnimatedDiv animation="fade-up" threshold={0.3}>
    <div className="mb-6 xs:mb-4">
      {kicker && (
        <p className="text-sm xs:text-xs uppercase tracking-widest text-gray-500 mb-2 dark:text-gray-400">
          {kicker}
        </p>
      )}
      <div className="flex items-center gap-3">
        <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
          {React.cloneElement(icon, { className: "w-6 h-6 xs:w-5 xs:h-5 text-blue-600 dark:text-blue-400" })}
        </div>
        <h2 className="text-3xl xs:text-2xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h2>
      </div>
    </div>
  </ScrollAnimatedDiv>
);

const Aura = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[36rem] w-[36rem] xs:h-[24rem] xs:w-[24rem] rounded-full blur-3xl opacity-10 bg-gradient-to-tr from-indigo-500 via-sky-400 to-emerald-400 dark:opacity-5"></div>
    <div className="absolute -bottom-40 right-1/3 h-[28rem] w-[28rem] xs:h-[18rem] xs:w-[18rem] rounded-full blur-3xl opacity-10 bg-gradient-to-tr from-fuchsia-500 via-rose-400 to-amber-400 dark:opacity-5"></div>
    <div className="absolute top-1/2 left-10 h-[20rem] w-[20rem] xs:h-[14rem] xs:w-[14rem] rounded-full blur-3xl opacity-10 bg-gradient-to-tr from-purple-500 via-pink-400 to-red-400 dark:opacity-5"></div>
  </div>
);

const Glass = ({ children, className = "" }) => (
  <div className={`relative rounded-2xl border bg-white/80 backdrop-blur-xl shadow-xl dark:bg-gray-900/80 dark:border-gray-700 p-6 xs:p-4 ${className}`}>
    {children}
  </div>
);

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (submitted) {
    return (
      <Glass className="text-center">
        <CheckCircle className="w-16 h-16 xs:w-12 xs:h-12 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl xs:text-xl font-bold mb-2">Message Sent!</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm xs:text-xs">
          Thanks for reaching out! I'll get back to you soon.
        </p>
      </Glass>
    );
  }

  return (
    <Glass>
      <div className="flex items-center gap-3 mb-6">
        <MessageCircle className="w-6 h-6 xs:w-5 xs:h-5 text-blue-500" />
        <h3 className="text-2xl xs:text-xl font-bold">Send me a message</h3>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="block text-sm xs:text-xs font-medium mb-2">Name</label>
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label className="block text-sm xs:text-xs font-medium mb-2">Email</label>
            <Input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              required
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm xs:text-xs font-medium mb-2">Subject</label>
          <Input
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="What's this about?"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm xs:text-xs font-medium mb-2">Message</label>
          <TextArea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell me about your project..."
            rows="5"
            required
          />
        </div>
        
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full"
          size="lg"
        >
          {isSubmitting ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
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
    </Glass>
  );
};

// ==========================
// MAIN APP
// ==========================
export default function Portfolio() {
  const [dark, setDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return true;
  });
  const [activeSection, setActiveSection] = useState('hero');
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const sectionRefs = useRef({});

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.classList.toggle('dark', dark);
      localStorage.setItem('theme', dark ? 'dark' : 'light');
    }
  }, [dark]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const allTags = useMemo(() =>
    Array.from(new Set(PROJECTS.flatMap((p) => p.stack))), []
  );

  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState(null);

  const filteredProjects = PROJECTS.filter((p) => {
    const matchesQuery = [p.title, p.summary, ...p.stack].join(" ").toLowerCase().includes(query.toLowerCase());
    const matchesTag = activeTag ? p.stack.includes(activeTag) : true;
    return matchesQuery && matchesTag;
  });

  const scrollToSection = (sectionId) => {
    sectionRefs.current[sectionId]?.scrollIntoView({ behavior: 'smooth' });
    setShowMobileMenu(false);
  };

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <Aura />
      
      {/* Header */}
      <header className="sticky top-0 z-50 px-2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm">
        <div className="mx-auto max-w-6xl flex items-center justify-between p-2 xs:p-3">
          <div className="flex items-center gap-2 xs:gap-3">
            <div className="p-1.5 xs:p-2 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg">
              <User className="h-4 w-4 xs:h-5 xs:w-5 text-white" />
            </div>
            <span className="font-bold text-base xs:text-lg">sheersh.tech</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-4 text-sm">
            {navItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)} 
                className={`transition-opacity ${activeSection === item.id ? 'opacity-100 font-bold text-blue-600 dark:text-blue-400' : 'opacity-80 hover:opacity-100'}`}
              >
                {item.label}
              </button>
            ))}
          </nav>
          
          <div className="flex items-center gap-1 xs:gap-2">
          
            <a href={INFO.links.linkedin} target="_blank" rel="noreferrer">
              <Button variant="outline" size="icon" className="rounded-full">
                <Linkedin className="h-4 w-4" />
              </Button>
            </a>
            <a href={INFO.links.github} target="_blank" rel="noreferrer">
              <Button variant="outline" size="icon" className="rounded-full">
                <Github className="h-4 w-4" />
              </Button>
            </a>
            <button className="md:hidden" onClick={() => setShowMobileMenu(!showMobileMenu)}>
              <Menu className="h-5 w-5 xs:h-6 xs:w-6" />
            </button>
          </div>
        </div>
        
        {showMobileMenu && (
          <nav className="md:hidden flex flex-col items-center pb-3 bg-white/80 dark:bg-gray-900/80">
            {navItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)} 
                className={`py-1.5 w-full text-center text-sm xs:text-base transition-opacity ${activeSection === item.id ? 'opacity-100 font-bold text-blue-600 dark:text-blue-400' : 'opacity-80 hover:opacity-100'}`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </header>

      <main className="mx-auto max-w-6xl px-2 xs:px-4 md:px-6">
        {/* Hero */}
        <section
          id="hero"
          ref={(el) => (sectionRefs.current.hero = el)}
          className="pt-8 xs:pt-10 md:pt-16 pb-6 xs:pb-8 relative"
        >
          <div className="grid md:grid-cols-2 gap-8 xs:gap-10 md:gap-16 items-center">
            {/* Left Column */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4 xs:gap-6">
              {/* Profile Image */}
              <ScrollAnimatedDiv animation="fade-up" threshold={0.3}>
                <img
                  src={INFO.profileImage}
                  alt="Sheersh Tehri"
                  className="w-20 h-20 xs:w-24 xs:h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full object-cover shadow-2xl border-4 border-white dark:border-gray-800 max-w-full"
                />
              </ScrollAnimatedDiv>

              {/* Name + Role */}
              <div className="w-full flex flex-col items-center md:items-start">
                <ScrollAnimatedDiv animation="fade-up" threshold={0.3} delay={0.1}>
                  <h1 className="text-3xl xs:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-3">
                    <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent">
                      {INFO.name}
                    </span>
                  </h1>
                </ScrollAnimatedDiv>

                <ScrollAnimatedDiv animation="fade-up" threshold={0.3} delay={0.2}>
                  <p className="text-base xs:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-4 xs:mb-6 max-w-xl font-medium">
                    {INFO.headline}
                  </p>
                </ScrollAnimatedDiv>
              </div>

              {/* Buttons + Location */}
              <ScrollAnimatedDiv animation="fade-up" threshold={0.3} delay={0.3}>
                <div className="flex flex-wrap justify-center md:justify-start items-center gap-3 xs:gap-4 mb-4 xs:mb-6">
                  <a href={INFO.links.linkedin} target="_blank" rel="noreferrer">
                    <Button
                    variant="outline" 
                      size="sm"
                      className="rounded-full px-4 xs:px-6"
                    >
                      Let’s Connect <Linkedin className="ml-2 h-4 w-4 xs:h-5 xs:w-5 text-blue-500" />
                    </Button>
                  </a>
                  <a href={INFO.links.portfolioDrive} target="_blank" rel="noreferrer">
                    <Button variant="outline" size="sm" className="rounded-full px-4 xs:px-6">
                      <Download className="mr-2 h-4 w-4" /> Resume
                    </Button>
                  </a>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2 text-gray-500 dark:text-gray-400 text-sm xs:text-base">
                  <MapPin className="h-4 w-4" /> {INFO.location}
                </div>
              </ScrollAnimatedDiv>

              {/* Skills Badges */}
              <ScrollAnimatedDiv animation="fade-up" threshold={0.3} delay={0.4}>
                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                  <Badge variant="outline">Microsoft Technologies</Badge>
                  <Badge variant="outline">AR Development</Badge>
                  <Badge variant="outline">Full-Stack</Badge>
                  <Badge variant="outline">Mobile Apps</Badge>
                  <Badge variant="outline">GenAI & RAG</Badge>
                </div>
              </ScrollAnimatedDiv>
            </div>

            {/* Right Column - Stats */}
            <ScrollAnimatedDiv animation="fade-up" threshold={0.3} delay={0.3}>
              <Glass className="w-full shadow-xl rounded-2xl">
                <h3 className="text-xl xs:text-lg font-bold mb-6 xs:mb-8 flex items-center gap-2 justify-center md:justify-start">
                  <Trophy className="h-5 w-5 text-yellow-500" /> Quick Stats
                </h3>

                <div className="grid grid-cols-2 gap-4 xs:gap-6 md:gap-8">
                  <ScrollAnimatedDiv animation="fade-up" threshold={0.3} delay={0.4}>
                    <div className="text-center">
                      <div className="flex items-center justify-center w-12 h-12 xs:w-14 xs:h-14 bg-gray-100 dark:bg-gray-800 rounded-xl mx-auto mb-3">
                        <Rocket className="w-5 h-5 xs:w-6 xs:h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div className="text-xl xs:text-2xl font-bold text-blue-600 dark:text-blue-400">10+</div>
                      <div className="text-xs xs:text-sm text-gray-600 dark:text-gray-400">Live Applications</div>
                    </div>
                  </ScrollAnimatedDiv>

                  <ScrollAnimatedDiv animation="fade-up" threshold={0.3} delay={0.5}>
                    <div className="text-center">
                      <div className="flex items-center justify-center w-12 h-12 xs:w-14 xs:h-14 bg-gray-100 dark:bg-gray-800 rounded-xl mx-auto mb-3">
                        <Briefcase className="w-5 h-5 xs:w-6 xs:h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div className="text-xl xs:text-2xl font-bold text-blue-600 dark:text-blue-400">3+</div>
                      <div className="text-xs xs:text-sm text-gray-600 dark:text-gray-400">Internships</div>
                    </div>
                  </ScrollAnimatedDiv>

                  <ScrollAnimatedDiv animation="fade-up" threshold={0.3} delay={0.6}>
                    <div className="text-center">
                      <div className="flex items-center justify-center w-12 h-12 xs:w-14 xs:h-14 bg-gray-100 dark:bg-gray-800 rounded-xl mx-auto mb-3">
                        <Users className="w-5 h-5 xs:w-6 xs:h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div className="text-xl xs:text-2xl font-bold text-blue-600 dark:text-blue-400">200+</div>
                      <div className="text-xs xs:text-sm text-gray-600 dark:text-gray-400">Students Mentored</div>
                    </div>
                  </ScrollAnimatedDiv>

                  <ScrollAnimatedDiv animation="fade-up" threshold={0.3} delay={0.7}>
                    <div className="text-center">
                      <div className="flex items-center justify-center w-12 h-12 xs:w-14 xs:h-14 bg-gray-100 dark:bg-gray-800 rounded-xl mx-auto mb-3">
                        <Target className="w-5 h-5 xs:w-6 xs:h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div className="text-xl xs:text-2xl font-bold text-blue-600 dark:text-blue-400">99.9%</div>
                      <div className="text-xs xs:text-sm text-gray-600 dark:text-gray-400">Project Success Rate</div>
                    </div>
                  </ScrollAnimatedDiv>
                </div>

                <ScrollAnimatedDiv animation="fade-up" threshold={0.3} delay={0.8}>
                  <div className="mt-6 xs:mt-8 p-3 xs:p-4 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-xl text-center">
                    <p className="text-xs xs:text-sm font-medium">
                      🚀 Available for Software Developer and Freelance Roles
                    </p>
                  </div>
                </ScrollAnimatedDiv>
              </Glass>
            </ScrollAnimatedDiv>
          </div>
        </section>

        {/* About Section */}
        <section id="about" ref={(el) => (sectionRefs.current.about = el)} className="py-8 xs:py-12 md:py-16">
          <SectionTitle 
            icon={<Lightbulb />} 
            title="About Me" 
            kicker="Who I Am" 
          />
          <ScrollAnimatedDiv animation="fade-up" threshold={0.3}>
            <Glass>
              <p className="text-base xs:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                {INFO.summary}
              </p>
            </Glass>
          </ScrollAnimatedDiv>
        </section>

        {/* Education */}
        <section id="education" ref={(el) => (sectionRefs.current.education = el)} className="py-8 xs:py-12 md:py-16">
          <SectionTitle 
            icon={<GraduationCap />} 
            title="Education" 
            kicker="Academic Background" 
          />
          <ScrollAnimatedDiv animation="fade-up" threshold={0.3}>
            <Glass>
              <div className="flex flex-col gap-4 xs:gap-6">
                <ScrollAnimatedDiv animation="slide-left" threshold={0.3} delay={0.1}>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                      <Calendar className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <Badge variant="outline">{EDUCATION.period}</Badge>
                  </div>
                  <h3 className="text-xl xs:text-lg font-bold mb-2">{EDUCATION.degree}</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold mb-1 text-sm xs:text-base">{EDUCATION.institution}</p>
                  <p className="text-xs xs:text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                    <MapPin className="w-3 h-3"/> {EDUCATION.location}
                  </p>
                  <p className="text-xs xs:text-sm text-gray-500 dark:text-gray-400">CGPA: {EDUCATION.cgpa}</p>
                </ScrollAnimatedDiv>
                <ScrollAnimatedDiv animation="slide-right" threshold={0.3} delay={0.2}>
                  <p className="text-gray-700 dark:text-gray-300 text-sm xs:text-base">
                    Pursuing a comprehensive education in Computer Science and Engineering, focusing on software development, AI, and emerging technologies.
                  </p>
                </ScrollAnimatedDiv>
              </div>
            </Glass>
          </ScrollAnimatedDiv>
        </section>

        {/* Experience */}
        <section id="experience" ref={(el) => (sectionRefs.current.experience = el)} className="py-8 xs:py-12 md:py-16">
          <SectionTitle 
            icon={<TerminalSquare />} 
            title="Experience" 
            kicker="Professional Journey" 
          />
          
          <div className="space-y-6 xs:space-y-8">
            {EXPERIENCE.map((exp, i) => (
              <ScrollAnimatedDiv key={i} animation="fade-up" threshold={0.2} delay={i * 0.2}>
                <Glass>
                  <div className="flex flex-col gap-4 xs:gap-6">
                    <ScrollAnimatedDiv animation="slide-left" threshold={0.2} delay={0.1}>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                          <Briefcase className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <Badge variant="outline">{exp.period}</Badge>
                      </div>
                      <h3 className="text-xl xs:text-lg font-bold mb-2">{exp.role}</h3>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold mb-1 text-sm xs:text-base">{exp.org}</p>
                      <p className="text-xs xs:text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                        <MapPin className="w-3 h-3"/> {exp.location}
                      </p>
                    </ScrollAnimatedDiv>
                    
                    <ScrollAnimatedDiv animation="slide-right" threshold={0.2} delay={0.2}>
                      <ul className="space-y-3">
                        {exp.bullets.map((bullet, j) => (
                          <li key={j} className="flex gap-3 text-gray-700 dark:text-gray-300 text-sm xs:text-base">
                            <ChevronRight className="h-4 w-4 mt-1 text-blue-500 flex-shrink-0"/> 
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {exp.links && (
                        <div className="mt-4 xs:mt-6 flex flex-wrap gap-3">
                          {exp.links.map((link, k) => (
                            <a key={k} href={link.href} target="_blank" rel="noreferrer">
                              <Button variant="outline" size="sm" className="rounded-full text-xs xs:text-sm">
                                <ExternalLink className="mr-1.5 h-3 w-3 xs:h-3.5 xs:w-3.5"/>
                                {link.label}
                              </Button>
                            </a>
                          ))}
                        </div>
                      )}
                    </ScrollAnimatedDiv>
                  </div>
                </Glass>
              </ScrollAnimatedDiv>
            ))}
          </div>
        </section>

        {/* All Projects */}
        <section id="projects" ref={(el) => (sectionRefs.current.projects = el)} className="py-8 xs:py-12 md:py-16">
          <SectionTitle 
            icon={<Rocket />} 
            title="All Projects" 
            kicker="Complete Portfolio" 
          />

          <ScrollAnimatedDiv animation="fade-up" threshold={0.3}>
            <div className="mb-6 xs:mb-8 flex flex-col gap-4 md:items-center">
              <div className="flex-1">
                <Input 
                  value={query} 
                  onChange={(e) => setQuery(e.target.value)} 
                  placeholder="🔍 Search projects..." 
                  className="rounded-full h-10 xs:h-12 px-4 xs:px-6" 
                />
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge 
                  variant={activeTag === null ? "default" : "outline"} 
                  className="cursor-pointer px-3 xs:px-4 py-1.5 xs:py-2" 
                  onClick={() => setActiveTag(null)}
                >
                  All Projects
                </Badge>
                {allTags.slice(0, 6).map((tag) => (
                  <Badge 
                    key={tag} 
                    variant={activeTag === tag ? "default" : "outline"} 
                    className="cursor-pointer px-2 xs:px-3 py-1 xs:py-2" 
                    onClick={() => setActiveTag(tag)}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </ScrollAnimatedDiv>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6">
            {filteredProjects.map((project, i) => (
              <ScrollAnimatedDiv key={i} animation="fade-up" threshold={0.2} delay={(i % 6) * 0.1}>
                <Card hover className="h-full flex flex-col">
                  <div className="p-4 xs:p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                        {React.cloneElement(project.icon, { className: "w-5 h-5 text-blue-600 dark:text-blue-400" })}
                      </div>
                      <h3 className="font-bold text-base xs:text-lg leading-tight">{project.title}</h3>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1 leading-relaxed text-sm xs:text-base">
                      {project.summary}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4 xs:mb-6">
                      {project.stack.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-[0.7rem] xs:text-xs">{tech}</Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-2 mt-auto">
                      {project.ctas.map((cta, j) => (
                        <a key={j} href={cta.href} target="_blank" rel="noreferrer">
                          <Button variant="outline" size="sm" className="rounded-full text-xs xs:text-sm">
                            <ExternalLink className="mr-1 h-3 w-3 xs:h-3.5 xs:w-3.5"/>
                            {cta.label}
                          </Button>
                        </a>
                      ))}
                    </div>
                  </div>
                </Card>
              </ScrollAnimatedDiv>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" ref={(el) => (sectionRefs.current.skills = el)} className="py-8 xs:py-12 md:py-16">
          <SectionTitle 
            icon={<Cpu />} 
            title="Technical Skills" 
            kicker="Tech Stack" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6">
            {Object.entries(SKILLS).map(([category, skills], i) => (
              <ScrollAnimatedDiv key={category} animation="fade-up" threshold={0.2} delay={i * 0.1}>
                <Glass className="h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                      {category === 'Languages' && <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />}
                      {category.includes('Frameworks') && <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400" />}
                      {category === 'Databases' && <Database className="w-5 h-5 text-blue-600 dark:text-blue-400" />}
                      {category.includes('Tools') && <Cloud className="w-5 h-5 text-blue-600 dark:text-blue-400" />}
                      {category.includes('Architecture') && <Cpu className="w-5 h-5 text-blue-600 dark:text-blue-400" />}
                    </div>
                    <h3 className="font-bold text-base xs:text-lg">{category}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-[0.7rem] xs:text-xs hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Glass>
              </ScrollAnimatedDiv>
            ))}
          </div>
        </section>

        {/* Leadership & Achievements */}
        <section id="leadership" ref={(el) => (sectionRefs.current.leadership = el)} className="py-8 xs:py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xs:gap-8">
            <ScrollAnimatedDiv animation="fade-up" threshold={0.3}>
              <SectionTitle 
                icon={<Award />} 
                title="Leadership & Community" 
                kicker="Beyond Code" 
              />
              <Glass>
                <ul className="space-y-3 xs:space-y-4">
                  {LEADERSHIP.map((item, i) => (
                    <ScrollAnimatedDiv key={i} animation="fade-up" threshold={0.2} delay={i * 0.1}>
                      <li className="flex gap-3">
                        <div className="p-1 rounded-full mt-1">
                          <Users className="h-3 w-3 text-blue-600 dark:text-blue-400"/> 
                        </div>
                        <span className="text-gray-700 dark:text-gray-300 text-sm xs:text-base">{item}</span>
                      </li>
                    </ScrollAnimatedDiv>
                  ))}
                </ul>
              </Glass>
            </ScrollAnimatedDiv>
            
            <ScrollAnimatedDiv animation="fade-up" threshold={0.3}>
              <SectionTitle 
                icon={<Trophy />} 
                title="Achievements" 
              />
              <Glass>
                <ul className="space-y-3 xs:space-y-4">
                  {ACHIEVEMENTS.map((achievement, i) => (
                    <ScrollAnimatedDiv key={i} animation="fade-up" threshold={0.2} delay={i * 0.1}>
                      <li className="flex gap-3">
                        <div className="p-1 rounded-full mt-1">
                          <Star className="h-3 w-3 text-yellow-600 dark:text-yellow-400"/> 
                        </div>
                        <span className="text-gray-700 dark:text-gray-300 text-sm xs:text-base">{achievement}</span>
                      </li>
                    </ScrollAnimatedDiv>
                  ))}
                </ul>
              </Glass>
            </ScrollAnimatedDiv>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" ref={(el) => (sectionRefs.current.contact = el)} className="py-8 xs:py-12 md:py-16">
          <SectionTitle 
            icon={<Mail />} 
            title="Let's Build Something Amazing" 
            kicker="Get In Touch" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xs:gap-8 md:gap-12">
            <ScrollAnimatedDiv animation="fade-up" threshold={0.3}>
              <div className="space-y-4 xs:space-y-6">
                <Glass>
                  <h3 className="text-xl xs:text-lg font-bold mb-4">Quick Contact</h3>
                  <div className="space-y-3 xs:space-y-4">
                    <ScrollAnimatedDiv animation="fade-up" threshold={0.2} delay={0.1}>
                      <a href={`mailto:${INFO.email}`} className="flex items-center gap-4 p-3 xs:p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group">
                        <div className="p-2 xs:p-3 bg-gray-100 dark:bg-gray-800 rounded-lg group-hover:scale-110 transition-transform">
                          <Mail className="h-4 w-4 xs:h-5 xs:w-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <p className="font-semibold text-sm xs:text-base">Email</p>
                          <p className="text-gray-600 dark:text-gray-400 text-xs xs:text-sm">{INFO.email}</p>
                        </div>
                      </a>
                    </ScrollAnimatedDiv>
                    
                    <ScrollAnimatedDiv animation="fade-up" threshold={0.2} delay={0.2}>
                      <a href={`tel:${INFO.phone.replace(/\D/g, '')}`} className="flex items-center gap-4 p-3 xs:p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group">
                        <div className="p-2 xs:p-3 bg-gray-100 dark:bg-gray-800 rounded-lg group-hover:scale-110 transition-transform">
                          <Phone className="h-4 w-4 xs:h-5 xs:w-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <p className="font-semibold text-sm xs:text-base">Phone</p>
                          <p className="text-gray-600 dark:text-gray-400 text-xs xs:text-sm">{INFO.phone}</p>
                        </div>
                      </a>
                    </ScrollAnimatedDiv>
                    
                    <ScrollAnimatedDiv animation="fade-up" threshold={0.2} delay={0.3}>
                      <div className="flex items-center gap-4 p-3 xs:p-4 rounded-lg">
                        <div className="p-2 xs:p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
                          <MapPin className="h-4 w-4 xs:h-5 xs:w-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <p className="font-semibold text-sm xs:text-base">Location</p>
                          <p className="text-gray-600 dark:text-gray-400 text-xs xs:text-sm">{INFO.location}</p>
                        </div>
                      </div>
                    </ScrollAnimatedDiv>
                  </div>
                  
                  <ScrollAnimatedDiv animation="fade-up" threshold={0.2} delay={0.4}>
                    <div className="mt-4 xs:mt-6 pt-4 xs:pt-6 border-t dark:border-gray-700">
                      <p className="text-xs xs:text-sm text-gray-600 dark:text-gray-400 mb-4">Connect with me:</p>
                      <div className="flex gap-2 xs:gap-3">
                        <a href={INFO.links.linkedin} target="_blank" rel="noreferrer">
                          <Button variant="outline" size="icon" className="rounded-full">
                            <Linkedin className="h-4 w-4" />
                          </Button>
                        </a>
                        <a href={INFO.links.github} target="_blank" rel="noreferrer">
                          <Button variant="outline" size="icon" className="rounded-full">
                            <Github className="h-4 w-4" />
                          </Button>
                        </a>
                        <a href={`mailto:${INFO.email}`}>
                          <Button variant="outline" size="icon" className="rounded-full">
                            <Mail className="h-4 w-4" />
                          </Button>
                        </a>
                      </div>
                    </div>
                  </ScrollAnimatedDiv>
                </Glass>
              </div>
            </ScrollAnimatedDiv>
            
            <ScrollAnimatedDiv animation="fade-up" threshold={0.3}>
              <ContactForm />
            </ScrollAnimatedDiv>
          </div>
          
          {/* Call to Action */}
          <ScrollAnimatedDiv animation="fade-up" threshold={0.3}>
            <Glass className="mt-6 xs:mt-8 text-center bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700">
              <Coffee className="w-10 h-10 xs:w-12 xs:h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl xs:text-2xl font-bold mb-4">Ready to collaborate?</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 xs:mb-6 max-w-2xl mx-auto text-sm xs:text-base">
                I'm currently open to internships, freelance projects, and exciting collaborations. 
                Let's build something amazing together!
              </p>
              <div className="flex flex-wrap justify-center gap-2 xs:gap-4">
                <Badge variant="success" className="px-3 xs:px-4 py-1.5 xs:py-2 text-xs xs:text-sm">✅ Available for Internships</Badge>
                <Badge variant="success" className="px-3 xs:px-4 py-1.5 xs:py-2 text-xs xs:text-sm">✅ Freelance Projects</Badge>
                <Badge variant="success" className="px-3 xs:px-4 py-1.5 xs:py-2 text-xs xs:text-sm">✅ Open Source Contributions</Badge>
                <Badge variant="success" className="px-3 xs:px-4 py-1.5 xs:py-2 text-xs xs:text-sm">✅ Technical Mentoring</Badge>
              </div>
            </Glass>
          </ScrollAnimatedDiv>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 xs:py-12 border-t dark:border-gray-800">
        <ScrollAnimatedDiv animation="fade-up" threshold={0.3}>
          <div className="mx-auto max-w-6xl px-2 xs:px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 xs:gap-3">
                <div className="p-1.5 xs:p-2 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg">
                  <Sparkles className="h-4 w-4 xs:h-5 xs:w-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-sm xs:text-base">{INFO.name}</p>
                  <p className="text-xs xs:text-sm text-gray-500 dark:text-gray-400">Microsoft Student Ambassador</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 xs:gap-6 text-xs xs:text-sm text-gray-500 dark:text-gray-400">
                <span>© {new Date().getFullYear()} Built with React & Tailwind CSS</span>
                <div className="flex items-center gap-1">
                  <span>Made with</span>
                  <Heart className="h-3 w-3 xs:h-4 xs:w-4 text-red-500 animate-pulse" />
                  <span>in India</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimatedDiv>
      </footer>
    </div>
  );
}