import { ActionType } from 'types';

export const getApartmentList = () => {
  return {
    type: ActionType.APARTMENT_GET_LIST_REQUEST,
  }
}

export const getApartmentListSuccess = (payload: Array<any>) => {
  return {
    type: ActionType.APARTMENT_GET_LIST_SUCCESS,
    payload,
  }
}

export const getApartmentListFailure = (payload: string) => {
  return {
    type: ActionType.APARTMENT_GET_LIST_FAILURE,
    payload,
  }
}

