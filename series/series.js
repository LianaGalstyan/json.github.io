let serieBlock = document.querySelector(".serie-block");
let request = "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json";
const xhr = new XMLHttpRequest();
xhr.open('GET', request)
console.log(xhr);

xhr.onload = () => {
    let users1 = JSON.parse(xhr.response);
    let usersArr1 = users1.entries;
    let arr1 = usersArr1.filter(e => e.programType=="movie" && e.releaseYear>=2010);
    let arrSort1 = arr1.sort((a,b) => {
        if(a.title<b.title) {
            return -1;
        } if(a.title > b.title) {
            return 1;
        }
        return 1
    })
    console.log(arrSort1);
    console.log(users1);

    arrSort1.forEach(element => {
        let elem1 = document.createElement("div");
        elem1.classList.add("block");
        elem1.innerHTML =` <img class="image" src="${element.images['Poster Art'].url}" /> <br> <h1>${element.title}</h1> <b>(${element.releaseYear})</b>`;
        serieBlock.append(elem1);
    });
}
xhr.send();