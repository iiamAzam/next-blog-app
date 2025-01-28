"use client"
import React, { useEffect, useState } from 'react';

const OnThisPage = () => {
  const [activeSection, setActiveSection] = useState('');
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    // Get all h2 and h3 elements from the page
    const elements = document.querySelectorAll('h2, h3');
    const headingsData = Array.from(elements).map((element) => ({
      id: element.id,
      text: element.textContent,
      level: element.tagName.toLowerCase(),
      offsetTop: element.offsetTop,
    }));
    setHeadings(headingsData);

    // Add scroll event listener
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for better UX

      // Find the current active section
      const current = headingsData.reduce((active, heading) => {
        if (heading.offsetTop <= scrollPosition) {
          return heading.id;
        }
        return active;
      }, '');

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Offset for fixed header if needed
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className="fixed right-[-40px] top-10 hidden w-64 overflow-y-auto lg:block">
      <div className="rounded-lg   p-6 ">
        <h4 className="mb-4 text-sm font-semibold">On This Page</h4>
        <ul className="space-y-1 text-sm">
          {headings.map((heading) => (
            <li
              key={heading.id}
              className={`cursor-pointer ${
                heading.level === 'h3' ? 'ml-4' : ''
              }`}
            >
              <a
                onClick={() => scrollToSection(heading.id)}
                className={`block transition-colors  ${
                  activeSection === heading.id
                    ? 'text-gray-100 font-medium'
                    : 'text-gray-600'
                }`}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default OnThisPage;