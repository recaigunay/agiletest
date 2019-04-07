import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { SearchCity } from './store/actions/weather';
import * as selectors from '../weather/store/selectors/weather';
import { Summary } from '../model/weather';
import { Observable } from 'rxjs/Observable';
import { AppState } from './store';


@Component({
  selector: 'app-weather',
  template: `
  <app-search (searchedCity)="citySearch($event)"></app-search>
  <app-results [cities]="cities$ | async"></app-results>  `
})
export class WeatherContainer implements OnInit {

  cities$: Observable<Summary[]>

  constructor(private store: Store<AppState>) { }

  citySearch(city) {
    this.store.dispatch(new SearchCity(city.value));
    city.value = "";
  }

  ngOnInit() {
    this.store.dispatch({ type: 'LOAD_CITYLIST' });
    this.cities$ = this.store.select(selectors.getCityList);    
  }

}
