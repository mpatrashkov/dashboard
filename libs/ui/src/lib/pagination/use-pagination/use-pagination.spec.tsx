import { act, renderHook } from '@testing-library/react';
import * as React from 'react';

import usePagination from './use-pagination';

describe('usePagination', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => usePagination());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
