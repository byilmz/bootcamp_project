import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import Header from '../src/components/header/header';

test.skip('renders header correctly', () => {
  render(<Header />);
  
  // Example test case: Verifying the presence of a specific element
  const logoElement = screen.getByAltText('Logo');
  expect(logoElement).toBeInTheDocument();
  
  // Additional test cases for other elements or behavior in the header component
}
);