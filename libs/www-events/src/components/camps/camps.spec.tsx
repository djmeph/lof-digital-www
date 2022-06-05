import { render } from '@testing-library/react';

import Camps from './camps';

describe('Camps', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Camps />);
    expect(baseElement).toBeTruthy();
  });
});
