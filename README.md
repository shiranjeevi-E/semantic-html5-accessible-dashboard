# AccessBoard — Semantic HTML5 & Accessible Component Architecture

A focused one-day enterprise dashboard starter built with semantic HTML5, CSS, and vanilla JavaScript.

## Pages
- `index.html` — overview, KPI cards, activity data table, validated task form, native modal dialog
- `users.html` — user-management data table
- `reports.html` — workspace report summary
- `settings.html` — accessible profile and notification form

## Run locally
Open `index.html` in a modern browser. No build tools or dependencies are required.

## Accessibility features
- Semantic landmarks: `header`, `nav`, `main`, `aside`, `section`, `article`, and `footer`
- Skip-to-content link and visible keyboard focus styles
- Correct heading hierarchy, table captions, row and column headers
- Explicit labels, fieldsets, legends, required fields, input constraints, and native validation
- Accessible status announcement using `role="status"` and `aria-live`
- Native `<dialog>` modal with keyboard Escape support
- Responsive layout and reduced-motion preference support
- Navigation labels and `aria-current="page"`

## Suggested verification
1. Navigate every page using only Tab, Shift+Tab, Enter, Space, and Escape.
2. Check the page at 200% zoom and a narrow mobile viewport.
3. Run Lighthouse Accessibility and record the score.
4. Test form validation by submitting empty and invalid values.
5. Inspect the accessibility tree with browser developer tools.

## Scope note
This is a front-end structural prototype. Form submission is intentionally a demo and does not connect to a backend or database.
