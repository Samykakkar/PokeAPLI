//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
const container = document.querySelector('#container')
const baseurl ='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

for (let i = 1; i < 10; i++) {
    const pokemon =document.createElement('div')
    const label =document.createElement('span')
    pokemon.classList.add('pokemon')
    label.innerText=`#${i}`
    const newIMG = document.createElement('img')
    newIMG.src = `${baseurl}${i}.png`
    pokemon.appendChild(newIMG)
    pokemon.appendChild(label)
    container.appendChild(pokemon)

}
