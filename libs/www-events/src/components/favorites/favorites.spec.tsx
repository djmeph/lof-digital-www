import { render } from '@testing-library/react';

import Favorites from './favorites';

describe('Favorites', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Favorites />);
    expect(baseElement).toBeTruthy();
  });
});
