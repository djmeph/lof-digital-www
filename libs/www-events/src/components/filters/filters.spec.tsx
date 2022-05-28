import { render } from '@testing-library/react';

import Filters from './filters';

describe('Filters', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Filters />);
    expect(baseElement).toBeTruthy();
  });
});
