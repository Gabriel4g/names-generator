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

const arrayRamdom = [
    "Gabriel", "Gustavo", "Julio", "Ismael", "Aquino", "Geovane", "João", "Lucas",
    "Alex", "Ryan", "Bruno", "Flavio", "Francisco", "Rômulo", "Rômero", "Fabio", "Pedro",
    "Guilherme", "Izaias", "Luis", "Luan", "Jhonatan", "Eduardo", "Arthur", "Antonio", "Felipe",
    "Thiago", "Evandro", "Elton", "Iran", "Alisson", "Miguel", "Marcos", "Alexandre", "Alerrandro",
    "Eva", "Maria", "Cecilia", "Clara", "Simone", "Marie", "Margaret",
    "Valentina", "Rosa", "Nadia", "Joana", "Mary", "Anita", "Helen", "Amelia", "Naele",
    "Fernanda", "Catarina", "Carolina", "Angela", "Michelle", "Rita", "Nísia", "Lili",
    "Katharine", "Vitória", "Elizabeth", "Anne", "Ana", "Kelly", "Diana", "Maísa", "Olívia"
];

 //Função que gera os nomes automáticos.
function randomAutomaticNames(names) {
    setInterval(() => {
        const drawNames = Math.floor(Math.random() * names.length);

        nameText.innerHTML = names[drawNames]
        loadImg.style.display = "none";
    }, 2500)
}

function aployFlexdisplay(button) {
    button.style.display = "flex"
}

function loadingImg() {
    loadImg.style.animation = "load 500ms";
    loadImg.style.display = "flex";
}

const namesGenerator = () => {
    const drawNames = Math.floor(Math.random() * arrayRamdom.length);

    nameText.innerHTML = arrayRamdom[drawNames];

    nameText.classList.add("style-text");
    aployFlexdisplay(button_like);
}

  //Função que gera os nomes masculinos
const automaticGeneratorMen = () => {
    loadingImg()
    nameText.innerHTML = "";

    randomAutomaticNames(menNames)

    nameText.classList.add("style-text")

    aployFlexdisplay(button_stop);
    aployFlexdisplay(button_like);

    button_generator.style.display = "none";
    automaticButtonWomen.style.display = "none";

    automaticButtonMen.setAttribute("disabled", "disabled");
}

  //Função que gera os nomes femininos
const automaticGeneratorWomen = () => {
    loadingImg()
    nameText.innerHTML = "";

    randomAutomaticNames(womenNames);

    nameText.classList.add("style-text");

    aployFlexdisplay(button_stop);
    aployFlexdisplay(button_like);

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
