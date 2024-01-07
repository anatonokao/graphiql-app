import React, { useCallback, useEffect, useState } from 'react';
import MobileLayout from '@/components/GraphQl/layouts/MobileLayout/MobileLayout.tsx';
import DesktopLayout from '@/components/GraphQl/layouts/DesktopLayout/DesktopLayout.tsx';
import { graphqlAPI } from '@/store/GraphQl/graphqlAPI/graphqlAPI.ts';
import { goToast } from '@/components/toast-helper.ts';
import { useAppSelector } from '@/store/hooks.ts';

const RootLayout = () => {
  const apiUrl = useAppSelector((state) => state.graphqlSlice.apiUrl);

  const [getSchema, { data, isFetching, isError }] =
    graphqlAPI.useLazyGetSchemaQuery();

  useEffect(() => {
    getSchema(apiUrl);
  }, [apiUrl, getSchema]);

  useEffect(() => {
    isError && goToast('Something went wrong!', 'error');
  }, [isError]);

  const [isMobile, setIsMobile] = useState(false);

  const resizeHandler = useCallback(() => {
    window.innerWidth < 765
      ? !isMobile && setIsMobile(true)
      : isMobile && setIsMobile(false);
  }, [isMobile]);

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);
    return () => window.removeEventListener('resize', resizeHandler);
  }, [resizeHandler]);

  resizeHandler();

  return isMobile ? (
    <MobileLayout data={data} isFetching={isFetching} isError={isError} />
  ) : (
    <DesktopLayout data={data} isFetching={isFetching} isError={isError} />
  );
};

export default RootLayout;
