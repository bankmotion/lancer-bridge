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
    title: 'Home',
    path: '/',
    sectionId: 'hero'
  },
  {
    title: 'Features',
    path: '/#features',
    sectionId: 'features'
  },
  {
    title: 'Services',
    path: '/#services',
    sectionId: 'services'
  },
  {
    title: 'Case Studies',
    path: '/#case-studies',
    sectionId: 'case-studies'
  },
  {
    title: 'Blog',
    path: '/#blog',
    sectionId: 'blog'
  },
  {
    title: 'Articles',
    path: '/#articles',
    sectionId: 'articles'
  }
]; 