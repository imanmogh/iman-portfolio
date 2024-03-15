import React from 'react'
import ABMR from '../assets/ABMR.png'
import noteTaker from '../assets/noteTaker.png'
import passwordGenerator from '../assets/passwordGenerator.png'
import calmQuest from '../assets/calmQuest.png'
import promptopia from '../assets/promptopia.png'



export const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: promptopia,
            demoLink: "https://promptopia-smoky-six.vercel.app/",
            codeLink: "https://github.com/imanmogh/promptopia"
        },
        {
            id: 2,
            src: calmQuest,
            demoLink: "https://calmquest.herokuapp.com/login",
            codeLink: "https://github.com/imanmogh/CalmQuest"
        },
        {
            id: 3,
            src: ABMR,
            demoLink: "https://another-bad-music-review-woo.herokuapp.com/",
            codeLink: "https://github.com/imanmogh/anotherBadMusicReview"
        },
        {
            id: 4,
            src: noteTaker,
            demoLink: "https://immense-journey-79759.herokuapp.com/",
            codeLink: "https://github.com/imanmogh/noteTaker"
        },
        {
            id: 5,
            src: passwordGenerator,
            demoLink: "https://imanmogh.github.io/passwordGenerator/",
            codeLink: "https://github.com/imanmogh/passwordGenerator"
        },

    ]



  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Check out some of my projects right here</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                {
                    portfolios.map(({id, src, codeLink, demoLink}) => (
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'> 
                            <img src={src} alt='' className='rounded-md duration-200 hover:scale-105'/>
                            <div className='flex items-center justify-center'>
                                <a href={demoLink}><button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105' target="_blank" rel="noreferrer">Demo</button></a>
                                <a href={codeLink}><button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105' target="_blank" rel="noreferrer">Code</button></a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Portfolio