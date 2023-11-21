import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { BookListComponent } from './book-list/book-list.component';
import { BooksLayoutComponent } from './books-layout/books-layout.component';
import { CitationComponent } from './citation/citation.component';


@NgModule({
  declarations: [BooksLayoutComponent, BookListComponent, CitationComponent],
  imports: [
    CommonModule,
    BookRoutingModule
  ]
})
export class BookModule { }
