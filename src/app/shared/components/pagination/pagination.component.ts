import {AfterContentChecked, Component, Input, OnInit} from '@angular/core';

export interface IPagination {
  page: number;
  perPage: number;
  totalPages: number;
  url: string;
  additionalParams: object;
}

export class Pagination implements IPagination {
  page = 1;
  perPage = 20;
  totalPages = 5;
  url = '';
  additionalParams = {};
}

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, AfterContentChecked {

  @Input() pagination: IPagination = new Pagination();
  paginationPages: number[] = [];

  constructor() {
  }

  ngOnInit(): void {

  }

  updatePaginationItems(): void {
    const offset = 3;
    const pagination: number[] = [];
    this.pagination.page = Number(this.pagination.page);

    const startPage = this.pagination.page - offset > 1 ? this.pagination.page - offset : 1;
    const endPage = this.pagination.page + offset <= this.pagination.totalPages
      ? this.pagination.page + offset
      : this.pagination.totalPages;

    for (let i: number = startPage; i <= endPage; i++) {
      pagination.push(i);
    }

    this.paginationPages = pagination;
  }

  getUrlForPage(): string {
    return this.pagination.url;
  }

  getUrlParamsForPage(page: number | string): object {
    return {
      page,
      ...this.pagination.additionalParams
    };
  }

  ngAfterContentChecked(): void {
    this.updatePaginationItems();
  }
}
