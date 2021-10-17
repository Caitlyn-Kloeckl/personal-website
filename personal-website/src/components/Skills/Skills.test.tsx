import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Skills from './Skills';

describe('<Skills />', () => {
  test('it should mount', () => {
    render(<Skills />);
    
    const skills = screen.getByTestId('Skills');

    expect(skills).toBeInTheDocument();
  });
});