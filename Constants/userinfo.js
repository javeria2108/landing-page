//PLEASE FOLLOW THE FORMAT OF THIS FILE.

import { faGithubAlt, faLinkedinIn, faMediumM, faFacebook, faTwitter, faInstagram, faYoutube, faBehance } from "@fortawesome/free-brands-svg-icons"

export const userinfo = {
    logoText: "Javeria Zaheer", //This text is visible on your navbar and footer like your logo.
    contact: {
        email: 'javeriazh@email.com', //It is always a good idea to mention your email on your website. Good platform to communicate.
        phone: '3157220030', //Phone number is optional, if you dont want it, consider leaving it blank .
        countrycode: '+92' //It is advisable to add the country code incase you mention your contact number.
    },
    socials: [
        //For aesthetics, it is advisable for you to mention upto 4 social media links only. Fill in the links.
        //more icons are imported above, use as you like them.
        { type: 'github', link: 'https://github.com/javeria2108', icon: faGithubAlt },
        { type: 'linkedin', link: 'https://www.linkedin.com/in/javeria-zaheer/', icon: faLinkedinIn },
        { type: 'medium', link: 'https://medium.com/@javeriazh', icon: faMediumM },
    ],
    greeting: {
        //this text goes on your landing page
        title: "Hey there, I am Javeria Zaheer",
        subtitle: "Aspiring AI developer and senior Computer Engineering student"
    },
    capabilities: [
        //this text goes on your home page in table format.
        //For aesthetics, it is advisable for you to mention upto 4 catgeories links only.
        //For aesthetics, it is advisable for you to keep similar number of skills in each category
        {
            category: "Frontend", // eg.frontend, backend, devops etc
            skills: ["React", "Next JS", "Typescript","Javascript"] //eg. react, html, python etc.
        },
        {
            category: "Backend",
            skills: ["Javascript", "Python", ".NET"]
        },
        {
            category: "Databases",
            skills: ["Mongo DB", "SQL Server Management Studio", "Firebase"]
        },
        {
            category: "Styling",
            skills: ["Tailwind CSS", "Chakra UI", "Shadcn UI"]
        },
    ],
    about: {
        //this text goes at the bottom of your home page.
        content: "I am on a journey to achieve excellence in building products that bring ease to others and find contentment through this process. As a lifelong learner, I immerse myself in reading, writing, coding, and exploring new technologies. This summer, I am focused on improving my coding practices and integrating AI into my projects to evolve into a well-rounded software engineer",
        resume: "https://drive.google.com/file/d/17iDvKETtbPxvMMaf7pudDfopei9AWo3w/view?usp=sharing" //link your resume here. it can be drive link or any other link
    },
    education: {
        visible: true, //set this to false if you want to omit this section
        educationList: [
            {
                time: 'Nov 2021- May 2025', //timespan
                title: 'BS Computer Engineering', //eg. BTech in Compuster Engineering
                organization: 'University of Engineering and Technology,Lahore', //eg. VJTI, Mumbai
                description: 'secured a CGPA of 3.85 so far, with A grades in all programming subjects' //eg. secured a cgpa of 9.25 in all sems appeared in so far
            },
           
        ],
    },
    experience: {
        visible: true, //set this to false if you want to omit this section
        experienceList: [
            {
                company: 'Headstarter AI', //company name eg.Microsoft
                companylogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzkUdlMvs2RawuH6V3YyKb9mrPFaPGbHqO3Q&s', //companylogo
                position: 'Software Engineering Fellow', //post you held eg.Senior SDE
                time: 'July 2024-present', //timespan
                description: "Completing a 7-week fellowship working on 5 AI projects using Next JS, Open AI, AWS ec2, Vector DBs, culminating in a final project aimed at creating 1000+ user accounts. Attending sessions from Engineers at Amazon, Bloomberg and Capital One."},
            {
                company: '10Pearls',
                companylogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY_DWvPszZsLkpe9A8DPL7M_mZGbNntp6Lqw&s',
                position: 'Full Stack Intern',
                time: 'June 2024 - Aug 2024',
                description: 'Built a web API with ASP.NET Core MVC and Entity Framework. Integrated with Redux Toolkit and RTK Query. Used React Hook Forms with Zod, and improved reliability with TypeScript, testing, and SonarQube. Collaborated with experts to refine skills.'
            },
            {
                company: 'Bytewise Ltd',
                companylogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwgXQvqcLj9qMwozUh5GydXQt8BqVJDdV-Iw&s',
                position: 'React and Next JS Fellow',
                time: 'April 2023-July 2023',
                description: ' Developed web applications using ES6+, React, Redux, axios, and Next.js, focusing on state management, API handling, and authentication. Completed 5+ projects, with a final project gaining 700+ LinkedIn likes, and ranked top 5 in the fellowship.'
            },
        ],
    },
    blogs: {
        //set this to false if you want to omit this section
        visible: false
    },
}

export const headings = {
    //you can customise all the headings here.
    workHomePage: 'Work',
    workMainPage: 'Projects',
    capabilities: 'Capabilities',
    about: 'About Me',
    education: 'Education',
    experience: 'Experiences',
    blogs: 'I write!',
    contact: 'Contact Me',
}

export const ctaTexts = {
    //you can customise all the cta texts here.
    landingCTA: 'My work',
    workCTA: 'View All',
    capabCTA: 'Get in Touch',
    educationCTA: 'About Me',
    resumeCTA: 'Resume',
    submitBTN: 'Submit'
}