import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WebOutlinedIcon from '@mui/icons-material/WebOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import DatasetOutlinedIcon from '@mui/icons-material/DatasetOutlined';


const db = {
    name: "Jonathan Coulter",
    title: "CS @ Pitt | Prev @ BNY, CMU",

    socials: {
        Email: {
            link: "https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=jonacoulter@gmail.com",
            text: "jonacoulter@gmail.com",
            icon: <EmailIcon />
        },
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

    about: "Hi, I'm Jonathan Coulter!\n\nI'm a Computer Science student at the University of Pittsburgh finishing my B.S. in CS with minors in Mathematics and Economics, while also pursuing Pitt's accelerated B.S.+M.S. program. Recently, I've interned at BNY and Carnegie Mellon, where I focused on full-stack development of new web platforms.\n\nWhat excites me most is building software that others get to use. I love seeing my work in action and enjoy challenges that live at the intersection of AI, data, and design, where I can turn complex ideas into tools that make life a little easier.\n\nBeyond the technical side, mentorship has become one of the most meaningful parts of my journey. From leading recitations and tutoring to coordinating Pitt CSC's mentorship program, I enjoy helping others grow their skills and discover what excites them about computer science.\n\nIf using technology to create positive impact excites you, I'd love to hear from you.\n\nLet's connect!",

    about_experiences: [
        {
            title: "Software Engineer Intern",
            company: "Bank of New York",
            image: "images/bny.png"
        },
        {
            title: "Software Engineer Intern",
            company: "Carnegie Mellon University",
            image: "images/cmu.png"
        },
        {
            title: "UTA & Peer Tutor",
            company: "University of Pittsburgh",
            image: "images/pitt.png"

        },
        {
            title: "CiP Section Leader",
            company: "Stanford Code in Place",
            image: "images/stanford.png"

        },
        {
            title: "CSC Board Member",
            company: "Pitt CSC",
            image: "images/csc.png"

        },
        {
            title: "Research Fellow",
            company: "Center for Analytical Approaches to Social Innovation",
            image: "images/caasi.jpg"
        }
    ],

    experiences: [
        {
            title: "Software Engineer Intern",
            location: "Bank of New York",
            date: "Jun '25 - Aug '25",
            description: "Built a payment monitoring platform that unified data from legacy systems, optimized backend APIs, and integrated a custom AI chatbot that helps non-technical staff collect insights faster."
        },
        {
            title: "Board Member",
            location: "Pitt Computer Science Club",
            date: "Apr '25 - Present",
            description: "Coordinate Bit/Byte, a mentorship program connecting new students with upperclassmen. It's been awesome seeing so many mentees succeed through mentorship."
        },
        {
            title: "Section Leader",
            location: "Stanford Code in Place",
            date: "Apr '25 - May '25",
            description: "Led a virtual section of 15 students for Stanford's intro Python course. It was lots of fun working with such an amazing group of learners from across the world."
        },
        {
            title: "Software Engineer Intern",
            location: "Carnegie Mellon University",
            date: "May '24 - Dec '24",
            description: "Developed Sway, a chatroom app that leverages AI to help keep conversations civil. Modernized the UI, migrated the platform to Firebase, and built live dashboards for monitoring activity."
        },
        {
            title: "Undergraduate Teaching Assistant",
            location: "University of Pittsburgh",
            date: "Jan '24 - Present",
            description: "Run weekly recitations and office hours for Data Structures & Algorithms helping 150+ students make sense topics and solve coding assignments."
        },
        {
            title: "SCI Peer Tutor",
            location: "University of Pittsburgh",
            date: "Jan '24 - Dec '24",
            description: "Led one-on-one tutoring sessions across a range of core CS courses, from discrete math to systems. I love when I can find the explanation that finally makes a concept click."
        },
        {
            title: "Data Science Research Fellow",
            location: "Center for Analytical Approaches to Social Innovation",
            date: "Aug '23 - Apr '24",
            description: "Pulled together fragmented police complaint data from across Allegheny County and turned it into an interactive map that the community now uses for police accountability."
        }
    ],
    

    education: [
        {
            title: "University of Pittsburgh",
            location: "School of Computing and Information",
            date: "Jan '25 - Dec '26",
            description: "M.S. Computer Science\nGPA: 4.00"
        },
        {
            title: "University of Pittsburgh",
            location: "School of Computing and Information",
            date: "Aug '22 - Dec '25",
            description: "B.S. Computer Science\nMinors in Mathematics and Economics\nGPA: 3.97"
        },
        {
            title: "Gateway High School",
            date: "Aug '18 - May '22",
            description: "GPA: 4.00 UW\n5/250"
        }
    ],

    
    projects: [
        {
            title: "Whenly",
            link: "https://whenlymeet.com",
            github: "https://github.com/JonCoulter/whenly",
            description: "A group scheduling app that makes finding time easy. Whenly integrates with your Google Calendar to let friends share their availability in seconds, and has already helped schedule 50+ events."
        },
        {
            title: "Advera",
            github: "https://github.com/JonCoulter/advera",
            description: "A web game where you swipe through TikToks and guess if they're ads or organic. Brands get real feedback on unreleased content, and users get to test their media instincts."
        },
        {
            title: "Echo",
            github: "https://github.com/JonCoulter/Echo",
            description: "Echo is a web app that integrates with the Spotify API and OpenCV to create custom playlists based on users' percieved mood and personal music taste."
        },
        {
            title: "Side Quest",
            github: "https://github.com/JemLuu/SheInnovates2023",
            description: "An iOS app that brings back spontaneity by giving users fun daily missions to complete and share with friends."
        },
        {
            title: "Blink Buddy",
            github: "https://github.com/JemLuu/Hackathon-2022",
            description: "An eye-health app that tracks your blinking through your webcam and notifies you when you've been staring for too long."
        },
        {
            title: "Portfolio",
            github: "https://github.com/JonCoulter/personal-website",
            description: "The website you're currently on! I developed it in React and deployed it with GitHub Pages."
        }
    ],

    services: [
        {
            title: "Frontend Development",
            description: "Building responsive, user-friendly interfaces with React and modern web technologies.",
            icon: <WebOutlinedIcon />
        },
        {
            title: "Backend Development",
            description: "Designing reliable APIs and databases that keep applications fast and scalable.",
            icon: <AccountTreeOutlinedIcon />
        },
        {
            title: "Software Fundamentals",
            description: "Applying core principles to build efficient, maintainable, impactful software.",
            icon: <DatasetOutlinedIcon />
        }
    ],

    skills: [
        {
            title: "Languages",
            description: [
                "Python",
                "Java",
                "C/C++",
                "JS/TS",
                "HTML/CSS",
            ]
        },
        {
            title: "Frameworks",
            description: [
                "React",
                "Flask",
                "Angular",
                "Spring Boot",
                "JUnit",
            ]
        },
        {
            title: "Databases",
            description: [
                "PostgreSQL",
                "Firebase",
                "SQLite"
            ]
        },
        {
            title: "Tools",
            description: [
                "Docker",
                "Git",
                "Linux",
                "GCP"
            ]
        }
    ],

    teaching: {
        current:
        [
            {
                semester: "Fall '25",
                courses: "CS 1501 - Data Structures & Algorithms II",
                role: "Undergraduate Teaching Assistant"
            }
        ],
        previous:
        [
            {
                semester: "Summer '25",
                courses: "Stanford CS 106A - Pragramming Methodology",
                role: "Section Leader"
            },
            {
                semester: "Spring '25",
                courses: "CS 0445 - Data Structures & Algorithms I",
                role: "Undergraduate Teaching Assistant"
            },
            {
                semester: "Fall '24",
                courses: "CS 0445 - Data Structures & Algorithms I",
                role: "Undergraduate Teaching Assistant"
            },
            {
                semester: "Fall '24",
                courses: "CS 0007 - Intoduction to Computer Programming\nCMPINF 0401 - Intermediate Programming\nCS 0441 - Discrete Structures for CS\nCS 0445 - Data Structures & Algorithms I\nCS 0447 - Computer Organization & Assembly Language\nCS 0449 - Introduction to Systems Software",
                role: "SCI Peer Tutor"
            },
            {
                semester: "Spring '24",
                courses: "CS 0445 - Data Structures & Algorithms I",
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

export default db;
