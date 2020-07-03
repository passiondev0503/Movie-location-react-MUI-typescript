import { all, put } from "redux-saga/effects";
import { ActionType } from 'types';
import basic from 'store/app/basicSaga';
import apartment from 'store/apartment/apartmentSaga';

export default function* rootSaga() {
    yield all([
        ...basic,
        ...apartment,
    ]);
    yield put({
        type: ActionType.INIT_STORE
    });
}
