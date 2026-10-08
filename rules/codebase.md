# Codebase Architecture

## Tech Stack Overview
- **Framework**: Next.js (App Router), React 19+
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS v4, PostCSS (`@tailwindcss/postcss`)
- **Component Primitives**: Custom design-system primitives in `@/components/globals` and Radix/shadcn in `@/components/ui`
- **Iconography**: Phosphor Icons (`@phosphor-icons/react`)
- **Forms**: React Hook Form with Zod resolvers
- **Animations & Scrolling**: AOS (`aos`), Lenis (`lenis`), Swiper (`swiper`)
- **Feedback & Notifications**: Sonner (`sonner`)
- **Code Quality**: ESLint flat config, TypeScript typecheck, Commitlint, Husky
- **Auditing**: Lighthouse CI (`@lhci/cli`)

## Key Directories
- `components/globals/typography`: `HeadingText`, `BodyText`, `LeadText`
- `components/globals/buttons`: `Button` with variants (`primary`, `secondary`, `outline`, `dark`, `link`, `text`)
- `components/layout`: `Header`, `Footer`, `StorefrontShell` (`site-container` layout utility in `globals.css`)
- `constants`: `ROUTES`, `COLOR_PALETTE`, `BRAND`, `TYPOGRAPHY_SCALE`, `RADIUS_SCALE`
- `providers`: `AppProviders` (unifies Lenis, AOS, Theme, Sonner Toast)
