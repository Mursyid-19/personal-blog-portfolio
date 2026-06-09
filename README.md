# Personal Blog Portfolio Website 🚀

Welcome to the source code repository for my personal developer portfolio and blog website. This project is built as a fully responsive, clean, and modern web application to showcase my academic journey, system architecture designs, and core software development projects.

##  Live Preview

![Portfolio Desktop Preview](assets/portfolio-preview.png)

*Live Site URL:* [https://mursyid-19.github.io/personal-blog-portfolio/](https://mursyid-19.github.io/personal-blog-portfolio/)

---

## 🛠️ Tech Stack & Features

- **Development Tools:** VS Code** with structured extensions.
- **Version Control & Hosting:** Managed via **GitHub** for repository tracking, semantic commit histories, and code collaboration.
- **Semantic HTML5:** Structured multi-page layout using clean, accessible components (`<header>`, `<main>`, `<footer>`, `<article>`).
- **Dynamic Dark/Light Toggle:** JavaScript-powered theme switching backed by browser `localStorage` memory synchronization.
- **Header Control Live Clock:** An efficient, interval-based JavaScript system clock updating numbers seamlessly every second directly beneath the theme switch.
- **Automated Deployment:** Integrated pipeline utilizing **GitHub Pages** for instant background continuous deployment builds.

---

## 📂 Project Architecture

The repository maintains an organized, modular static file layout:

```text
personal-blog-portfolio/
│
├── assets/                  # Images, university logos, and site previews
│   ├── portfolio-preview.png
│   └── unisza-logo.png
│
├── css/                     # Universal stylesheets
│   └── styles.css
│
├── js/                      # Core scripting execution engines
│   └── script.js
│
├── index.html               # Landing profile homepage
├── about.html               # Technical skills, academic track, and features
├── blog.html                # Project showcases (USMS, BookSaw)
└── contact.html             # Secure SVG-embedded reach out channel
