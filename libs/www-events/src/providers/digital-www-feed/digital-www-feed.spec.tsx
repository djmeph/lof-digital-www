import { render } from '@testing-library/react';

import DigitalWwwFeed from './digital-www-feed';

describe('DigitalWwwFeed', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DigitalWwwFeed />);
    expect(baseElement).toBeTruthy();
  });
});
