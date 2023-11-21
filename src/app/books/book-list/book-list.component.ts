import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Router } from '@angular/router';
import { Constants } from 'src/app/Constants';
import { BookDetail, CommonBookData } from '../model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  constants = Constants;
  showFirstOrderBooks: boolean = false;
  firstOrderBooks: BookDetail[] = [];
  showFirstOrderBooksUsingSproc: boolean = false;
  firstOrderBooksUsingSproc: BookDetail[] = [];
  showSecondOrderBooks: boolean = false;
  secondOrderBooks: CommonBookData[] = [];
  showSecondOrderSortedBooksUsingSproc: boolean = false;
  secondOrderSortedBooksUsingSproc: CommonBookData[] = [];
  showTotalPrice: boolean = false;
  totalPrice: number = 0;

  constructor(private bookService: BookService,
    private routerService: Router) { }

  redirectToCitation(citationType: string, id: string) {
    this.routerService.navigate([`citation/${id}/${citationType}`]);
  }

  OnClickEvent(name: string) {
    this.resetPage();
    switch (name) {
      case this.constants.firstSortedBooks:
        this.showFirstOrderBooks = true;
        this.bookService.getFirstSortedBooks().subscribe(res => {
          if (res) {
            this.firstOrderBooks = res;
          }
        }, error => {
          console.error(error);
        })
        break;
      case this.constants.firstSortedBooksUsingSproc:
        this.showFirstOrderBooksUsingSproc = true;
        this.bookService.getFirstSortedBooksUsingSproc().subscribe(res => {
          if (res) {
            this.firstOrderBooksUsingSproc = res;
          }
        }, error => {
          console.error(error);
        })
        break;
      case this.constants.secondSortedBooks:
        this.showSecondOrderBooks = true;
        this.bookService.getSecondSortedBooks().subscribe(res => {
          if (res) {
            this.secondOrderBooks = res;
          }
        }, error => {
          console.error(error);
        })
        break;
      case this.constants.secondSortedBooksUsingSproc:
        this.showSecondOrderSortedBooksUsingSproc = true;
        this.bookService.getSecondSortedBooks().subscribe(res => {
          if (res) {
            this.secondOrderSortedBooksUsingSproc = res;
          }
        }, error => {
          console.error(error);
        })
        break;
      case this.constants.totalPrice:
        this.showTotalPrice = true;
        this.bookService.getTotalPrice().subscribe(res => {
          if (res) {
            this.totalPrice = res;
          }
        }, error => {
          console.error(error);
        })
        break;
    }
  }

  resetPage() {
    this.firstOrderBooks = [];
    this.showFirstOrderBooks = false;
    this.firstOrderBooksUsingSproc = [];
    this.showFirstOrderBooksUsingSproc = false;
    this.showSecondOrderBooks = false;
    this.secondOrderBooks = [];
    this.showFirstOrderBooksUsingSproc = false;
    this.secondOrderSortedBooksUsingSproc = [];
    this.showTotalPrice = false;
    this.totalPrice = 0;
  }
}
