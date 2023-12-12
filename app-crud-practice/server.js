const express = require('express');
const MongoClient = require('mongodb').MongoClient
const app = express();
const PORT = 7000
const { ObjectId } = require('mongodb'); //require ObjectId method to use it to do the type conversion


//connect to mongodb
MongoClient.connect('mongodb+srv://diegonacho7:ktdOZFvb5Tne9JE0@star-wars.q8qddju.mongodb.net/?retryWrites=true&w=majority')
    .then(client => {
        console.log("connected to Database")
        
        const db = client.db('Tasks')  //create and name the database
        const taskCollection = db.collection('TaskCollection') //create a collection in mongodb

        app.set('view engine', 'ejs') //change engine from html to ejs

        app.use(express.static('public')) //give public access to the folder public
        app.use(express.urlencoded({extended: true})) //use urlencoded to retrieve information from the url and populate the body with it
        app.use(express.json())

        app.get('/', (req, res) => {
            taskCollection
                .find()
                .toArray()
                .then(results => {
                    res.render('index.ejs', {quotes: results})
                })
        })

        app.post('/addtask', (req,res) => {   //POST === CREATE --> handled by a form or javascript
            taskCollection
                .insertOne(req.body)
                .then(result => {
                    res.redirect('/')
                })
                .catch(err => console.error(err))
        })


        app.delete('/addtask', (req,res) => {  //handled by javascript
            taskCollection
                .deleteOne({_id: new ObjectId(req.body._id)}) 
                .then(result => {
                    res.json('Task Deleted')
                })
        })

        app.listen(PORT, () => {
            console.log(`Server running on ${PORT}`)
        })
    })
    .catch(err => console.error(err))







