import React from 'react';
import { experience } from '../../data/data.json';
import ProjectCard from '../ProjectCard';

export default function Work() {
  return (
    <section className="relative w-full h-full">
      <div className="max-w-[1060px] mx-auto mb-20 max-lg:px-4">
        <h3 className="mx-auto my-12 font-semibold text-4xl">
          Professional Experience
        </h3>
        <div className="grid max-lg:grid-cols-1 grid-cols-2 gap-x-10 gap-y-10">
          {experience &&
            experience.map((project, key) => (
              <ProjectCard key={key} project={project} />
            ))}
        </div>
      </div>
    </section>
  );
}
