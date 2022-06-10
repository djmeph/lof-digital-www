import { render } from '@testing-library/react';

import OutsideLink from './outside-link';

describe('OutsideLink', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OutsideLink />);
    expect(baseElement).toBeTruthy();
  });
});
