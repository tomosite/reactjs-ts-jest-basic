import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Navigation } from '.';
import { LinkItemProps } from '.';
import renderer from 'react-test-renderer';

describe('Navigation component', () => {
  let mockFn: () => void;
  let linkItems: Array<LinkItemProps>;

  beforeEach(() => {
    mockFn = jest.fn();
    linkItems = [
      { id: '1', children: <>item dummy 1</>, onClick: mockFn },
      { id: '2', children: <>item dummy 2</>, onClick: mockFn }
    ];
  });

  test('snapshot navigation', () => {
    const domTree = renderer.create(<Navigation links={linkItems} />);
    expect(domTree).toMatchSnapshot();
  });

  test('click the navigation link item', () => {
    render(<Navigation links={linkItems} />);
    const link_elem = screen.getByText(/item dummy 1/);

    fireEvent.click(link_elem, { button: 0 });
    expect(mockFn).toHaveBeenCalled();
  });
});
