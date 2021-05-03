// get all gyms by location
// https://api.yelp.com/v3/businesses/search?term='climbing gym'&location=san francisco

// get specific gym back
//https://api.yelp.com/v3/businesses/8b4xgDOH4bextUIFJ-megw

const businessId = "8b4xgDOH4bextUIFJ-megw";
const endpoint = "https://api.yelp.com/v3/businesses";

// 
export function getAllGyms(path, queryParams) {
    const query = queryString.stringify(queryParams)
    return fetch(`${API_BASE_URL}${path}?${query}`, {
        headers: {
            Authorization: `Bearer ${YELP_API}`,
            Origin: 'localhost', 
            withCredentials: true
        }
    })
}