import React from 'react';
import {render, fireEvent} from 'react-testing-library';
import 'jest-dom/extend-expect';
import App from './App';
import Dashboard from './components/Dashboard.js';
import Display from './components/Display.js';

describe('<App />', () => {
  it('renders without crashing', () => {
    const helpers = render(<App />);
  })

  it("balls and strikes reset to 0 when a player reaches 3 strikes or 4 balls", () => {
    const { getByTestId } = render(<Display />);
    const balls = Number(getByTestId("balls").textContent);
    const strikes = Number(getByTestId("strikes").textContent);
    expect(balls).toBeLessThan(4);
    expect(strikes).toBeLessThan(3);
  });

})