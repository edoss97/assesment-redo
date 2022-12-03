const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())


const {getPokeList, deletePoke, addPokemon, changePoke} = require('./controller')

app.get('/api/poke',getPokeList)
app.delete('/api/poke/:index', deletePoke)
app.put('/api/poke', changePoke)
app.post('/api/poke', addPokemon)

app.listen(4000, console.log("Server running on 4000"))