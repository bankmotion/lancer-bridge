export interface SubMenuItem {
  title: string;
  path: string;
  description?: string;
}

export interface MenuItem {
  title: string;
  path: string;
  submenu?: SubMenuItem[];
}

export const navigationItems: MenuItem[] = [
  {
    title: 'About',
    path: '/about',
    submenu: [
      { title: 'Our Story', path: '/about/story' },
      { title: 'Leadership', path: '/about/leadership' },
      { title: 'Our Values', path: '/about/values' },
    ],
  },
  {
    title: 'Services',
    path: '/services',
    submenu: [
      { title: 'Web Development', path: '/services/web-development' },
      { title: 'Mobile Apps', path: '/services/mobile-apps' },
      { title: 'UI/UX Design', path: '/services/design' },
      { title: 'Digital Marketing', path: '/services/marketing' },
    ],
  },
  {
    title: 'Industries',
    path: '/industries',
    submenu: [
      { title: 'Healthcare', path: '/industries/healthcare' },
      { title: 'Finance', path: '/industries/finance' },
      { title: 'Education', path: '/industries/education' },
      { title: 'E-commerce', path: '/industries/ecommerce' },
    ],
  },
  {
    title: 'Insights',
    path: '/insights',
    submenu: [
      { title: 'Blog', path: '/insights/blog' },
      { title: 'Case Studies', path: '/insights/case-studies' },
      { title: 'Research', path: '/insights/research' },
    ],
  },
  {
    title: 'Portfolio',
    path: '/portfolio',
    submenu: [
      { title: 'Web Projects', path: '/portfolio/web' },
      { title: 'Mobile Apps', path: '/portfolio/mobile' },
      { title: 'Design Work', path: '/portfolio/design' },
    ],
  },
  {
    title: 'Careers',
    path: '/careers',
    submenu: [
      { title: 'Open Positions', path: '/careers/positions' },
      { title: 'Life at LancerBridge', path: '/careers/life' },
      { title: 'Benefits', path: '/careers/benefits' },
    ],
  },
]; 