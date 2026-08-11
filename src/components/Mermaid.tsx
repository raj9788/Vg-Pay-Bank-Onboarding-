import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

mermaid.initialize({
  startOnLoad: false,
  theme: 'dark',
  themeVariables: {
    fontFamily: 'inherit',
    primaryColor: '#121212',
    primaryBorderColor: '#333333',
    primaryTextColor: '#e5e5e5',
    lineColor: '#666666',
    secondaryColor: '#1a1a1a',
    tertiaryColor: '#0c0c0c',
  },
  securityLevel: 'loose',
});

export default function Mermaid({ chart, className }: { chart: string; className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
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
  }, [chart]);

  return (
    <div 
      ref={containerRef} 
      className={`flex justify-center w-full overflow-x-auto py-6 ${className || ''}`}
    />
  );
}
