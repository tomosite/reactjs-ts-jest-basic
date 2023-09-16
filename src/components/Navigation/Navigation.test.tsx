import React from 'react';
import { render, screen } from '@testing-library/react';
import {Navigation} from '.';
import { LinkItemProps } from '.';

describe('Navigation component', () => {
  test('click the navigation link item', () => {
    const linkItems : Array<LinkItemProps> = [
      { id: 1, children: <>item dummy 1</>},
      { id: 2, children: <>item dummy 2</> }
    ];
    render(<Navigation links={linkItems} />);
    const item_title = screen.getByText(/item dummy 1/);
    expect(item_title).toBeTruthy()
  });
});
