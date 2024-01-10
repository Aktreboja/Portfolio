import React from "react";

interface AboutTextProps {
  aboutText: string;
}

const AboutText  = ({ aboutText }: AboutTextProps) => {
  return (
    <div className="mb-5 text-simple-text  md:text-md leading-relaxed">
        <p dangerouslySetInnerHTML={{ __html: aboutText }} />
        
    </div>
  );
};

export default AboutText;
