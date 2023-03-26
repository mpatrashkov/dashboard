import { flatten, range } from 'lodash';
import { useMemo } from 'react';
import { IPageInfo } from '../../grids/data-grid/data-grid.types';

export interface PageButtonInfo {
  pageText: string;
  pageIndex?: number;
  type: 'number' | 'dots';
}

export function usePageButtons(
  pageInfo: IPageInfo,
  maxDisplayedPages = 9
): PageButtonInfo[] {
  return useMemo(() => {
    const pagesPerSide = (maxDisplayedPages - 1) / 2;
    const pagesInTheCenter = (maxDisplayedPages - 7) / 2;

    const isPageHidden =
      pageInfo.pageIndex >= pagesPerSide &&
      pageInfo.totalPages - pageInfo.pageIndex - 1 >= pagesPerSide;

    if (isPageHidden) {
      return flatten([
        fillWithNumbers(0, 2),
        fillWithDots(),
        fillWithNumbers(pageInfo.pageIndex - pagesInTheCenter, 3),
        fillWithDots(),
        fillWithNumbers(pageInfo.totalPages - 2, 2),
      ]);
    }

    if (pageInfo.totalPages > maxDisplayedPages) {
      return flatten([
        fillWithNumbers(0, pagesPerSide),
        fillWithDots(),
        fillWithNumbers(pageInfo.totalPages - pagesPerSide, pagesPerSide),
      ]);
    }

    return fillWithNumbers(0, pageInfo.totalPages);
  }, [pageInfo.pageIndex, maxDisplayedPages, pageInfo.totalPages]);
}

export default usePageButtons;

function fillWithNumbers(start: number, count: number): PageButtonInfo[] {
  return range(start, start + count).map((index) => ({
    pageText: (index + 1).toString(),
    pageIndex: index,
    type: 'number',
  }));
}

function fillWithDots(): PageButtonInfo {
  return {
    pageText: '...',
    type: 'dots',
  };
}
