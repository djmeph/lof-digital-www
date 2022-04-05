import { render } from '@testing-library/react';

import DayView from './day-view';

describe('DayView', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DayView />);
    expect(baseElement).toBeTruthy();
  });
});
