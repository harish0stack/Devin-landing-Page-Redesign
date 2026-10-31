<div align="center">

# Devin — Landing Experience

**A production-grade, highly interactive landing page built with React 19, Motion, and modern Web APIs.**

[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Motion](https://img.shields.io/badge/Motion-14.6-FF0055?style=flat-square&logo=framer&logoColor=white)](https://motion.dev/)
[![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](LICENSE)

</div>

---

## 📽️ Preview

<!-- 
  TIP FOR UPLOADING VIDEO ON GITHUB:
  1. Drag and drop your .mp4 / .webm video file directly into a GitHub Issue, PR comment, or the README editor.
  2. GitHub will generate a URL like: https://github.com/user-attachments/assets/...
  3. Replace the placeholder video URL below with your generated link.
-->

<div align="center">
  <video width="100%" controls autoplay loop muted playsinline src="https://github.com/user-attachments/assets/YOUR-VIDEO-ID-HERE.mp4">
    <p>Your browser does not support the video tag. <a href="https://github.com/user-attachments/assets/YOUR-VIDEO-ID-HERE.mp4">Click here to watch the preview</a>.</p>
  </video>
</div>

> [!NOTE]
> If you prefer a GIF preview, simply replace the `<video>` block with:
> `![Website Demo](./assets/preview.gif)`

---

## ✨ Highlights & Features

- **🤖 Kinematic 3D Spherical Bots**: Interactive bot entities (`GrokBot` and `BigBot`) powered by custom 3D spherical tangent projection math, real-time cursor tracking, cosine proximity falloff, and autonomous mood cycles.
- **🧭 Hover-Triggered Mega Menu**: Desktop and mobile navigation with cross-fading preview panels for Products and Solutions, accompanied by smooth animated hover highlights.
- **🌓 View Transitions Theme Engine**: Seamless switching between `Light`, `System`, and `Dark` modes with vertical clip-path wipe animations using the native Document View Transitions API.
- **🎭 Choreographed Staggered Blur-Reveal**: Section-by-section entrance animations featuring cubic-bezier easing, hardware-accelerated transforms, and reduced-motion accessibility.
- **🍱 Paper-Inspired Bento Grid**: Interactive 6-column bento cards with responsive layouts, subtle depth blurs, and hover-to-unblur micro-interactions.
- **🛡️ Production Architecture**: Clean separation into `pages/`, `sections/`, `navigation/`, `bots/`, `common/`, `context/`, `hooks/`, and `data/` with isolated React Error Boundaries.

---

## 🏗️ Architecture & Directory Layout

```text
src/
├── App.jsx                     # Core application shell & router
├── main.jsx                    # Entry point & root DOM mounting
├── index.css                   # Global design tokens, resets & typography
│
├── pages/                      # Page-level compositions
│   ├── LandingPage.jsx         # Main landing page composition
│   └── LoginPage.jsx           # Interactive authentication experience
│
├── components/
│   ├── sections/               # Modular landing page sections
│   │   ├── Hero.jsx            # Hero with floating interactive bots
│   │   ├── FavoriteTeammate.jsx# Bento feature grid
│   │   ├── EngineeringWork.jsx # Terminal & IDE workflow demos
│   │   ├── StatsSection.jsx    # TextMorph dynamic metric counters
│   │   ├── Integrations.jsx    # Ecosystem integrations
│   │   ├── RecentlyShipped.jsx # Product changelog
│   │   ├── EnterpriseSecurity.jsx # Enterprise trust guarantees
│   │   ├── LatestNews.jsx      # Articles and updates
│   │   ├── CtaSection.jsx      # Rising BigBot sphere CTA
│   │   └── Footer.jsx          # Site navigation footer
│   │
│   ├── navigation/             # Navigation system
│   │   ├── Navbar.jsx          # Desktop & responsive mobile navbar
│   │   ├── MegaMenuPanel.jsx   # Hover mega menu with animated preview pane
│   │   └── previews/           # Live preview components (Chat, Build, etc.)
│   │
│   ├── bots/                   # 3D Interactive Bot Entities
│   │   ├── GrokBot.jsx         # SVG bot with 3D gaze tracking
│   │   ├── BigBot.jsx          # Horizon dome bot
│   │   └── engine/             # Spherical projection & kinematic math
│   │
│   ├── common/                 # Shared system components
│   │   ├── ErrorBoundary.jsx   # Section error isolation & fallback UI
│   │   └── ThemeToggle.jsx     # View Transitions theme switcher
│   │
│   └── ui/                     # Primitives & micro-interactions
│       ├── Reveal.jsx          # Staggered blur-fade reveal wrapper
│       ├── PointerHighlight.jsx# Cursor tracking tag
│       └── cursor/             # Custom cursor followers
│
├── context/                    # React Context providers (ThemeContext)
├── hooks/                      # Custom hooks (useMediaQuery, useTheme, etc.)
└── data/                       # Static datasets (navigation, slides)
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: `18.x` or higher
- **Package Manager**: `npm`, `pnpm`, or `yarn`

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/devin-landing-page.git
   cd devin-landing-page
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

---

## 🛠️ Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Vite development server with Hot Module Replacement (HMR). |
| `npm run build` | Compiles and optimizes assets for production into the `dist/` folder. |
| `npm run preview` | Runs a local web server to preview the production build. |

---

## ⚡ Tech Stack

- **Core**: [React 19](https://react.dev/) + [Vite 6](https://vitejs.dev/)
- **Animation**: [Motion](https://motion.dev/)
- **Typography & Morphing**: [Torph](https://github.com/) (`torph/react`)
- **Styling**: Native CSS custom properties (design tokens) + responsive flex/grid layouts
- **Theme**: Native Web [View Transitions API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API)

---

## 📄 License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.

