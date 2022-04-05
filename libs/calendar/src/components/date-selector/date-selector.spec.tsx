import { render } from '@testing-library/react';

import DateSelector from './date-selector';

describe('DateSelector', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DateSelector />);
    expect(baseElement).toBeTruthy();
  });
});
