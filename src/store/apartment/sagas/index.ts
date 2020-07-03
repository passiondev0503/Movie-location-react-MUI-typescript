import { put, takeLatest, select, call, all, delay } from 'redux-saga/effects';
import {
  ActionType,
} from 'types';
import {
  apiUrl,
  apiOptions,
  ApiMethod,
  logger,
  fieldIsEmpty,
  GeocodeApiUrl,
  GeocodeApiKey,
} from 'utils';
import { getApartmentListFailure, getApartmentListSuccess } from '../actions';

function* getApartmentList() {
  try {
    delay(500);

    const items = yield call(() =>
      fetch(apiUrl)
      .then((res) => res.json())
      .then((res) => res),
    );
    yield put(getApartmentListSuccess(items));
  } catch (error) {
    yield put(getApartmentListFailure(error));
  }
}


export function* apartmentWatcher() {
  yield takeLatest(ActionType.APARTMENT_GET_LIST_REQUEST as any, getApartmentList);
}
