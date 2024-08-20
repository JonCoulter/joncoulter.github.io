import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

export default{
    name: "Jonathan Coulter",
    title: "CS Student @ Pitt",

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
    }
}