# Lighthouse CI Configuration & Benchmarks

This project integrates `@lhci/cli` to guard performance and Core Web Vitals across both Desktop and Mobile viewports.

## Running Audits Locally
1. Build the production application:
   ```bash
   npm run build
   ```
2. Run Lighthouse CI:
   ```bash
   # Mobile audit
   npm run lhci:mobile

   # Desktop audit
   npm run lhci:desktop
   ```

## Thresholds (`lighthouserc.js`)
- **Performance**: ≥ 0.85 (warn)
- **Accessibility (A11y)**: ≥ 0.90 (error)
- **Best Practices**: ≥ 0.90 (warn)
- **SEO**: ≥ 0.90 (warn)
- **First Contentful Paint (FCP)**: ≤ 2000ms (warn)
- **Largest Contentful Paint (LCP)**: ≤ 2500ms (error)
- **Cumulative Layout Shift (CLS)**: ≤ 0.1 (error)
- **Total Blocking Time (TBT)**: ≤ 300ms (warn)
