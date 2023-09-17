import { useResponsive } from '@/hooks/useResponsive';

const Mobile = ({ children }: { children: React.ReactNode }) => {
  const { isMobile } = useResponsive();
  return isMobile ? children : null;
};

export default Mobile;
