# Jonathan Coulter — Personal Website

This is the source code for my personal website, built with React and deployed on GitHub Pages.  
It’s where I share my background, projects, teaching experiences, and the things I’m most excited about in computer science.

🌐 **Live site:** [joncoulter.github.io](https://joncoulter.github.io)


## 🌟 Overview
The site is built to highlight what matters most:
- **Home** — who I am and what I care about
- **Resume** — internships, research, and work experience as well as technical skills
- **Teaching** — teaching experience


## 🛠️ Tech Stack
- **React 18**  
- **Material UI** + **React Bootstrap** for UI components
- **GitHub Pages** for hosting and deployment  

Key packages: `react`, `@mui/material`, `@mui/icons-material`, `react-bootstrap`, `@tsparticles/react`, `@tsparticles/slim`, `gh-pages`.


## 📂 Content Management
All content is centralized in `src/utils/db.js` for easy updates, including:
- Personal info (`name`, `title`, `socials`)  
- **About** section and highlights  
- **Experiences** (timeline)  
- **Projects** (title, links, descriptions)  
- **Teaching** (current and past semesters)  
- **Services** and **skills**

Images referenced in the About section live in `public/images/`.


## ⚙️ Development
Requirements: Node 18+ and npm.

Install and run locally:
```bash
npm install
npm start
```

Build for production:
```bash
npm run build
```

Deploy to GitHub Pages:
```bash
npm run predeploy
npm run deploy
```


## 🎨 Customization
- Edit `src/utils/db.js` to update text, links, and lists  
- Add or replace images in `public/images/`  
- Adjust particle settings in `src/App.js`  
- Modify colors and spacing in `src/App.css`  


## 📬 Contact
- [LinkedIn](https://www.linkedin.com/in/jonathan-coulter-/)  
- [GitHub](https://github.com/JonCoulter)  
- [Email](mailto:jonacoulter@gmail.com)  
