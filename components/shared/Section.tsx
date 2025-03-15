import React from "react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ children, className }) => {
  return (
    <section className={`py-12 lg:py-32 relative ${className}`}>
      {children}
    </section>
  );
};

export default Section;
