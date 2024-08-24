

// first 3 projects are visible on the homepage while all are visible on the work page.

export const projects = [
    //leave the githublink field blank if it is a private repo or doent exist, alerts will take care of it
    //leave the projectlink field blank if it the project has not been deployed, alerts will take care of it
    {
        name: 'Smart Docs', //project name
        description: 'Google Docs like live collaboration text editing platform with built in AI text generation feature', //project description
        githubLink: 'https://github.com/javeria2108/SmartDocs', //github repo link
        projectLink: 'https://docs-clone-green.vercel.app/sign-in', //deployed project link
        tech: ['Next JS', 'Gemini API', 'Liveblocks','Tailwind CSS'], //techstack of the project, it is advisavble to mention only upto 3 technologies here to maintain the ui
        photo: '/images/project1.png', //list of names of images from above imports.
    },
    {
        name: 'Assist AI',
        description: 'An AI customer assistance chatbot built for Headstarter AI SWE Fellowship.',
        githubLink: 'https://github.com/javeria2108/AI-customer-assistance',
        projectLink: 'https://assistai-lime.vercel.app/',
        tech: ['Next JS', 'Typescript','Neon DB', 'Tailwind CSS'],
        photo: '/images/project5.png',
    },
   
    {
        name: 'AI Prompts Hub',
        description: 'A full stack application made with Next js to share and search for AI prompts to use in chat GPT and other AI platforms',
        githubLink: 'https://github.com/javeria2108/Promptopia',
        projectLink: 'https://promptopia-blush-five.vercel.app/',
        tech: ['Next JS', 'Mongo DB', 'Tailwind CSS'],
        photo: '/images/project2.png',
    },
    {
        name: 'Quran World',
        description: 'QuranWorld is a web application designed to provide a seamless experience for reading, listening, and exploring the Holy Quran.',
        githubLink: 'https://github.com/javeria2108/Quran-app-with-React-and-Redux',
        projectLink: 'https://quran-quill.vercel.app/',
        tech: ['React', 'Redux', 'Tailwind CSS'],
        photo: '/images/project3.png',
    },
    {
        name: 'CardHunt',
        description: 'Learn through AI generated flashcards with your friends, store flashcards to study later.',
        githubLink: 'https://github.com/javeria2108/CardHunt',
        projectLink: 'https://card-hunt.vercel.app/',
        tech: ['Next JS', 'Typescript','Postgresql', 'Tailwind CSS'],
        photo: '/images/project6.png',
    },
    {
        name: 'Chat App',
        description: 'This is a real-time chat application built using Next.js, Firebase, and Chakra UI. The app supports user authentication via Google Sign-In, real-time messaging, and displays a list of active chats.',
        githubLink: 'https://github.com/javeria2108/Full-Stack-Chat-App-with-NextJs-Firebase-and-ChakraUI',
        projectLink: 'https://full-stack-chat-app-with-next-js-firebase-and-chakra-ui.vercel.app/',
        tech: ['Next JS', 'Chakra UI', 'Firebase'],
        photo: '/images/project4.jpg',
    },
    
  
    
]
