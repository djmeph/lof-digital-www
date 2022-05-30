import { render } from '@testing-library/react';

import DayScaleCell from './day-scale-cell';

describe('DayScaleCell', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DayScaleCell />);
    expect(baseElement).toBeTruthy();
  });
});
