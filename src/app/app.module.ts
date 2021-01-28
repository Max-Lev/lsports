import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';

import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { LibraryContainerComponent } from './components/library-container/library-container.component';
import { AddBookTitleComponent } from './components/add-book-title/add-book-title.component';
import { GetBooksService } from './services/get-books.service';
import { HttpClientModule } from '@angular/common/http';
import { BooksListComponent } from './components/books-list/books-list.component';
import { BookComponent } from './components/book/book.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookDetailsComponent } from './components/book-details/book-details.component';
@NgModule({
  declarations: [
    AppComponent,
    LibraryContainerComponent,
    AddBookTitleComponent,
    BooksListComponent,
    BookComponent,
    BookDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    RippleModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    GetBooksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
