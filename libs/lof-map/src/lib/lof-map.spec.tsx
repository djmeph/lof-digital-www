import { render } from '@testing-library/react';

import LofMap from './lof-map';

describe('LofMap', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LofMap />);
    expect(baseElement).toBeTruthy();
  });
});
