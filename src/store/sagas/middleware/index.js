import { call } from 'redux-saga/effects';


/**
 * @function middlewareSagasUpdate
 *
 * @param { function } service
 * @param { object | string | number | boolean | null } payload
 * @public
 *
*/

export function* middlewareSagasUpdate(service, payload) {

  const request = yield call(service, payload);
  return request;
};