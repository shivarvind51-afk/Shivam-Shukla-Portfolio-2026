import { n as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as MoveRight, c as Laptop, d as Earth, f as ArrowUpRight, i as RotateCw, l as Eye, n as Tablet, o as MapPin, p as ArrowDown, r as Smartphone, s as Mail, t as X, u as ExternalLink } from "../_libs/lucide-react.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-KUyvzFYd.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var roles = [
	"SHOPIFY ENGINEER.",
	"LIQUID ARCHITECT.",
	"CRO SPECIALIST.",
	"APP BUILDER."
];
var projects = [
	{
		name: "Milano Wigs",
		type: "Beauty & Fashion",
		scope: "Complete design & development",
		detail: "Custom product and collection templates for a complex variant catalog, built around performance and mobile UX.",
		url: "https://milanowigs.com"
	},
	{
		name: "The Bare Bar",
		type: "Wellness",
		scope: "Theme customization",
		detail: "Sleek-theme customization aligned to a considered wellness positioning.",
		url: "https://thebarebar.in"
	},
	{
		name: "Mookuthi",
		type: "Jewellery",
		scope: "International store build",
		detail: "US storefront with Markets localization, Razorpay Magic Checkout, Google Login, PDF downloads and consultation booking. Added interactive Add to cart % Buy Now buttons on the product page.",
		url: "https://mookuthi.com"
	},
	{
		name: "AZGA",
		type: "Jewellery",
		scope: "Mega menu, CRO & redesign",
		detail: "A custom catalog navigation system paired with conversion work and a complete visual storefront revamp.",
		url: "https://azga.in"
	},
	{
		name: "Meera's Plus Size Store",
		type: "Fashion",
		scope: "Sale experience",
		detail: "Dynamic filters, price-reveal logic, wishlist, login restrictions and Boost Commerce collection search.",
		url: "https://meerasplussizestore.com"
	},
	{
		name: "Taho Living",
		type: "Furniture",
		scope: "Complete store build",
		detail: "From-scratch theme development with custom sections, responsive collection structure, SEO and performance work.",
		url: "https://taholiving.com"
	},
	{
		name: "Boka Wellness",
		type: "Wellness",
		scope: "Complete design & development",
		detail: "From-zero UX, theme architecture, subscription collections, product pages and a conversion-ready checkout journey.",
		url: "https://boka.com",
		embeddable: false
	},
	{
		name: "Gillori",
		type: "Fashion",
		scope: "Complete store build",
		detail: "A full end-to-end Shopify build delivered on the Sleek theme architecture.",
		url: "https://gillori.com"
	},
	{
		name: "Keemti Jewels",
		type: "Jewellery",
		scope: "Website development",
		detail: "Luxury storefront with a custom pre-cart lead popup that creates a customer record before checkout.",
		url: "https://keemtijewels.com"
	},
	{
		name: "Ruhe India",
		type: "Home & Lifestyle",
		scope: "Management & CRO",
		detail: "Continuous testing, storefront updates, conversion improvements and technical SEO supporting D2C growth.",
		url: "https://ruheindia.com"
	},
	{
		name: "Arcano Cap",
		type: "Fashion & Headwear",
		scope: "Custom development",
		detail: "Theme customization and storefront enhancements supporting the product catalog and checkout experience.",
		url: "https://arcanocap.com"
	},
	{
		name: "EGOSS",
		type: "Footwear",
		scope: "Sale-event development",
		detail: "A Prestige-theme sale experience engineered for high-traffic promotional periods.",
		url: "https://egoss.in"
	},
	{
		name: "Saunakits",
		type: "Outdoor Furnitures",
		scope: "Custom development",
		detail: "Custom Shopify development delivered on the custom theme.",
		url: "https://saunakits.com/?"
	},
	{
		name: "Drizz",
		type: "Web Design",
		scope: "Webflow build",
		detail: "An end-to-end Webflow design and development project extending beyond the Shopify ecosystem.",
		url: "https://drizz.dev"
	},
	{
		name: "Nilkamal BubbleGuard",
		type: "Industrial Products",
		scope: "Enterprise store build",
		detail: "Enterprise-level custom Shopify development for a complex industrial products catalog.",
		url: "https://nilkamalbubbleguard.com"
	},
	{
		name: "Earth Rhythm",
		type: "Skincare",
		scope: "Ongoing maintenance",
		detail: "Prestige-theme performance monitoring, updates and ongoing storefront health checks.",
		url: "https://earthrhythm.com"
	},
	{
		name: "LeShva",
		type: "Fashion",
		scope: "Custom development",
		detail: "Custom Shopify development delivered on the Envy theme.",
		url: "https://leshva.com"
	},
	{
		name: "Cuddle Fields",
		type: "Kids' Fashion",
		scope: "Custom development",
		detail: "Custom Shopify development delivered on the Capital theme.",
		url: "https://cuddlefields.com"
	}
];
var experience = [
	{
		years: "2025 — NOW",
		role: "Senior Shopify Developer, Associate Manager",
		company: "Baheri Consultancy Pvt. Ltd.",
		text: "Building and scaling Shopify 2.0 storefronts and custom apps across 70+ live brands. Leading performance, integrations, international rollouts and client technical direction."
	},
	{
		years: "2023 — 2025",
		role: "Website Developer",
		company: "Ruhe India",
		text: "Owned a D2C storefront, reusable Liquid systems, conversion optimization, technical SEO and the journey from requirement to shipped feature."
	},
	{
		years: "2022 — 2023",
		role: "Web Designer",
		company: "MakkPress Technologies",
		text: "Built responsive frontends and Shopify 2.0 themes across 15+ client projects, partnering closely with designers."
	}
];
var deviceViews = [
	{
		id: "phone",
		label: "Phone",
		icon: Smartphone
	},
	{
		id: "tablet",
		label: "Tablet",
		icon: Tablet
	},
	{
		id: "laptop",
		label: "Laptop",
		icon: Laptop
	}
];
function useTypewriter() {
	const [text, setText] = (0, import_react.useState)("");
	const [roleIndex, setRoleIndex] = (0, import_react.useState)(0);
	const [deleting, setDeleting] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
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
	}, [
		deleting,
		roleIndex,
		text
	]);
	return text;
}
function Portfolio() {
	const typedRole = useTypewriter();
	const pageRef = (0, import_react.useRef)(null);
	const [activeDevice, setActiveDevice] = (0, import_react.useState)("laptop");
	const [activeProjectIndex, setActiveProjectIndex] = (0, import_react.useState)(0);
	const [previewKey, setPreviewKey] = (0, import_react.useState)(0);
	const [previewLoading, setPreviewLoading] = (0, import_react.useState)(true);
	const [isPreviewOpen, setIsPreviewOpen] = (0, import_react.useState)(false);
	const activeProject = projects[activeProjectIndex] ?? {
		name: "Boka Wellness",
		type: "Wellness",
		scope: "Complete design & development",
		detail: "From-zero UX, theme architecture, subscription collections, product pages and a conversion-ready checkout journey.",
		url: "https://boka.com"
	};
	const showProjectPreview = (index) => {
		setActiveProjectIndex(index);
		setIsPreviewOpen(true);
		if (window.matchMedia("(max-width: 1260px)").matches) window.requestAnimationFrame(() => {
			document.getElementById("live-preview")?.scrollIntoView({
				behavior: "smooth",
				block: "center"
			});
		});
	};
	const closeProjectPreview = () => {
		setIsPreviewOpen(false);
		if (window.matchMedia("(max-width: 1260px)").matches) window.requestAnimationFrame(() => {
			document.querySelector(`[data-project-index="${activeProjectIndex}"]`)?.scrollIntoView({
				behavior: "smooth",
				block: "center"
			});
		});
	};
	(0, import_react.useEffect)(() => {
		const root = pageRef.current;
		if (!root) return;
		const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		const elements = root.querySelectorAll("[data-reveal]");
		if (reduceMotion) {
			elements.forEach((element) => element.classList.add("is-visible"));
			return;
		}
		const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")), { threshold: .14 });
		elements.forEach((element) => observer.observe(element));
		return () => observer.disconnect();
	}, []);
	(0, import_react.useEffect)(() => {
		const root = pageRef.current;
		if (!root) return;
		const chapters = root.querySelectorAll("[data-project-index]");
		const observer = new IntersectionObserver((entries) => {
			if (isPreviewOpen) return;
			const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
			if (!visible) return;
			const nextIndex = Number(visible.target.dataset["projectIndex"]);
			if (!Number.isNaN(nextIndex)) setActiveProjectIndex(nextIndex);
		}, {
			rootMargin: "-28% 0px -42% 0px",
			threshold: [
				0,
				.25,
				.55
			]
		});
		chapters.forEach((chapter) => observer.observe(chapter));
		return () => observer.disconnect();
	}, [isPreviewOpen]);
	(0, import_react.useEffect)(() => {
		setPreviewLoading(true);
	}, [activeProjectIndex, previewKey]);
	const handlePointerMove = (event) => {
		pageRef.current?.style.setProperty("--mouse-x", `${event.clientX}px`);
		pageRef.current?.style.setProperty("--mouse-y", `${event.clientY}px`);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: pageRef,
		onPointerMove: handlePointerMove,
		className: "portfolio-shell",
		style: {
			"--mouse-x": "50vw",
			"--mouse-y": "20vh"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "cursor-light",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "page-progress",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "topbar",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						className: "monogram",
						href: "#top",
						"aria-label": "Back to top",
						children: ["SS", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "." })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						"aria-label": "Main navigation",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#work",
								children: "Work"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#about",
								children: "About"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#contact",
								children: "Contact"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						className: "status",
						href: "mailto:shiv.arvind.51@gmail.com",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}), " Available for work"]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "top",
					className: "hero-section",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "hero-grid",
							"aria-hidden": "true"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hero-kicker",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Senior Shopify Developer" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Delhi, India" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hero-copy",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "SHIVAM" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "outline-word",
								children: "SHUKLA"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "typing-line",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: typedRole }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { "aria-hidden": "true" })]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hero-bottom",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "I engineer high-converting commerce experiences—from custom Liquid architecture to scalable apps and international storefronts." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#work",
								className: "scroll-cue",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, { size: 18 }), " Explore selected work"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hero-orbit",
							"aria-hidden": "true",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "70+" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "LIVE STORES" })]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "ticker ticker-accent",
					"aria-label": "Core capabilities",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "ticker-track",
						children: [
							"SHOPIFY 2.0 ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "✦" }),
							" LIQUID ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "✦" }),
							" REMIX ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "✦" }),
							" PRISMA ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "✦" }),
							" PERFORMANCE ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "✦" }),
							" CRO ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "✦" }),
							" SHOPIFY MARKETS ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "✦" }),
							" SHOPIFY 2.0 ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "✦" }),
							" LIQUID ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "✦" }),
							" REMIX ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "✦" }),
							" PRISMA ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "✦" }),
							" PERFORMANCE ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "✦" }),
							" CRO ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "✦" }),
							" SHOPIFY MARKETS ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "✦" })
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "about",
					className: "manifesto section-wrap",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-reveal": true,
							className: "section-label",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "01" }), " The approach"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							"data-reveal": true,
							className: "manifesto-text",
							children: [
								"I turn complex commerce into ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "fast, clear, high-converting" }),
								" experiences. Design precision meets production discipline."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "metric-row",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									"data-reveal": true,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: ["70", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "+" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "live storefronts" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									"data-reveal": true,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: ["40", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "+" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "early client builds" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									"data-reveal": true,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: ["50", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "+" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "featured projects" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									"data-reveal": true,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "05" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "years in Ecommerce" })]
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "work",
					className: "work-section section-wrap",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-reveal": true,
							className: "section-heading",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "section-label",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "02" }), " Selected work"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
									"BUILT TO",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "MOVE BUSINESS." })
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Every project is a different problem. The standard stays the same: considered design, clean execution, measurable commercial intent." })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "project-intro",
							"data-reveal": true,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "21 projects / one continuous journey" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Keep scrolling. Each chapter brings a new live storefront into focus—without taking you away from the portfolio." })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `project-story ${isPreviewOpen ? "preview-is-open" : ""}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "project-chapters",
								children: projects.map((project, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: `project-chapter ${activeProjectIndex === index ? "is-active" : ""}`,
									"data-project-index": index,
									onClick: () => setActiveProjectIndex(index),
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "chapter-count",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: String(index + 1).padStart(2, "0") }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: String(projects.length).padStart(2, "0") })
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "project-meta",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: project.type }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: project.scope })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: project.name }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: project.detail }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "chapter-impact",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "THE BUILD" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Purposeful interaction, clear hierarchy and commerce engineering working as one connected system." })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "project-actions",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: project.url,
												target: "_blank",
												rel: "noreferrer",
												children: ["Visit live website ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 16 })]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
												type: "button",
												variant: "ghost",
												className: "project-preview-trigger",
												"aria-controls": "live-preview",
												onClick: (event) => {
													event.stopPropagation();
													showProjectPreview(index);
												},
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { size: 16 }), " Preview"]
											})]
										})
									]
								}, project.name))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
								id: "live-preview",
								className: "live-workbench",
								"aria-live": "polite",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "workbench-topline",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Earth, { size: 14 }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Live storefront" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: activeProject.name })
										] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "workbench-actions",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
												String(activeProjectIndex + 1).padStart(2, "0"),
												" / ",
												projects.length
											] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												className: "preview-close",
												type: "button",
												variant: "ghost",
												size: "icon",
												"aria-label": "Close live preview",
												title: "Close live preview",
												onClick: closeProjectPreview,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 16 })
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "workbench-controls",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "device-tabs",
												role: "tablist",
												"aria-label": "Select preview device",
												children: deviceViews.map((device) => {
													const Icon = device.icon;
													return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
														type: "button",
														variant: "ghost",
														role: "tab",
														"aria-label": `Preview on ${device.label}`,
														"aria-selected": activeDevice === device.id,
														className: activeDevice === device.id ? "active" : "",
														onClick: () => setActiveDevice(device.id),
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { size: 17 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: device.label })]
													}, device.id);
												})
											}),
											activeProject.embeddable !== false && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												variant: "ghost",
												size: "icon",
												"aria-label": "Reload live website",
												title: "Reload website",
												onClick: () => setPreviewKey((value) => value + 1),
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCw, { size: 16 })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												variant: "ghost",
												size: "icon",
												asChild: true,
												"aria-label": "Open website in a new tab",
												title: "Open in new tab",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
													href: activeProject.url,
													target: "_blank",
													rel: "noreferrer",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { size: 16 })
												})
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: `live-device live-${activeDevice}`,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "live-browser",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "browser-chrome",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: activeProject.url.replace("https://", "") })
												]
											}), activeProject.embeddable === false ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex h-[calc(100%-29px)] flex-col items-center justify-center gap-4 px-8 text-center",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Earth, {
														className: "text-[var(--primary)]",
														size: 28
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "max-w-xs text-sm text-[var(--muted-foreground)]",
														children: "This storefront does not allow embedded previews. Open it in a new tab to explore the live site."
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
														className: "inline-flex items-center gap-2 text-xs font-bold uppercase text-[var(--foreground)]",
														href: activeProject.url,
														target: "_blank",
														rel: "noreferrer",
														children: [
															"Visit ",
															activeProject.name,
															" ",
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { size: 14 })
														]
													})
												]
											}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [previewLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "preview-loader",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Loading ", activeProject.name] })]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
												src: activeProject.url,
												title: `${activeProject.name} live website preview`,
												loading: "lazy",
												onLoad: () => setPreviewLoading(false),
												referrerPolicy: "no-referrer-when-downgrade"
											}, `${activeProject.name}-${previewKey}`)] })]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "embed-note",
										children: activeProject.embeddable === false ? "Embedded preview is unavailable for this storefront; open the site in a new tab." : "Some stores protect against embedded viewing. If a preview stays blank, use the open-site arrow."
									})
								]
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "ticker ticker-outline",
					"aria-hidden": "true",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "ticker-track reverse",
						children: "BUILD FAST — THINK DEEP — CONVERT BETTER — BUILD FAST — THINK DEEP — CONVERT BETTER — BUILD FAST — THINK DEEP — CONVERT BETTER —"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "experience section-wrap",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-reveal": true,
						className: "section-heading compact",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "section-label",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "03" }), " Experience"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
							"THE",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "TRAJECTORY." })
						] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "timeline",
						children: experience.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							"data-reveal": true,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "timeline-year",
									children: item.years
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: item.role }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: item.company })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: item.text })
							]
						}, item.company))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "skills-section",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "section-wrap",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-reveal": true,
							className: "section-label",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "04" }), " Technical arsenal"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "skill-columns",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									"data-reveal": true,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Commerce" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Shopify 2.0" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Liquid" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Shopify Plus" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Markets & Flow" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Checkout Extensibility" })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									"data-reveal": true,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Applications" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Remix" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Prisma" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "PostgreSQL" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "GraphQL & REST" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Theme App Extensions" })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									"data-reveal": true,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Growth systems" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Core Web Vitals" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Technical SEO" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "GA4 & GTM" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "CRO" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Schema Markup" })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									"data-reveal": true,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Integrations" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Razorpay" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Stripe & PayPal" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Apple Pay" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Shiprocket" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Meta Cloud API" })
									]
								})
							]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "credentials section-wrap",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-reveal": true,
						className: "credential-block",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "EDUCATION / 2022" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Bachelor of Technology" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								"Computer Science Engineering",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Abdul Kalam Technical University"
							] })
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-reveal": true,
						className: "credential-block",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "CERTIFICATION" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Website Designer" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Internship Certification" })
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "contact",
					className: "contact-section",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "contact-noise",
							"aria-hidden": "true"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-reveal": true,
							className: "section-label",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "05" }), " Start a conversation"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							"data-reveal": true,
							children: "Have a store to launch, a conversion problem to solve, or an experience worth rebuilding?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							"data-reveal": true,
							children: [
								"LET'S MAKE",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "IT MATTER." })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							"data-reveal": true,
							href: "mailto:shiv.arvind.51@gmail.com",
							className: "contact-link",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { size: 24 }),
								" shiv.arvind.51@gmail.com ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoveRight, { size: 28 })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "contact-footer",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "https://linkedin.com/in/shivam-shukla-a657b5223",
									target: "_blank",
									rel: "noreferrer",
									children: ["LinkedIn ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 14 })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { size: 14 }), " Delhi, India"] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "tel:+916387741787",
									children: "+91 63877 41787"
								})
							]
						})
					]
				})
			] })
		]
	});
}
//#endregion
export { Portfolio as component };
