import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { BooksModel } from '../models/books.model';

@Injectable({
  providedIn: 'root'
})
export class GetBooksService {

  constructor(private httpClient: HttpClient) { };

  getBooks(): Observable<BooksModel[]> {

    const url = `/assets/books.db.json`;

    return this.httpClient.get<BooksModel[]>(url);

  }

}
