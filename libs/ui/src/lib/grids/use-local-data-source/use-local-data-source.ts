import { useMemo } from 'react';
import { IDataSource } from '../data-grid/data-grid.types';

export function useLocalDataSource<T>(items: T[]): IDataSource<T> {
  return useMemo(
    () => ({
      getPage(pageIndex, pageSize, sorts, filters) {
        return {
          items: items.slice(
            pageIndex * pageSize,
            pageIndex * pageSize + pageSize
          ),
          pageInfo: {
            pageIndex,
            pageSize,
            totalItems: items.length,
            totalPages: Math.ceil(items.length / pageSize),
          },
        };
      },
    }),
    [items]
  );
}

export default useLocalDataSource;
