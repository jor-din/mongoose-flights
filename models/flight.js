import mongoose from "mongoose"

const Schema = mongoose.Schema

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United']
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'LAX', 'SAN']
    },
    flightNo: {
        type: Number,
        maxlength: 9999,
        minlength: 10
    },
    depart: {
        type: Date,
        default: function () {
            return new Date(+new Date() + 365*24*60*60*1000)
        }
    }}, {
        timestamps: true
})

const Flight = mongoose.model('Flight', flightSchema)

export {
    Flight
}