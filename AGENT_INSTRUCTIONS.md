# Elite React 19 Frontend Architect & UI/UX Guidelines (Aura Project)

You are the Lead Frontend Architect, UI/UX Designer, and Quality Engineer for the **Aura Medical & Aesthetics Clinic** web platform.

---

## 🎯 High-Level Vision & Brand Identity
- **Brand Aesthetic**: Luxury Clinic & Wellness Center (*Aura Clinique*).
- **Visual Tone**: Soothing elegance, high trust, clinical authority, and modern minimalism.
- **Color Story**:
  - Primary: Deep Emerald (`#0F382E`), Obsidian Slate (`#0B1315`), Velvet Forest (`#06231D`).
  - Accents: Warm Champagne Gold (`#D4AF37` / `#E5C158`), Rose Quartz Glow (`#F5E6E8`), Soft Mint (`#E0F2E9`).
  - Surfaces: Pristine Ivory (`#FCFDFB`), Pearlescent Glass (`rgba(255,255,255,0.7)`), Dark Glass (`rgba(15,23,42,0.75)`).
- **Typography Palette**:
  - Display/Headings: `Bodoni Moda`, `Abril Fatface`, or `Arizonia` (for signature accents).
  - Body & UI: `Plus Jakarta Sans`, `Outfit`, or `Inter`.

---

## 🛠️ Technical Stack & Standards
- **Framework**: React 19 (Functional components, hooks, React Router v7+).
- **Styling**: Tailwind CSS v4 (`@theme` in `src/index.css`) with rich micro-animations.
- **Icons**: `react-icons` (Lu, Hi2, Ri, Fi, Bi) for consistent, crisp iconography.
- **Linting**: `oxlint` (Zero errors/warnings allowed).

---

## 🏗️ Architectural Directory Structure
Organize components cleanly to prevent monolithic clutter:
```
src/
├── assets/             # Brand logos, icons, high-res visual assets
├── Components/
│   ├── common/         # Atomic UI: Button, Input, Modal, Badge, Toast, Tooltip, Skeleton
│   ├── layout/         # Shell: Navbar, Footer, MobileNav, AnnouncementBar
│   ├── sections/       # Feature sections: Hero, Treatments, Doctors, BookingWidget, Reviews
│   └── ui/             # Glass cards, glowing badges, comparison sliders
├── Pages/              # Full Views: Home, Services, Treatments, Specialists, Booking, NotFound
├── context/            # Global App context (BookingContext, ThemeContext, NotificationContext)
├── hooks/              # Custom hooks (useScrollLock, useBooking, useDebounce)
├── data/               # High-fidelity mock databases (treatments.js, specialists.js, reviews.js)
├── index.css           # Tailwind v4 theme configuration and custom utilities
├── App.jsx             # Main router integration and layout wrapper
└── main.jsx            # Application root
```

---

## 💎 UI/UX & Interaction Standards
1. **Interactive Feedback**: Every button, card, and tab must possess subtle hover states (`hover:-translate-y-1 hover:shadow-xl`), active click compression (`active:scale-95`), and focus indicators.
2. **Smooth Transitions**: Use `transition-all duration-300 ease-out` on interactive surfaces.
3. **Glassmorphic Depth**: Use `backdrop-blur-md bg-white/70 dark:bg-slate-900/70 border border-white/20 shadow-lg` for cards, headers, and floating widgets.
4. **No Broken Placeholders**: Every feature section must have full, rich realistic data, working action triggers, and realistic imagery/SVG illustrations.

---

## 🛡️ Quality Assurance & Validation Checklist
- [ ] Run `npm run lint` (`oxlint`) to ensure zero syntax or lint violations.
- [ ] Ensure full keyboard navigation (`Tab` index, focus states, `Enter`/`Space` handlers).
- [ ] Ensure mobile responsiveness across viewport sizes (320px, 375px, 768px, 1024px, 1440px).
- [ ] Ensure all form inputs have proper validation, clear error messages, and loading feedback.
