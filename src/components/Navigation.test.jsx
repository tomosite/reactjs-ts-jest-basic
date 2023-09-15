import React from 'react';
import { render, screen } from '@testing-library/react';
import Navigation from './Navigation';

describe('Navigation component', () => {
  test('click the navigation link item', () => {
    const dummy_link_items = [
      { id: 1, title: 'item dummy 1' },
      { id: 2, title: 'item dummy 2' }
    ];
    render(<Navigation link_items={dummy_link_items} />);
    const item_title = screen.getByText(/item dummy 1/);
    expect(item_title).toBeInTheDocument();
  });
});
