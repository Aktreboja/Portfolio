'use client';
import React, { useEffect, useRef, useState } from 'react';

interface Project {
  title: string;
  description: string[];
  skills: string[];
  sourceCode: string;
  liveSite: string;
  image?: string;
  tag: string;
  company?: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { image, title, tag, company } = project;
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.25,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`flex flex-col justify-between gap-4 w-full h-full relative opacity-0 ${
        isVisible ? 'animate-[fadeInLeft_1s_ease-in-out_forwards_1s]' : ''
      }`}
    >
      {/* Project Images */}
      <div className="mx-auto">
        {image ? (
          <img src={image} className="object-cover shadow-md" />
        ) : (
          <div className="w-80 h-60 bg-secondaryBg"></div>
        )}
      </div>
      <div className="flex justify-between">
        <div>
          {company ? (
            <h3 className="text-lg font-semibold">{company}</h3>
          ) : (
            <h3 className="text-lg font-semibold">{title}</h3>
          )}
          {company && (
            <p className="text-sm text-accentBg text-opacity-60">{title}</p>
          )}
        </div>

        <p className="text-lg font-medium text-accentBg text-opacity-60">
          {tag}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
