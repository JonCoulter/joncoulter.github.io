import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import WebOutlinedIcon from '@mui/icons-material/WebOutlined';

export default{
    name: "Jonathan Coulter",
    title: "CS @ Pitt | SWE @ CMU",

    email: "jonacoulter@gmail.com",
    location: "Pittsburgh, PA",

    socials: {
        LinkedIn: {
            link: "https://www.linkedin.com/in/jonathan-coulter-/",
            text: "LinkedIn",
            icon: <LinkedInIcon />
        },
        GitHub: {
            link: "https://github.com/JonCoulter",
            text: "GitHub",
            icon: <GitHubIcon />
        },
        Instagram: {
            link: "https://instagram.com/jon_coulter",
            text: "Instagram",
            icon: <InstagramIcon />
        }
    },

    about: "Hi, I'm Jonathan Coulter!\n\nI am currently studying Computer Science at the University of Pittsburgh where I'm also minoring in Mathematics and Economics. I'm eagerly looking forward to graduating in December 2025. My college years have been a blend of learning, experimenting, and contributing to projects that leverage technology for a positive impact. From creating platforms that encourage constructive dialogue to developing apps that promote health, I'm all about using my skills to make a difference.\n\nOutside of my studies, I've enjoyed working as a Software Engineer and Developer Intern at Carnegie Mellon University, where I've been part of teams that build research tools to tackle social issues. I'm also a Teaching Assistant and Tutor at Pitt, helping other students navigate the complexities of computer science, from data structures to algorithms. My experiences have taught me a lot about teamwork, innovation, and the power of technology to solve real-world problems. I love diving into new challenges and am always ready to learn and grow in this ever-evolving field.",

    hobbies: "I love to climb!",

    experiences: [
        {
            title: "Software Engineer | Carnegie Mellon University",
            date: "Aug '24 - Present",
            description: "I worked at CMU and it was awesome and I developed alot of software and it was so cool because I learned so much and got to work with really cool people!"
        },
        {
            title: "Developer Intern | Carnegie Mellon University",
            date: "May '24 - Aug '24",
            description: "I worked at CMU and it was awesome and I developed alot of software and it was so cool because I learned so much and got to work with really cool people!"
        },
        {
            title: "Undergraduate Teaching Assistant",
            date: "Jan '24 - Present",
            description: "I worked at Pitt and it was awesome and I developed alot of software and it was so cool because I learned so much and got to work with really cool people!"
        },
        {
            title: "SCI Peer Tutor",
            date: "Jan '24 - Present",
            description: "I worked at Pitt and it was awesome and I developed alot of software and it was so cool because I learned so much and got to work with really cool people!"
        },
        {
            title: "Research Fellow | Center for Analytical Approaches to Social Innovation",
            date: "Aug '23 - Apr '24",
            description: "I worked at Pitt and it was awesome and I developed alot of software and it was so cool because I learned so much and got to work with really cool people!"
        }
    ],

    education: [
        {
            title: "University of Pittsburgh | School of Computing and Information",
            date: "Aug '22 - Dec '25",
            description: "I worked at CMU and it was awesome and I developed alot of software and it was so cool because I learned so much and got to work with really cool people!"
        },
        {
            title: "Gateway High School",
            date: "Aug '18 - May '22",
            description: "I worked at Pitt and it was awesome and I developed alot of software and it was so cool because I learned so much and got to work with really cool people!"
        }
    ],


    services: [
        {
            title: "Web Development",
            description: "I have been working on my web development skills over the last few months and have become proficient in several technologies.",
            icon: <WebOutlinedIcon />
        },
        {
            title: "Backend",
            description: "I have been working on my backend skills over the last few months and have become proficient in several technologies.",
            icon: <WebOutlinedIcon />
        },
        {
            title: "Data Structures",
            description: "I have been working on my DSA skills over the last few months and have become proficient in several technologies.",
            icon: <WebOutlinedIcon />
        }
    ],

    skills: [
        {
            title: "Front-End",
            description: [
                "ReactJS",
                "JavaScript",
                "Bootstrap",
                "Material UI"
            ]
        },
        {
            title: "Back-End",
            description: [
                "Python",
                "Node.js",
                "Java"
            ]
        },
        {
            title: "Databases",
            description: [
                "Firebase",
                "SQLite"
            ]
        },
        {
            title: "Source Control",
            description: [
                "Git",
                "Github"
            ]
        }
    ],

    projects: [
        {
            title: "Website",
            link: "url",
            description: "This was the awesome epic website I built using yada yada yada tools in some language wooo!"
        },
        {
            title: "Echo",
            link: "url",
            description: "This was the awesome epic website I built that used computer vision to do xyz and spotify"
        },
        {
            title: "Side Quest",
            link: "url",
            description: "This was an ios app I built to give people something to do bereal clone!"
        },
        {
            title: "Blink Buddy",
            link: "url",
            description: "This was a goofy app that tracked your blinking"
        }
    ]


}