import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { describe } from 'node:test';
import {LinkItem} from '.';

describe('App', () => {
  test('click the navigation link item', () => {
    const mockFn = jest.fn();
    render(<LinkItem onClick={mockFn}>item dummy 1</LinkItem>);
    const li_elem = screen.getByText('item dummy 1');
    fireEvent.click(li_elem, { button: 0 });
    
    /* item dummy 1 - snapshot */
    expect(li_elem).toMatchSnapshot();

    /* item dummy 1 - is clicked */
    expect(mockFn).toHaveBeenCalled();

    /* item dummy 1 - is found */
    expect(li_elem).toBeTruthy();
  });
});
