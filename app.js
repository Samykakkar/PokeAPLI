//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
const container = document.querySelector('#container')
const baseurl ='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

for (let i = 1; i < 10; i++) {
    const newIMG = document.createElement('img')
    newIMG.src = `${baseurl}${i}.png`
    container.appendChild(newIMG)


}
