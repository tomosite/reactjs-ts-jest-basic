import { fireEvent, render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import { AppService } from './services/AppService';
import App from './App';

describe('App', () => {
  // jest.mock('./services/AppService');

  test('click the navigation link item', () => {
    const clickItemMock = jest.spyOn(AppService, 'clickLink');
    render(<App />);
    const link_elem = screen.getByText(/link item 1/i);
    expect(link_elem).toMatchSnapshot();
    fireEvent.click(link_elem);
    expect(clickItemMock).toHaveBeenCalledWith('2');
  });
});
