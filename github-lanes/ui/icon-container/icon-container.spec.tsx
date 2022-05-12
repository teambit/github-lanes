import React from 'react';
import { render } from '@testing-library/react';
import { BasicIconContainer } from './icon-container.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicIconContainer />);
  const rendered = getByText('Hello from Icon!');
  expect(rendered).toBeTruthy();
});