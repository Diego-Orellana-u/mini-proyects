// Notes:
// -When installing nodemon, paste ("dev": "nodemon server.js") into scripts in package.json to be able to run the server with npm run dev


const express = require('express')   //importing express modules
const app = express()  //defining app method
const MongoClient = require('mongodb').MongoClient
const connectionString = 'mongodb+srv://diegoorellanagit:Lacosa1313@star-wars.q8qddju.mongodb.net/?retryWrites=true&w=majority'


//Fifth Step: connect to mongodb with .connect method. connectionString is a variable that contains our password and username to connect
MongoClient.connect(connectionString)
    .then(client => {
        console.log('connected to DataBase')
        const db = client.db('star-wars-quotes')

        //Sixth Step: create collecion to store all the quotes. Collections are like boxes and the database is the room where you put them
        const quotesCollection = db.collection('quotes')

        //Seventh Step: we install ejs to use a template engine to show dinamically the content of the database
        //then we tell express with app.use that we are going to use a template engine. This has to go above all the other app.use, app.get, app.post
        app.set('view engine','ejs')
        

        //Fourth Step: use urlencoded method to read form 
        app.use(express.urlencoded({extended: true})) //previously body-parser module, now express have built-in methods like urlencoded
        app.use(express.static('public')) //this tell express to make the public folder accessible to the public
        app.use(express.json())

       
        //First Step: Create server
        app.listen(8000, function(){
            console.log("listening in 8000")
        })

        //Second Step: set up read request => app.get(endpoint,callback) -> endpoint is the value that comes after the domain name
        app.get('/', (req,res) =>{
            quotesCollection
            .find()
            .toArray()
            .then(results =>{
                res.render('index.ejs',{quotes: results})
            })
            .catch(err => console.error(err))
        })

        //Third Step: set up create request => app.post() can be triggered through JavaScript or a <form> tag in html. In this case we will use form tag
        //the syntax of the post method is similar to the get method. The path should be the value that is in the action attribute in the form tag
        app.post('/quotes', (req,res) =>{
            quotesCollection
            .insertOne(req.body) //with this we insert the object retrieved from the form to the database
            .then(result => {
                res.redirect('/')
            })
        })
        app.put('/quotes',(req,res) =>{
            quotesCollection.findOneAndUpdate(
                {name: 'Yoda'}, 
                {
                $set: {
                    name: req.body.name,
                    quote: req.body.quote,
                },
            },
            {upsert: true}
            )
        .then(result =>{
            res.json("success")
        })
        .catch(err => console.error(err))
        })

        app.delete('/quotes', (req, res) => {
            quotesCollection
            .deleteOne({name: req.body.name})
            .then(result =>{
                if(result.deletedCount === 0){
                    return res.json('No quote to delete')
                }
                res.json('Deleted Darth Vader Quote')
            })
            .catch(error => console.error(error))
        })
    })
    





 

