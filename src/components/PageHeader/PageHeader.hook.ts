import type { IPageHeaderProps } from './PageHeader.types';

export const usePageHeader = (_props: IPageHeaderProps) => {
  // Logic and hooks go here.

  const someValue = 'Hello from hook!';

  return {
    someValue,
  };
};
