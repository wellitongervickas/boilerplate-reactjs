import Axios from 'axios';

const middleware = (() => {

  /**
   * @function request
   *
   * @public
   *
  */

  const request = () => {

    const request = Axios.create();
    return request;
  }

  return {
    request,
  }
})();

export default middleware;
