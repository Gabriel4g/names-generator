const container = document.querySelector("#container");
const button_generator = document.querySelector("#generator-button");
const nameText = document.querySelector("#nomes");
const button_stop = document.querySelector("#stop");

const names = [
    "Gabriel", "Gustavo", "Julio", "Ismael", "Aquino", "Geovane", "João", "Lucas",
    "Alex", "Ryan", "Bruno", "Flavio", "Francisco", "Rômulo", "Rômero", "Fabio", "Pedro",
    "Guilherme", "Izaias", "Luis", "Luan", "Jhonatan", "Eduardo", "Arthur", "Antonio", "Felipe",
    "Thiago", "Evandro", "Eva", "Maria", "Cecilia", "Clara", "Simone", "Marie", "Margaret",
    "Valentina", "Rosa", "Nadia", "Joana", "Mary", "Anita", "Helen", "Amelia", "Naele", "Fernanda",
    "Catarina", "Carolina", "Angela", "Michelle"
];

const namesGenerator = () => {
    const drawNames = Math.floor(Math.random() * names.length);

    nameText.innerHTML = names[drawNames];

    /* setTimeout(() => {
        alert(`Você gerou ${names[drawNames]}`)
    }, 200) */

    nameText.style.fontSize = "2rem"
    nameText.style.letterSpacing = "1px"
}
 
const automaticGenerator = () => {
    nameText.innerHTML = ""

    setInterval(() => {
    const drawNames = Math.floor(Math.random() * names.length);

    nameText.innerHTML = names[drawNames];
    }, 2000);

    nameText.style.fontSize = "2rem"
    nameText.style.letterSpacing = "1px"

    button_stop.style.display = "block"
}

const stopAutomatic = () => {
    location.reload()
}
