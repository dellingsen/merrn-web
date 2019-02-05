export default class SvcUtil {
  getRestBaseUri() {
    return "http://"
	+ process.env.REACT_APP_REST_HOST
	+ ":" + process.env.REACT_APP_REST_PORT
	+ process.env.REACT_APP_REST_BASEURI;
  }
}
