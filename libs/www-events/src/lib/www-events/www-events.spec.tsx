import { render } from '@testing-library/react';

import WwwEvents from './www-events';

describe('WwwEvents', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WwwEvents />);
    expect(baseElement).toBeTruthy();
  });
});
