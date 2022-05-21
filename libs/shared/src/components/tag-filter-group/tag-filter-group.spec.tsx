import { render } from '@testing-library/react';

import TagFilterGroup from './tag-filter-group';

describe('TagFilterGroup', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TagFilterGroup />);
    expect(baseElement).toBeTruthy();
  });
});
