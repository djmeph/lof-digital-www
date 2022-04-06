import { render } from '@testing-library/react';

import WeekView from './week-view';

describe('WeekView', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WeekView />);
    expect(baseElement).toBeTruthy();
  });
});
