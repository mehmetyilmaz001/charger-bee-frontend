import { useResponsive } from '@/hooks/useResponsive';

const Desktop = ({ children }: { children: React.ReactNode }) => {
  const { isDesktop } = useResponsive();
  return isDesktop ? children : null;
};

export default Desktop;
