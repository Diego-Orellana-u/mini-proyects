const express = require('express');
const app = express();

const PORT = 8000;

const rappers = {
    "21 savage": {
        'age': 39,
        'birthName': "pedro",
        'chumi?': "pompiash"
    },
    "pompitash":{
        'age': 44,
        'pommmm': "carcel"
    }
}



app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req,res) => {
    const name = req.params.name.toLowerCase()
    if(rappers[name]){
        res.json(rappers[name])
    }
})

app.listen(PORT, () => {
    console.log(`Listening in ${PORT}`)
})

