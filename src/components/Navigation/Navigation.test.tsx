import React from 'react';
import { render, screen } from '@testing-library/react';
import { Navigation } from '.';
import { LinkItemProps } from '.';
import renderer from 'react-test-renderer';
const mockFn = jest.fn();
const linkItems: Array<LinkItemProps> = [
  { id: '1', children: <>item dummy 1</>, onClick: mockFn },
  { id: '2', children: <>item dummy 2</>, onClick: mockFn }
];

describe('Navigation component', () => {
  test('snapshot navigation', () => {
    const domTree = renderer.create(<Navigation links={linkItems} />);
    expect(domTree).toMatchSnapshot();
  });
  test('click the navigation link item', () => {
    render(<Navigation links={linkItems} />);
    const item_title = screen.getByText(/item dummy 1/);
    expect(item_title).toBeTruthy();
  });
});
