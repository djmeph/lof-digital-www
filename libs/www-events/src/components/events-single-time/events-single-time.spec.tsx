import { render } from '@testing-library/react';

import EventsSingleTime from './events-single-time';

describe('EventsSingleTime', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EventsSingleTime />);
    expect(baseElement).toBeTruthy();
  });
});
