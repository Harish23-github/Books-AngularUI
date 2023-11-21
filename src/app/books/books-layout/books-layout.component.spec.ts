import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksLayoutComponent } from './books-layout.component';

describe('BooksLayoutComponent', () => {
  let component: BooksLayoutComponent;
  let fixture: ComponentFixture<BooksLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BooksLayoutComponent]
    });
    fixture = TestBed.createComponent(BooksLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
