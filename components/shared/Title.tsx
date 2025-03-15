import React, { JSX } from "react";

interface TitleProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements; // Allows using <h1>, <h2>, etc.
}

const Title: React.FC<TitleProps> = ({
  children,
  className = "",
  as: Tag = "h2",
}) => {
  return (
    <Tag
      className={`scroll-m-20   text-2xl md:text-4xl font-semibold tracking-normal first:mt-0  md:mb-4 ${className}`}
    >
      {children}
    </Tag>
  );
};

export default Title;
