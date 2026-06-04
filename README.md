---

# ![Project](https://img.shields.io/badge/Project-elementum--figma--to--react-1d1d1d?style=for-the-badge&logo=react&logoColor=61DAFB)

Figma to React landing page assignment for the **ReactJS Development Internship** at **Websiteble Global Private Limited**.  
This project is a pixel-close implementation of the provided Elementum landing page design, built with **React 19**, **Vite**, **Tailwind CSS 4**, and **Framer Motion**, with full responsiveness and Docker support.


---

## 🔗 Assignment & Live Links

> - **Figma Design:**  https://www.figma.com/design/0K35IOZ4Qwqur0b9o2PXlN/Assignment?node-id=0-1
> - **Live Demo (Vercel):**  https://elementum-figma-to-react.vercel.app/
<img width="1002" height="1035" alt="image" src="https://github.com/user-attachments/assets/c8ead42e-7604-4ac5-bd8d-1b3f6b5218b8" />

---

## Tech Stack & Tools

<p align="left">
  <img alt="React" src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=061c2e&style=for-the-badge" />
  <img alt="Vite" src="https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=ffffff&style=for-the-badge" />
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=ffffff&style=for-the-badge" />
  <img alt="Framer Motion" src="https://img.shields.io/badge/Framer_Motion-12-0055FF?logo=framer&logoColor=ffffff&style=for-the-badge" />
  <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-ESNext-F7DF1E?logo=javascript&logoColor=000000&style=for-the-badge" />
  <img alt="ESLint" src="https://img.shields.io/badge/ESLint-9-4B32C3?logo=eslint&logoColor=ffffff&style=for-the-badge" />
  <img alt="Node.js" src="https://img.shields.io/badge/Node.js-20-339933?logo=node.js&logoColor=ffffff&style=for-the-badge" />
  <img alt="Docker" src="https://img.shields.io/badge/Docker-ready-2496ED?logo=docker&logoColor=ffffff&style=for-the-badge" />
  <img alt="Vercel" src="https://img.shields.io/badge/Deployed_on-Vercel-000000?logo=vercel&logoColor=ffffff&style=for-the-badge" />
</p>

---

##  Objective

Recreate the Elementum landing page from Figma as a **React-based, fully responsive** single-page application, demonstrating:

- UI accuracy vs Figma (layout, spacing, typography, colors)
- Clean, modular React component structure
- Reusable components and configuration-driven sections
- Responsive behavior across **mobile / tablet / desktop**
- Optional but meaningful **animations** (Framer Motion)

---

##  Features

- **Pixel-close layout** to the Figma design (header, hero, features, services, testimonials, footer).
- **Responsive UI**:
  - Mobile-first layout with Tailwind responsive utilities.
  - Layout & typography scale nicely up to large desktop widths.
- **Modular components**:
  - `Header`, `Hero`, `Features`, `Services`, `Testimonials`, `FooterCTA`, `ScrollToTop`.
- **Navigation**:
  - Smooth section navigation via anchor links.
  - Mobile hamburger menu with animated dropdown.
- **Online/Offline indicator** in the header using `navigator.onLine`.
- **Subtle animations** (bonus):
  - Fade-in + slide-up on scroll using **Framer Motion**.
  - Staggered reveal for feature rows, services rows, and footer columns.
  - Hover micro-interactions on avatars, arrows, CTA button, and cards.
- **Docker-ready**:
  - Multi-stage Docker build that produces a lightweight Nginx container serving the built React app.

---

##  Project Structure

```text
elementum-figma-to-react
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── eslint.config.js
├── .gitignore
├── Dockerfile
├── .dockerignore
├── public/
│   ├── favicon.svg
│   ├── fonts/
│   │   └── gerbil.otf
│   └── avatars/
│       ├── Arrow4.png
│       ├── Arrow44.png
│       ├── Ellipse 255.png
│       ├── Ellipse 256.png
│       ├── Ellipse 257.png
│       ├── Ellipse 258.png
│       ├── Ellipse 259.png
│       ├── Ellipse 260.png
│       ├── Ellipse 261.png
│       ├── Ellipse 262.png
│       ├── Ellipse736.png
│       ├── Ellipse739.png
│       ├── image.png
│       ├── image348.png
│       ├── image349.png
│       ├── invertedcomma1.png
│       ├── invertedcomma2.png
│       ├── invertedcomma3.png
│       ├── invertedcomma4.png
│       ├── Polygon1.png
│       ├── Polygon2.png
│       ├── Polygon3.png
│       ├── Rectangle 657.png
│       ├── Rectangle 658.png
│       ├── Rectangle661.png
│       ├── Vector2510.png
│       ├── Vector2511.png
│       ├── Vector2516.png
│       ├── Vector2517.png
│       ├── Vector2518.png
│       ├── Vector2519.png
│       └── Vector5.png
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    └── components/
        ├── Header.jsx
        ├── Hero.jsx
        ├── Features.jsx
        ├── Services.jsx
        ├── Testimonials.jsx
        ├── Footer.jsx
        └── ScrollToTop.jsx
```

---

## Getting Started (Local Development)

### 1. Clone the repository

```bash
git clone https://github.com/AnkitDimri4/elementum-figma-to-react.git
cd elementum-figma-to-react
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Vite will print a local URL, e.g.:

- http://localhost:5173

---

##  Build & Preview

### Build for production

```bash
npm run build
```

- Output is generated in the `dist/` folder.

### Preview the production build

```bash
npm run preview
```

---

## Run with Docker

The assignment requires a **working Docker setup**. This project includes a multi-stage Dockerfile to build and serve the app via Nginx.

### 1. Build the Docker image

```bash
docker build -t elementum-assignment .
```

### 2. Run the container

```bash
docker run -p 4173:80 elementum-assignment
```

Now open:

- http://localhost:4173

You should see the Elementum landing page served from inside Docker.

<img width="1000" height="1079" alt="image" src="https://github.com/user-attachments/assets/0af57fb2-efc1-4826-a0cb-51caa4a36cb2" />

---

##  Implementation Notes

- **Layout & sections**
  - All sections from Figma are implemented:
    - Navigation bar with logo and menu.
    - Hero section with highlighted texts and floating avatar circles.
    - Features blocks with decorative polygons and arrows.
    - Services list with three rows and right-arrow indicators.
    - Testimonials card with background image and quote marks.
    - Footer with newsletter CTA, navigation columns, contact info, and credit.
- **Typography & spacing**
  - Fonts, font sizes, line heights, and letter spacing are matched to Figma as closely as possible using Tailwind utilities.
  - Spacing uses Tailwind’s scale plus custom max-widths to respect Figma’s content widths.
- **Responsiveness**
  - Mobile: stacked layouts, centered text, simplified spacing.
  - Tablet: 2-column grids where appropriate.
  - Desktop: matches Figma proportions with generous whitespace and horizontal layouts.
- **Animations (bonus)**
  - **Framer Motion** is used for:
    - Hero text + avatars fade/slide-in.
    - Staggered features/services rows.
    - Testimonials and footer CTA reveal on scroll.
    - Hover animations on images, cards, and call-to-action buttons.
- **Online/Offline Indicator**
  - `OnlineStatus` hook-component listens to `window` `online/offline` events.
  - Shows a small green/red dot and label next to the logo in the header.

---

##  How to Review

For the reviewer (Websiteble Global):

1. **Check the live deployment**  
   - Visit the Vercel URL to assess layout accuracy, responsiveness, and interactions.
2. **Run locally (optional)**  
   - `npm install` → `npm run dev`
3. **Run via Docker (per assignment)**  
   - Follow the “Run with Docker” section above to build and run the container.
4. **Compare with Figma**  
   - Confirm typography, colors, spacing, and responsive behavior align with the design.
5. **Inspect code structure**  
   - Check `src/components` for separation of concerns and reusability.
   - Review usage of Framer Motion and Tailwind for clarity and maintainability.

---

##  Author

**Ankit Dimri**  
Full‑Stack & AI Developer  
📍Dehradun, India  

[![GitHub](https://img.shields.io/badge/GitHub-AnkitDimri4-black?logo=github)](https://github.com/AnkitDimri4)   [![LinkedIn](https://img.shields.io/badge/LinkedIn-Ankit%20Dimri-blue?logo=linkedin)](https://linkedin.com/in/ankit-dimri-a6ab98263)   [![LeetCode](https://img.shields.io/badge/LeetCode-Profile-orange?logo=leetcode)](https://leetcode.com/u/user4612MW/)

---

##  Project Info

- **Project:** Elementum Figma → React Landing Page  
- **Role:** Frontend / React Developer  
- **Organization / Assignment:** Websiteble Global Private Limited – ReactJS Development Internship Task  
- **Stack:** React 19 · Vite · Tailwind CSS 4 · Framer Motion · Docker  
- **Key Requirements:** Pixel-close Figma implementation, responsive layout, clean React components, optional animations, Dockerized setup  
- **Year:** 2026

---

<div align="center">
Built and designed by <strong>Ankit Dimri</strong> &copy; 2026
</div>

---
