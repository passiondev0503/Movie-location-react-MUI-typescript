import { BasicReducerType } from 'store/app/basicReducer';
import { ApartmentReducerType } from 'store/apartment/apartmentReducer';

export interface RootState {
    basic: BasicReducerType;
    apartment: ApartmentReducerType;
}
