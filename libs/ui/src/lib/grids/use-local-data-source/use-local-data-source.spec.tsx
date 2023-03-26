import { act, renderHook } from '@testing-library/react';
import * as React from 'react';

import useLocalDataSource from './use-local-data-source';

describe('useLocalDataSource', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useLocalDataSource());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
