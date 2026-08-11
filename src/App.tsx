/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from './lib/utils';
import { Sidebar } from './components/Sidebar';
import { HandbookContent } from './components/HandbookContent';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex h-screen bg-brand-bg text-brand-text overflow-hidden font-sans">
      {/* Mobile sidebar backdrop */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar - Desktop & Mobile */}
      <div 
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 transform bg-brand-sidebar border-r border-brand-border transition-transform duration-300 ease-in-out lg:static lg:translate-x-0",
          mobileMenuOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full"
        )}
      >
        <div className="absolute right-4 top-4 lg:hidden">
          <button 
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 text-brand-text-muted hover:bg-white/10 rounded-md"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <Sidebar onLinkClick={() => setMobileMenuOpen(false)} />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Mobile header */}
        <div className="lg:hidden flex items-center justify-between px-4 py-3 border-b border-brand-border bg-brand-sidebar">
          <div className="flex items-center gap-2">
            <span className="font-bold text-brand-text">VG Pay Docs</span>
          </div>
          <button 
            onClick={() => setMobileMenuOpen(true)}
            className="p-2 -mr-2 text-brand-text-muted hover:bg-white/10 rounded-md"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto">
          <HandbookContent />
        </main>
      </div>
    </div>
  );
}
