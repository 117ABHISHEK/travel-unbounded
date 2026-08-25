# Travel Unbounded

India's Most Trusted Experiential Travel Experts — a full-stack travel enquiry website built with Next.js and MongoDB.

## Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Database:** MongoDB via Mongoose
- **Fonts:** Space Grotesk (display) + Inter (body)

## Getting Started

### Prerequisites

- Node.js 18+
- A MongoDB instance (local or Atlas)

### Setup

1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd travel-unbounded
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create `.env.local` from the example:
   ```bash
   cp .env.example .env.local
   ```

4. Add your MongoDB connection string to `.env.local`:
   ```
   MONGODB_URI=mongodb://localhost:27017/travel-unbounded
   ```

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000)

## Environment Variables

| Variable | Description | Example |
|---|---|---|
| `MONGODB_URI` | MongoDB connection string | `mongodb://localhost:27017/travel-unbounded` |

## Project Structure

```
app/
  page.tsx              # Home page (Hero + Destinations)
  layout.tsx            # Root layout with fonts
  globals.css           # Tailwind theme + animations
  about/page.tsx        # About page (story, offices, why choose us)
  contact/page.tsx      # Contact page (booking form)
  api/enquiry/route.ts  # POST endpoint for enquiry submissions
components/
  Navbar.tsx            # Sticky nav with mobile hamburger
  Hero.tsx              # Hero section with CTA
  DestinationCard.tsx   # Destination card component
  DestinationSection.tsx # Grid of destination cards
  BookingForm.tsx       # Enquiry form with validation
  Footer.tsx            # Site footer
data/
  destinations.ts       # Static destination data (India + International)
lib/
  mongodb.ts            # MongoDB connection helper
models/
  Enquiry.ts            # Mongoose schema for enquiries
```

## Features

- **Home page:** Hero with animated CTA, 5 India + 5 International destination cards
- **About page:** Company story, 3 office locations (Bengaluru, Kochi, Nairobi), why choose us
- **Contact page:** Full booking form with client-side + server-side validation
- **API:** POST `/api/enquiry` — validates all fields server-side, persists to MongoDB, returns proper status codes (201/400/500)
- **Responsive:** Mobile, tablet, and desktop layouts
- **SEO:** Title and meta description on every page

## Assumptions & Skipped Features

- **Destination data and pricing are static/dummy** — no database or real pricing engine
- **Images are from Unsplash** (free, no attribution required)
- **Marketing copy is illustrative** — "500+ trips planned", "10+ destinations", and "3 offices worldwide" are placeholder stats, not real data
- **Contact details are placeholders** — the email (`hello@travelunbounded.com`) and phone numbers shown on the site are invented, not real contact channels
- **No authentication, admin dashboard, payment gateway, or booking engine** — these are planned for Phase 2
- **No Redis, Kafka, microservices, AI chatbot, or complex search** — explicitly out of scope

## License

Private project.
