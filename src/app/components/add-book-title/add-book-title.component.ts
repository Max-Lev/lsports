import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-book-title',
  templateUrl: './add-book-title.component.html',
  styleUrls: ['./add-book-title.component.scss']
})
export class AddBookTitleComponent implements OnInit, OnChanges {

  @Input() title: string;

  @Input() form: FormGroup;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.title, this.form)
  }

  ngOnInit(): void {
  }

  addTitle(): void {

  }

}
