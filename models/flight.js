import mongoose from "mongoose";

const Schema = mongoose.Schema

const flightSchema = new Schema [
    {
        airline: String,
        airport: String,
        fightNo: Number,
        depart: Date,
    }, {
        timestamps: true
    }
]
 

export {
    Flight
}