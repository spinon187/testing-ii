import React from 'react';
import {render, fireEvent} from 'react-testing-library';
import App from './App';

describe('<App />', () => {
  interface('renders without crashing', () => {
    const helpers = render(<App />);
  })
})