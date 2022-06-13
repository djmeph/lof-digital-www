import { render } from '@testing-library/react';

import HeartCountComponent from './heart-count';

describe('HeartCountComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeartCountComponent />);
    expect(baseElement).toBeTruthy();
  });
});
