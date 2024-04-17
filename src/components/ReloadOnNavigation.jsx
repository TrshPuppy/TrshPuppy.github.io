import { useEffect } from 'react';

function ReloadOnNavigation() {
   useEffect(() => {
      const handleNavigation = () => window.location.reload();
      window.addEventListener('popstate', handleNavigation);
      return () => window.removeEventListener('popstate', handleNavigation);
   }, []);

   return null;
}

export default ReloadOnNavigation;
