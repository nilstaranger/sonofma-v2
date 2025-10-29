# Copilot Instructions for Son of Ma

## Project Overview
This is a React-based web application for "Son of Ma" - a music and sound healing platform. The site features an immersive, psychedelic visual design with animated gradients and glowing effects to create an engaging user experience.

## Tech Stack
- **Frontend Framework**: React 19.2.0 with TypeScript
- **Build Tool**: Vite 6.x
- **Styling**: Tailwind CSS 4.x with custom PostCSS configuration
- **Deployment**: GitHub Pages (deployed to www.sonofma.com)
- **AI Integration**: Google Generative AI (@google/genai)

## Project Structure
```
/
├── .github/              # GitHub-specific files
│   └── workflows/        # CI/CD workflows for deployment
├── components/           # React components
│   ├── LandingPage.tsx  # Main landing page
│   ├── MusicPage.tsx    # Music section
│   ├── SoundHealingPage.tsx # Sound healing section
│   ├── Footer.tsx       # Shared footer component
│   └── ...              # Other page components
├── public/              # Static assets
├── App.tsx              # Root app component with routing
├── index.tsx            # App entry point
├── index.css            # Global styles and animations
├── vite.config.ts       # Vite configuration
└── package.json         # Dependencies and scripts
```

## Architecture
- **Routing**: Client-side navigation using React state (view state machine)
- **Styling**: Tailwind utility classes + custom CSS animations
- **State Management**: React hooks (useState) for view transitions
- **Components**: Functional components with TypeScript interfaces

## Coding Standards

### TypeScript
- Use TypeScript for all React components
- Define proper interfaces for component props
- Use type-safe hooks (e.g., `useState<View>()`)
- Prefer `React.FC<Props>` for functional components

### React
- Use functional components with hooks
- Keep components focused on a single responsibility
- Extract reusable logic into custom hooks when appropriate
- Use proper event handlers with TypeScript types

### Styling
- Use Tailwind CSS utility classes for styling
- Custom animations are defined in `index.css`
- Follow the psychedelic design theme with gradients and glow effects
- Maintain responsive design with mobile-first approach
- Key color scheme: cyan, blue, pink, purple with glowing effects
- Use `font-orbitron` for headings and `font-inter` for body text

### File Organization
- Components go in `/components` directory
- Each component should be in its own `.tsx` file
- Use PascalCase for component filenames
- Co-locate component-specific types with the component

## Development Commands

### Install dependencies
```bash
npm install
```

### Start development server
```bash
npm run dev
```
The dev server runs on `http://localhost:3000`

### Build for production
```bash
npm run build
```
Output is generated in the `dist/` directory

### Preview production build
```bash
npm run preview
```

## Environment Variables
- `GEMINI_API_KEY`: API key for Google Generative AI (set in `.env.local`)

## Deployment
- Automatic deployment to GitHub Pages on push to `main` branch
- Deployed to custom domain: www.sonofma.com
- GitHub Actions workflow: `.github/workflows/gh-pages.yml`

## Design Principles
1. **Psychedelic Aesthetic**: Use vibrant gradients, animations, and glow effects
2. **Smooth Transitions**: Implement fade effects between view changes (500ms)
3. **Accessibility**: Maintain proper contrast and focus states
4. **Responsive**: Mobile-first design that scales up to desktop
5. **Performance**: Optimize animations and use CSS transforms

## Key Features to Maintain
- Animated background gradient (hue rotation + ripple effect)
- View transition animations with fade effects
- Scroll-to-top on navigation
- Glassmorphic panels with backdrop blur
- Text glow effects for headings
- Responsive button layouts

## When Making Changes
- Test responsiveness at multiple breakpoints
- Ensure animations remain smooth (60fps)
- Maintain the psychedelic color palette
- Preserve the view transition logic
- Keep TypeScript strict mode compatibility
- Test build process before committing
