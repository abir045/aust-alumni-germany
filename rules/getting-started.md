# Getting Started

## Prerequisites
- Node.js ≥ 20.x
- npm ≥ 10.x

## Installation
1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy environment variables:
   ```bash
   cp .env.example .env.local
   ```

## Development Server
Start the local Next.js dev server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.
Visit the Design Systems showcase at [http://localhost:3000/design-systems](http://localhost:3000/design-systems).

## Quality Checks
```bash
# Typecheck
npm run typecheck

# Linting
npm run lint

# Production build
npm run build
```
