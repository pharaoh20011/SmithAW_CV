import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Make sure body overflow lock from mobile menu is cleared on route change
    document.body.style.overflow = '';

    if (hash) {
      // Use setTimeout micro-tick to allow DOM rendering and header layout to settle
      const timer = setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id) || document.querySelector(hash);
        
        if (element) {
          const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
          element.scrollIntoView({
            behavior: prefersReducedMotion ? 'auto' : 'smooth',
            block: 'start',
          });
        }
      }, 50);

      return () => clearTimeout(timer);
    } else {
      // Scroll window to true top of the page on route change
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant' as ScrollBehavior,
      });
    }
  }, [pathname, hash]);

  return null;
};
