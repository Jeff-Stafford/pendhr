import { MockedProvider } from '@apollo/client/testing';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <MockedProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </MockedProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
