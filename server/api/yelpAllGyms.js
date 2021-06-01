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
const getNotes = (businesses) => {
    // pull out the businessId for each gym and add value to businessIdArr
    const businessIdArr = [];
    businesses.forEach(businessObj => {
        businessIdArr.push(businessObj['id'])
    })
    try {
        // get the user's notes for only the gyms that are found in the gym array  
        const notes = Note.findAll({
            where: {
                businessId: {[Op.in]: businessIdArr}
            }
        })
        // console.log('notes: ', notes)
        // if no notes are found for the gyms in the gym list... 
        if (notes.length < 1) {
            return 'You have no notes created for gyms in this location'
        }
        else {
           return notes;
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
        if (data.businesses.length < 1) return 'No gyms found'
        return data.businesses;
    }
    catch (err) {
        console.log(err);
    }
}

// COMBINE ANY NOTES WITH GYM SEARCH RESULTS
const combineNotesGyms = async (location) => {
    try {
        const gyms = await getAllGyms(location)
        const gymNotes = await getNotes(gyms);
        gyms.forEach(gymObj => {
            for (let i = 0; i < gymNotes.length; i++) {
                const currNote = gymNotes[i];
                if (gymObj['id'] === currNote['dataValues']['businessId']) {
                    gymObj['Notes'] = currNote['dataValues'];
                }
            }
        });
        // return merged notes/gyms array
        return gyms;
    } catch (error) {
        console.log(error)
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
module.exports = { combineNotesGyms }