import { render } from '@testing-library/react';

import Art from './art';

describe('Art', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Art />);
    expect(baseElement).toBeTruthy();
  });
});
