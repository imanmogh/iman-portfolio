import React from 'react';

export const About = () => {
  return (
    <div name="about" className='w-full h-auto md:h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500 p-2'>About</p>
        </div>
        <div className="mt-4 md:mt-10"></div> {/* Reduce mt-10 to mt-4 on smaller screens */}
        <p className='text-xl mt-4'>
          Hi, I'm Iman Moghaddas, a 25-year-old full-stack software developer. Graduating with a Bachelor of Science degree in Software Engineering from Kennesaw State University in December 2021, 
          I've honed my skills in building comprehensive software solutions.
        </p>
        <div className="mt-4 md:mt-10"></div> {/* Reduce mt-10 to mt-4 on smaller screens */}
        <p className='text-xl'>
          I've furthered my expertise through a full-stack web development certificate program at Georgia Tech's bootcamp. 
          This intensive training not only elevated my technical abilities but also refined my approach to problem-solving, making me a more adept and versatile developer.
        </p>
        <div className="mt-4 md:mt-10"></div> {/* Reduce mt-10 to mt-4 on smaller screens */}
        <p className='text-xl'>
          Beyond the world of coding, I'm a passionate musician, having composed and recorded music since childhood. 
          As a singer-songwriter, I find inspiration and balance in the creative process, fueling my innovative mindset in both music and software development.
        </p>
        <div className="mt-4 md:mt-10"></div> {/* Reduce mt-10 to mt-4 on smaller screens */}
        <p className='text-xl'>
          In my quest for continual growth, I enthusiastically embrace new challenges and opportunities to expand my horizons. 
          I thrive on the excitement of learning and mastering new activities, enriching my life with diverse experiences and knowledge.
          Thank you for taking the time to learn a bit about me. I'm excited to connect and explore potential collaborations and opportunities together.
        </p>
      </div>
    </div>
  );
};