export const APP_NAME = 'LancerBridge';
export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3000';

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  SERVICES: '/services',
  CONTACT: '/contact',
} as const;

export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const; 