import { getLocaleCurrencyCode } from '@angular/common';
import { LOCALE_ID } from '@angular/core';
import { Inject } from '@angular/core';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = '@angular/localize example';

  constructor(private titleService: Title) {
    this.titleService.setTitle($localize`${this.title}`);
  }
}
