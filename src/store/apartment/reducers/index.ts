import { Action } from 'types';
import { ApartmentReducerType } from '../apartmentReducer';

export const getApartmentListSuccessReducer = (
  state: ApartmentReducerType,
  { payload }: Action<Array<any>>,
): ApartmentReducerType => {
  return {
    ...state,
    apartmentList: payload,
    error: undefined,
  };
};

export const getApartmentListFailureReducer = (
  state: ApartmentReducerType,
  { payload }: Action<string>,
): ApartmentReducerType => {
  return {
    ...state,
    apartmentList: [],
    error: payload,
  };
};
