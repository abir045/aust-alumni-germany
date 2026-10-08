# Project Structure Guide

```
aust-alumni-germany-frontend/
├── app/                          # Next.js App Router root
│   ├── (auth)/                   # Authentication route group (login, register, forgot-password)
│   ├── (design-systems)/         # Design system showcase route group
│   ├── (main)/                   # Main storefront route group
│   ├── api/                      # Next.js Route Handlers
│   ├── favicon.ico               # Standard favicon
│   ├── globals.css               # Design system tokens and global CSS
│   ├── icon.svg                  # SVG brand vector icon
│   └── layout.tsx                # Root layout with Plus Jakarta Sans & AppProviders
├── components/
│   ├── globals/                  # Brand-wide primitives (typography, buttons, inputs, others)
│   ├── layout/                   # Layout wrappers (container, header, footer, storefront shell)
│   ├── scope/                    # Route-scoped private components (auth, home, etc.)
│   └── ui/                       # Shadcn / base UI primitives
├── config/                       # Type-safe environment (env.ts) and SEO (seo.ts)
├── constants/                    # Application constants (routes.ts, colors.ts, brand.ts, design-systems.ts)
├── features/                     # Feature-sliced modules (admin, alumni-map, auth, blog, events)
├── hooks/                        # Global custom React hooks (useDebounce, useMediaQuery, etc.)
├── lib/                          # Third-party wrappers (AOS, Lenis, Swiper, Focus trap, Utils)
├── providers/                    # Client providers (AppProviders, ThemeProvider, Toaster)
├── public/                       # Static public assets (brand, icons, images, home)
├── rules/                        # Architecture, engineering, and contribution rules
├── services/                     # API client services and HTTP handlers
├── stores/                       # Client state management stores
└── types/                        # Global TypeScript types and interfaces
```
