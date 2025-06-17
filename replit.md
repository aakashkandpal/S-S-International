# S&S International - Handicrafts Showcase Platform

## Overview

This is a responsive web application built with React.js to showcase S&S International, a leading handicrafts manufacturer and exporter. The application features a modern blue theme with professional typography, smooth animations, and an intuitive user interface designed to highlight the company's diverse range of handcrafted products.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and better developer experience
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management and data fetching
- **Styling**: 
  - Tailwind CSS for utility-first styling
  - Custom CSS variables for consistent theming
  - Shadcn/ui component library for consistent UI components

### Component Structure
- **Layout Components**: Navigation, Footer with fixed positioning
- **Page Components**: Home, About, Services, NotFound
- **Feature Components**: HeroCarousel, FeatureCards, ServicesSection, PartnersSection
- **UI Components**: Reusable shadcn/ui components (Button, Card, Dialog, etc.)

## Key Components

### Navigation System
- Fixed top navigation bar with company branding
- Dropdown menu for gallery categories (Lac, Felt, Beads, Ceramic, Wood, Resin, Horn Bone)
- Responsive mobile navigation with hamburger menu
- Smooth scroll functionality for contact section

### Data Management
- Product catalog with categories and metadata
- Static data structure for services and partners
- Image carousel data for hero section
- Type-safe interfaces for all data models

### UI/UX Features
- Auto-rotating hero carousel with overlay text
- Horizontal scrolling product showcase
- Card hover effects and animations
- Responsive grid layouts
- Professional blue color scheme with CSS custom properties

## Data Flow

### Static Data Architecture
1. **Products**: Categorized handicraft items with metadata (name, title, description, category, image)
2. **Services**: Company service offerings with descriptions and imagery
3. **Partners**: Business partner information and relationships
4. **Carousel**: Hero section image rotation data

### Component Communication
- Parent-to-child props for data passing
- Custom hooks for mobile responsiveness
- Query client for potential future API integration
- URL parameter handling for category filtering

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React 18, React DOM, React Router (Wouter)
- **UI Framework**: Radix UI primitives, Tailwind CSS
- **Development**: TypeScript, Vite, ESBuild
- **Utilities**: Date-fns, clsx, class-variance-authority

### Database Preparation
- Drizzle ORM configured for PostgreSQL
- User schema defined for future authentication features
- Database connection setup with Neon serverless PostgreSQL
- Migration system configured

### Build Tools
- Vite for development server and production builds
- PostCSS with Tailwind CSS processing
- TypeScript compilation with strict mode
- ESBuild for server-side bundling

## Deployment Strategy

### Environment Configuration
- Development mode with hot module replacement
- Production builds with static asset optimization
- Environment variable management for database connections
- Replit-specific deployment configuration

### Server Setup
- Express.js server for API endpoints (prepared but minimal)
- Static file serving for production builds
- Development middleware integration with Vite
- Error handling and logging middleware

### Database Infrastructure
- PostgreSQL database provisioning
- Drizzle schema migrations
- Connection pooling with Neon serverless
- Session storage configuration (prepared)

## Changelog
```
Changelog:
- June 17, 2025. Initial setup
```

## User Preferences
```
Preferred communication style: Simple, everyday language.
```