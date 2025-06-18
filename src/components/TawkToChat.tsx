import { useEffect } from 'react';

declare global {
  interface Window {
    Tawk_API?: any;
    Tawk_LoadStart?: Date;
  }
}

const TawkToChat = () => {
  useEffect(() => {
    // Initialize Tawk_API
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    // Create and inject the script
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://embed.tawk.to/685337aca4205c190bec87c1/1iu2h2u7j';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');

    // Insert the script
    const firstScript = document.getElementsByTagName('script')[0];
    firstScript.parentNode?.insertBefore(script, firstScript);

    // Cleanup function
    return () => {
      // Remove the script when component unmounts
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return null; // This component doesn't render anything visible
};

export default TawkToChat; 