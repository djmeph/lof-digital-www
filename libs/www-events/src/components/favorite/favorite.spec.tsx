import { render } from '@testing-library/react';

import Favorite from './favorite';

describe('Favorite', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Favorite />);
    expect(baseElement).toBeTruthy();
  });
});
