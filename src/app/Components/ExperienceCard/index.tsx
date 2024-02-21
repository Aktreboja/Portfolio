import React from "react";
import Skill from "../Skill";

interface LinkProps {
    url: string;
    linkName: string
}

interface ExperienceCardProps {
    timeline: string;
    positionName: string;
    description: string[];
    links?: LinkProps[];
    skills: string[];
}

const ExperienceCard  = ({ timeline, positionName, description, links, skills }: ExperienceCardProps) => {
  return (
    <div className="hover:bg-modal-bg hover:bg-opacity-50 duration-100 hover:shadow-md w-[95%] sm:flex justify-between rounded-md py-5 px-2 my-2">
        <div className='sm:pr-4 sm:pl-2 lg:px-0 w-1/3 '>
            <p className='text-simple-text text-md font-semibold px-2 sm:px-0 w-fit lg:w-full text-nowrap lg:text-wrap '>{timeline}</p>
        </div>
        <div className=' sm:w-4/5 '>
            <div className='px-2'>
                <p className='text-title-heading font-semibold pb-4'>{positionName}</p>
                {description.map((desc, index) => (
                    <p key = {index} className='text-simple-text pb-4 lg:text-md text-sm '>
                        {desc}
                    </p>
                ))}
                {links && links.length > 0 && (
                <div>
                {links.map((link, index) => (
                <a href={link.url} key={index} target="_blank" className="text-simple-text hover:underline font-semibold text-sm mx-4 my-3">{link.linkName}</a> 
                ))}
                </div>
            )}
                <div className='w-full  py-1 flex flex-wrap'>
                {skills.map((item, index) => (
                    <Skill key = {index} skillName= {item}/>
                ))}
                </div>
            </div>
        </div>
  </div>
  );
};

export default ExperienceCard;
