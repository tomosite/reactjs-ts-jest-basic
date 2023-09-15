import { render, fireEvent, screen } from '@testing-library/react';
import { NaviItem } from '.';

describe('App', () => {
  test('click the navigation link item', () => {
    const mockFn = jest.fn();
    render(<NaviItem onClick={mockFn} id={'1'} >item dummy 1</NaviItem>);
    const li_elem = screen.getByText('item dummy 1');
    fireEvent.click(li_elem, { button: 0 });
    expect(mockFn).toHaveBeenCalled();
    expect(li_elem).toBeTruthy();
  });
});
