import { render, screen } from '@testing-library/react';
import App from './App.jsx';

test('renders input element', () => {
  render(<App />);
  expect(screen.getByPlaceholderText(/test/i)).toBeInTheDocument();
});
