import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AppState } from './store';
import { SearchCity } from './store/actions/weather';
import * as selectors from '../weather/store/selectors/weather';
import { Summary } from '../model/weather';

@Component({
  selector: 'app-weather',
  template: `
  <app-search (searchValue)="citySearch($event)"></app-search>
  <app-results [cityList]="cityList$ | async"></app-results>  `
})
export class WeatherContainer implements OnInit {

  cityList$: Observable<Summary[]>

  constructor(private store: Store<AppState>) { }

  citySearch(event) {
    this.store.dispatch(new SearchCity(event.value));
    event.value = "";
  }

  ngOnInit() {
    this.store.dispatch({ type: 'SEARCH_CITY' });
    this.cityList$ = this.store.select(selectors.getCityList);    
  }
}
