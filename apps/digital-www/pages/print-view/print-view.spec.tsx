import { render } from '@testing-library/react';

import PrintView from '.';

describe('PrintView', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PrintView />);
    expect(baseElement).toBeTruthy();
  });
});
