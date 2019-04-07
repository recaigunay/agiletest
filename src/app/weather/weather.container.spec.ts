import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { WeatherContainer } from './weather.container';
import { AppState } from './store/index';
import { Store, StoreModule } from '@ngrx/store';
import { of } from 'rxjs/observable/of';
import { cityReducer, CityState } from './store/reducers/weather';
import { getCityList } from './store/selectors/weather';
import { BehaviorSubject, Observable } from 'rxjs';
import { WeatherService } from './weather.service';


describe('WeatherContainer', () => {
  let component: WeatherContainer;
  let fixture: ComponentFixture<WeatherContainer>;

  beforeEach(async(() => {

    let initial = {
      cityList: [{
        city: "london",
        country: "UK",
        temperature06am: 1,
        temperature12pm: 2,
        temperature06pm: 3,
        temperature12am: 4
      }], loading: false, error: ""
    }

    let appState = { city: initial };

    TestBed.configureTestingModule({
      declarations: [WeatherContainer],
      imports: [StoreModule.forRoot({}), StoreModule.forFeature('city', cityReducer)],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: []
    });

  }));


  beforeEach(() => {

    fixture = TestBed.createComponent(WeatherContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should assign city list', () => {
    // component.cities$.subscribe(cities => {
    //   console.log(cities);
    //   expect(cities[0].city).toBe("london")
    // });
  })
});


