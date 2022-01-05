import { Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'contant-preview',
  templateUrl: './contant-preview.component.html',
  styleUrls: ['./contant-preview.component.scss']
})
export class ContantPreviewComponent implements OnInit {

  @Input() contact: Contact
  @Output() onRemove = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }
}
