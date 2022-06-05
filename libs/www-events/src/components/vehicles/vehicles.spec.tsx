import { render } from '@testing-library/react';

import Vehicles from './vehicles';

describe('Vehicles', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Vehicles />);
    expect(baseElement).toBeTruthy();
  });
});
