import React from 'react';
import { render } from '@testing-library/react';
import <%= name %> from './<%= name %>';

describe('<<%= name %> />', () => {
  it('renders without crashing', () => {
    expect(() => {
      render(<<%= name %> />);
    }).not.toThrow();
  });
});
