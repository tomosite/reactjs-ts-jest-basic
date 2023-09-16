import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { describe } from 'node:test';
import LinkItem from './LinkItem';

describe('App', () => {
  test('click the navigation link item', () => {
    const mockFn = jest.fn();
    render(<LinkItem onClick={mockFn}>item dummy 1</LinkItem>);
    const li_elem = screen.getByText('item dummy 1');
    fireEvent.click(li_elem, { button: 0 });
    expect(mockFn).toHaveBeenCalled();
    expect(li_elem).toBeInTheDocument();
  });
});
