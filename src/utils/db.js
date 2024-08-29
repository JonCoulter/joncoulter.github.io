import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import WebOutlinedIcon from '@mui/icons-material/WebOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';

export default{
    name: "Jonathan Coulter",
    title: "CS @ Pitt | SWE Intern @ CMU",

    email: "jonacoulter@gmail.com",

    socials: {
        LinkedIn: {
            link: "https://www.linkedin.com/in/jonathan-coulter-/",
            text: "jonathan-coulter-",
            icon: <LinkedInIcon />
        },
        GitHub: {
            link: "https://github.com/JonCoulter",
            text: "JonCoulter",
            icon: <GitHubIcon />
        }
    },

    about: "Hi, I'm Jonathan Coulter!\n\nI am a third-year Computer Science student at the University of Pittsburgh, where I will be graduating in Spring 2026. Alongside my major, I am pursuing minors in Mathematics and Economics.\n\nI am passionate about finding innovative ways to leverage technology for a positive impact.",

    about_experiences: [
        {
            title: "Software Engineer Intern",
            company: "Carnegie Mellon University",
            description: "Skilled in integrating both client-side and server-side components to create responsive web applications.",
            image: "images/cmu.png"
        },
        {
            title: "UTA & Peer Tutor",
            company: "University of Pittsburgh",
            description: "Skilled in integrating both client-side and server-side components to create responsive web applications.",
            image: "images/pitt.png"

        },
        {
            title: "Research Fellow",
            company: "Center for Analytical Approaches to Social Innovation",
            description: "Skilled in integrating both client-side and server-side components to create responsive web applications.",
            image: "images/caasi.jpg"

        }
    ],

    experiences: [
        {
            title: "Software Engineer Intern",
            location: "Carnegie Mellon University",
            date: "May '24 - Present",
            description: "As an intern on the R&D team at Dietrich Computing and Operations, I contributed to the development of web platforms that researchers at CMU use to conduct their studies. Primarily, I focused on the full-stack development of Sway, a chatroom web app that emphasizes depolarization through the use of AI moderated conversation."
        },
        {
            title: "Undergraduate Teaching Assistant",
            location: "University of Pittsburgh",
            date: "Jan '24 - Present",
            description: "I teach weekly recitations and hold office hours for Data Structures & Algorithms, offering support to over 150 students. My goal is to help younger students develop a strong grasp of programming principles and bolster their problem-solving skills."
        },
        {
            title: "SCI Peer Tutor",
            location: "University of Pittsburgh",
            date: "Jan '24 - Present",
            description: "As a tutor, I work one-on-one with other students on a variety of computer science subjects, helping them understand tricky concepts, complete their assignments, and tackle bigger projects."
        },
        {
            title: "Research Fellow",
            location: "Center for Analytical Approaches to Social Innovation",
            date: "Aug '23 - Apr '24",
            description: "I joined CAASI through a student research program in the Frederick Honors College. During the fellowship, I leveraged Python, pandas, and Excel to collect and organize data involving the citizen complaint process in Allegheny County. I collaborated with the team to integrate this data into an interactive storymap, which now empowers the community by making police accountability data more accessible and actionable."
        }
    ],

    education: [
        {
            title: "University of Pittsburgh",
            location: "School of Computing and Information",
            date: "Aug '22 - May '26",
            description: "B.S. Computer Science\nMinors in Mathematics and Economics\nGPA: 4.00\n\nRelevant Coursework:\nAlgorithms and Data Structures I-II\nOperating Systems\nWeb Developement\nSoftware Quality Assurance\nSystems Software\nLinear Algebra"
        },
        {
            title: "Gateway High School",
            date: "Aug '18 - May '22",
            description: "GPA: 4.00"
        }
    ],

    services: [
        {
            title: "Full-Stack Development",
            description: "Skilled in integrating both client-side and server-side components to create responsive web applications.",
            icon: <WebOutlinedIcon />
        },
        {
            title: "Collaboration & Leadership",
            description: "Experienced in leading teams and promoting collaborative environments that boost productivity and foster innovation.",
            icon: <GroupsOutlinedIcon />
        },
        {
            title: "Data Structures & Algorithms",
            description: "Strong understanding of fundamental data structures and algorithms to efficiently solve complex computational tasks.",
            icon: <AccountTreeOutlinedIcon />
        }
    ],

    skills: [
        {
            title: "Languages",
            description: [
                "Java",
                "Python",
                "C/C++",
                "Javascript"
            ]
        },
        {
            title: "Libraries",
            description: [
                "React",
                "Flask",
                "Bootstrap",
                "Material UI"
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
                "Linux"
            ]
        }
    ],

    projects: [
        {
            title: "Portfolio",
            link: "https://github.com/JonCoulter/personal-website",
            description: "The website you're currently on is one of the most fun projects I have worked on! I developed it using Node.js, React, Material UI, and Bootstrap. The website is being deployed through GitHub Pages."
        },
        {
            title: "Echo",
            link: "https://github.com/Gwon-Stephen/MoodMusic",
            description: "Built for TartanHacks 2024, Echo is a web app that leverages the Spotify API and OpenCV to create custom playlists based on users' moods."
        },
        {
            title: "Side Quest",
            link: "",
            description: "In a world running low on of sponteniety, Side Quest is an iOS app that provides users with fun daily missions to accomplish and share with friends!"
        },
        {
            title: "Blink Buddy",
            link: "https://github.com/JemLuu/Hackathon-2022",
            description: "With the goal of promoting ocular health for those who spend vast amounts of time on their computer, Blink Buddy is an application that tracks users' blinking habits and notifies them if they are not blinking enough."
        }
    ],

    teaching: {
        current:
        [
            {
                semester: "Fall '24",
                courses: "CS 0445 - Data Structures & Algorithms",
                role: "Undergraduate Teaching Assistant"
            },
            {
                semester: "Fall '24",
                courses: "CS 0007 - Intoduction to Computer Programming\nCMPINF 0401 - Intermediate Programming\nCS 0441 - Discrete Structures for CS\nCS 0445 - Data Structures & Algorithms\nCS 0447 - Computer Organization & Assembly Language\nCS 0449 - Introduction to Systems Software",
                role: "SCI Peer Tutor"
            }
        ],
        previous:
        [
            {
                semester: "Spring '24",
                courses: "CS 0445 - Data Structures & Algorithms",
                role: "Undergraduate Teaching Assistant"
            },
            {
                semester: "Spring '24",
                courses: "CMPINF 0401 - Intermediate Programming\nCS 0445 - Data Structures & Algorithms",
                role: "SCI Peer Tutor"
            },
        ]
    }
}