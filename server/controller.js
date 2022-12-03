const favPokemon = ['Charizard','Mewtwo','Snorlax']


module.exports={
    getPokeList:(req,res) => {
        res.status(200).send(favPokemon)
    },
    deletePoke: (req,res) => {
        let { index } = req.params
        favPokemon.splice(index,1)
        res.status(200).send(favPokemon)
    },
    addPokemon: (req,res) => {
        // console.log(req.body)
        let {pokemon} = req.body
        favPokemon.push(pokemon)
        res.status(200).send(favPokemon)
    }, 
    changePoke: (req,res) => {
        console.log(req.body)
        let {index, pokemon} = req.body
        favPokemon.splice(index,1,pokemon)
        res.status(200).send(favPokemon)
    }
}