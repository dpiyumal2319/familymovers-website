---
trigger: always_on
---

# Copilot Instructions - Family Movers Auckland

## Project Overview
Converting WordPress site (familymovers.co.nz) to Next.js 16+ with App Router. Moving services company in Auckland, NZ.

## Tech Stack
- **Framework**: Next.js 16.1.3 (App Router, RSC)
- **UI**: shadcn/ui (new-york style), Tailwind CSS 4, Lucide icons
- **Language**: TypeScript (strict mode)
- **Fonts**: Geist Sans/Mono via `next/font`

---

## ⚠️ CRITICAL RULES (Read First)

### Before Writing ANY Code
1. **STOP and THINK**: What is the user's actual intent? Is this the best approach?
2. **Check existing code**: Search for similar components/patterns before creating new ones
3. **Consider reusability**: Will this component be used elsewhere? Design accordingly
4. **Mobile-first always**: Start with mobile layout, then enhance for larger screens

### Absolute Don'ts
- ❌ **NO hardcoded colors** - Use CSS variables from `globals.css` or Tailwind theme
- ❌ **NO `any` type** - Always define explicit TypeScript interfaces
- ❌ **NO inline styles** - Use Tailwind classes or CSS modules
- ❌ **NO px units for spacing** - Use Tailwind spacing scale (4, 8, 12, 16...)
- ❌ **NO placeholder content** - Use real content from WordPress XML or leave clear TODOs
- ❌ **NO console.log in commits** - Remove all debug statements

### Must Do
- ✅ **Use semantic HTML** - `<section>`, `<article>`, `<nav>`, `<main>`, `<header>`, `<footer>`
- ✅ **Add aria labels** - For interactive elements and icons
- ✅ **Handle loading/error states** - Every async operation needs both
- ✅ **Test on mobile viewport** - 320px minimum width support

---

## Design System

### Colors (Use CSS Variables Only)
```css
/* In globals.css - reference these, don't hardcode hex values */
--background: 0 0% 100%;
--foreground: 0 0% 3.9%;
--primary: 37 45% 50%;        /* Brand gold #b28e4e */
--primary-foreground: 0 0% 98%;
--muted: 0 0% 96.1%;
--accent: 37 45% 50%;
```

```tsx
// ✅ Correct
<div className="bg-primary text-primary-foreground" />
<div className="text-muted-foreground" />

// ❌ Wrong - hardcoded colors
<div className="bg-[#b28e4e]" />
<div style={{ color: '#b28e4e' }} />
```

### Typography Scale
- Hero headings: `text-4xl md:text-5xl lg:text-6xl font-bold`
- Section headings: `text-2xl md:text-3xl font-semibold`
- Body: `text-base` (16px default)
- Small: `text-sm` for captions, metadata

### Spacing Guidelines
- Section padding: `py-16 md:py-24`
- Container: `container mx-auto px-4`
- Card gaps: `gap-4 md:gap-6`
- Between sections: `space-y-16 md:space-y-24`

---

## Component Architecture

### Folder Structure
```
components/
├── ui/           # shadcn primitives ONLY (auto-generated)
├── layout/       # Header, Footer, Navigation, Container
├── sections/     # Page sections (HeroSection, ServicesSection)
├── forms/        # QuoteForm, ContactForm
└── common/       # Reusable pieces (CTAButton, ServiceCard, SectionHeading)
```

### Component Template
```tsx
// components/sections/ExampleSection.tsx
import { cn } from "@/lib/utils";

interface ExampleSectionProps {
  className?: string;
  // Define all props explicitly
}

export function ExampleSection({ className }: ExampleSectionProps) {
  return (
    <section 
      className={cn("py-16 md:py-24", className)}
      aria-labelledby="example-heading"
    >
      <div className="container mx-auto px-4">
        <h2 id="example-heading" className="text-2xl md:text-3xl font-semibold">
          {/* Real content here */}
        </h2>
      </div>
    </section>
  );
}
```

### Before Creating a New Component, Ask:
1. Does a similar component already exist?
2. Can an existing shadcn component be used/extended?
3. Is this truly reusable or page-specific?
4. What are the responsive breakpoints needed?
5. What accessibility requirements apply?

---

## SEO Requirements

### Every Page Must Have
```tsx
// app/[page]/page.tsx
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Page Title | Family Movers Auckland",
    description: "150-160 char description with keywords",
    openGraph: {
      title: "...",
      description: "...",
      images: ["/og-image.jpg"],
    },
  };
}
```

### Structured Data (JSON-LD)
Include LocalBusiness schema on all pages:
```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "MovingCompany",
      "name": "Family Movers Auckland",
      "url": "https://familymovers.co.nz",
      "telephone": "+64-XXX-XXXX",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Auckland",
        "addressCountry": "NZ"
      }
    })
  }}
/>
```

---

## TypeScript Standards

### Interface Naming
```typescript
// Props interfaces: ComponentNameProps
interface HeroSectionProps { ... }

// Data types: PascalCase
interface Service { ... }
interface Testimonial { ... }

// API responses: with Response suffix
interface QuoteFormResponse { ... }
```

### Avoid These Patterns
```typescript
// ❌ Bad
const data: any = await fetch(...);
const items = data.map((x: any) => x.name);
function process(input: object) { ... }

// ✅ Good
interface ApiResponse { items: string[] }
const data: ApiResponse = await fetch(...).then(r => r.json());
const items = data.items.map((item) => item);
```

---

## File Naming Conventions
| Type | Convention | Example |
|------|------------|---------|
| Components | PascalCase | `HeroSection.tsx` |
| Utilities | camelCase | `formatPhone.ts` |
| Hooks | camelCase with use | `useScrollPosition.ts` |
| Routes | kebab-case folders | `app/about-us/page.tsx` |
| Constants | SCREAMING_SNAKE | `MAX_FILE_SIZE` |

---

## Business Information
```typescript
export const BUSINESS_INFO = {
  name: "Family Movers Auckland",
  domain: "familymovers.co.nz",
  email: "sales@familymovers.co.nz",
  location: "Auckland, New Zealand",
  tagline: "Your Trusted Local Movers In Auckland",
} as const;
```

## Content Source
WordPress export: `resources/familymoversauckland.WordPress.2026-01-19.xml`
- Pages: `<item>` where `<wp:post_type>` is `page`
- Content: `<content:encoded>` CDATA blocks
- SEO: `rank_math_title`, `rank_math_description`, `rank_math_focus_keyword`

## Commands
```bash
npm run dev      # Development server (localhost:3000)
npm run build    # Production build (run before PR)
npm run lint     # ESLint check
npx shadcn@latest add [component]  # Add shadcn component
```


## Ressources you have access to

### Links (Allowlisted Domains)

registry.npmjs.org
registry.yarnpkg.com
cdn.jsdelivr.net

fonts.google.com
fonts.gstatic.com
fonts.googleapis.com

lucide.dev
unpkg.com

ui.shadcn.com
github.com

nextjs.org
vercel.com
assets.vercel.com

tailwindcss.com
tailwindui.com

cloudinary.com
imagekit.io
unsplash.com

raw.githubusercontent.com
api.github.com

developer.mozilla.org
react.dev
typescriptlang.org
schema.org

googletagmanager.com
google-analytics.com
sentry.io

resend.com
sendgrid.com
mailgun.com

### MCP servers

```json
{
  "mcpServers": {
    "shadcn": {
      "type": "stdio",
      "command": "npx",
      "args": ["shadcn@latest", "mcp"],
      "tools": ["*"]
    }
  }
}
```