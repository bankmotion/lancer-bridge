export interface SubMenuItem {
  title: string;
  path: string;
  description?: string;
}

export interface MenuItem {
  title: string;
  path: string;
  sectionId?: string;
  submenu?: SubMenuItem[];
}

export const navigationItems: MenuItem[] = [
  {
    title: "Home",
    path: "/",
    sectionId: "hero",
  },
  {
    title: "Services",
    path: "/#services",
    sectionId: "services",
  },
  {
    title: "Portfolio",
    path: "/#portfolio",
    sectionId: "portfolio",
  },
  {
    title: "Global Presence",
    path: "/#global-presence",
    sectionId: "global-presence",
  },
  {
    title: "Tech Partners",
    path: "/#tech-partners",
    sectionId: "tech-partners",
  },
  {
    title: "Technologies",
    path: "/#technologies",
    sectionId: "technologies",
  },
  {
    title: "Contact",
    path: "/#contact",
    sectionId: "contact",
  },
];
