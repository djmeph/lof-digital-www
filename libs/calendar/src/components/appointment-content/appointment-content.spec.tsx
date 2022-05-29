import { render } from '@testing-library/react';

import AppointmentContent from './appointment-content';

describe('AppointmentContent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AppointmentContent />);
    expect(baseElement).toBeTruthy();
  });
});
