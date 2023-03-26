import { render } from '@testing-library/react';

import Shortcut from './shortcut';

describe('Shortcut', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Shortcut />);
    expect(baseElement).toBeTruthy();
  });
});
