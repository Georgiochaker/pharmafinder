# Techtalks-PharmaFinder

A real-time platform that tracks medication availability in local pharmacies and suggests verified alternatives when a drug is unavailable. Helps patients save time, reduce stress, and find the right medicine quickly. Users and pharmacies can update stock status, ensuring accurate, up-to-date information.

## Simplified Project Phases & Team Assignments

### Phase 1: Setup & Foundation (Week 1)

- **Georgio Chaker (Team Leader):**
	- Set up GitHub repository and project structure
	- Configure development environment (Node.js, mongoDB, Redis)
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

### Phase 2: Core Features (Weeks 2–3)

- **Georgio Chaker:**
	- Build simple authentication (register, login) with MongoDB
	- Create basic user management API endpoints
	- Review code and help with integration
- **Bilal:**
	- Build real-time updates with Socket.IO (basic notifications only)
	- Add Redis caching for medication search
- **Ibraheem Kadiri:**
	- Create medication and pharmacy API endpoints (CRUD, search)
	- Implement alternatives logic in MongoDB
- **Rawan:**
	- Build search and pharmacy details UI
	- Add map view (Mapbox or static map)
- **Joelle Hamoud:**
	- Connect frontend to backend APIs
	- Implement real-time updates in frontend

### Phase 3: Polish & Launch (Week 4)

- **Georgio Chaker:**
	- Test frontend, fix bugs, and deploy

- **Bilal:**
	- Deploy backend (Vercel, AWS, or similar)

- **Ibraheem Kadiri:**
	- Add simple admin endpoints (manage pharmacies, medications)

- **Rawan:**
	- Refine UI/UX and ensure mobile responsiveness

- **Joelle Hamoud:**
	- Final API/security testing
	- Prepare for deployment (env, docs)

---

- Focus on core features: search, real-time stock, alternatives, and map view.
- Use mock data or simple notifications if needed.
- Keep admin and analytics features basic.
- Add advanced features only if time allows.

---

## Project Phases & Step-by-Step Tasks

### Phase 1: Setup & Foundation (Week 1)

**Georgio Chaker (Team Leader):**
- Create the GitHub repo and invite all team members.
- Set up the project folder structure in the repo.
- Install Node.js, MongoDB, and Redis locally (share install guides if needed).
- Create a Notion or Trello board for team task tracking.
- Schedule and run a team kickoff meeting (share agenda and goals).

**Bilal:**
- Research Socket.IO basics and document how it works (share a summary doc).
- Set up Docker for local development (write a simple Dockerfile for Node.js).
- Set up GitHub Actions for CI (use a template for Node.js projects).
- Help others with backend setup if needed.

**Ibraheem Kadiri:**
- Design the medication, pharmacy, and inventory data models (draw a simple ERD or diagram).
- Help set up MongoDB locally (share connection string format).
- Write a script to seed test data into MongoDB.
- Share the seed script and instructions with the team.

**Rawan:**
- Create a Figma file and share the link with the team.
- Make wireframes for the search, pharmacy details, and map view pages.
- Design a UI component library (buttons, inputs, cards, etc.) in Figma.
- Create a style guide (colors, fonts, spacing) in Figma.

**Joelle Hamoud:**
- Research Mapbox, Twilio, and Firebase basics (share links and notes).
- Set up a Next.js frontend project (use `npx create-next-app@latest .`).
- Add TypeScript and Tailwind CSS to the project.
- Create basic page routes (search, pharmacy details, map view).

---

### Phase 2: Core Features (Weeks 2–3)

**Georgio Chaker:**
- Build user registration and login (use MongoDB models).
- Create user management API endpoints (register, login, get user info).
- Add role-based access control (middleware for admin/user).
- Review code and help others integrate their work.

**Bilal:**
- Set up Socket.IO for real-time updates (e.g., stock changes, notifications).
- Add Redis caching for medication search results (use a simple cache middleware).

**Ibraheem Kadiri:**
- Build CRUD API endpoints for medications and pharmacies.
- Implement logic for alternative medications in MongoDB (e.g., a field for alternatives).

**Rawan:**
- Build the search page UI in Next.js using Figma designs.
- Build the pharmacy details page UI.
- Add a map view using Mapbox (or a static map if needed).
- Use the style guide and components from Figma.

**Joelle Hamoud:**
- Connect the frontend to backend APIs (use fetch or axios).
- Add real-time updates to the frontend using Socket.IO client.

---

### Phase 3: Polish & Launch (Week 4)

**Georgio Chaker:**
- Test the frontend, fix bugs, and deploy the site (use Vercel or Netlify).

**Bilal:**
- Deploy the backend (Vercel, AWS, or similar; write a short deployment guide).

**Ibraheem Kadiri:**
- Add simple admin endpoints (manage pharmacies, medications).

**Rawan:**
- Refine UI/UX and ensure mobile responsiveness (test on different devices).

**Joelle Hamoud:**
- Final API/security testing (check endpoints, permissions, and error handling).
- Prepare environment variables and documentation for deployment (write a short README section).

---

- Each member should commit and push their work regularly.
- Use branches for each feature/task (e.g., `feature/search-ui`).
- Ask for help or feedback in the team chat or meetings.
- Focus on core features first; add extras only if time allows.
