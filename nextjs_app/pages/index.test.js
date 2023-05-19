import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from '../pages/index';

test('renders home page correctly', () => {
  render(<HomePage />);
  
  // Example test case: Verifying the presence of a specific element
  const headingElement = screen.getByRole('heading', { name: /Welcome to the Next.js App/i });
  expect(headingElement).toBeInTheDocument();
  
  // Additional test cases for other elements or behavior on the home page
});
