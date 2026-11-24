import delcafe from "../assets/projects/delcafe.png"
import kopitiam from "../assets/projects/kopitiam.png"
import portfolio from "../assets/projects/portfolio.png"
import ecommerce from "../assets/projects/ecommerce.png"
import pqc from "../assets/projects/pqc.png"
import alin from "../assets/projects/alin.png"

// ─────────────────────────────────────────────────────────────
// Adding screenshots:
//   1. Put the file in src/assets/projects/ (e.g. alin-home.png)
//   2. Import it here:  import alinHome from "../assets/projects/alin-home.png"
//   3. Use it as  image: alinHome  (main shot) or in  gallery: [alinHome]  (extra shots).
//   Portrait phone screenshots and wide desktop screenshots both work.
// Projects without an image show a placeholder automatically.
// Cards crop images to 16:9. If the important part gets cut, set e.g.
//   imagePosition: "left center"  (or "right", "top", ...)
// Leave github as "" to hide the "Source code" button.
// ─────────────────────────────────────────────────────────────

export const categories = [
  { id: "all", label: "All" },
  { id: "web", label: "Web" },
  { id: "mobile", label: "Mobile" },
  { id: "research", label: "Research" },
]

export const projects = [
  {
    id: "pqc-esp32",
    title: "Post-Quantum Cryptography on ESP32",
    shortTitle: "PQC Benchmark",
    category: "research",
    type: "Undergraduate thesis",
    year: "2026 – now",
    status: "In progress",
    role: "Researcher & developer",
    summary:
      "Benchmarking four NIST post-quantum algorithms on a low-cost ESP32 to see which ones are actually practical for IoT devices.",
    description: [
      "Quantum computers are expected to break the public-key cryptography most connected devices rely on today. NIST has standardised replacements, but most benchmarks run on desktop-class CPUs. My thesis asks a narrower question: how do these algorithms behave on a microcontroller with 520 KB of RAM?",
      "I built a benchmarking framework that runs ML-KEM, HQC, ML-DSA and SLH-DSA directly on an ESP32-WROOM-32. The board talks to a Python server over Wi-Fi, which stores every run in SQLite so results can be compared across parameter sets.",
      "To make sense of the numbers I also built a dashboard that compares algorithms by NIST security level, with classical X25519 and Ed25519 shown alongside as a baseline. The screenshot shows key generation times for the signature schemes.",
    ],
    highlights: [
      "12 algorithm variants across key encapsulation (KeyGen, Encaps, Decaps) and digital signatures (KeyGen, Sign, Verify)",
      "Measures execution time, memory usage, and key, ciphertext and signature sizes for each operation",
      "Wi-Fi client–server test rig over TCP/IP, with a Python backend and SQLite for result collection",
      "Benchmark dashboard with linear and log scales, filters per NIST security level, and trial-to-trial consistency checks",
      "Energy measurements with an INA219 current sensor",
      "Firmware written in C/C++ with ESP-IDF",
    ],
    tech: ["C/C++", "ESP-IDF", "ESP32", "Python", "SQLite", "TCP/IP", "INA219"],
    image: pqc,
    imagePosition: "left center", // keep the dashboard sidebar visible in the card
    gallery: [],
    github: "",
  },
  {
    id: "alin",
    title: "ALIN: Aljabar Linear",
    shortTitle: "ALIN",
    category: "mobile",
    type: "Mobile app",
    year: "2026",
    status: "Completed",
    role: "Flutter & Laravel developer",
    summary:
      "A mobile app that helps students learn linear algebra through short modules and step-by-step visual explanations.",
    description: [
      "Linear algebra is one of those courses where students often get lost between the formula and the actual steps. ALIN breaks topics like matrices, determinants and vector spaces into small modules, and walks through each solution one step at a time.",
      "The app is built in Flutter and backed by a Laravel API. Accounts are handled with Laravel Sanctum token authentication, so progress stays tied to each student.",
    ],
    highlights: [
      "Structured learning modules ordered from basic to advanced topics",
      "Step-by-step visual explanations instead of a single final answer",
      "Laravel REST API with Sanctum token-based authentication",
    ],
    tech: ["Flutter", "Dart", "Laravel", "Laravel Sanctum", "MySQL"],
    image: alin,
    gallery: [],
    github: "",
  },
  {
    id: "kopitiam",
    title: "Kopitiam 33",
    shortTitle: "Kopitiam 33",
    category: "mobile",
    type: "Mobile app",
    year: "2026",
    status: "Deployed",
    role: "Mobile & backend developer",
    summary:
      "A café ordering app for Kopitiam 33 Balige, with separate views for customers, cashiers and the owner.",
    description: [
      "Kopitiam 33 needed a way to take orders without the cashier writing everything down by hand. The Flutter app gives each role its own dashboard: customers order and track their food, cashiers manage the queue, and the owner sees sales at a glance.",
      "The backend runs in production on AWS: Laravel on EC2, MySQL on RDS and menu images on S3. A small Node.js service sends OTP codes through Brevo SMTP for email verification.",
    ],
    highlights: [
      "Customer, cashier and owner dashboards in one app",
      "Real-time order tracking with countdown timers",
      "Revenue analytics: 7-day sales chart and best-selling products",
      "Production deployment on AWS EC2, RDS and S3, plus a Node.js OTP microservice",
    ],
    tech: ["Flutter", "Laravel", "MySQL", "AWS EC2", "AWS RDS", "AWS S3", "Node.js"],
    image: kopitiam,
    gallery: [],
    github: "",
  },
  {
    id: "delcafe",
    title: "DelCafe Website",
    shortTitle: "DelCafe",
    category: "web",
    type: "Web app",
    year: "2025",
    status: "Completed",
    role: "Full-stack developer",
    summary:
      "A website for a campus café with a browsable menu, online ordering and an admin panel for staff.",
    description: [
      "DelCafe gives a campus café a proper online presence. Visitors can browse the menu and place orders, while staff manage menu items and incoming orders from an admin panel.",
      "Built with Laravel and MySQL, with the interface styled in Tailwind CSS and designed to work well on phones first.",
    ],
    highlights: [
      "Menu browsing and ordering flow for customers",
      "Admin panel for managing menu items and orders",
      "Responsive layout styled with Tailwind CSS",
    ],
    tech: ["Laravel", "MySQL", "Tailwind CSS"],
    image: delcafe,
    gallery: [],
    github: "",
  },
  {
    id: "ecommerce",
    title: "Food Ordering App",
    shortTitle: "Food Ordering",
    category: "mobile",
    type: "Mobile app",
    year: "2025",
    status: "Completed",
    role: "Backend & mobile developer",
    summary:
      "A mobile food and drink ordering app with category filters, live stock counts and a shopping cart.",
    description: [
      "A mobile storefront for food and drinks. Users filter the menu by category, see how much stock is left for each item, and add things to a cart before checking out.",
      "The Flutter client talks to a Laravel API, with product and order data stored in PostgreSQL.",
    ],
    highlights: [
      "Category filters and per-item stock counts",
      "Cart with automatic price calculation",
      "Admin side for managing products",
    ],
    tech: ["Flutter", "Laravel", "Node.js", "PostgreSQL"],
    image: ecommerce,
    gallery: [],
    github: "",
  },
  {
    id: "portfolio",
    title: "This Portfolio",
    shortTitle: "Portfolio",
    category: "web",
    type: "Website",
    year: "2026",
    status: "Live",
    role: "Design & development",
    summary:
      "The site you are looking at. Built with React, Tailwind CSS and Framer Motion, with light and dark themes.",
    description: [
      "A personal site to collect my projects in one place. I kept the design quiet on purpose so the work itself stands out, and I wrote every project page by hand.",
    ],
    highlights: [
      "Light and dark themes, remembered between visits",
      "Project data kept in a single file and shared between the list and detail pages",
      "Contact form powered by EmailJS",
    ],
    tech: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    image: portfolio,
    gallery: [],
    github: "",
  },
]

export const getProject = (id) => projects.find((p) => p.id === id)
