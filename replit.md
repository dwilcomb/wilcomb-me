# Overview

This is a professional portfolio website for Will Comb, a Product Design Leader. The application is built as a full-stack web application using React for the frontend and Express.js for the backend. It showcases Will's design philosophy, work portfolio, and provides a contact form for potential clients or collaborators to reach out.

The site emphasizes a "player-coach" approach to design leadership, highlighting expertise in collaboration, inclusiveness, communication, and transparency. It features a clean, modern design with sections for hero content, core principles, work showcase, about information, and contact functionality.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **UI Components**: Shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation

## Backend Architecture  
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API endpoints for contact form submissions
- **Storage**: In-memory storage implementation (MemStorage class) with interface for future database integration
- **Validation**: Zod schemas for request validation
- **Development**: Hot module replacement via Vite integration

## Data Layer
- **Schema Definition**: Drizzle ORM with PostgreSQL dialect configured
- **Database**: Neon Database (serverless PostgreSQL) configured but currently using in-memory storage
- **Migrations**: Drizzle Kit for database schema migrations
- **Type Safety**: Full TypeScript integration with Drizzle for type-safe database queries

## Component Structure
- **Layout**: Responsive design with navigation, hero section, philosophy, work showcase, about, contact, and footer
- **Forms**: Contact form with client-side validation and server-side processing
- **UI System**: Consistent design system using Shadcn/ui components with custom theming
- **Typography**: Multiple font families (Playfair Display, Inter, Space Mono) for visual hierarchy

## External Dependencies

- **Database**: Neon Database (PostgreSQL serverless platform)
- **UI Framework**: Radix UI primitives for accessible component foundations
- **Styling**: Tailwind CSS for utility-first styling approach
- **Icons**: Lucide React for consistent iconography
- **Fonts**: Google Fonts integration (Playfair Display, Inter, Space Mono)
- **External Images**: Unsplash for placeholder portfolio images
- **Development**: Replit-specific plugins for development environment integration