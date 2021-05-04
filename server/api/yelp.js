// get all gyms by location
// https://api.yelp.com/v3/businesses/search?term='climbing gym'&location=san francisco

// get specific gym back
//https://api.yelp.com/v3/businesses/8b4xgDOH4bextUIFJ-megw

const axios = require('axios');

const businessId = "8b4xgDOH4bextUIFJ-megw";
const endpoint = "https://api.yelp.com/v3/businesses/";

// GET ALL GYMS FROM YELP
const getAllGyms = async(location) => {
    try {
        const { data } = await axios.get(
            `${endpoint}search?term='climbing gym'&location=${location}`, 
            {
                headers: {
                    Authorization: `Bearer ${process.env.YELP_API}`
                }
            }
        
        )
        return data;
    }
    catch (err) {
        console.log(err);
    }
}

// GET SINGLE GYM FROM YELP USING YELP BUSINESS ID 
const getSingleGym = async(id) => {
    try {
        const { data } = await axios.get(
            `${endpoint}${id}`, 
            {
                headers: {
                    Authorization: `Bearer ${process.env.YELP_API}`
                }
            }
        
        )
        return data;
    }
    catch (err) {
        console.log(err);
    }
}
module.exports = { getAllGyms, getSingleGym }