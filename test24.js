const reviews = [
    {
        id:1,
        fname:"krishna",
        name:"pate",l
        job:"manager",
        img:"https://reqres.in/img/faces/7-image.jpg",
        text:"kus",
   {
        id:2,
        fname:"manish",
        name:"pate",
        job:"manager",
        img:"https://reqres.in/img/faces/7-image.jpg",
        text:"kus",
    },
    {
        id:3,
        fname:"nitib",
        name:"pate",
        job:"manager",
        img:"https://reqres.in/img/faces/7-image.jpg",
        text:"kus",
    },
    {
        id:4,
        fname:"krishna",
        name:"pate",
        job:"manager",
        img:"https://reqres.in/img/faces/7-image.jpg",
        text:"kus",
    },
];

let indexToBeDisplayed = 0
const currentElement = reviews[indexToBeDisplayed]
console.log(currentElement)
const imageElement = document.querySelector("#image")
const fnameElement = document.querySelector(".fname")
const nameElement = document.querySelector(".name")
const jobElement = document.querySelector(".job")
const textElement = document.querySelector(".text")

const nextbt =document.querySelector("#next")
const prevbt = document.querySelector("#prev")

nextbt.addEventListener('click', displayNext)
prevbt.addEventListener('click', displayPrev)
 function displayNext(){
     console.log("nextbt")
 }
 function displayPrev(){
     console.log("prevbt")
 }
function updates(krishna)
{

    fnameElement.innerText = krishna.fname
    nameElement.innerText = krishna.name
    jobElement.innerText = krishna.job
    textElement.innerText = krishna.text
    imageElement.src = krishna.img

}
updates(currentElement)
