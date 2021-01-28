import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BooksModel as BookModel } from 'src/app/models/books.model';
import { GetBooksService } from 'src/app/services/get-books.service';

@Component({
  selector: 'app-library-container',
  templateUrl: './library-container.component.html',
  styleUrls: ['./library-container.component.scss']
})
export class LibraryContainerComponent implements OnInit {

  booksList: BookModel[] = [];

  private booksListCached: BookModel[] = [];

  bookForm: FormGroup;

  constructor(private getBooksService: GetBooksService, private formBuilder: FormBuilder) {
    this.initForm();
  }

  ngOnInit(): void {
    this.getBooks$();
    this.bookForm.valueChanges.subscribe(v => {
      console.log(v);
    })
  }

  initForm() {
    this.bookForm = this.formBuilder.group({
      title: new FormControl('', [Validators.required]),
      author: new FormControl('', [Validators.required]),
      bookName: new FormControl('', [Validators.required]),
      publicationDate: new FormControl('', [Validators.required]),
      coverPhoto: new FormControl('', [Validators.required]),
      catalogNumber: new FormControl('', [Validators.required]),
    });

  }

  getBooks$(): void {

    this.getBooksService.getBooks().subscribe((books: BookModel[]) => {
      this.booksList = [...books];
      this.booksListCached = [...books];
    });

  }

  filterAction(action: { payload: string }): void {

    this.booksList = this.booksListCached.filter((book: BookModel) => {
      if (action.payload === '') {
        return book;
      }
      else {
        if (book.bookName.toLowerCase().startsWith(action.payload.toLowerCase())) {
          return book;
        }
      }
    });
  }

}
