import {
  ActionType, FieldErrors,
} from 'types';
import createReducer from 'store/config/createReducer';
import { getApartmentListSuccessReducer, getApartmentListFailureReducer } from './reducers';

export interface ApartmentReducerType {
  apartmentList: Array<any>;
  error?: any;
}

export const defaultState: ApartmentReducerType = {
  apartmentList: [],
  error: undefined,
}

export const apartmentReducer = createReducer<ApartmentReducerType>(defaultState, {
  [ActionType.APARTMENT_GET_LIST_SUCCESS]: getApartmentListSuccessReducer,
  [ActionType.APARTMENT_GET_LIST_FAILURE]: getApartmentListFailureReducer,
});
