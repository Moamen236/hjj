import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const InactivityDetector = ({ children }) => {
  const location = useLocation();
  const [isInactive, setIsInactive] = useState(false);

  useEffect(() => {
    let inactivityTimer;

    const resetInactivityTimer = () => {
      clearTimeout(inactivityTimer);
      inactivityTimer = setTimeout(() => {
        setIsInactive(true);
        window.location.href = '/';
        // history.push('/'); // Replace '/home' with the actual path to your home page
      }, 99965000); // 1.5 minute in milliseconds
    };

    const handleActivity = () => {
      setIsInactive(false);
      resetInactivityTimer();
    };

    // Initial setup
    resetInactivityTimer();

    // Event listeners for user activity
    window.addEventListener('mousemove', handleActivity);
    window.addEventListener('keydown', handleActivity);
    window.addEventListener('touchstart', handleActivity);

    // Cleanup event listeners on component unmount
    return () => {
      clearTimeout(inactivityTimer);
      window.removeEventListener('mousemove', handleActivity);
      window.removeEventListener('keydown', handleActivity);
      window.removeEventListener('touchstart', handleActivity);
    };
  }, [location]);

  return <>{isInactive ? null : children}</>;
};

export default InactivityDetector;
