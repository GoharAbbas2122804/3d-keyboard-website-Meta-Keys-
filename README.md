# 3D Keyboard Shop

A modern, immersive e-commerce experience for customizing and purchasing mechanical keyboards. This project features a responsive 3D hero section, dynamic keycap customization, and a seamless shopping experience powered by Next.js and Prismic CMS.

## Features

-   **3D Interactive Hero**: A fully responsive 3D keyboard model rendered with React Three Fiber.
-   **Dynamic Customization**: Change keycap textures and see changes in real-time.
-   **Responsive Design**: Optimized for Mobile, Tablet, and Desktop devices.
-   **CMS Integration**: Content managed via Prismic for easy updates.
-   **Smooth Animations**: Powered by GSAP for scrolling and interaction effects.
-   **Modern UI**: Built with Tailwind CSS and Radix UI for accessibility.

## Tech Stack

-   **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
-   **3D Library**: [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) / [Drei](https://github.com/pmndrs/drei)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Animations**: [GSAP](https://gsap.com/)
-   **CMS**: [Prismic](https://prismic.io/)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)

## Getting Started

### Prerequisites

-   Node.js (v18 or higher)
-   npm, yarn, pnpm, or bun

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/GoharAbbas2122804/3d-keyboard-website-Meta-Keys-.git
    cd 3d-keyboard-shop
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

### Environment Variables

Create a `.env.local` file in the root directory and add your Prismic repository name:

```env
NEXT_PUBLIC_PRISMIC_ENVIRONMENT=your-prismic-repo-name
```

### Running the Project

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Running Slice Machine

To edit content models and slices:

```bash
npm run slicemachine
```

Open [http://localhost:9999](http://localhost:9999) to access the Slice Machine UI.

## Project Structure

-   `src/app`: Next.js App Router pages and layouts.
-   `src/components`: Reusable UI components (Navbar, Footer, Loader, etc.).
-   `src/slices`: Prismic Slices (Hero, BentoBox, KeyBoardColorSelector, etc.).
-   `src/lib`: Utility functions and configurations.
-   `public`: Static assets (images, models, textures).

## Screenshots

<!-- Add your screenshots here -->

### Hero Section
![Hero Section Placeholder](path/to/hero-screenshot.png)

### Customizer
![Customizer Placeholder](path/to/customizer-screenshot.png)

### Mobile View
![Mobile View Placeholder](path/to/mobile-screenshot.png)

## Commands

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the development server. |
| `npm run build` | Builds the application for production. |
| `npm run start` | Starts the production server. |
| `npm run lint` | Runs ESLint to check for code quality issues. |
| `npm run slicemachine` | Starts the Prismic Slice Machine. |

## Author

**Gohar Abbas**
-   Email: [GoharAbbas2122804@gmail.com](mailto:GoharAbbas2122804@gmail.com)
-   GitHub: [GoharAbbas2122804](https://github.com/GoharAbbas2122804)

