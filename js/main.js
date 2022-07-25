const container = document.querySelector("#container");
const button_generator = document.querySelector("#generator-button");
const nameText = document.querySelector("#nomes");
const button_stop = document.querySelector("#stop");
const button_like = document.querySelector("#like-name");
const automatic_button = document.querySelector("#automatic-button");
const loadImg = document.querySelector(".loading");

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

    nameText.style.fontSize = "2rem";
    nameText.style.letterSpacing = "1px";
    button_like.style.display = "flex";
}

const automaticGenerator = () => {
    loadImg.style.animation = "load 500ms";
    loadImg.style.display = "flex";
    nameText.innerHTML = "";

    setInterval(() => {
    const drawNames = Math.floor(Math.random() * names.length);

    nameText.innerHTML = names[drawNames];

    loadImg.style.display = "none"
    }, 2500);

    nameText.style.fontSize = "2rem"
    nameText.style.letterSpacing = "1px"

    button_stop.style.display = "flex";
    button_like.style.display = "flex";
    button_generator.style.display = "none";

    automatic_button.setAttribute("disabled", "disabled");
}

const likeFromName = () => {
    let likedName = [];
    alert(`Você gostou de ${nameText.innerHTML}`);
    
    likedName.push(nameText.innerHTML);

    console.log(likedName);
}

const stopAutomatic = () => {
    location.reload();
}
