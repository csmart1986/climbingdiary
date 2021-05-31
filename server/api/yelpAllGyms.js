const Note  = require('../db/note');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const axios = require('axios');
// get all gyms by location
// https://api.yelp.com/v3/businesses/search?term='climbing gym'&location=san francisco

// get specific gym back
//https://api.yelp.com/v3/businesses/8b4xgDOH4bextUIFJ-megw

const businessId = "8b4xgDOH4bextUIFJ-megw";
const endpoint = "https://api.yelp.com/v3/businesses/";

// GET ALL GYM NOTES that belong to logged in user 
const getNotes = async (businesses) => {
    const businessIdArr = [];
    businesses.forEach(businessObj => {
        businessIdArr.push(businessObj['id'])
    })
    try {
        const notes = await Note.findAll({
            where: {
                businessId: {[Op.in]: businessIdArr}
            }
        })
        console.log('notes: ', notes)
        if (notes.length < 1) {
            console.log('You have no notes created for gyms in this location')
        }
        else {
           res.send(notes);
        }
    }
    catch (error) {
        console.log(error)
    }
}


// GET ALL GYMS FROM YELP BY LOCATION
const getAllGyms = async(location) => {
    try {
        const { data, status } = await axios.get(
            `${endpoint}search?term='climbing gym'&location='${location}'`, 
            {
                headers: {
                    Authorization: `Bearer ${process.env.YELP_API}`
                }
            }  
        )
        // get all notes by logged in user for returned gyms list
        getNotes(data.businesses);
        return data.businesses;
    }
    catch (err) {
        console.log(err);
    }
}




// GET SINGLE GYM FROM YELP USING YELP BUSINESS ID 
// const getSingleGym = async(id) => {
//     try {
//         const { data } = await axios.get(
//             `${endpoint}${id}`, 
//             {
//                 headers: {
//                     Authorization: `Bearer ${process.env.YELP_API}`
//                 }
//             }        
//         )
//         return data;
//     }
//     catch (err) {
//         console.log(err);
//     }
// }
module.exports = { getAllGyms }