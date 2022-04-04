import { render } from '@testing-library/react';

import EventTime from './event-time';

describe('EventTime', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EventTime />);
    expect(baseElement).toBeTruthy();
  });
});
