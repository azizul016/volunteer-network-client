const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
require('dotenv').config();

const app = express()
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.xeryg.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const port = 4000;


client.connect(err => {
    const volunteer = client.db("volunteerNetwork").collection("volunteer");
    const activities = client.db("volunteerNetwork").collection("activities");
    console.log("db connected");

    app.post("/addVolunteer", (req, res) => {
        const volunteers = req.body;
        volunteer.insertOne(volunteers)
            .then(result => {
                console.log(result);
                res.send(result)
            })
    })

    app.get('/volunteer', (req, res) => {
        volunteer.find({})
            .toArray((err, documents) => {
                res.send(documents)
            })
    })


    app.post("/addActivities", (req, res) => {
        const activity = req.body;
        activities.insertOne(activity)
            .then(result => {
                res.send(result)
            })
    })

    app.get('/activities', (req, res) => {
        const activity = req.body;
        activities.find({ email: req.query.email })
            .toArray((err, documents) => {
                res.send(documents)
            })
    })

    //For registration
    app.get('/activity', (req, res) => {
        const activity = req.body;
        activities.find({})
            .toArray((err, documents) => {
                res.send(documents)
            })
    })

    app.delete('/delete/:id', (req, res) => {
        activities.deleteOne({ _id: ObjectId(req.params.id) })
            .then(result => {
                res.send(result.deletedCount > 0)
            })
    })


});


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(process.env.PORT || port, () => {
    console.log("Listening port 4000")
})