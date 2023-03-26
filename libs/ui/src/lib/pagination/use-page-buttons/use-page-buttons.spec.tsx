import { act, renderHook } from '@testing-library/react';
import * as React from 'react';

import usePageButtons from './use-page-buttons';

describe('usePageButtons', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => usePageButtons());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
