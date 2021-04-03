import {AfterContentChecked, Component, Input} from '@angular/core';
import {Params} from '@angular/router';

export interface IPagination {
  page: number;
  perPage: number;
  totalPages: number;
  url: string;
  additionalParams: object;
  getQueryParams: () => { [param: string]: string | string[] };
}

export class Pagination implements IPagination {
  page = 1;
  perPage = 20;
  totalPages = 5;
  url = '';
  additionalParams = {};

  getQueryParams(): { [param: string]: string | string[] } {
    return {
      page: this.page.toString(),
      per_page: this.perPage.toString(),
      ...this.additionalParams
    };
  }
}

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements AfterContentChecked {

  @Input() pagination: IPagination = new Pagination();
  paginationPages: number[] = [];

  constructor() {
  }

  updatePaginationItems(): void {
    this.pagination.page = Number(this.pagination.page) || 1;

    const offset = 3;
    const pagination: number[] = [];
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

  getUrlParamsForPage(page: number | string): Params {
    return {
      page,
      per_page: this.pagination.perPage,
      ...this.pagination.additionalParams
    };
  }

  ngAfterContentChecked(): void {
    this.updatePaginationItems();
  }
}
