import { render } from '@testing-library/react';

import CategoriesSelected from './categories-selected';

describe('CategoriesSelected', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CategoriesSelected />);
    expect(baseElement).toBeTruthy();
  });
});
