import { combineReducers } from 'redux';
import { basicReducer } from 'store/app/basicReducer';
import { apartmentReducer } from 'store/apartment/apartmentReducer';

const appReducer = combineReducers({
    basic: basicReducer,
    apartment: apartmentReducer,
});

export default (state: any, action: any) => {
    return appReducer(state, action);
}
