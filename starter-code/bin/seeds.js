const app = require('../app')
const mongoose = require('mongoose')
const Celeb = require('../models/celebrity'); 

CelebrityModel.insertMany([ 
        { name: 'Belen Esteban', ocupation: 'Colaboradora', catchPrase: 'Andreita, comete el pollo' },
        { name: 'Ylenia Padilla', ocupation: 'Concursanta', catchPrase: 'Uff, perdona' },
        { name: 'Isabel Pantoja', ocupation: 'Folclorica', catchPrase: 'Dientes, dientes que eso es lo que le jode' }
])
    .then(() => {
        mongoose.connection.close()
            .then(() => {
                console.log('Heyy connection is closed!')
            })
    }) 