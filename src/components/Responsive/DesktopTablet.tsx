import { useResponsive } from '@/hooks/useResponsive';

const DesktopTablet = ({ children }: { children: React.ReactNode }) => {
  const { isNotMobile } = useResponsive();
  return isNotMobile ? children : null;
};

export default DesktopTablet;
