'use client';
import { useState, useEffect, useRef } from 'react';
import {
  ChevronDown,
  Menu,
  X,
  BookOpen,
  Users,
  Mic,
  GraduationCap,
  PenTool,
  Newspaper,
  Globe,
  Search,
  MessageSquare,
  Settings,
  Zap,
  FileText,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const [aiOpen, setAiOpen] = useState(false);

  const exploreRef = useRef<HTMLDivElement>(null);
  const aiRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (
      exploreRef.current &&
      !exploreRef.current.contains(e.target as Node)
    ) {
      setExploreOpen(false);
    }
    if (
      aiRef.current &&
      !aiRef.current.contains(e.target as Node)
    ) {
      setAiOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const exploreItems = [
    { label: 'Answers', desc: 'Powered by AI, answered by Yhoiki freelancers', icon: BookOpen },
    { label: 'Community', desc: "Connect with Yhoiki’s team and community", icon: Users },
    { label: 'Guides', desc: 'In-depth guides covering business topics', icon: PenTool },
    { label: 'Podcast', desc: 'Inside tips from top business minds', icon: Mic },
    { label: 'Learn', desc: 'Professional online courses, led by experts', icon: GraduationCap },
    { label: 'Blog', desc: 'News, information and community stories', icon: Newspaper },
    { label: 'Logo Maker', desc: 'Create your logo instantly', icon: PenTool },
  ];

  const aiItems = [
    { label: 'AI Search', desc: 'Find information instantly with AI', icon: Search },
    { label: 'AI Chat', desc: 'Engage in smart conversations', icon: MessageSquare },
    { label: 'AI Tools', desc: 'Access a suite of AI-powered utilities', icon: Settings },
    { label: 'AI Recommendation', desc: 'Get personalized suggestions from AI', icon: Zap },
    { label: 'AI Form', desc: 'Generate and fill forms effortlessly', icon: FileText },
  ];

  return (
    <nav className="bg-white sticky top-0 z-50 p-2 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/images/logo/logoyhoiki.png" alt="Yhoiki Logo" width={30} height={30} />
            <span className="text-2xl font-bold text-gray-600">
              Yhoiki <span className="bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent">Service.</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-4">
            <div className="relative" ref={exploreRef}>
              <button
                onClick={() => {
                  setExploreOpen(!exploreOpen);
                  setAiOpen(false);
                }}
                className="flex items-center text-gray-700 hover:bg-gray-100 rounded-md px-3 py-2 font-semibold transition"
              >
                Explore
                <ChevronDown
                  className={`ml-1 w-4 h-4 transition-transform duration-200 ${exploreOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {exploreOpen && (
                <div className="absolute right-0 mt-2 w-[340px] bg-white rounded-lg shadow-xl border border-gray-100 p-2 z-50 animate-fade-in-down">
                  <ul className="divide-y divide-gray-100">
                    {exploreItems.map(({ label, desc, icon: Icon }) => (
                      <li
                        key={label}
                        className="flex items-start space-x-3 py-2.5 px-3 rounded-md hover:bg-gray-100 transition cursor-pointer"
                      >
                        <Icon size={18} className="text-green-600 mt-1" />
                        <div>
                          <p className="font-semibold text-sm text-gray-900">{label}</p>
                          <p className="text-xs text-gray-500">{desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="relative" ref={aiRef}>
              <button
                onClick={() => {
                  setAiOpen(!aiOpen);
                  setExploreOpen(false);
                }}
                className="flex items-center text-gray-700 hover:bg-gray-100 rounded-md px-3 py-2 font-semibold transition"
              >
                AI Feature
                <ChevronDown
                  className={`ml-1 w-4 h-4 transition-transform duration-200 ${aiOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {aiOpen && (
                <div className="absolute right-0 mt-2 w-[340px] bg-white rounded-lg shadow-xl border border-gray-100 p-2 z-50 animate-fade-in-down">
                  <ul className="divide-y divide-gray-100">
                    {aiItems.map(({ label, desc, icon: Icon }) => (
                      <li
                        key={label}
                        className="flex items-start space-x-3 py-2.5 px-3 rounded-md hover:bg-gray-100 cursor-pointer transition"
                      >
                        <Icon size={18} className="text-green-600 mt-1" />
                        <div>
                          <p className="font-semibold text-sm text-gray-900">{label}</p>
                          <p className="text-xs text-gray-500">{desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <Link href="#" className="text-gray-700 hover:text-green-600 font-medium py-2 px-3 rounded-md transition">Become a Seller</Link>
            <Link href="#" className="text-gray-700 hover:text-green-600 font-medium flex items-center gap-1 py-2 px-3 rounded-md transition">
              <Globe size={16} /> EN
            </Link>
            <Link href="#" className="text-gray-700 hover:bg-gray-100 font-medium py-2 px-3 rounded-md transition">Sign In</Link>
            <Link href="#" className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 text-white px-4 py-2 rounded font-semibold transition">
              Register
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={24} className="text-gray-700" /> : <Menu size={24} className="text-gray-700" />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 border-t border-gray-200">
          <ul className="space-y-3 text-base pt-4">
            <li>
              <button onClick={() => { setExploreOpen(!exploreOpen); setAiOpen(false); }} className="flex items-center font-medium w-full text-left text-gray-800 hover:text-green-600">
                Explore <ChevronDown className={`ml-auto w-4 h-4 transition-transform ${exploreOpen ? 'rotate-180' : ''}`} />
              </button>
              {exploreOpen && (
                <ul className="ml-4 mt-2 space-y-2">
                  {exploreItems.map(({ label, desc }) => (
                    <li key={label} className="text-gray-700 hover:text-green-600">
                      <Link href="#" className="block py-1.5">
                        <p className="font-semibold">{label}</p>
                        <p className="text-xs text-gray-500">{desc}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <button onClick={() => { setAiOpen(!aiOpen); setExploreOpen(false); }} className="flex items-center font-medium w-full text-left text-gray-800 hover:text-green-600">
                AI Feature <ChevronDown className={`ml-auto w-4 h-4 transition-transform ${aiOpen ? 'rotate-180' : ''}`} />
              </button>
              {aiOpen && (
                <ul className="ml-4 mt-2 space-y-2">
                  {aiItems.map(({ label, desc }) => (
                    <li key={label} className="text-gray-700 hover:text-green-600">
                      <Link href="#" className="block py-1.5">
                        <p className="font-semibold">{label}</p>
                        <p className="text-xs text-gray-500">{desc}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li><Link href="#" className="block py-2 font-medium text-gray-800 hover:text-green-600">Become a Seller</Link></li>
            <li><Link href="#" className="flex items-center gap-2 py-2 font-medium text-gray-800 hover:text-green-600"><Globe size={18} /> EN</Link></li>
            <li><Link href="#" className="block py-2 font-medium text-gray-800 px-3 rounded-md hover:bg-gray-100">Sign In</Link></li>
            <li><Link href="#" className="block bg-gradient-to-r from-green-500 to-green-600 text-white text-center py-2 rounded font-semibold mt-4">
              Register
            </Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}