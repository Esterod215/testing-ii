import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

import App from './App';

describe('<App />',()=>{
  it('renders without crashing', () => {
    render(<App />)
  });

});
describe('hit function tests',()=>{
  it('clears both balls and strikes when hit event is fired',()=>{
    const { getByText } = render(<App />);
    const hit = getByText(/Hit!/i);
    fireEvent.click(hit);
    expect(getByText(/Balls/i)).toEqual('Balls: 0');
  })
})
