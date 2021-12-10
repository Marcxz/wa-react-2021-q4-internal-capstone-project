import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Marcxz Store', () => {
  render(<App />);
  const linkElement = screen.getByText(/Marcxz Store/i);
  expect(linkElement).toBeInTheDocument();
});
