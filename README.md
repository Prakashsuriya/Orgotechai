# OrgotechAI Website

OrgotechAI is a modern, immersive 3D website built with React, Three.js, and Vite. It utilizes cutting-edge web technologies like React Three Fiber for 3D rendering, Framer Motion and GSAP for fluid animations, and Lenis for smooth scrolling, providing a highly interactive and engaging user experience.

## Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite
- **3D Graphics**: Three.js, React Three Fiber, React Three Drei
- **Animations**: Framer Motion, GSAP
- **Smooth Scrolling**: Lenis (@studio-freight/lenis)
- **Icons**: Lucide React
- **Styling**: Standard CSS

## Project Structure

The project follows a standard Vite + React folder structure:

```
orgotechai/
├── public/              # Static assets that don't need processing
├── src/                 # Source code
│   ├── assets/          # Images, fonts, and other local assets
│   ├── components/      # Reusable React components (UI elements, 3D models)
│   ├── sections/        # Major page sections (Hero, About, Services, etc.)
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Entry point for React
│   ├── App.css          # Application-level styles
│   └── index.css        # Global CSS styles and variables
├── package.json         # Project dependencies and scripts
└── vite.config.js       # Vite configuration
```

## How to Run the Project

Follow these steps to set up and run the project locally.

### 1. Prerequisites
Ensure you have Node.js installed (version 18+ is recommended). You can check your Node version by running:
```bash
node -v
```

### 2. Install Dependencies
Navigate to the project directory and install all required Node modules:
```bash
npm install
```

### 3. Start the Development Server
Run the following command to start the Vite development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173/` by default. You can open this URL in your browser to view the project.

### 4. Build for Production
To create an optimized production build, run:
```bash
npm run build
```
This will generate a `dist/` directory containing the minified and optimized files ready for deployment.

### 5. Preview Production Build
You can preview the production build locally before deploying:
```bash
npm run preview
```
