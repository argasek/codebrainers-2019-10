import React from 'react';
import { render } from '@testing-library/react';
import App from 'App';

test('renders "List of plants" header', () => {
  const { getByText } = render(<App />);
  const someElement = getByText(/List of plants/i);
  expect(someElement).toBeInTheDocument();
});
