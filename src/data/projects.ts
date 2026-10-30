export type Project = {
  id: string;
  title: string;
  category: "Next.js" | "React" | "JavaScript";
  description: string;
  whatItShows: string;
  tech: string[];
  github: string;
  live?: string;
};

export const projects: Project[] = [
  {
    id: "music-nextjs",
    title: "Music Website",
    category: "Next.js",
    description: "A music website built with Next.js and Tailwind.",
    whatItShows: "Next.js pages, Tailwind UI, deployed on Vercel.",
    tech: ["Next.js", "Tailwind", "TypeScript"],
    github: "https://github.com/MuhammadTalha183/Music-Nextjs",
    live: "https://music-nextjs-sage.vercel.app/",
  },
  {
    id: "burger-web",
    title: "Burger Website",
    category: "Next.js",
    description: "A burger restaurant website built with Next.js and Tailwind.",
    whatItShows: "Food-site UI, sections, responsive layout.",
    tech: ["Next.js", "Tailwind", "TypeScript"],
    github: "https://github.com/MuhammadTalha183/milestone-3-2-Burger-web",
    live: "https://milestone-3-2-burger-web.vercel.app/",
  },
  {
    id: "scooter-nextjs",
    title: "Scooter Website",
    category: "Next.js",
    description: "A scooter website built with Next.js and Tailwind.",
    whatItShows: "Product-style UI, Next.js routing, Vercel deploy.",
    tech: ["Next.js", "Tailwind", "TypeScript"],
    github: "https://github.com/MuhammadTalha183/scooter-nextjs",
    live: "https://scooter-nextjs.vercel.app/",
  },
  {
    id: "coffee-website",
    title: "Coffee Website",
    category: "Next.js",
    description: "A coffee website built with Next.js and Tailwind.",
    whatItShows: "Landing UI, sections, responsive design.",
    tech: ["Next.js", "Tailwind", "TypeScript"],
    github: "https://github.com/MuhammadTalha183/coffe-website/tree/main/coffeeweb",
    live: "https://coffe-website-21.vercel.app/",
  },
  {
    id: "ecommerce-app",
    title: "E-commerce App",
    category: "Next.js",
    description: "A clean online store UI with product listings and cart flow.",
    whatItShows: "Product UI, cart state, responsive layout.",
    tech: ["Next.js", "React", "CSS"],
    github: "https://github.com/Muhammadtalha183/NEXT-JS",
  },
  {
    id: "blog-app",
    title: "Blog App",
    category: "Next.js",
    description: "A readable blog UI with posts and clean typography.",
    whatItShows: "Routing, content layout, readable UI.",
    tech: ["Next.js", "React", "CSS"],
    github: "https://github.com/Muhammadtalha183/NEXT-JS",
  },
  {
  id: "previous-portfolio",
  title: "Previous Portfolio Website",
  category: "Next.js",
  description: "My previous portfolio website built with Next.js and Tailwind.",
  whatItShows: "Portfolio UI, sections, responsive design.",
  tech: ["Next.js", "Tailwind", "TypeScript"],
  github: "https://github.com/Muhammadtalha183/portfolioo",
  live: "https://portfolioo-m-talha.vercel.app",
}
];
