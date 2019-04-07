import * as weatherActions from '../actions/weather';
import { Summary } from '../../../model/weather';
import * as fromRoot from '../index';

export interface CityState {
    cityList: Summary[],
    loading: boolean,
    loaded: boolean,
    error: string
}

const initialState: CityState = {
    cityList: [],
    loading: false,
    loaded: true,
    error: ""
}

export function cityReducer(state = initialState, action: weatherActions.Action): CityState {

    switch (action.type) {
        case weatherActions.WeatherActionTypes.LOAD_CITYLIST: {
            return {
                ...state,
                loading: true,
                loaded: false
            }
        }
        case weatherActions.WeatherActionTypes.LOAD_CITYLIST_SUCCESS: {
            return {
                ...state,
                loading: false,
                loaded: true,
                cityList: action.payload
            }
        }
        case weatherActions.WeatherActionTypes.LOAD_CITYLIST_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: false,
                error: action.payload
            }
        }
        case weatherActions.WeatherActionTypes.SEARCH_CITY: {

            return {
                ...state,
                loading: true,
                loaded: false
            }
        }
        case weatherActions.WeatherActionTypes.SEARCH_CITY_SUCCESS: {
            const data: Summary = action.payload;
            state.cityList.push(data);
            return {
                ...state,
                loading: false,
                loaded: true
            }
        }
        case weatherActions.WeatherActionTypes.SEARCH_CITY_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: false,
                error: action.payload
            }
        }

        default: {
            return state;
        }
    }
}

