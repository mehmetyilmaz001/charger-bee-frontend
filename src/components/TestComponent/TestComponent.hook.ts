import { ITestComponentProps } from './TestComponent.types';

export const useTestComponent = (props: ITestComponentProps) => {
  // Logic and hooks go here.

  const someValue = 'Hello from hook!';

  return {
    someValue
  };
};
