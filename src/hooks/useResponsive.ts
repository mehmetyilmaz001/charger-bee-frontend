import { useMediaQuery } from 'react-responsive';

import type { IDevice } from '@/types/responsive';

export const useResponsive = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  const isDesktop = useMediaQuery({ minWidth: 992 });
  const isNotMobile = useMediaQuery({ minWidth: 768 });

  const device: IDevice = {
    isMobile,
    isTablet,
    isDesktop,
  };

  return { isMobile, isTablet, isDesktop, isNotMobile, device };
};
