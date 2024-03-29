import React from 'react';
import renderer from 'react-test-renderer';

import App from './App';

describe('<App />', () => {
  it('has 4 children', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree.children.length).toBe(4);
  });

  it('clock is changing', () => {
    const date = new Date().toLocaleTimeString();
    renderer.act(() => jest.runAllTimers());
    const text = renderer.create(<App />).root.findByProps({ testID: "clock" }).props
    expect(text.children).toBe(date)
  })
});