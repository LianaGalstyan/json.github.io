let request = "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json";
let movBlock = document.querySelector(".mov-block");
const xhr = new XMLHttpRequest();
xhr.open('GET', request)
console.log(xhr);
xhr.onload = () => {
    let users = JSON.parse(xhr.response);
    let usersArr = users.entries;
    let arr = usersArr.filter(e => e.programType=="series" && e.releaseYear>=2010);
    let arrSort = arr.sort((a,b) => {
        if(a.title<b.title) {
            return -1;
        } if(a.title > b.title) {
            return 1;
        }
        return 1
    })
    console.log(arrSort);
    console.log(users);

    arrSort.forEach(element => {
        let elem = document.createElement("div");
        elem.classList.add("block");
        elem.innerHTML =` <img class="image" src="${element.images['Poster Art'].url}" /> <br> <h1>${element.title}</h1> <b>(${element.releaseYear})</b>`;
        movBlock.append(elem);
    });
}
xhr.send();