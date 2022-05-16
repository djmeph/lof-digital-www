import { render } from '@testing-library/react';

import SingleEventTime from './single-event-time';

describe('SingleEventTime', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SingleEventTime />);
    expect(baseElement).toBeTruthy();
  });
});
