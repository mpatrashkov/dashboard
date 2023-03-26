import { render } from '@testing-library/react';

import TextFieldBase from './text-field-base';

describe('TextFieldBase', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TextFieldBase />);
    expect(baseElement).toBeTruthy();
  });
});
