import { render } from '@testing-library/react';

import { EventComponent } from './event';

describe('Event', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EventComponent />);
    expect(baseElement).toBeTruthy();
  });
});
