import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';
import { CitationDto } from '../model';

@Component({
  selector: 'app-citation',
  templateUrl: './citation.component.html',
  styleUrls: ['./citation.component.css']
})
export class CitationComponent implements OnInit {
  bookId: string;
  citationType: string;
  citation: CitationDto;
  constructor(private activatedRoute: ActivatedRoute,
              private bookService: BookService,
              private router: Router) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(res => {
      if (res) {
        this.bookId = res['id'];
        this.citationType = res['type']
      }
    })
    this.getCitation();
  }

  getCitation() {
    if (this.citationType === "chicago") {
      this.bookService.getChicagoCitation(this.bookId).subscribe(res => {
        if (res) {
          this.citation = res;
        }
      })
    }
    if (this.citationType === "mla") {
      this.bookService.getMlaCitation(this.bookId).subscribe(res => {
        if (res) {
          this.citation = res;
        }
      })
    }
  }

  back() {
    this.router.navigate([`../../`]);
  }
}
