import { render, fireEvent, screen } from '@testing-library/react';
import { NaviItem } from './components/Navigation';
import App from './App';

describe('App', () => {
  test('click the navigation link item', () => {
    const mockFn = jest.fn();
    render(
      <App />
    );
    const li_elem = screen.getByText(/item dummy 1/i);
    expect(li_elem).toMatchSnapshot();
  });
});
