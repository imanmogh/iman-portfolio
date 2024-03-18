import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill, BsInstagram } from 'react-icons/bs';

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30}/>
        </>
      ),
      href: 'https://www.linkedin.com/in/iman-moghaddas-315250146/',
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30}/>
        </>
      ),
      href: 'https://github.com/imanmogh',
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30}/>
        </>
      ),
      href: 'mailto:imanmoghaddas.work@gmail.com',
    },
    {
      id: 4,
      child: (
        <>
          Instagram <BsInstagram size={30}/>
        </>
      ),
      href: 'https://www.instagram.com/pk_iman/',
    },
    {
      id: 5,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30}/>
        </>
      ),
      href: 'portfolio/public/Iman-Resume.pdf',
      download: true
    }
  ];

  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
      <ul>
        {links.map(({id, child, href, download}) => (
          <li key={id} className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md bg-gray-500 rounded-md'>
            <a href={href} className='flex justify-between items-center w-full text-white' download={download} target='_blank' rel="noreferrer" aria-label={child}>
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
