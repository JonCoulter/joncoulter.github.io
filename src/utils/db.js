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
            text: "My LinkedIn",
            icon: <LinkedInIcon />
        },
        GitHub: {
            link: "https://github.com/JonCoulter",
            text: "My GitHub",
            icon: <GitHubIcon />
        },
        Instagram: {
            link: "https://instagram.com/jon_coulter",
            text: "My Instagram",
            icon: <InstagramIcon />
        }
    },

    about: "Hi, I'm Jonathan Coulter! I am a Computer Science student at the University of Pittsburgh.\n\nI am passionate about Software Engineering and leveraging technology for positive impact. I am actively exploring opportunities to contribute to meaningful projects.",

    experiences: [
        {
            title: "CMU",
            date: "May 2024 - Aug 2024",
            description: "I worked at CMU and it was awesome and I developed alot of software and it was so cool because I learned so much and got to work with really cool people!"
        },
        {
            title: "Pitt",
            date: "May 2024 - Aug 2024",
            description: "I worked at Pitt and it was awesome and I developed alot of software and it was so cool because I learned so much and got to work with really cool people!"
        }
    ],

    education: [
        {
            title: "Pitt",
            date: "Aug 2022 - Dec 2025",
            description: "I worked at CMU and it was awesome and I developed alot of software and it was so cool because I learned so much and got to work with really cool people!"
        },
        {
            title: "GHS",
            date: "Aug 2018 - May 2022",
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
    ]


}