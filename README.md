<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Academic Portfolio &amp; Faculty Platform - Documentation</title>
    <style>
        :root {
            --bg: #090d16;
            --surface: rgba(15, 23, 42, 0.7);
            --border: rgba(56, 189, 248, 0.15);
            --border-hover: #38bdf8;
            --text-primary: #f8fafc;
            --text-secondary: #94a3b8;
            --accent: #38bdf8;
            --accent-green: #4ade80;
            --code-bg: rgba(0, 0, 0, 0.5);
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            background-color: var(--bg);
            color: var(--text-primary);
            line-height: 1.6;
            padding: 2rem 1rem;
        }

        .container {
            max-width: 900px;
            margin: 0 auto;
        }

        header {
            margin-bottom: 3rem;
            padding-bottom: 1.5rem;
            border-bottom: 1px solid var(--border);
        }

        h1 {
            font-size: 2rem;
            font-weight: 800;
            color: var(--text-primary);
            margin-bottom: 0.75rem;
            letter-spacing: -0.025em;
        }

        h2 {
            font-size: 1.35rem;
            font-weight: 700;
            color: var(--accent);
            margin: 2rem 0 1rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        h3 {
            font-size: 1.05rem;
            font-weight: 600;
            color: var(--text-primary);
            margin: 1.25rem 0 0.5rem;
        }

        p {
            color: var(--text-secondary);
            font-size: 0.95rem;
            margin-bottom: 1rem;
        }

        .subtitle {
            font-size: 1rem;
            color: var(--text-secondary);
        }

        .card {
            background: var(--surface);
            border: 1px solid var(--border);
            border-radius: 12px;
            padding: 1.25rem;
            margin-bottom: 1rem;
            backdrop-filter: blur(12px);
            transition: border-color 0.2s ease;
        }

        .card:hover {
            border-color: var(--border-hover);
        }

        ul {
            list-style: none;
            padding-left: 0;
            margin-bottom: 1rem;
        }

        ul li {
            position: relative;
            padding-left: 1.25rem;
            margin-bottom: 0.5rem;
            font-size: 0.9rem;
            color: var(--text-secondary);
        }

        ul li::before {
            content: "•";
            position: absolute;
            left: 0;
            color: var(--accent);
            font-weight: bold;
        }

        code, pre {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
            background: var(--code-bg);
            border: 1px solid var(--border);
            border-radius: 6px;
        }

        code {
            padding: 0.15rem 0.35rem;
            font-size: 0.85rem;
            color: var(--accent);
        }

        pre {
            padding: 1rem;
            overflow-x: auto;
            font-size: 0.85rem;
            color: var(--text-primary);
            margin: 1rem 0;
            line-height: 1.45;
        }

        .badge-list {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            margin-top: 0.5rem;
        }

        .badge {
            background: rgba(56, 189, 248, 0.1);
            color: var(--accent);
            border: 1px solid rgba(56, 189, 248, 0.2);
            padding: 0.25rem 0.65rem;
            border-radius: 9999px;
            font-size: 0.8rem;
            font-weight: 500;
        }

        a {
            color: var(--accent);
            text-decoration: none;
        }

        a:hover {
            text-decoration: underline;
        }

        footer {
            margin-top: 3rem;
            padding-top: 1.5rem;
            border-top: 1px solid var(--border);
            font-size: 0.85rem;
            color: var(--text-secondary);
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>Academic Portfolio &amp; Faculty Management Platform</h1>
            <p class="subtitle">Documentation and technical specification for Engr. Md. Ashikur Rahman's institutional platform.</p>
        </header>

        <section id="overview">
            <h2>System Overview</h2>
            <p>A full-stack, mobile-first academic platform engineered with <strong>Next.js (App Router)</strong> and <strong>Tailwind CSS</strong>. The system provides integrated modules for institutional credential verification, an interactive personal memoir showcase, role-specific community feedback, and collegiate circular management.</p>
        </section>

        <section id="modules">
            <h2>Key Modules &amp; Architecture</h2>

            <div class="card">
                <h3>1. Hero &amp; Profile (<code>Hero.jsx</code>)</h3>
                <ul>
                    <li>Dual-column layout featuring faculty designation, institutional affiliations, and quick action routes.</li>
                    <li>Pure Tailwind and CSS keyframe animations (<code>dropDown</code>, <code>riseUp</code>) replacing runtime animation libraries.</li>
                    <li>Responsive asset optimization powered by <code>next/image</code>.</li>
                </ul>
            </div>

            <div class="card">
                <h3>2. Verified Accreditations &amp; Milestones (<code>Achievements.jsx</code>)</h3>
                <ul>
                    <li><strong>3-Column Grid Matrix:</strong> Standardized display system aligning certificates, research publications, degrees, and honors.</li>
                    <li><strong>Institutional &amp; Government Credentials:</strong> Covers DoICT Sheikh Russel Digital Lab (Phase 2), a2i Programme pedagogy modules, Digital Security Agency, and British Council certifications.</li>
                    <li><strong>E-Learning Suite:</strong> Dedicated Robi 10 Minute School and MuktoPaath catalog with verifiable serial IDs and official signatory tags.</li>
                    <li><strong>Academic Excellence:</strong> Degree credentials including UIU B.Sc. in CSE, DRMC HSC, and competitive government merit scholarship awards.</li>
                </ul>
            </div>

            <div class="card">
                <h3>3. Personal Memoirs &amp; Life Journey (<code>GalleryShowcase.jsx</code>)</h3>
                <ul>
                    <li>Continuous interactive showcase exhibiting life passions, expeditions, research days, and campus moments.</li>
                    <li>Dual-layer visual architecture (ambient blur backdrop + sharp foreground image frame).</li>
                    <li>Integrated 5-second interval timer, interactive countdown bar, auto-centering thumbnail tracking, and full-screen lightbox.</li>
                </ul>
            </div>

            <div class="card">
                <h3>4. Campus Architectural Archive (<code>GalleryMosaic.jsx</code>)</h3>
                <ul>
                    <li>Technical campus drafting blueprint matrix with micro-dot grid textures and contextual annotations.</li>
                    <li>6-item responsive grid connecting directly to the main campus gallery route.</li>
                    <li>Detail inspection modal with full keyboard navigation (<code>Escape</code>, <code>ArrowLeft</code>, <code>ArrowRight</code>) and centered thumbnail jumping track.</li>
                </ul>
            </div>

            <div class="card">
                <h3>5. Community Testimonials Engine (<code>Reviews.jsx</code> &amp; <code>AddReview.jsx</code>)</h3>
                <ul>
                    <li><strong>Conditional Role Schemas:</strong>
                        <ul>
                            <li><strong>Student:</strong> <code>class</code>, <code>group</code>, <code>batch</code></li>
                            <li><strong>Teacher:</strong> <code>title</code>, <code>teacherAt</code>, <code>Subject</code></li>
                            <li><strong>Guardian:</strong> <code>relation</code>, <code>studentName</code></li>
                        </ul>
                    </li>
                    <li><strong>Live Preview:</strong> Real-time preview card mirroring the exact user input during review drafting.</li>
                    <li><strong>ImgBB API Integration:</strong> Direct client-side image uploading for reviewer avatars.</li>
                    <li><strong>Strict Line-Clamping:</strong> 3-line feedback truncation with <code>...see more</code> triggers opening the full detail modal.</li>
                    <li><strong>Immutability Warning:</strong> Prominent banner informing contributors that submitted reviews cannot be deleted.</li>
                </ul>
            </div>

            <div class="card">
                <h3>6. Notice Board &amp; Marquee Ticker (<code>NoticeMarquee.jsx</code> &amp; <code>/notice</code>)</h3>
                <ul>
                    <li><strong>Marquee Ticker:</strong> Global horizontal news ticker running below the navbar with pause-on-hover functionality.</li>
                    <li><strong>Notice Board:</strong> Searchable, category-filtered portal (<code>Academic</code>, <code>Exam</code>, <code>Training</code>, <code>Events</code>) with expandable accordion bodies and circular document downloads.</li>
                </ul>
            </div>

            <div class="card">
                <h3>7. Ambient Footer (<code>Footer.jsx</code>)</h3>
                <ul>
                    <li>Circuit-trace blueprint design with ambient glow beacons and social link pill badges.</li>
                    <li>Interactive developer attribution badge with a rotating conic-gradient border.</li>
                    <li>Direct contact directory, institutional geolocation links, and smooth scroll-to-top trigger.</li>
                </ul>
            </div>
        </section>

        <section id="tech-stack">
            <h2>Technology Stack</h2>
            <div class="badge-list">
                <span class="badge">Next.js (App Router)</span>
                <span class="badge">React</span>
                <span class="badge">Tailwind CSS</span>
                <span class="badge">Lucide React</span>
                <span class="badge">React Icons</span>
                <span class="badge">React Toastify</span>
                <span class="badge">ImgBB API</span>
            </div>
        </section>

        <section id="structure">
            <h2>Project Directory Structure</h2>
            <pre><code>├── app/
│   ├── layout.jsx                # Root layout with global NoticeMarquee &amp; Footer
│   ├── page.jsx                  # Homepage combining Hero, Showcase, &amp; Reviews
│   ├── achievements/
│   │   └── page.jsx              # Unified 3-column achievements &amp; accreditations
│   ├── reviews/
│   │   ├── page.jsx              # Reviews listing, category tabs &amp; detail modal
│   │   └── add/
│   │       └── page.jsx          # Review form with live preview &amp; ImgBB upload
│   └── notice/
│       └── page.jsx              # Searchable circular board &amp; attachments
├── components/
│   ├── Hero.jsx                  # Pure Tailwind motion hero header
│   ├── Achievements.jsx          # Institutional, Robi, &amp; Academic credentials
│   ├── GalleryShowcase.jsx       # Personal memoirs &amp; auto-timer carousel
│   ├── GalleryMosaic.jsx         # Campus architectural gallery &amp; modal
│   ├── Reviews.jsx               # Reviews grid with detail modal
│   ├── AddReview.jsx             # Role-based review form with live preview
│   ├── NoticeMarquee.jsx         # Non-breaking ticker bar
│   └── Footer.jsx                # Ambient footer with circuit traces &amp; attribution
├── public/
│   ├── profile.png               # Hero instructor portrait
│   ├── university.jpg            # Campus facility fallback image
│   ├── teachers.jpg              # Faculty assembly fallback image
│   ├── CollegeLogo.jpg           # Institutional seal &amp; avatar fallback
│   └── personal/                 # Personal memoirs archive (img1.jpg - img12.jpg)
├── tailwind.config.js            # Tailwind typography &amp; styling configurations
└── package.json</code></pre>
        </section>

        <section id="environment">
            <h2>Environment Variables</h2>
            <p>Configure the following variable in your local environment file (<code>.env.local</code>):</p>
            <pre><code>NEXT_PUBLIC_IMGBB_API_KEY=your_imgbb_api_key_here</code></pre>
        </section>

        <section id="typography">
            <h2>Mobile-First Typography Rules</h2>
            <ul>
                <li><strong>Headings on Mobile:</strong> Strictly limited to a maximum font size of <code>14px</code> (<code>text-[12px] sm:text-[14px]</code> or <code>text-[13px] sm:text-[14px]</code>).</li>
                <li><strong>Line Heights on Mobile:</strong> Compact line-height utilities (<code>leading-none</code>, <code>leading-tight</code>, <code>leading-[1.2]</code>) to conserve vertical space.</li>
                <li><strong>Desktop Scaling:</strong> Smoothly expands into standard scalable typography scales (<code>sm:text-lg md:text-xl lg:text-3xl</code>).</li>
            </ul>
        </section>

        <footer>
            <p><strong>Subject / Client:</strong> Engr. Md. Ashikur Rahman (Lecturer &amp; Demonstrator of ICT, Nayabazar Degree College)</p>
            <p><strong>Developed by:</strong> <a href="https://codebymonir.vercel.app" target="_blank" rel="noopener noreferrer">Monir Hossen</a> | <strong>Design &amp; Code Assistance:</strong> Gemini AI</p>
        </footer>
    </div>
</body>
</html>