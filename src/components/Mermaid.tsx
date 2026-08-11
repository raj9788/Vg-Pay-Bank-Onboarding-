import React, { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';

export default function Mermaid({ chart, className }: { chart: string; className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check initial dark mode
    setIsDark(document.documentElement.classList.contains('dark'));

    // Observe changes to the html class attribute
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          setIsDark(document.documentElement.classList.contains('dark'));
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      mermaid.initialize({
        startOnLoad: false,
        theme: isDark ? 'dark' : 'default',
        themeVariables: isDark ? {
          fontFamily: 'inherit',
          primaryColor: '#121212',
          primaryBorderColor: '#333333',
          primaryTextColor: '#e5e5e5',
          lineColor: '#666666',
          secondaryColor: '#1a1a1a',
          tertiaryColor: '#0c0c0c',
        } : {
          fontFamily: 'inherit',
        },
        securityLevel: 'loose',
      });

      const renderChart = async () => {
        try {
          const id = `mermaid-svg-${Math.random().toString(36).substring(2, 9)}`;
          const { svg } = await mermaid.render(id, chart);
          if (containerRef.current) {
            containerRef.current.innerHTML = svg;
          }
        } catch (error) {
          console.error('Mermaid rendering failed', error);
        }
      };
      renderChart();
    }
  }, [chart, isDark]);

  return (
    <div 
      ref={containerRef} 
      className={`flex justify-center w-full overflow-x-auto py-6 ${className || ''}`}
    />
  );
}
