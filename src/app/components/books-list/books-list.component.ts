import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BooksModel } from 'src/app/models/books.model';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {

  @Input() booksList: BooksModel[] = [];

  @Output() filterEmitter: EventEmitter<{ payload: string }> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

  onKey(event: any) {
    this.filterEmitter.emit({ payload: event.target.value });
  }

}
