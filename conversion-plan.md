# WordPress to Next.js Conversion Plan

> **Reference**: See `.github/copilot-instructions.md` for coding standards
> **Source Content**: `resources/familymoversauckland.WordPress.2026-01-19.xml`

---

## Phase 1: Foundation Setup ✅ COMPLETED
- [x] Initialize Next.js 16.1.3 with App Router
- [x] Configure shadcn/ui (new-york style, RSC enabled)
- [x] Setup Tailwind CSS 4 with CSS variables
- [x] Configure TypeScript strict mode
- [x] Setup project structure

---

## Phase 2: Design System & Layout 🔄 IN PROGRESS

### 2.1 Design Tokens Setup
**Goal**: Establish consistent design language

**Tasks**:
1. Update `app/globals.css` with brand colors:
   ```css
   --primary: 37 45% 50%;  /* Brand gold #b28e4e */
   ```
2. Define typography scale in Tailwind config
3. Create spacing/sizing tokens

**Acceptance Criteria**:
- [ ] No hardcoded hex colors anywhere in codebase
- [ ] All colors reference CSS variables

### 2.2 Layout Components
**Goal**: Global layout with responsive header/footer

**Files to Create**:
```
components/layout/
├── Header.tsx          # Responsive nav with mobile menu
├── Footer.tsx          # Contact info, links, map
├── MobileNav.tsx       # Sheet-based mobile navigation
└── Container.tsx       # Consistent max-width wrapper
```

**Header Requirements**:
- Logo: Download from WP (`184101456_padded_logo.png`) → optimize → `public/images/logo.png`
- Navigation items: Home, About, Services, Contact, Get Quote (CTA button)
- Mobile: Hamburger icon → Sheet with full nav
- Sticky on scroll with backdrop blur
- Height: 64px mobile, 80px desktop

**Footer Requirements**:
- 3-4 column grid on desktop, stacked on mobile
- Columns: Company info, Quick links, Contact, Hours
- Google Maps embed (responsive)
- Copyright with current year (dynamic)

**shadcn Components Needed**:
```bash
npx shadcn@latest add navigation-menu sheet button
```

### 2.3 Update Root Layout
**File**: `app/layout.tsx`

**Must Include**:
- Default metadata with title template
- LocalBusiness JSON-LD schema
- Header and Footer components
- Proper html lang attribute

---

## Phase 3: Homepage Sections

### Section Mapping (from WordPress)
| Priority | WP Block ID | Component | Description |
|----------|-------------|-----------|-------------|
| P0 | 44 | `HeroSection` | Hero with video/image, main headline, CTA |
| P0 | 193 | `ServicesSection` | Grid of service cards |
| P0 | 254 | `CTASection` | "Get a Quote" conversion section |
| P1 | 152 | `ReviewsSection` | Customer testimonials carousel |
| P1 | 173 | `IntroSection` | Company intro with image |
| P1 | 180 | `SpecsSection` | Features: pricing, safety, care |
| P2 | 236 | `WhyChooseUsSection` | Benefits list with icons |
| P2 | 524 | `FAQSection` | Accordion FAQ |

### Section Implementation Guide

#### 3.1 HeroSection (P0 - Build First)
**File**: `components/sections/HeroSection.tsx`

**Content from WP**:
- Headline: "Trusted Local Movers In Auckland"
- Subheadline: "Contact us today for affordable hourly rates and expert moving services"
- CTA: "Get a Free Quote Now"
- Background: Image `2149103440.jpg` (movers with boxes)

**Implementation Notes**:
- Full viewport height on mobile, 80vh on desktop
- Gradient overlay on image for text readability
- CTA button links to `/request-a-quotation`
- Consider video background option (file: `Video.mp4`)

**Structure**:
```tsx
<section className="relative min-h-screen md:min-h-[80vh]">
  {/* Background image with overlay */}
  {/* Content container - centered */}
  {/* Heading + subheading + CTA button */}
</section>
```

#### 3.2 ServicesSection (P0)
**File**: `components/sections/ServicesSection.tsx`

**Services to Include** (extract from WP):
1. Residential Moving
2. Commercial Moving
3. Furniture Delivery
4. Packing Services
5. Storage Solutions

**Design**:
- Section heading with decorative underline
- Grid: 1 col mobile, 2 cols tablet, 3 cols desktop
- Each card: Icon + title + short description + "Learn more" link

#### 3.3 CTASection (P0)
**File**: `components/sections/CTASection.tsx`

**Content**:
- Background: Brand gold (#b28e4e via CSS variable)
- Heading: "You can fill out this free quote form and we'll reach out to you within minutes."
- Embedded quick quote form OR link to quote page

---

## Phase 4: Core Pages

### Page Priority & Routes
| Priority | Route | Source WP ID | Key Content |
|----------|-------|--------------|-------------|
| P0 | `/` | 19 | Homepage with all sections |
| P1 | `/about-us` | 96 | Company story, vision, truck features |
| P1 | `/contact-us` | 94 | Contact form, map, phone/email |
| P1 | `/request-a-quotation` | 228 | Multi-step quote form |
| P2 | `/privacy-policy` | 3 | Legal content |

### Page Implementation Template
Each page needs:
```
app/[route]/
├── page.tsx           # Page component with sections
├── loading.tsx        # Loading skeleton (optional but recommended)
└── not-found.tsx      # Custom 404 for route (if needed)
```

### 4.1 About Us Page
**File**: `app/about-us/page.tsx`

**Sections**:
1. Hero banner with "About Us" title
2. "How We Started" - company origin story
3. "Our Trucks Are Equipped With Everything" - equipment list
4. "Our Vision" - mission statement
5. Team/values section (optional)

**Content to Extract from WP**:
- Company founded by MBA students
- 1.5 years research on moving technologies
- Equipment list: blankets, shrink wrap, tape, dollies, tools
- Mission: stress-free moving, honesty, integrity

### 4.2 Contact Us Page
**File**: `app/contact-us/page.tsx`

**Layout**:
- Two columns on desktop: Form | Contact info + Map
- Single column mobile: Info → Form → Map

**Contact Info**:
- Phone: (extract from WP)
- Email: sales@familymovers.co.nz
- Location: Auckland, NZ
- Google Maps embed with Family Movers location

---

## Phase 5: Forms & Interactivity

### 5.1 Quote Request Form
**File**: `components/forms/QuoteForm.tsx`

**Form Fields** (based on WP Contact Form 7):
- Moving from (address)
- Moving to (address)  
- Moving date (date picker)
- Property type (select: apartment, house, office)
- Number of bedrooms (select)
- Additional services (checkboxes)
- Name, Email, Phone
- Special requirements (textarea)

**Implementation**:
- Use React Hook Form + Zod for validation
- Consider multi-step wizard for better UX
- Server action for form submission
- Success/error toast notifications

**shadcn Components**:
```bash
npx shadcn@latest add form input textarea select calendar checkbox toast
```

### 5.2 Contact Form
**File**: `components/forms/ContactForm.tsx`

**Simpler form**:
- Name, Email, Phone, Message
- Single page layout
- Same validation approach

---

## Phase 6: Assets & Media

### 6.1 Images to Download from WordPress
| Image | Usage | Optimize To |
|-------|-------|-------------|
| `184101456_padded_logo.png` | Logo | 200x200 WebP |
| `2149103440.jpg` | Hero background | 1920x1080 WebP |
| `WhatsApp-Image-2024-05-21-*.jpeg` | About page | 800x600 WebP |

### 6.2 Image Optimization Checklist
- [ ] Convert all images to WebP format
- [ ] Create multiple sizes for responsive images
- [ ] Add to `public/images/` with descriptive names
- [ ] Use `next/image` with proper width/height
- [ ] Add meaningful alt text for accessibility

---

## Phase 7: SEO & Performance

### 7.1 SEO Checklist
- [ ] Metadata on every page (generateMetadata)
- [ ] OpenGraph images (1200x630)
- [ ] JSON-LD LocalBusiness schema
- [ ] Sitemap.xml generation
- [ ] robots.txt
- [ ] Canonical URLs

### 7.2 Performance Targets
| Metric | Target |
|--------|--------|
| Lighthouse Performance | 90+ |
| Lighthouse Accessibility | 95+ |
| Lighthouse SEO | 100 |
| First Contentful Paint | < 1.5s |
| Largest Contentful Paint | < 2.5s |

### 7.3 Final Polish
- [ ] 404 page with helpful navigation
- [ ] Loading skeletons for dynamic content
- [ ] Error boundaries
- [ ] Mobile testing: iOS Safari, Chrome Android
- [ ] Cross-browser: Chrome, Firefox, Safari, Edge

---

## Implementation Order Summary

```
Week 1: Foundation
├── Phase 2.1: Design tokens
├── Phase 2.2: Header component
├── Phase 2.3: Footer component
└── Phase 2.4: Update root layout

Week 2: Homepage
├── Phase 3.1: HeroSection
├── Phase 3.2: ServicesSection
├── Phase 3.3: CTASection
└── Homepage assembly

Week 3: Remaining Sections + Pages
├── Phase 3.4-3.7: Remaining sections
├── Phase 4.1: About Us page
├── Phase 4.2: Contact Us page
└── Phase 4.3: Quote page (basic)

Week 4: Forms + Polish
├── Phase 5: Full form implementation
├── Phase 6: Asset optimization
└── Phase 7: SEO & launch prep
```

---

## Notes for AI Agents

### Before Starting Any Task
1. Read `.github/copilot-instructions.md` for coding standards
2. Check this plan for current phase and priorities
3. Search codebase for existing patterns
4. Ask clarifying questions if requirements unclear

### When Implementing Components
1. Start with mobile layout (320px)
2. Use existing shadcn components where possible
3. Extract real content from WordPress XML
4. Test responsiveness at: 320px, 768px, 1024px, 1440px

### Skip These (Not Needed)
- WooCommerce pages: Shop, Cart, Checkout, Wishlist
- WordPress-specific shortcodes
- Any admin/backend functionality
