import { ReactNode, useEffect, useMemo, useState } from 'react';
import { ArrowsSort, ChevronDown, Filter, Trash } from 'tabler-icons-react';
import Button from '../../button/button';
import Card from '../../card/card';
import Checkbox from '../../forms/checkbox/checkbox';
import Pagination from '../../pagination/pagination';
import usePagination from '../../pagination/use-pagination/use-pagination';
import {
  FilterInfo,
  IDataGridColumn,
  IDataSource,
  ISortInfo,
} from './data-grid.types';

interface IDataGridProps<T> {
  dataSource: IDataSource<T>;
  columns: IDataGridColumn<T>[];
  primaryKey: keyof T | ((item: T) => any);

  renderActions?(item: T): ReactNode;

  onPageChange?(data: { page: number; take: number; skip: number }): void;
  pageSize?: number;
}

export function DataGrid<T>(props: IDataGridProps<T>) {
  const pageSize = props.pageSize ?? 10;

  const [data, setData] = useState(
    props.dataSource.getPage(0, pageSize, [], [])
  );

  function getPage(
    pageIndex: number,
    pageSize: number,
    sorts: ISortInfo<T>[],
    filters: FilterInfo<T>[]
  ) {
    const result = props.dataSource.getPage(
      pageIndex,
      pageSize,
      sorts,
      filters
    );

    setData(result);

    return result;
  }

  useEffect(() => {
    onPageChange(1);
  }, []);

  const pagination = usePagination(data, { getPage });

  const columns = props.columns.map((column) => (
    <th className="text-left px-3 py-2 uppercase" key={column.dataField}>
      <div className="flex text-gray-700 items-center">
        <div className="pr-2">{column.label}</div>
        <Button slim>
          <ArrowsSort size={20} color="#374151" />
        </Button>
        <Button slim>
          <Filter size={20} color="#374151" />
        </Button>
      </div>
    </th>
  ));

  function renderCell(row: T, column: IDataGridColumn<T>) {
    return column.customTemplate ? (
      column.customTemplate(row)
    ) : (
      // eslint-disable-next-line react/jsx-no-useless-fragment
      <>{row[column.dataField]}</>
    );
  }

  function getPrimaryKey(item: T) {
    if (props.primaryKey instanceof Function) {
      return props.primaryKey(item);
    }

    return item[props.primaryKey];
  }

  const rows =
    data.items.length > 0 ? (
      data.items.map((element) => (
        <tr className="border-t-2" key={getPrimaryKey(element)}>
          <td className="px-3 py-2 w-16">
            <Checkbox />
          </td>
          {props.columns.map((column) => (
            <td className="px-3 py-2" key={column.dataField}>
              {renderCell(element, column)}
            </td>
          ))}
          {props.renderActions && (
            <td className="px-3 py-2 w-0">
              <div>{props.renderActions(element)}</div>
            </td>
          )}
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan={columns.length}>No results</td>
      </tr>
    );

  function onPageChange(page: number) {
    props.onPageChange?.({
      page,
      skip: (page - 1) * pageSize,
      take: pageSize,
    });
  }

  return (
    <Card slim>
      <div className="border-b-2 p-3 flex">
        <div className="flex gap-3 items-center">
          <Checkbox />
          <div>5 items selected</div>
          <Button slim>
            <Trash />
            {/* Delete */}
          </Button>
        </div>
        <div className="ml-auto">
          <Button
            slim
            icon={<Filter />}
            afterIcon={<ChevronDown size={20} />}
          />
        </div>
      </div>
      <table className="w-full">
        <thead>
          <tr className="bg-slate-100">
            <th></th>
            {columns}
            {props.renderActions && (
              <th className="text-left px-3 py-2 uppercase">Actions</th>
            )}
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
      <div className="border-t-2 p-3">
        <Pagination {...pagination} />
      </div>
      {/* {pagination?.hasPagination && (
        <Pagination total={pagination.total} onChange={onPageChange} />
      )} */}
    </Card>
  );
}

export default DataGrid;
