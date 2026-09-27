# Academic Portfolio & Faculty Management Platform

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://react.js.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

A modern, high-performance web platform designed and engineered for **Engr. Md. Ashikur Rahman** (Master Trainer, Lecturer & Demonstrator of ICT at Nayabazar Degree College; CSE graduate from United International University).

Built on **Next.js (App Router)** and styled using pure **Tailwind CSS**, this platform delivers a seamless, zero-runtime-overhead user experience. It features institutional accreditation verifications, an interactive life memoir showcase, dynamic community appraisals with role-specific payloads, and a real-time academic circular board.

---

## 📑 Table of Contents

- [Core Features & Architecture](#-core-features--architecture)
  - [1. Hero & Faculty Identity](#1-hero--faculty-identity)
  - [2. Verified Accreditations & Milestones](#2-verified-accreditations--milestones)
  - [3. Life, Journeys & Personal Memoirs](#3-life-journeys--personal-memoirs)
  - [4. Campus Architectural Archive](#4-campus-architectural-archive)
  - [5. Testimonials & Community Appraisal Engine](#5-testimonials--community-appraisal-engine)
  - [6. Notice Board & Live Marquee](#6-notice-board--live-marquee)
  - [7. Ambient Glassmorphism Footer](#7-ambient-glassmorphism-footer)
- [Design Standards & Responsive Typography](#-design-standards--responsive-typography)
- [Tech Stack](#-tech-stack)
- [Directory Structure](#-directory-structure)
- [Environment Configuration](#-environment-configuration)
- [Getting Started](#-getting-started)
- [Verification Checklist](#-verification-checklist)
- [Credits & Attribution](#-credits--attribution)

---

## 🚀 Core Features & Architecture

### 1. Hero & Faculty Identity
* **Scoped Tailwind Motion:** Native CSS keyframe animations (`motion-drop-down`, `motion-rise-up`) replace external animation runtimes to guarantee rapid First Contentful Paint (FCP).
* **Responsive Identity Showcase:** Visual presentation combining instructor status, department affiliations, UIU degree verification, and streamlined call-to-actions.
* **Optimized Image Delivery:** Leverages `next/image` with explicit breakpoint sizing and layout stability.

### 2. Verified Accreditations & Milestones (`/achievements`)
* **Unified 3-Column Card Architecture:** Synchronizes pedagogical awards, research publications, degree milestones, and scholarships into a consistent scanning grid.
* **Institutional & Government Suite:** Houses verified technical credentials from the Department of ICT (DoICT Sheikh Russel Digital Lab Phase 2), a2i Programme (Teacher Training & Multimedia Development), Digital Security Agency, and the British Council.
* **MuktoPaath & Robi 10 Minute School Suite:** Segregated, high-density section showcasing verified e-learning certificates with authentic serial IDs and instructor verification signatures.
* **Competitive Academic Honours:** Features UIU B.Sc. in CSE (CGPA 3.41), DRMC HSC (GPA 5.00), SSC (GPA 5.00), and Government Talentpool Scholarships.

### 3. Life, Journeys & Personal Memoirs (`GalleryShowcase`)
* **Dual-Layer Image Stage:** Renders an ambient blurred backdrop behind a sharp, centered foreground photo to eliminate layout shifts regardless of image aspect ratios.
* **Interactive Story Progression:** Automated 5-second slide timer with an active visual progress bar, hold-to-pause touch listeners, and click-to-advance frame mechanics.
* **Synchronized Thumbnails:** Centered auto-scrolling thumbnail track with hidden scrollbars and desktop arrow controls.
* **Fullscreen Lightbox:** Deep inspection modal with full keyboard shortcuts (`Escape`, `ArrowLeft`, `ArrowRight`).

### 4. Campus Architectural Archive (`GalleryMosaic`)
* **Technical Drafting Aesthetic:** Architectural background featuring a micro-dot matrix, CAD-inspired coordinate labels, and blueprint circuit lines.
* **Curated Mosaic Matrix:** 6-card display with instant preview links, leading into the complete `/gallery` archive.
* **Interactive Modal Inspection:** Tap-to-inspect viewer equipped with photo steps and an auto-centering mini thumb-strip.

### 5. Testimonials & Community Appraisal Engine (`/reviews`, `/reviews/add`)
* **Role-Specific Conditional Payloads:**
  * **Student:** Collects `class`, `group`, and `batch`.
  * **Teacher:** Collects designation `title`, `teacherAt` institution, and `Subject`.
  * **Guardian:** Collects `relation` and verified `studentName`.
* **Live Dynamic Preview:** Real-time dual-card layout updating instantly as contributors type their appraisals.
* **Direct ImgBB API Integration:** Asynchronous client-side image uploader for reviewer avatars with verified fallback states.
* **Strict 3-Line Clamping:** Review cards truncate long submissions at 3 lines; clicking `...see more` or clicking anywhere on the card opens an inspection modal displaying complete academic details.
* **Immutability Warning:** Notice banner emphasizing that submitted reviews cannot be deleted.

### 6. Notice Board & Live Marquee (`NoticeMarquee`, `/notice`)
* **Non-Breaking Horizontal Marquee:** Single-line CSS ticker positioned directly below the navbar featuring seamless infinite loops and hover-pause behavior.
* **Central Notice Board (`/notice`):** Filter notices by category (`Academic`, `Exam`, `Training`, `Events`) or search keywords in real time, complete with collapsible accordion details and downloadable circular attachments.

### 7. Ambient Glassmorphism Footer
* **Circuit-Trace Aesthetics:** Vector circuit busses and solder nodes illuminated by ambient glowing beacons.
* **Rotating Developer Attribution:** Animated conic-gradient badge recognizing full-stack development and AI co-engineering.
* **Directory & Workspaces:** Directory links, active social channels, direct contact actions, and an instantaneous smooth scroll-to-top trigger.

---

## 📐 Design Standards & Responsive Typography

To ensure high legibility and prevent visual crowding on mobile devices:
* **Mobile Headings (Max 14px):** All titles and headings on small screens are capped strictly at `14px` (`text-[12px] sm:text-[14px]` or `text-[13px] sm:text-[14px]`).
* **Ultra-Tight Mobile Leading:** Mobile text utilizes compact line-height utilities (`leading-none`, `leading-tight`, `leading-[1.2]`) to maximize viewable screen space.
* **Desktop Scaling:** Scales naturally to standard structural sizes (`sm:text-lg md:text-xl lg:text-3xl`).
* **Zero-Runtime Motion:** All UI elements use native Tailwind transitions (`transition-all duration-300`) and scoped `@keyframes` styles, eliminating bulky external JavaScript animation libraries.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **Next.js 15 (App Router)** | Framework, Routing, Static & Dynamic Page Rendering |
| **React 19** | Component-Driven UI Architecture |
| **Tailwind CSS** | Styling, Glassmorphism, Micro-Grids, & Transitions |
| **Lucide React** | Primary System Iconography |
| **React Icons** | Brand and Social Platform Vectors |
| **React Toastify** | Event Notifications & Form State Alerts |
| **ImgBB REST API** | Cloud Image Hosting for Review Avatars |

---

## 📁 Directory Structure

```text
├── app/
│   ├── layout.jsx                # Global HTML wrapper, NoticeMarquee, & Footer
│   ├── page.jsx                  # Homepage integrating Hero, Showcase, Mosaic, & Reviews
│   ├── achievements/
│   │   └── page.jsx              # 3-column achievements & accreditations directory
│   ├── reviews/
│   │   ├── page.jsx              # Review directory, role filtering, & inspection modal
│   │   └── add/
│   │       └── page.jsx          # Role-based review form with live preview & ImgBB upload
│   └── notice/
│       └── page.jsx              # Searchable circular board & downloadable attachments
├── components/
│   ├── Hero.jsx                  # Lightweight CSS-animated faculty hero header
│   ├── Achievements.jsx          # Institutional, Robi, & Academic credentials matrix
│   ├── GalleryShowcase.jsx       # Personal memoirs & auto-timer story carousel
│   ├── GalleryMosaic.jsx         # Campus architectural gallery & inspection modal
│   ├── Reviews.jsx               # Filterable community feedback grid with detail modal
│   ├── AddReview.jsx             # Role-conditional review submission form
│   ├── NoticeMarquee.jsx         # Non-breaking ticker bar
│   └── Footer.jsx                # Ambient footer with circuit traces & attribution
├── public/
│   ├── profile.png               # High-res instructor portrait
│   ├── university.jpg            # Campus complex fallback image
│   ├── teachers.jpg              # Faculty assembly fallback image
│   ├── CollegeLogo.jpg           # Institutional seal & avatar placeholder
│   └── personal/                 # Personal memoir archives (img1.jpg - img12.jpg)
├── tailwind.config.js            # Tailwind configuration & design token rules
├── package.json
└── README.md


Getting Started
Prerequisites
Node.js: v18.17.0 or later

Package Manager: npm, yarn, or pnpm

Installation
Clone the repository:

Bash
git clone [https://github.com/CodeByMonir/ashikur-rahman-portfolio.git](https://github.com/CodeByMonir/ashikur-rahman-portfolio.git)
cd ashikur-rahman-portfolio
Install dependencies:

Bash
npm install
Run the local development server:

Bash
npm run dev
Access the application:
Open http://localhost:3000 in your browser.

Build for production:

Bash
npm run build
npm run start
✅ Verification Checklist
[x] Zero Framer-Motion Overhead: All components converted to pure Tailwind transitions and CSS keyframes.

[x] Mobile Heading Capping: Heading fonts enforce a max size of 14px on mobile viewports.

[x] Role Schema Verification: Strict conditional form switching for Student, Teacher, and Guardian inputs.

[x] Two-Way Modal Access: Reviews open detail modals upon clicking ...see more or anywhere on the card surface.

[x] Single-Line Marquee: Marquee text maintains whitespace-nowrap across mobile and desktop displays.

[x] Asset Resiliency: All image instances feature functional local fallbacks (/CollegeLogo.jpg, /profile.png).

👨‍💻 Credits & Attribution
Client & Academic Lead: Engr. Md. Ashikur Rahman (Lecturer & Demonstrator of ICT, Nayabazar Degree College)

Lead Full-Stack Developer: Monir Hossen

Design & Code Co-Engineering: Gemini AI