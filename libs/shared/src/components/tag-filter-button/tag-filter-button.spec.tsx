import { render } from '@testing-library/react';

import TagFilterButton from './tag-filter-button';

describe('TagFilterButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TagFilterButton />);
    expect(baseElement).toBeTruthy();
  });
});
