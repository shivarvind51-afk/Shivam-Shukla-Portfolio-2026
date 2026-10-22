import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, ExternalLink, Globe2, Laptop, Mail, MapPin, MoveRight, RotateCw, Smartphone, Tablet } from "lucide-react";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shivam Shukla — Senior Shopify Developer" },
      {
        name: "description",
        content:
          "Portfolio of Shivam Shukla, a senior Shopify developer specializing in custom storefronts, apps, performance, and CRO.",
      },
      { property: "og:title", content: "Shivam Shukla — Senior Shopify Developer" },
      {
        property: "og:description",
        content: "Custom Shopify storefronts, applications, performance, and conversion work across 70+ live stores.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const roles = [
  "SHOPIFY ENGINEER.",
  "LIQUID ARCHITECT.",
  "CRO SPECIALIST.",
  "APP BUILDER.",
];

interface Project {
  name: string;
  type: string;
  scope: string;
  detail: string;
  url: string;
  embeddable?: boolean;
}

const projects: Project[] = [
  { name: "Milano Wigs", type: "Beauty & Fashion", scope: "Complete design & development", detail: "Custom product and collection templates for a complex variant catalog, built around performance and mobile UX.", url: "https://milanowigs.com" },
   { name: "The Bare Bar", type: "Wellness", scope: "Theme customization", detail: "Sleek-theme customization aligned to a considered wellness positioning.", url: "https://thebarebar.in" },
  { name: "Mookuthi", type: "Jewellery", scope: "International store build", detail: "US storefront with Markets localization, Razorpay Magic Checkout, Google Login, PDF downloads and consultation booking. Added interactive Add to cart % Buy Now buttons on the product page.", url: "https://mookuthi.com" },
   { name: "AZGA", type: "Jewellery", scope: "Mega menu, CRO & redesign", detail: "A custom catalog navigation system paired with conversion work and a complete visual storefront revamp.", url: "https://azga.in" },
  { name: "Meera's Plus Size Store", type: "Fashion", scope: "Sale experience", detail: "Dynamic filters, price-reveal logic, wishlist, login restrictions and Boost Commerce collection search.", url: "https://meerasplussizestore.com" },
  { name: "Taho Living", type: "Furniture", scope: "Complete store build", detail: "From-scratch theme development with custom sections, responsive collection structure, SEO and performance work.", url: "https://taholiving.com" },
   { name: "Boka Wellness", type: "Wellness", scope: "Complete design & development", detail: "From-zero UX, theme architecture, subscription collections, product pages and a conversion-ready checkout journey.", url: "https://boka.com", embeddable: false },

  { name: "Gillori", type: "Fashion", scope: "Complete store build", detail: "A full end-to-end Shopify build delivered on the Sleek theme architecture.", url: "https://gillori.com" },
  { name: "Keemti Jewels", type: "Jewellery", scope: "Website development", detail: "Luxury storefront with a custom pre-cart lead popup that creates a customer record before checkout.", url: "https://keemtijewels.com" },
  { name: "Ruhe India", type: "Home & Lifestyle", scope: "Management & CRO", detail: "Continuous testing, storefront updates, conversion improvements and technical SEO supporting D2C growth.", url: "https://ruheindia.com" },
  { name: "Arcano Cap", type: "Fashion & Headwear", scope: "Custom development", detail: "Theme customization and storefront enhancements supporting the product catalog and checkout experience.", url: "https://arcanocap.com" },
  { name: "EGOSS", type: "Footwear", scope: "Sale-event development", detail: "A Prestige-theme sale experience engineered for high-traffic promotional periods.", url: "https://egoss.in" },
   { name: "Saunakits", type: "Outdoor Furnitures", scope: "Custom development", detail: "Custom Shopify development delivered on the custom theme.", url: "https://saunakits.com/?" },
  { name: "Drizz", type: "Web Design", scope: "Webflow build", detail: "An end-to-end Webflow design and development project extending beyond the Shopify ecosystem.", url: "https://drizz.dev" },
  { name: "Nilkamal BubbleGuard", type: "Industrial Products", scope: "Enterprise store build", detail: "Enterprise-level custom Shopify development for a complex industrial products catalog.", url: "https://nilkamalbubbleguard.com" },
  { name: "Earth Rhythm", type: "Skincare", scope: "Ongoing maintenance", detail: "Prestige-theme performance monitoring, updates and ongoing storefront health checks.", url: "https://earthrhythm.com" },
  { name: "LeShva", type: "Fashion", scope: "Custom development", detail: "Custom Shopify development delivered on the Envy theme.", url: "https://leshva.com" },
  { name: "Cuddle Fields", type: "Kids' Fashion", scope: "Custom development", detail: "Custom Shopify development delivered on the Capital theme.", url: "https://cuddlefields.com" }
];

const experience = [
  { years: "2025 — NOW", role: "Senior Shopify Developer, Associate Manager", company: "Baheri Consultancy Pvt. Ltd.", text: "Building and scaling Shopify 2.0 storefronts and custom apps across 70+ live brands. Leading performance, integrations, international rollouts and client technical direction." },
  { years: "2023 — 2025", role: "Website Developer", company: "Ruhe India", text: "Owned a D2C storefront, reusable Liquid systems, conversion optimization, technical SEO and the journey from requirement to shipped feature." },
  { years: "2022 — 2023", role: "Web Designer", company: "MakkPress Technologies", text: "Built responsive frontends and Shopify 2.0 themes across 15+ client projects, partnering closely with designers." },
];

const deviceViews = [
  { id: "phone", label: "Phone", icon: Smartphone },
  { id: "tablet", label: "Tablet", icon: Tablet },
  { id: "laptop", label: "Laptop", icon: Laptop },
] as const;

function useTypewriter() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = roles[roleIndex] ?? "SHOPIFY ENGINEER.";
    const complete = text === word;
    const empty = text === "";
    const delay = complete ? 1250 : deleting ? 35 : 72;
    const timer = window.setTimeout(() => {
      if (complete) return setDeleting(true);
      if (empty && deleting) {
        setDeleting(false);
        setRoleIndex((value) => (value + 1) % roles.length);
        return;
      }
      setText(word.slice(0, text.length + (deleting ? -1 : 1)));
    }, delay);
    return () => window.clearTimeout(timer);
  }, [deleting, roleIndex, text]);
  return text;
}

function Portfolio() {
  const typedRole = useTypewriter();
  const pageRef = useRef<HTMLDivElement>(null);
  const [activeDevice, setActiveDevice] = useState<(typeof deviceViews)[number]["id"]>("laptop");
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [previewKey, setPreviewKey] = useState(0);
  const [previewLoading, setPreviewLoading] = useState(true);
  const activeProject = projects[activeProjectIndex] ?? {
    name: "Boka Wellness",
    type: "Wellness",
    scope: "Complete design & development",
    detail: "From-zero UX, theme architecture, subscription collections, product pages and a conversion-ready checkout journey.",
    url: "https://boka.com",
  };

  useEffect(() => {
    const root = pageRef.current;
    if (!root) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const elements = root.querySelectorAll<HTMLElement>("[data-reveal]");
    if (reduceMotion) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.14 },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const root = pageRef.current;
    if (!root) return;
    const chapters = root.querySelectorAll<HTMLElement>("[data-project-index]");
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const nextIndex = Number((visible.target as HTMLElement).dataset["projectIndex"]);
        if (!Number.isNaN(nextIndex)) setActiveProjectIndex(nextIndex);
      },
      { rootMargin: "-28% 0px -42% 0px", threshold: [0, 0.25, 0.55] },
    );
    chapters.forEach((chapter) => observer.observe(chapter));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setPreviewLoading(true);
  }, [activeProjectIndex, previewKey]);

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    pageRef.current?.style.setProperty("--mouse-x", `${event.clientX}px`);
    pageRef.current?.style.setProperty("--mouse-y", `${event.clientY}px`);
  };

  return (
    <div ref={pageRef} onPointerMove={handlePointerMove} className="portfolio-shell" style={{ "--mouse-x": "50vw", "--mouse-y": "20vh" } as CSSProperties}>
      <div className="cursor-light" aria-hidden="true" />
      <div className="page-progress" aria-hidden="true" />

      <header className="topbar">
        <a className="monogram" href="#top" aria-label="Back to top">SS<span>.</span></a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a>
        </nav>
        <a className="status" href="mailto:shiv.arvind.51@gmail.com"><i /> Available for work</a>
      </header>

      <main>
        <section id="top" className="hero-section">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-kicker"><span>Senior Shopify Developer</span><span>Delhi, India</span></div>
          <div className="hero-copy">
            <h1><span>SHIVAM</span><span className="outline-word">SHUKLA</span></h1>
            <div className="typing-line"><span>{typedRole}</span><b aria-hidden="true" /></div>
          </div>
          <div className="hero-bottom">
            <p>I engineer high-converting commerce experiences—from custom Liquid architecture to scalable apps and international storefronts.</p>
            <a href="#work" className="scroll-cue"><ArrowDown size={18} /> Explore selected work</a>
          </div>
          <div className="hero-orbit" aria-hidden="true"><span>70+</span><small>LIVE STORES</small></div>
        </section>

        <div className="ticker ticker-accent" aria-label="Core capabilities">
          <div className="ticker-track">SHOPIFY 2.0 <b>✦</b> LIQUID <b>✦</b> REMIX <b>✦</b> PRISMA <b>✦</b> PERFORMANCE <b>✦</b> CRO <b>✦</b> SHOPIFY MARKETS <b>✦</b> SHOPIFY 2.0 <b>✦</b> LIQUID <b>✦</b> REMIX <b>✦</b> PRISMA <b>✦</b> PERFORMANCE <b>✦</b> CRO <b>✦</b> SHOPIFY MARKETS <b>✦</b></div>
        </div>

        <section id="about" className="manifesto section-wrap">
          <div data-reveal className="section-label"><span>01</span> The approach</div>
          <p data-reveal className="manifesto-text">I turn complex commerce into <em>fast, clear, high-converting</em> experiences. Design precision meets production discipline.</p>
          <div className="metric-row">
            <div data-reveal><strong>70<span>+</span></strong><p>live storefronts</p></div>
            <div data-reveal><strong>40<span>+</span></strong><p>early client builds</p></div>
            <div data-reveal><strong>50<span>+</span></strong><p>featured projects</p></div>
            <div data-reveal><strong>05</strong><p>years in Ecommerce</p></div>
          </div>
        </section>

        <section id="work" className="work-section section-wrap">
          <div data-reveal className="section-heading">
            <div className="section-label"><span>02</span> Selected work</div>
            <h2>BUILT TO<br /><span>MOVE BUSINESS.</span></h2>
            <p>Every project is a different problem. The standard stays the same: considered design, clean execution, measurable commercial intent.</p>
          </div>

          <div className="project-intro" data-reveal>
            <span>21 projects / one continuous journey</span>
            <p>Keep scrolling. Each chapter brings a new live storefront into focus—without taking you away from the portfolio.</p>
          </div>

          <div className="project-story">
            <div className="project-chapters">
              {projects.map((project, index) => (
                <article
                  className={`project-chapter ${activeProjectIndex === index ? "is-active" : ""}`}
                  data-project-index={index}
                  key={project.name}
                  onClick={() => setActiveProjectIndex(index)}
                >
                  <div className="chapter-count"><span>{String(index + 1).padStart(2, "0")}</span><i /><small>{String(projects.length).padStart(2, "0")}</small></div>
                  <div className="project-meta"><span>{project.type}</span><span>{project.scope}</span></div>
                  <h3>{project.name}</h3>
                  <p>{project.detail}</p>
                  <div className="chapter-impact"><strong>THE BUILD</strong><span>Purposeful interaction, clear hierarchy and commerce engineering working as one connected system.</span></div>
                  <a href={project.url} target="_blank" rel="noreferrer">Visit live website <ArrowUpRight size={16} /></a>
                </article>
              ))}
            </div>

            <aside className="live-workbench" aria-live="polite">
              <div className="workbench-topline">
                <div><Globe2 size={14} /><span>Live storefront</span><b>{activeProject.name}</b></div>
                <span>{String(activeProjectIndex + 1).padStart(2, "0")} / {projects.length}</span>
              </div>
              <div className="workbench-controls">
                <div className="device-tabs" role="tablist" aria-label="Select preview device">
                  {deviceViews.map((device) => {
                    const Icon = device.icon;
                    return (
                      <Button
                        key={device.id}
                        type="button"
                        variant="ghost"
                        role="tab"
                        aria-label={`Preview on ${device.label}`}
                        aria-selected={activeDevice === device.id}
                        className={activeDevice === device.id ? "active" : ""}
                        onClick={() => setActiveDevice(device.id)}
                      >
                        <Icon size={17} /><span>{device.label}</span>
                      </Button>
                    );
                  })}
                </div>
                {activeProject.embeddable !== false && (
                  <Button
                    variant="ghost"
                    size="icon"
                    aria-label="Reload live website"
                    title="Reload website"
                    onClick={() => setPreviewKey((value) => value + 1)}
                  >
                    <RotateCw size={16} />
                  </Button>
                )}
                <Button variant="ghost" size="icon" asChild aria-label="Open website in a new tab" title="Open in new tab"><a href={activeProject.url} target="_blank" rel="noreferrer"><ExternalLink size={16} /></a></Button>
              </div>
              <div className={`live-device live-${activeDevice}`}>
                <div className="live-browser">
                  <div className="browser-chrome"><i /><i /><i /><span>{activeProject.url.replace("https://", "")}</span></div>
                  {activeProject.embeddable === false ? (
                    <div className="flex h-[calc(100%-29px)] flex-col items-center justify-center gap-4 px-8 text-center">
                      <Globe2 className="text-[var(--primary)]" size={28} />
                      <p className="max-w-xs text-sm text-[var(--muted-foreground)]">
                        This storefront does not allow embedded previews. Open it in a new tab to explore the live site.
                      </p>
                      <a
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase text-[var(--foreground)]"
                        href={activeProject.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Visit {activeProject.name} <ExternalLink size={14} />
                      </a>
                    </div>
                  ) : (
                    <>
                      {previewLoading && <div className="preview-loader"><b /><span>Loading {activeProject.name}</span></div>}
                      <iframe
                        key={`${activeProject.name}-${previewKey}`}
                        src={activeProject.url}
                        title={`${activeProject.name} live website preview`}
                        loading="lazy"
                        onLoad={() => setPreviewLoading(false)}
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </>
                  )}
                </div>
              </div>
              <p className="embed-note">
                {activeProject.embeddable === false
                  ? "Embedded preview is unavailable for this storefront; open the site in a new tab."
                  : "Some stores protect against embedded viewing. If a preview stays blank, use the open-site arrow."}
              </p>
            </aside>
          </div>
        </section>

        <div className="ticker ticker-outline" aria-hidden="true">
          <div className="ticker-track reverse">BUILD FAST — THINK DEEP — CONVERT BETTER — BUILD FAST — THINK DEEP — CONVERT BETTER — BUILD FAST — THINK DEEP — CONVERT BETTER —</div>
        </div>

        <section className="experience section-wrap">
          <div data-reveal className="section-heading compact">
            <div className="section-label"><span>03</span> Experience</div>
            <h2>THE<br /><span>TRAJECTORY.</span></h2>
          </div>
          <div className="timeline">
            {experience.map((item) => (
              <article data-reveal key={item.company}>
                <span className="timeline-year">{item.years}</span>
                <div><p>{item.role}</p><h3>{item.company}</h3></div>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="skills-section">
          <div className="section-wrap">
            <div data-reveal className="section-label"><span>04</span> Technical arsenal</div>
            <div className="skill-columns">
              <div data-reveal><small>Commerce</small><p>Shopify 2.0</p><p>Liquid</p><p>Shopify Plus</p><p>Markets & Flow</p><p>Checkout Extensibility</p></div>
              <div data-reveal><small>Applications</small><p>Remix</p><p>Prisma</p><p>PostgreSQL</p><p>GraphQL & REST</p><p>Theme App Extensions</p></div>
              <div data-reveal><small>Growth systems</small><p>Core Web Vitals</p><p>Technical SEO</p><p>GA4 & GTM</p><p>CRO</p><p>Schema Markup</p></div>
              <div data-reveal><small>Integrations</small><p>Razorpay</p><p>Stripe & PayPal</p><p>Apple Pay</p><p>Shiprocket</p><p>Meta Cloud API</p></div>
            </div>
          </div>
        </section>

        <section className="credentials section-wrap">
          <div data-reveal className="credential-block"><span>EDUCATION / 2022</span><h3>Bachelor of Technology</h3><p>Computer Science Engineering<br />Abdul Kalam Technical University</p></div>
          <div data-reveal className="credential-block"><span>CERTIFICATION</span><h3>Website Designer</h3><p>Internship Certification</p></div>
        </section>

        <section id="contact" className="contact-section">
          <div className="contact-noise" aria-hidden="true" />
          <div data-reveal className="section-label"><span>05</span> Start a conversation</div>
          <p data-reveal>Have a store to launch, a conversion problem to solve, or an experience worth rebuilding?</p>
          <h2 data-reveal>LET'S MAKE<br /><span>IT MATTER.</span></h2>
          <a data-reveal href="mailto:shiv.arvind.51@gmail.com" className="contact-link"><Mail size={24} /> shiv.arvind.51@gmail.com <MoveRight size={28} /></a>
          <div className="contact-footer">
            <a href="https://linkedin.com/in/shivam-shukla-a657b5223" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={14} /></a>
            <span><MapPin size={14} /> Delhi, India</span>
            <a href="tel:+916387741787">+91 63877 41787</a>
          </div>
        </section>
      </main>
    </div>
  );
}