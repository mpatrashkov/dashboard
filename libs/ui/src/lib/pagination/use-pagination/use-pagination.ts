import { useMemo } from 'react';
import {
  IDataSource,
  IDataSourceState,
} from '../../grids/data-grid/data-grid.types';
import { PaginationProps } from '../pagination';

export function usePagination<T>(
  dataSourceState: IDataSourceState<T>,
  dataSource: IDataSource<T>
): PaginationProps {
  const { pageInfo } = dataSourceState;

  return useMemo(
    () => ({
      pageInfo,
      onPageChange(newPageIndex) {
        dataSource.getPage(newPageIndex, pageInfo.pageSize, [], []);
      },
      onPageSizeChange(newPageSize) {
        dataSource.getPage(pageInfo.pageIndex, newPageSize, [], []);
      },
    }),
    [dataSource, pageInfo]
  );
}

export default usePagination;
