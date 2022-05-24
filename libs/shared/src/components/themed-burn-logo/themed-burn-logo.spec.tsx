import { render } from '@testing-library/react';

import ThemedBurnLogo from './themed-burn-logo';

describe('ThemedBurnLogo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ThemedBurnLogo />);
    expect(baseElement).toBeTruthy();
  });
});
