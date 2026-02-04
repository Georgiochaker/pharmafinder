
# Techtalks-PharmaFinder

A real-time platform that tracks medication availability in local pharmacies and suggests verified alternatives when a drug is unavailable. Helps patients save time, reduce stress, and find the right medicine quickly. Users and pharmacies can update stock status, ensuring accurate, up-to-date information.

## Project Phases & Team Assignments

### Phase 1: Setup & Foundation (Week 1)

- **Georgio Chaker (Team Leader):**
	- Set up GitHub repository and project structure
	- Configure development environment (Node.js, mySQL, Redis)
	- Create database schema design
	- Coordinate team meetings and track progress
- **Bilal:**
	- Research and document Socket.IO implementation strategy
	- Set up Docker containers for development
	- Configure CI/CD pipeline with GitHub Actions
	- Help with backend environment setup
- **Ibraheem Kadiri:**
	- Design database schema for medications, pharmacies, and inventory
	- Set up PostgreSQL database and initial migrations
	- Configure Redis for caching and pub/sub
	- Create seed data for testing
- **Rawan:**
	- Create wireframes for all main pages (search, pharmacy details, map view)
	- Design UI component library and style guide
	- Set up Figma design file and share with team
	- Research Mapbox API and design map interface
- **Joelle Hamoud:**
	- Research Mapbox, Twilio, and Firebase documentation
	- Set up React/Next.js frontend project with TypeScript
	- Configure Tailwind CSS and component structure
	- Create basic routing and page layouts

### Phase 2: Core Features (Week 2 and 3)

- **Georgio Chaker:**
	- Build authentication system (register, login, JWT)
	- Create user management API endpoints
	- Implement role-based access control
	- Code reviews and integration testing
- **Bilal:**
	- Build real-time WebSocket service with Socket.IO
	- Create inventory update pub/sub system
	- Implement Redis caching layer
	- Build notification service backend
- **Ibraheem Kadiri:**
	- Create API endpoints for medications (search, details)
	- Build pharmacy API (profile, inventory management)
	- Implement alternative medications logic
	- Write database queries and optimize performance
- **Rawan:**
	- Build frontend search interface with filters
	- Create pharmacy details page UI
	- Implement map view with Mapbox integration
	- Design and build admin dashboard UI
- **Joelle Hamoud:**
	- Integrate frontend with backend APIs
	- Implement real-time updates with Socket.IO client
	- Build notification subscription UI
	- Create user profile and settings pages

### Phase 3: Advanced Features & Polish (Week 4)

- **Georgio Chaker:**
	- Integrate Twilio for SMS notifications
	- Integrate Firebase Cloud Messaging for push notifications
	- Final API testing and security audit
	- Deployment preparation and coordination
- **Bilal:**
	- Set up monitoring with Sentry or Prometheus
	- Performance optimization and load testing
	- Deploy backend to production (AWS/similar)
	- Configure production database and Redis
- **Ibraheem Kadiri:**
	- Build admin API endpoints (manage pharmacies, medications)
	- Implement analytics and reporting features
	- Database optimization and indexing
	- Create API documentation
- **Rawan:**
	- UI/UX refinements based on testing
	- Responsive design for mobile devices
	- Accessibility improvements
	- Create demo video or presentation materials
- **Joelle Hamoud:**
	- End-to-end testing with Jest and React Testing Library
	- Bug fixes and frontend optimization
	- Deploy frontend to production
	- Write user documentation

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
