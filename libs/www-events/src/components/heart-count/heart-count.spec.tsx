import { render } from '@testing-library/react';

import HeartCount from './heart-count';

describe('HeartCount', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeartCount />);
    expect(baseElement).toBeTruthy();
  });
});
