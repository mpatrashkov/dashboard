import { ReactNode } from 'react';

export interface IDataGridColumn<T> {
  dataField: keyof T & string;
  label: string;

  customTemplate?(row: T): ReactNode;
}

export interface IPaginatedData<T> {
  data: Array<T>;
  count: number;
}

export interface IGridProps<T> {
  data: Array<T> | IPaginatedData<T>;
  onPageChange?(data: { page: number; take: number; skip: number }): void;
  pageSize?: number;
}

export interface IPageInfo {
  pageIndex: number;
  pageSize: number;
  totalPages: number;
  totalItems: number;
}

export interface ISortInfo<T> {
  field: keyof T;
  direction: 'asc' | 'desc';
}

interface IInFilter<T> {
  field: keyof T;
  type: 'in';
  value: T[];
}

interface ISearchFilter<T> {
  field: keyof T;
  type: 'search';
  value: T;
}

interface IBetweenFilter<T> {
  field: keyof T;
  type: 'between';
  from: T;
  to: T;
}

export type FilterInfo<T> = IInFilter<T> | ISearchFilter<T> | IBetweenFilter<T>;

export interface IDataSourceState<T> {
  items: T[];
  pageInfo: IPageInfo;
}

export interface IDataSource<T> {
  getPage(
    pageIndex: number,
    pageSize: number,
    sorts: ISortInfo<T>[],
    filters: FilterInfo<T>[]
  ): IDataSourceState<T>;
}
