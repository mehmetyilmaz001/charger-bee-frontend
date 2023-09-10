import React from 'react';
import { ITestComponentProps } from './TestComponent.types';
import { useTestComponent } from './TestComponent.hook';
import { TestComponentStyled } from './TestComponent.styled';

const TestComponent: React.FC<ITestComponentProps> = (props) => {
  const { someValue } = useTestComponent(props);

  return <TestComponentStyled>{someValue}</TestComponentStyled>;
};

export default TestComponent;
