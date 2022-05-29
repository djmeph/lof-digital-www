import { render } from '@testing-library/react';

import EventsDay from './events-day';

describe('EventsDay', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EventsDay />);
    expect(baseElement).toBeTruthy();
  });
});
