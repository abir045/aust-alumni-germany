# Engineering Rules & Architectural Principles

## 1. Server Components First
- All React components in `app/` are **Server Components by default**.
- Add the `"use client"` directive **only** at the top of files that require browser APIs, event listeners (`onClick`, `onChange`), React hooks (`useState`, `useEffect`, `useRef`), or client-only libraries.
- Keep Client Components low in the component tree to maximize server rendering benefits.

## 2. Styling & Class Merging
- Use Tailwind CSS v4 variables and utilities.
- Always merge dynamic or conditional classes using the `cn()` utility function (`@/lib/utils`):
  ```tsx
  import { cn } from "@/lib/utils";

  <div className={cn("base-classes", isSelected && "selected-classes", className)} />
  ```
- Use predefined design tokens (e.g., Primary `#0F2B5C`, Secondary `#F59E0B`, Tertiary `#EA580C`, etc.) instead of ad-hoc arbitrary values.

## 3. Environment Variables
- **Never** read `process.env` directly in feature components.
- Always access validated environment variables via `@/config/env`:
  ```tsx
  import { env } from "@/config/env";
  ```

## 4. TypeScript & Strict Typing
- Strict mode is enabled.
- Zero usage of `any`. Use `unknown`, generic type parameters, or explicit interfaces.
- Define shared domain types in `@/types` or local feature modules.

## 5. Component Size & Modularity
- Keep components focused and concise (aim for ≤ 200–300 lines).
- Decompose complex UI into sub-components, custom hooks, and isolated helper primitives.
- Avoid multi-thousand line files.

## 6. Icons & Assets
- Use `@phosphor-icons/react` for all UI icons.
- When rendering icons in Server Components, import from `@phosphor-icons/react/dist/ssr`.

## 7. Accessibility (A11y)
- All interactive elements (`<button>`, `<a>`, `<input>`) must have accessible names, keyboard focus indicators, and appropriate ARIA attributes.
- Maintain a minimum target score of **≥ 0.90** on Lighthouse A11y tests.
