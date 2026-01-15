# Yoga & Psychotherapie mit Bea

A beautiful, modern website for a yoga and therapy practice built with Next.js, TypeScript, Tailwind CSS, and Sanity CMS.

## Features

- 🧘 **Yoga Classes** - Showcase different yoga styles and schedules
- 💆 **Therapy Services** - Present therapeutic treatments and pricing
- 📝 **Content Management** - Easy content updates via Sanity Studio
- 🎨 **Beautiful Design** - Calming, earthy aesthetics perfect for wellness
- 📱 **Responsive** - Looks great on all devices
- ⚡ **Fast** - Built with Next.js App Router for optimal performance

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **CMS**: Sanity
- **Fonts**: Cormorant Garamond & Lora

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- A Sanity account (free at [sanity.io](https://www.sanity.io))

### Installation

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd yoga-und-therapie-mit-bea
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Set up Sanity
   - Go to [sanity.io/manage](https://www.sanity.io/manage)
   - Create a new project
   - Copy your Project ID

4. Configure environment variables
   ```bash
   cp .env.example .env.local
   ```
   Then edit `.env.local` with your Sanity project details:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
   ```

5. Start the development server
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) to see the website

7. Access Sanity Studio at [http://localhost:3000/studio](http://localhost:3000/studio) to manage content

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── yoga/              # Yoga classes page
│   ├── therapie/          # Therapy services page
│   ├── ueber-mich/        # About page
│   ├── kontakt/           # Contact page
│   └── studio/            # Sanity Studio (embedded)
├── components/            # React components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── icons/
├── sanity/                # Sanity configuration
│   ├── client.ts          # Sanity client
│   ├── config.ts          # Configuration
│   ├── image.ts           # Image URL builder
│   ├── lib/
│   │   └── queries.ts     # GROQ queries
│   └── schemas/           # Content schemas
└── types/                 # TypeScript types
    └── sanity.ts
```

## Sanity Content Types

The CMS includes the following content types:

- **Hero** - Homepage hero section
- **About** - About section content
- **Service** - General services
- **Yoga** - Yoga class types
- **Therapy** - Therapy treatments
- **Testimonial** - Customer testimonials
- **Site Settings** - Global settings (contact info, social links)
- **Contact** - Contact page content

## Development

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Styling

The website uses a calming, earthy color palette:

- **Sage Green** - Primary color for buttons and accents
- **Cream/Warm White** - Background colors
- **Terracotta** - Secondary accent color
- **Charcoal** - Text colors

Custom CSS variables are defined in `globals.css` and can be customized to match your branding.

## Fonts

- **Cormorant Garamond** - Display/heading font (elegant, serif)
- **Lora** - Body text font (readable, warm serif)

## Deployment

This project can be deployed on:

- [Vercel](https://vercel.com) (recommended for Next.js)
- [Netlify](https://netlify.com)
- Any platform supporting Node.js

Remember to set your environment variables on your deployment platform.

## License

This project is private and proprietary.

---

Made with 💚 for Bea
