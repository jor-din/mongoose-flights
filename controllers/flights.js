import { Flight } from "../models/flight.js"


function newFlight(req, res) {
    res.render("flights/new", {
        title: "Add Flight"
    })
}

function index(req, res) {
    Flight.find({})
    .then(flights => {
        res.render('flights/index', {
            flights:flights,
            title: 'All Flights',
        })
    })
}

function create(req, res) {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key]
    }
    Flight.create(req.body)
    .then(flight => {
        console.log("Created Flight", flight)
        res.redirect('/flights')
    })
    .catch(err => {
        console.log(err)
        res.redirect('/flights')
    })
}


function show(req, res) {
    Flight.findById(req.params.id)
    .then(flight => {
        res.render('flights/show', {
            title: 'Flight Details',
            flight:flight
        })
    })
    .catch(err => {
        conslog.log(err)
        res.redirect('/flights')
    })
}

function update(req,res){
    Flight.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(flight => {
        res.redirect(`/flights/${flight._id}`)
    })
    .catch(err => {
        console.log(err)
        res.redirect('/flights')
    })
}

function deleteFlight(req,res){
    Flight.findByIdAndDelete(req.params.id)
    .then(flight => {
        res.redirect('/flights')
    })
    .catch(error => {
        console.log(error)
        res.redirect('/flights')
    })
}

function edit(req, res) {
    Flight.findById(req.params.id)
    .then(flight => {
        res.render('flights/edit', {
            title: "Edit Flight",
            flight: flight
        })
    })
    .catch(error => {
        console.log(error)
        res.redirect('/flights')
    })
}

export {
    index,
    show, 
    newFlight as new,
    create,
    deleteFlight as delete,
    edit,
    update
} 