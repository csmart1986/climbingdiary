import {API_BASE_URL} from './config';
import queryString from 'query-string';
import YELP_API from './secrets';

export function get(path, queryParams) {
const query = queryString.stringify(queryParams)
return fetch(`${API_BASE_URL}${path}?${query}`, {
    headers: {
        Authorization: `Bearer ${YELP_API}`,
        Origin: 'localhost', 
        withCredentials: true
    }
})
}