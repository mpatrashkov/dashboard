import { useMemo } from 'react';
import { ChevronLeft, ChevronRight } from 'tabler-icons-react';
import Button from '../button/button';
import Select from '../forms/select/select';
import { IPageInfo } from '../grids/data-grid/data-grid.types';
import usePageButtons, {
  PageButtonInfo,
} from './use-page-buttons/use-page-buttons';

export interface PaginationProps {
  pageInfo: IPageInfo;
  onPageChange(newPageIndex: number): void;
  onPageSizeChange(newPageSize: number): void;
}

const MAX_DISPLAYED_PAGES = 9;
const PAGE_SIZE_OPTIONS = [10, 15, 20];

export function Pagination(props: PaginationProps) {
  const { pageInfo, onPageChange, onPageSizeChange } = props;

  const pageButtons = usePageButtons(pageInfo, MAX_DISPLAYED_PAGES);
  const pageSizeOptions = useMemo(
    () =>
      PAGE_SIZE_OPTIONS.map((option) => ({
        label: String(option),
        value: String(option),
      })),
    []
  );

  function onButtonClick(pageButton: PageButtonInfo) {
    if (pageButton.type === 'number') {
      onPageChange(pageButton.pageIndex ?? 0);
    }
  }

  return (
    <div className="flex items-center gap-3">
      <Button
        slim
        icon={<ChevronLeft />}
        disabled={pageInfo.pageIndex === 0}
        onClick={() => onPageChange(pageInfo.pageIndex - 1)}
      />
      {pageButtons.map((pageButton, index) => (
        <Button
          className="w-[35px]"
          key={index}
          slim
          variant={
            pageButton.pageIndex === props.pageInfo.pageIndex
              ? 'primary'
              : 'secondary'
          }
          onClick={() => onButtonClick(pageButton)}
        >
          {pageButton.pageText}
        </Button>
      ))}
      <Button
        slim
        icon={<ChevronRight />}
        disabled={pageInfo.pageIndex === pageInfo.totalPages - 1}
        onClick={() => onPageChange(pageInfo.pageIndex + 1)}
      />

      <div className="ml-auto flex gap-3 items-center">
        <div>Show:</div>
        <Select
          slim
          options={pageSizeOptions}
          onChange={(e) => onPageSizeChange(parseInt(e.target.value))}
        />
      </div>
    </div>
  );
}

export default Pagination;
