import React from 'react';
import ProjectCard from '../ProjectCard';
import { projects } from '../../data/data.json';

export default function Projects() {
  return (
    <section className="relative w-full h-full">
      <div className="max-w-[1060px] mx-auto mb-20 max-lg:px-4">
        <h3 className="mx-auto my-12 font-semibold text-4xl">Projects</h3>
        <div className="grid max-lg:grid-cols-1 grid-cols-2  gap-x-10 gap-y-10">
          {projects &&
            projects.map((project, key) => (
              <ProjectCard key={key} project={project} />
            ))}
        </div>
      </div>
    </section>
  );
}
