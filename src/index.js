console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";
let breedArr;


document.addEventListener("DOMContentLoaded", fetchDogs);
document.addEventListener("DOMContentLoaded", fetchBreeds);


function fetchDogs() {
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(data => {
        let dog = data.message;
        dog.forEach((image) =>{
            let div = document.querySelector("#dog-image-container");
            let dogPic = document.createElement("img");
            dogPic.src= image;
            div.append(dogPic);
        })
    });
}

function fetchBreeds() {
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(data => {
        let breed = data.message;
        breedArr =Object.keys(breed);
        breedArr.forEach(type => {
            let ul = document.querySelector("#dog-breeds");
            let li = document.createElement("li");
            li.addEventListener("click", event => {
                event.target.style.color = "blue";
            })
            li.innerText = type;
            ul.appendChild(li);
        })
        
    })
}




const dropdown = document.querySelector("#breed-dropdown");
dropdown.addEventListener("change", filterLetter);
  
function filterLetter(event) {
    let letter= event.target.value;
    
    let filteredBreeds = breedArr.filter(el => {
        return el[0] ===letter;
    });

    let ul = document.querySelector("#dog-breeds"); 
    ul.innerHTML = "";
    
    filteredBreeds.forEach(element => {
        let ul = document.querySelector("#dog-breeds");
        let liNew = document.createElement("li");
        liNew.innerText = element;
        liNew.addEventListener("click", event => {
            event.target.style.color = "blue";
        })
        ul.appendChild(liNew);

    })
}   

