import { Component, ViewChild } from '@angular/core';
import { BookListComponent } from '../book-list/book-list.component';
import { Constants } from 'src/app/Constants';

@Component({
  selector: 'app-books-layout',
  templateUrl: './books-layout.component.html',
  styleUrls: ['./books-layout.component.css']
})
export class BooksLayoutComponent {
  isHomePage: boolean = true;
  constants = Constants;
  @ViewChild(BookListComponent) bookListComponent: BookListComponent;

  onButtonClick(eventTitle: string) {
    this.isHomePage = false;
    this.bookListComponent.OnClickEvent(eventTitle);
  }
}
