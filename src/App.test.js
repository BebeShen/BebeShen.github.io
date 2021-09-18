import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link and personal signature', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  const myElement = screen.getByText(/bebeshen/i);
  expect(linkElement).toBeInTheDocument();
  expect(myElement).toBeInTheDocument();
});
