import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from 'src/environments/environment';
import { BookDetail, CitationDto, CommonBookData } from './model';

const routes = {
  getSortedBooks: 'api/book/first-sorted-books',
  getSortedBooksUsingSproc: 'api/book/first-sorted-books-sproc',
  getSecondSortedBooks: 'api/book/second-sorted-books',
  getSecondSortedBooksUsingSproc: 'api/book/second-sorted-books-sproc',
  bookTotalPrice: 'api/book/total-book-price',
  chicagoCitationUrl: 'api/book/chicago-citation',
  mlaCitationUrl: 'api/book/mla-citation'
}

@Injectable({
  providedIn: 'root'
})

export class BookService {
  defaultUrl = baseUrl;
  constructor(private httpClient: HttpClient) { }

  getFirstSortedBooks = () => this.httpClient.get<BookDetail[]>(this.defaultUrl + routes.getSortedBooks);

  getFirstSortedBooksUsingSproc = () => this.httpClient.get<BookDetail[]>(this.defaultUrl + routes.getSortedBooksUsingSproc);

  getSecondSortedBooks = () => this.httpClient.get<CommonBookData[]>(this.defaultUrl + routes.getSecondSortedBooks);

  getSecondSortedBooksUsingSproc = () => this.httpClient.get<CommonBookData[]>(this.defaultUrl + routes.getSecondSortedBooksUsingSproc);

  getTotalPrice = () => this.httpClient.get<number>(this.defaultUrl + routes.bookTotalPrice)

  getChicagoCitation = (id: string) => this.httpClient.get<CitationDto>(this.defaultUrl + routes.chicagoCitationUrl + `?id=${id}`);

  getMlaCitation = (id: string) => this.httpClient.get<CitationDto>(this.defaultUrl + routes.mlaCitationUrl + `?id=${id}`);
}
