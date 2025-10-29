# Copilot Instructions for Son of Ma

## Project Overview
This is a React/TypeScript website for Son of Ma - Music & Sound Healing, built with Vite and styled with Tailwind CSS. The site features multiple pages including landing, music, sound healing, privacy policy, and terms of service.

## Tech Stack
- **Framework**: React 19.2.0 with TypeScript
- **Build Tool**: Vite 6.2.0
- **Styling**: Tailwind CSS v4 (via @tailwindcss/postcss 4.1.16) with PostCSS and Autoprefixer
- **Deployment**: GitHub Pages (deployed via GitHub Actions)

## Development Guidelines

### Code Style
- Use functional React components with TypeScript
- Use React hooks (useState, useEffect, etc.) following React best practices
- Maintain consistent TypeScript typing - always define proper types and interfaces
- Use semantic HTML5 elements
- Follow the existing component structure pattern

### Component Structure
- Components are located in the `/components` directory
- Each page component receives `onBack` and `onNavigate` props for navigation
- Navigation is handled through a state-based view system in `App.tsx`
- All components should be properly typed with TypeScript

### Styling
- Use Tailwind CSS utility classes for styling
- Follow the existing color scheme and design patterns
- Ensure responsive design for mobile, tablet, and desktop
- Maintain smooth transitions and animations (500ms fade transitions)

### File Organization
- Main app entry: `index.tsx`
- App component with routing logic: `App.tsx`
- Page components: `components/*.tsx`
- Styles: `index.css` (global styles and Tailwind directives)
- Configuration files at root: `vite.config.ts`, `tsconfig.json`, `postcss.config.js`

## Building and Development

### Local Development
```bash
npm install          # Install dependencies
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
```

### Build Requirements
- Node.js 20 or higher
- No test suite currently exists - focus on manual testing
- Ensure builds complete successfully before committing

## Deployment
- Automatic deployment to GitHub Pages on push to `main` branch
- Build output goes to `dist/` directory
- Custom domain: www.sonofma.com (configured via CNAME)

## Important Considerations
- **No Breaking Changes**: Ensure all changes are backward compatible
- **Build Verification**: Always verify the build passes with `npm run build`
- **Type Safety**: Maintain strict TypeScript type checking
- **Navigation Flow**: Preserve the existing navigation patterns and transitions
- **Responsive Design**: Test changes on multiple screen sizes
- **Performance**: Keep bundle size reasonable and optimize imports

## Common Tasks

### Adding a New Page Component
1. Create component in `/components` directory
2. Add proper TypeScript types for props
3. Include `onBack` and `onNavigate` props
4. Update the `View` type in `App.tsx`
5. Add case in `renderContent()` switch statement
6. Follow existing page component patterns

### Modifying Styles
1. Use Tailwind utility classes when possible
2. Add custom styles to `index.css` if needed
3. Maintain consistency with existing design
4. Test responsive behavior

### Working with Dependencies
1. Use `npm install` to add new packages
2. Keep dependencies up to date but test thoroughly
3. Avoid adding unnecessary dependencies
4. Check bundle size impact for new dependencies

## API Integration
- Uses Google Generative AI (@google/genai ^1.27.0)
- API key should be set in `.env.local` as `GEMINI_API_KEY` (for local development)
- Handle API errors gracefully

## Best Practices
- Write clean, readable code with clear variable names
- Add comments for complex logic
- Keep components focused and single-purpose
- Avoid unnecessary re-renders
- Use proper React key props in lists
- Handle edge cases and error states
- Maintain accessibility standards (semantic HTML, ARIA labels when needed)

## Things to Avoid
- Don't modify build configuration without good reason
- Don't break existing navigation patterns
- Don't add test frameworks unless explicitly requested
- Don't introduce breaking changes to component APIs
- Don't commit sensitive data or API keys
- Don't modify `.github/workflows/gh-pages.yml` unless specifically related to deployment issues
