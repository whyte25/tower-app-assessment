# Tower App Assessment

This is my implementation of the assessment for the role frontend developer at [PropertyVisualizer](https://propertyvisualizer.com).

## Project Description

A modern web application for browsing premium residential towers, their floors, and apartment layouts. The app features an interactive, animated, and responsive UI for exploring a collection of luxury towers, each with detailed floor and apartment information.

## Features

- **Browse Towers**: View a list of residential towers with images and descriptions.
- **Explore Floors & Apartments**: Drill down into each tower to view its floors and available apartment layouts.
- **Animated UI**: Smooth transitions and animations powered by Framer Motion.
- **Reusable Components**: Modular, type-safe components
- **Responsive Design**: Works well on desktop and mobile devices.
- **Modern Navigation**: Uses TanStack Router for type-safe, file-based routing.
- **Accessible UI Primitives**: Built with Shadcn UI and Lucide React icons.

## Tech Stack & Libraries

- **React 19** & **TypeScript**
- **Vite** (build tool)
- **TanStack Router** (type-safe routing)
- **Framer Motion** (animations)
- **Tailwind CSS** (utility-first styling)
- **Shadcn UI** (accessible UI components)
- **Lucide React** (icon set)
- **Embla Carousel** (image carousel)
- **class-variance-authority**, **clsx**, **tailwind-merge** (class merging/utilities)

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   # or
   bun install
   ```
2. **Run the development server:**

   ```sh
   npm run dev
   # or
   bun run dev
   ```

   The app will be available at [http://localhost:3000](http://localhost:3000).

3. **Deploy Version:**
   [https://fas-tower-app.netlify.app](https://fas-tower-app.netlify.app)

## Known Limitations & Tradeoffs

- **Static Data**: The app uses dummy data (no backend or API integration).
- **No Authentication**: All features are public; no user accounts or roles.
- **No Real Booking/Contact**: The app is for demonstration only; no real booking or inquiry features.
- **No Persistent State**: All data is in-memory; no local storage or database.
