import Axios from 'axios';

/**
 * @function request
 *
 * @public
 *
*/

const requestMiddleware = () => {

  const request = Axios.create();
  return request;
}

export default {
  requestMiddleware
}

