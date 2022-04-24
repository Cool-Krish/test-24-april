const reviews = [
    {
        id:1,
        fname:"krishna",
        name:"pate",l
        job:"manager",
        img:"https://reqres.in/img/faces/7-image.jpg",
        text:"kus",
{
        id:1,
        fname:"krishna",
        name:"pate",
        job:"manager",
        img:"https://reqres.in/img/faces/7-image.jpg",
        text:"kus",
    },
    {
        id:1,
        fname:"krishna",
        name:"pate",l
        job:"manager",
        img:"https://reqres.in/img/faces/7-image.jpg",
        text:"kus",
    },
    {
        id:1,
        fname:"krishna",
        name:"pate",l
        job:"manager",
        img:"https://reqres.in/img/faces/7-image.jpg",
        text:"kus",
    },
]const indexToBeDisplayed = 1
const currentElement = reviews[indexToBeDisplayed]
console.log(currentElement)
const imageElement = document.querySelector("#image")
const fnameElement = document.querySelector(".fname")
const nameElement = document.querySelector(".name")
const jobElement = document.querySelector(".job")
const textElement = document.querySelector(".text")

fnameElement.innerText = currentElement.fname
nameElement.innerText = currentElement.name
jobElement.innerText = currentElement.job
textElement.innerText = currentElement.text
imageElement.src = currentElement.img