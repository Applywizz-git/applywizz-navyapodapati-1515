# Devika Gade - Professional Portfolio

A luxury, high-performance portfolio website built with React, TypeScript, and Tailwind CSS featuring stunning glassmorphism effects, parallax backgrounds, and smooth micro-interactions.

## 🎨 Design Philosophy

This portfolio embraces a **luxury aesthetic** inspired by high-end jewelry and fashion brands:

- **Color Palette**: Onyx Navy meets Champagne Gold
- **Typography**: Cormorant Garamond (display) + Montserrat (body)
- **Effects**: Glassmorphism, parallax scrolling, animated gradients
- **Interactions**: Smooth micro-animations on every element

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS with custom design tokens
- **Animations**: Framer Motion
- **Build Tool**: Vite
- **UI Components**: Custom-built with Radix UI primitives

## 📁 Project Structure

```
src/
├── assets/              # Static assets (images, resume PDF)
├── components/          # React components
│   ├── ui/              # Reusable UI primitives
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Hero section with typewriter
│   ├── About.tsx        # About with counters & skill bars
│   ├── Experience.tsx   # Timeline-based experience
│   ├── Projects.tsx     # Project carousel
│   ├── Skills.tsx       # Skills grid with progress rings
│   ├── Certifications.tsx
│   ├── Education.tsx
│   ├── Contact.tsx      # Contact form
│   ├── Footer.tsx
│   └── Preloader.tsx    # Loading animation
├── data/
│   └── portfolioData.ts # All content data (JSON-like)
├── hooks/               # Custom React hooks
├── lib/                 # Utilities
├── pages/
│   ├── Index.tsx        # Main portfolio page
│   └── NotFound.tsx     # 404 page
└── index.css            # Design system & tokens
```

## 🎭 Design System

### Colors (HSL)

| Token | Color | HSL Value |
|-------|-------|-----------|
| Primary | Champagne Gold | `hsl(43, 55%, 70%)` |
| Background | Onyx Navy | `hsl(225, 35%, 12%)` |
| Surface | Metallic Gray | `hsl(230, 10%, 22%)` |
| Foreground | Porcelain | `hsl(44, 25%, 92%)` |
| Accent | Soft Gold | `hsl(42, 45%, 78%)` |

### Custom CSS Classes

- `.glass` - Glassmorphism effect with blur
- `.glass-strong` - Stronger glass effect
- `.text-gradient-gold` - Gold gradient text
- `.btn-luxury` - Filled luxury button
- `.btn-luxury-outline` - Outline luxury button
- `.card-luxury` - Card with hover effects
- `.glow-gold` - Gold glow shadow
- `.nav-link` - Navigation link with underline sweep

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Building for Production

```bash
npm run build
```

## 📄 Content Customization

All portfolio content is centralized in `src/data/portfolioData.ts`:

- `personalInfo` - Name, title, contact, summary
- `experience` - Work history with bullet points
- `projects` - Featured projects
- `skills` - Categorized technical skills
- `certifications` - Professional certifications
- `education` - Academic background

## 🖼️ Asset Replacement

### Profile Image
Replace the placeholder in `Hero.tsx` with your actual photo:
```tsx
<img src="/assets/your-photo.jpg" alt="Your Name" />
```

### Resume PDF
Add your resume to `public/assets/resume.pdf`

### Project Images
Update image URLs in the `projectImages` object in `Projects.tsx`

## 📱 Responsive Design

Fully responsive across all devices:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ⚡ Performance

- Lazy loading for images
- Optimized animations with `will-change`
- CSS-based effects where possible
- Efficient re-renders with React best practices

## 🔧 Environment Variables

No environment variables required for basic usage.

## 📜 License

MIT License - Feel free to use this template for your own portfolio!

---

Built with ❤️ by Devika Gade
