import React from "react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ children, className }) => {
  return (
    <section className={`py-10 lg:py-20 relative ${className}`}>
      {children}
    </section>
  );
};

export default Section;
