import React from 'react';
import { render } from '@testing-library/react';
import PageHeader from './PageHeader';

describe('<PageHeader />', () => {
  it('renders without crashing', () => {
    expect(() => {
      render(<PageHeader />);
    }).not.toThrow();
  });
});
