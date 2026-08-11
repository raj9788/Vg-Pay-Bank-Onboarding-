import React, { useState, useEffect } from 'react';
import { cn } from '../lib/utils';
import { BookOpen, Moon, Sun } from 'lucide-react';
import { useActiveSection } from '../hooks/useActiveSection';

const sections = [
  { id: 'section-1', title: '1. Company Overview' },
  { id: 'section-2', title: '2. High-Level Onboarding Process' },
  { id: 'section-3', title: '3. Architecture & User Hierarchy' },
  { id: 'section-4', title: '4. Payment Soundbox (S1) - Device Overview & Manual' },
  { id: 'section-5', title: '5. Technical Integration' },
  { id: 'section-6', title: '6. Security & Infrastructure Checklist' },
  { id: 'section-7', title: '7. Merchant & Agent Onboarding Workflows' },
  { id: 'section-8', title: '8. Ticketing & Support Flow' },
  { id: 'section-9', title: '9. Pre-Go-Live Checklists' },
  { id: 'section-10', title: '10. Bank Information Collection Template' },
];

interface SidebarProps {
  className?: string;
  onLinkClick?: () => void;
}

export function Sidebar({ className, onLinkClick }: SidebarProps) {
  const activeSection = useActiveSection(sections.map(s => s.id));
  const [isDark, setIsDark] = useState(true); // default to true since original design was updated to dark

  useEffect(() => {
    // Check initial state from classList or local storage if needed.
    // We will just initialize to dark by default.
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Update URL hash without jumping
      window.history.pushState(null, '', `#${id}`);
    }
    if (onLinkClick) onLinkClick();
  };

  return (
    <div className={cn("flex flex-col h-full bg-brand-sidebar border-r border-brand-border", className)}>
      <div className="p-6 border-b border-brand-border">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-8 h-8 bg-amber-600 rounded flex items-center justify-center font-bold text-black">
            VG
          </div>
          <span className="text-lg font-semibold tracking-tight text-brand-text">VG PAY</span>
        </div>
        <p className="text-[10px] text-brand-text-dim uppercase tracking-widest">Bank Onboarding v1.0</p>
      </div>
      
      <div className="flex-1 overflow-y-auto py-6 px-4">
        <nav className="space-y-1.5">
          <div className="text-[10px] uppercase text-brand-text-dim font-bold mb-2 px-2">Documentation</div>
          {sections.map((section) => {
            const isActive = activeSection === section.id;
            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => handleClick(e, section.id)}
                className={cn(
                  "block px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  isActive
                    ? "bg-brand-accent-bg text-brand-accent-text"
                    : "text-brand-text-muted hover:text-brand-text hover:bg-brand-text/5"
                )}
              >
                {section.title}
              </a>
            );
          })}
        </nav>
      </div>
      
      <div className="p-6 border-t border-brand-border">
        <button 
          onClick={toggleTheme}
          className="flex items-center justify-between w-full p-2 text-sm text-brand-text-muted hover:text-brand-text hover:bg-brand-text/5 rounded-md transition-colors"
        >
          <span className="font-medium">{isDark ? 'Dark Theme' : 'Light Theme'}</span>
          {isDark ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
}
