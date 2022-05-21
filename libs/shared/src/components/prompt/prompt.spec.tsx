import { render } from '@testing-library/react';

import Prompt from './prompt';

describe('Prompt', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Prompt />);
    expect(baseElement).toBeTruthy();
  });
});
