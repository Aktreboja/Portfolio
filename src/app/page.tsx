import Image from 'next/image';
import Link from 'next/link';
import LinkedIn from '../../public/linkedin-logo.png'
import Github from '../../public/github-mark.png'
import Skill from './Components/Skill';

export default function Home() {

  const spawnnSkills = ['Unity', 'JavaScript', 'React', 'DynamoDB', 'Sagemaker', 'Lambda', 'Python']

  return (
    <div className="w-full bg-secondaryBg">
      <main className="w-full min-h-screen flex flex-col lg:flex-row">
        {/* Left side - sticky */}
        <section className="lg:w-1/2 lg:min-h-screen bg-secondaryBg lg:flex lg:flex-col lg:items-end lg:justify-between sticky top-0 h-full  ">
          <div className="min-w-xl lg:h-screen border px-4">
            <div className='lg:py-24'>
              <h1 className="text-title-heading text-4xl sm:text-5xl font-semibold tracking-tight mb-4 ">Aldrich Reboja</h1>
              <p className="text-title-heading font-medium tracking-tight mb-4">Full Stack Engineer at Spawnn</p>
              <p className="text-simple-text w-2/3 tracking-tight text-sm ">
                I build end-to-end solutions for various product use cases.
              </p>
            </div>


            <div className='hidden lg:block lg:py-24'>
              <p className='text-simple-text py-2 font-semibold cursor-pointer'>About</p>
              <p className='text-simple-text py-2 font-semibold cursor-pointer'>Experience</p>
              <p className='text-simple-text py-2 font-semibold cursor-pointer'>Projects</p>
            </div>

            <div className=' w-full flex lg:justify-end lg:px-9 lg:py-16 mt-6'>
            <Link href = "https://www.linkedin.com/in/aktreboja/" target='_blank'><Image className='h-fit w-7 lg:w-9 mr-3 filter invert cursor-pointer' src = {LinkedIn} width = {100} alt = "Linkedin Logo"/></Link>
            <Link href = "https://github.com/AldrichhhXO" target = "_blank"><Image className='h-fit w-7 lg:w-9 mr-3 filter invert cursor-pointer' src = {Github} width = {100} alt = "Github Logo"/></Link>
            {/* <Image className='h-fit w-8 mr-3' src = {LinkedIn} width = {100} alt = "Linkedin Logo"/> */}
          </div>
          </div>

        </section>

        {/* Right side - scrollable */}
        <section className="w-full lg:w-1/2 h-full lg:overflow-y-auto">
          {/* About section */}
          <section className="my-16 flex lg:px-8">

            <div className="w-full lg:max-w-lg lg:py-24 text-sm px-4">
              <p className='block lg:hidden font-bold text-title-heading py-3'>About</p>
              <div className='mb-5 text-simple-text  md:text-md leading-relaxed'>
               From my early days immersed in a multitude of video games, I have cultivated a unique foundation that has influenced my journey as a <strong>Full Stack Engineer</strong>.
               Navigating through various genres - from strategy and role-playing games to fast-paced shooters - they have both honed my strategic thinking and problem solving skills but
               also helped foster an easily adaptable mindset necessary with overcome various challenges.
              </div>

              <div className ='mb-5 text-simple-text md:text-md leading-relaxed'>
                Today i&apos;ve had the honor and opportunity to be able to approach and implement new technologies through hands-on learning, a trait that has proved to be invaluable in a constantly changing field. 
                Currently I am building products for <strong>Spawnn.</strong> On my free time I
                am either working on improving my early and late game strategies in <strong>Teamfight Tactics</strong>, or out enjoying and learning about various cultures through food.
              </div>
            </div>
          </section>

          <p className="text-title-heading px-4 font-bold lg:hidden">Experience</p>
          {/* Experience Section */}
          <section className="w-full border lg:px-8 lg:max-w-xl ">
            
            

            {/* Experience Modals */}
            <div className="hover:bg-modal-bg hover:bg-opacity-50 duration-100 hover:shadow-md w-full sm:flex  rounded-md py-5 px-2 ">
              {/* ... */}
              <div className='w-fit sm:pr-4 sm:pl-2 lg:px-0 lg:w-1/3'>
                <p className='text-simple-text text-md font-semibold px-2 sm:px-0 w-full text-nowrap'>2022 - Present</p>
              </div>
              <div className=' sm:w-4/5 border '>
                <div className='px-2'>
                  <p className='text-title-heading font-semibold pb-4'>Full Stack Engineer - Spawnn</p>
                  <p className='text-simple-text pb-4 lg:text-md text-sm '>
                    Rapidly contributed to the development of diverse solutions to enhance the gaming space, contributing to the development of products ranging from recommendation systems to
                    custom and easily pluggable SDKs in Unity. 
                  </p>
                  <p className='text-simple-text pb-4 lg:text-md text-sm'>
                    Incorporated systems across multiple applications, from AWS services to API Servers with Python or JavaScript with the aim to improve in-game monetization of items.
                  </p>

                  <div className='w-full  py-1 flex flex-wrap'>
                    {spawnnSkills.map((item, index) => (
                      <Skill key = {index} skillName= {item}/>
                    ))}
                  </div>
                </div>
                
              </div>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}
