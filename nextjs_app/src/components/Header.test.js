import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

test('renders header correctly', () => {
  render(<Header />);
  
  // Example test case: Verifying the presence of a specific element
  const logoElement = screen.getByAltText('Logo');
  expect(logoElement).toBeInTheDocument();
  
  // Additional test cases for other elements or behavior in the header component
});
