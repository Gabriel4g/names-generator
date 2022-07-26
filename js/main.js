const container = document.querySelector("#container");
const button_generator = document.querySelector("#generator-button");
const nameText = document.querySelector("#nomes");
const button_stop = document.querySelector("#stop");
const button_like = document.querySelector("#like-name");
const automaticButtonMen = document.querySelector("#automatic-button");
const automaticButtonWomen = document.querySelector("#automatic-F");
const loadImg = document.querySelector(".loading");

const womenNames = [
    "Eva", "Maria", "Cecilia", "Clara", "Simone", "Marie", "Margaret",
    "Valentina", "Rosa", "Nadia", "Joana", "Mary", "Anita", "Helen", "Amelia", "Naele", 
    "Fernanda", "Catarina", "Carolina", "Angela", "Michelle", "Rita", "Nísia", "Lili",
    "Katharine", "Vitória", "Elizabeth", "Anne", "Ana", "Kelly", "Diana", "Maísa", "Olívia"
];

const menNames = [
    "Gabriel", "Gustavo", "Julio", "Ismael", "Aquino", "Geovane", "João", "Lucas",
    "Alex", "Ryan", "Bruno", "Flavio", "Francisco", "Rômulo", "Rômero", "Fabio", "Pedro",
    "Guilherme", "Izaias", "Luis", "Luan", "Jhonatan", "Eduardo", "Arthur", "Antonio", "Felipe",
    "Thiago", "Evandro", "Elton", "Iran", "Alisson", "Miguel", "Marcos", "Alexandre", "Alerrandro"
];

const namesGenerator = () => {
    const drawNames = Math.floor(Math.random() * menNames.length);

    nameText.innerHTML = menNames[drawNames];

    nameText.style.fontSize = "2rem";
    nameText.style.letterSpacing = "1px";
    button_like.style.display = "flex";
}
 
const automaticGeneratorMen = () => {
    loadImg.style.animation = "load 500ms";
    loadImg.style.display = "flex";
    nameText.innerHTML = "";

    setInterval(() => {
    const drawNames = Math.floor(Math.random() * menNames.length);

    nameText.innerHTML = menNames[drawNames];

    loadImg.style.display = "none"
    }, 2500);

    nameText.style.fontSize = "2rem"
    nameText.style.letterSpacing = "1px"

    button_stop.style.display = "flex";
    button_like.style.display = "flex";
    button_generator.style.display = "none";
    automaticButtonWomen.style.display = "none";

    automaticButtonMen.setAttribute("disabled", "disabled");
}

const automaticGeneratorWomen = () => {
    loadImg.style.animation = "load 500ms";
    loadImg.style.display = "flex";
    nameText.innerHTML = "";

    setInterval(() => {
    const drawNames = Math.floor(Math.random() * womenNames.length);

    nameText.innerHTML = womenNames[drawNames]
    loadImg.style.display = "none";
    }, 2500)

    nameText.style.fontSize = "2rem";
    nameText.style.letterSpacing = "1px";

    button_stop.style.display = "flex";
    button_like.style.display = "flex";
    automaticButtonMen.style.display = "none";
    button_generator.style.display = "none";

    automaticButtonWomen.setAttribute("disabled", "disabled");
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
