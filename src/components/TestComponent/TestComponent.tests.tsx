import React from 'react';
import { render } from '@testing-library/react';
import TestComponent from './TestComponent';

describe('<TestComponent />', () => {
  it('renders without crashing', () => {
    expect(() => {
      render(<TestComponent />);
    }).not.toThrow();
  });
});
