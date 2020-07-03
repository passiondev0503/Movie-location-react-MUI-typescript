import { RootState } from 'types';
import { ApartmentReducerType } from './apartmentReducer';
import { createSelector } from 'reselect';

export const selectApartmentState = (state: RootState, props?: any): ApartmentReducerType => {
  return state.apartment;
};

export const selectApartmentList = createSelector(
  [ selectApartmentState ],
  (apartmentState) => apartmentState.apartmentList,
);

export const selectApartmentError = createSelector(
  [ selectApartmentState ],
  (apartmentState) => apartmentState.error,
);
