import React, { useCallback, useEffect, useState } from 'react';
import MobileLayout from '@/components/GraphQl/layouts/MobileLayout/MobileLayout.tsx';
import DesktopLayout from '@/components/GraphQl/layouts/DesktopLayout/DesktopLayout.tsx';

const RootLayout = () => {
  const [isMobile, setIsMobile] = useState(false);

  const resizeHandler = useCallback(() => {
    window.outerWidth < 765
      ? !isMobile && setIsMobile(true)
      : isMobile && setIsMobile(false);
  }, [isMobile]);

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);
    return () => window.removeEventListener('resize', resizeHandler);
  }, [resizeHandler]);

  resizeHandler();

  return isMobile ? <MobileLayout /> : <DesktopLayout />;
};

export default RootLayout;
