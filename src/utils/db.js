import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import WebOutlinedIcon from '@mui/icons-material/WebOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';

export default{
    name: "Jonathan Coulter",
    title: "CS @ Pitt | SWE @ CMU",

    email: "jonacoulter@gmail.com",
    location: "Pittsburgh, PA",

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
        },
        Instagram: {
            link: "https://instagram.com/jon_coulter",
            text: "jon_coulter",
            icon: <InstagramIcon />
        }
    },

    about: "Hi, I'm Jonathan Coulter!\n\nI am currently studying Computer Science at the University of Pittsburgh where I'm also minoring in Mathematics and Economics. I'm eagerly looking forward to graduating in December 2025. My college years have been a blend of learning, experimenting, and contributing to projects that leverage technology for a positive impact. From creating platforms that encourage constructive dialogue to developing apps that promote health, I'm all about using my skills to make a difference.\n\nOutside of my studies, I've enjoyed working as a Software Engineer and Developer Intern at Carnegie Mellon University, where I've been part of teams that build research tools to tackle social issues. I'm also a Teaching Assistant and Tutor at Pitt, helping other students navigate the complexities of computer science, from data structures to algorithms. My experiences have taught me a lot about teamwork, innovation, and the power of technology to solve real-world problems. I love diving into new challenges and am always ready to learn and grow in this ever-evolving field.",

    gettoknowme: "The majority of this website highlights my professional and academic history; however, I want to express some of my interests that I do not engage in from behind a desk. My hobbies are a major part of what makes me who I am, and I think expressing these presents a more holistic view of my personality! That being said, here are some of those things that make me who I am.",


    hobbies: [
        {
            title: "Climbing",
            description: "I love climbing",
            images: [
                "climbing_1.png",
                "climbing_2.png"
            ]
        },
        {
            title: "Climbing",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            images: [
                "climbing_1.png",
                "climbing_2.png"
            ]
        },
        {
            title: "Climbing",
            description: "I love climbing",
            images: [
                "climbing_1.png",
                "climbing_2.png"
            ]
        },
        {
            title: "Climbing",
            description: "I love climbing",
            images: [
                "climbing_1.png",
                "climbing_2.png"
            ]
        }
    ],


    experiences: [
        {
            title: "Software Engineer",
            location: "Carnegie Mellon University",
            date: "Aug '24 - Present",
            description: "I worked at cmu and it was really cool."
        },
        {
            title: "Developer Intern",
            location: "Carnegie Mellon University",
            date: "May '24 - Aug '24",
            description: "I was part of a dynamic intern team at Dietrich Computing where we built Sway, a platform designed to foster meaningful discussions on polarizing topics. My role involved using Flask for the website’s development, setting it up on a CMU Ubuntu server with NGINX, and getting everything running smoothly with Docker. I also helped integrate language models that could dynamically guide and moderate conversations."
        },
        {
            title: "Undergraduate Teaching Assistant",
            location: "University of Pittsburgh",
            date: "Jan '24 - Present",
            description: "I lead weekly sessions and office hours for the Data Structures & Algorithms course, supporting over 150 students. My goal is to help everyone get a better grasp of programming principles and develop their problem-solving skills, whether we’re working one-on-one or in groups."
        },
        {
            title: "SCI Peer Tutor",
            location: "University of Pittsburgh",
            date: "Jan '24 - Present",
            description: "As a tutor, I work closely with other students on a variety of computer science subjects, helping them understand tricky concepts, get through their assignments, and tackle bigger projects. It’s all about making things clearer and less daunting, whether in individual sessions or group discussions."
        },
        {
            title: "Research Fellow",
            location: "Center for Analytical Approaches to Social Innovation",
            date: "Aug '23 - Apr '24",
            description: "I used Python, pandas, and Excel to turn messy data about police-citizen interactions into clear, structured datasets. Then, I helped put this information into an interactive map, making it easier for the community to access and understand important data."
        }
    ],

    education: [
        {
            title: "University of Pittsburgh",
            location: "School of Computing and Information",
            date: "Aug '22 - Dec '25",
            description: "B.S. Computer Science\nMinors in Mathematics and Economics\nGPA: 4.00"
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
            description: "Skilled in integrating both client-side and server-side components to create seamless, functional web applications.",
            icon: <WebOutlinedIcon />
        },
        {
            title: "Collaboration & Leadership",
            description: "Experienced in leading teams and promoting collaborative environments that boost productivity and foster innovation.",
            icon: <GroupsOutlinedIcon />
        },
        {
            title: "Data Structures & Algorithms",
            description: "Strong understanding of fundamental data structures and algorithms to efficiently solve complex computational challenges.",
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
                "Rust"
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
            description: "The website you're currently on is one of the most fun projects I have worked on! I developed it using Node.js, React, Material UI, and Bootstrap. I am hosting it using GitHub Pages."
        },
        {
            title: "Echo",
            link: "https://github.com/Gwon-Stephen/MoodMusic",
            description: "Built for TartanHacks 2024, Echo is a web app that leverages the Spotify API and OpenCV to create custom playlists based on users' moods."
        },
        {
            title: "Side Quest",
            link: "",
            description: "In a world dry of sponteniety, Side Quest is an iOS app that provided users with fun daily missions to share with friends!"
        },
        {
            title: "Blink Buddy",
            link: "https://github.com/JemLuu/Hackathon-2022",
            description: "With the goal of promoting ocular health among individuals who spend vast amounts of time on their computer, Blink Buddy was an application that tracked users blinking habits and notified them if they were not blinking enough."
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