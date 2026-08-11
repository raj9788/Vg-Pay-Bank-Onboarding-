import { useState, useEffect } from 'react';

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the first entry that is intersecting
        // Or if multiple, the one with the highest intersection ratio
        const visibleSections = entries.filter((entry) => entry.isIntersecting);
        
        if (visibleSections.length > 0) {
          // Sort by intersection ratio
          visibleSections.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: '-100px 0px -40% 0px',
        threshold: [0, 0.2, 0.5, 0.8, 1],
      }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, [sectionIds]);

  return activeSection;
}
