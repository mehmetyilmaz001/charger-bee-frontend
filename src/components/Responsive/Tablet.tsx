import { useResponsive } from '@/hooks/useResponsive';

const Tablet = ({ children }: { children: React.ReactNode }) => {
  const { isTablet } = useResponsive();
  return isTablet ? children : null;
};

export default Tablet;
