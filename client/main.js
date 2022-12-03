const form = document.querySelector('form')
const baseURL = `http://localhost:4000/api/poke`

const list = document.querySelector('ul')
const input = document.querySelector('input')


const addBullet = arr =>{
    list.innerHTML = ''
    arr.forEach((pokemon,index) => {
        let li = document.createElement('li')
        let pokeSpan= document.createElement('span')
        let deleteButton = document.createElement('button')
        let editButton = document.createElement('button')
        let editForm = document.createElement('form')
        let editInput = document.createElement('input')

        editForm.appendChild(editInput)
        editForm.style.display = 'none'



        li.appendChild(editForm)
        li.appendChild(pokeSpan)
        li.appendChild(editButton)
        li.appendChild(deleteButton)





        pokeSpan.textContent=pokemon
        deleteButton.textContent = "delete"
        deleteButton.id = index

        deleteButton.addEventListener('click', deletePoke)

        editButton.textContent = "update"
        editForm.id = index

        editButton.addEventListener('click', changePoke)

        
        list.appendChild(li)
  })     
};


const getPokeList = () => {
    axios.get('http://localhost:4000/api/poke')
    .then(response => { 
        addBullet(response.data)
    })
    .catch(err => console.log(err))
}


const deletePoke = evt => {
    axios.delete(`http://localhost:4000/api/poke/${evt.target.id}`)
        .then(response => {
            let { data } = response
            addBullet(data)
            console.log(data)
        })
        .catch(err => console.log(err))
}


const addPoke = evt => {
    evt.preventDefault()
    axios.post('http://localhost:4000/api/poke', {pokemon: input.value})
        .then(response => {
            let { data } = response
            addBullet(data)
            console.log(data)
        })
        .catch(err => console.log(err))
}

const changePoke = evt => {
    evt.preventDefault()
    console.log(evt.target)
    let index = evt.target.id
    let inputField = evt.target.children[0]

    let editObj = {
        index,
        pokemon: inputField.value
    }

    axios.put('http://localhost:4000/api/poke', editObj)
        .then(response => {
            let { data } = response
            addBullet(data)
        })
        .catch(err => console.log(err))
}

form.addEventListener('submit', addPoke)

getPokeList()

