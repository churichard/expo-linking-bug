import React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';

import App from '../App';

jest.useFakeTimers();

it('should render successfully', () => {
  let renderer = createRenderer();
  let testRenderer = renderer.render(<App />);
  expect(testRenderer).toBeDefined();
});
