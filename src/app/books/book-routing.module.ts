import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitationComponent } from './citation/citation.component';
import { BooksLayoutComponent } from './books-layout/books-layout.component';

const routes: Routes = [
  {
    path: '',
    component: BooksLayoutComponent
  },
  {
    path: 'citation/:id/:type',
    component: CitationComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
