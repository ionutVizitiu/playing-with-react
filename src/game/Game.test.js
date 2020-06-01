import React from 'react';
import { render } from '@testing-library/react';
import { Game } from './Game';

test('renders learn react link', () => {
  const { getByText } = render(<Game />);
  const linkElement = getByText(/Next player/i);
  expect(linkElement).toBeInTheDocument();
});
