import { getLocaleCurrencyCode } from '@angular/common';
import { Inject } from '@angular/core';
import { LOCALE_ID } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  localeCurrencyCode = `${getLocaleCurrencyCode(this.locale)}`;

  constructor(@Inject(LOCALE_ID) public locale: string) {}

  ngOnInit() {}
}
