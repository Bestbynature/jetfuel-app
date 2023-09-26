import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from '../components/Layout';

test('renders layout with header and outlet', () => {
  const { getByText } = render(
    <Router>
      <Layout />
    </Router>
  );

  const headerElement = getByText(/Layout/i);

  expect(headerElement).toBeInTheDocument();
});
