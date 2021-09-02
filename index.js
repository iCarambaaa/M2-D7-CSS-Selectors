/*
    JS Exercises
    EX11) Write a function to add a new link into the navbar
    EX12) Write a function to change the color of the main title
    EX13) Write a function to change the background of the jumbotron
    EX14) Write a function to remove all the links under "Elsewhere"
    EX15) Write a function to change the column size for heading in jumbotron
    EX16) Write a function to remove the "Search" magnifying glass icon
    EX17) Write a function to trim just the first 50 characters in the first paragraph for each blog post
    EX18) Write a function and attach it to the "Newer" button, to add new Blog Post (just div and title)
    EX19) Write a function and attach it to the "Older" button, to remove the last Blog Post
    EX20)                      
*/


//   EX11) Write a function to add a new link into the navbar

let addLinkToNav = function () {
    let nav = document.querySelector("nav")
    let item = document.createElement("a")
    item.setAttribute("class", "p-2")
    item.setAttribute("class", "text-muted")
    item.setAttribute("href", "#")
    item.innerText = "new item"
    nav.appendChild(item)
}

// EX12) Write a function to change the color of the main title

let changeColorH1 = function () {
    let h1 = document.querySelector("h1")
    h1.style.color = "green"
}

//EX13) Write a function to change the background of the jumbotron

let changeJumBg = function () {
    let jum = document.querySelector("div .jumbotron")
    jum.classList.remove("bg-dark")
    jum.classList.add("jumbg")
}

//EX14) Write a function to remove all the links under "Elsewhere"

let removeLinks = function(){
    let remove = document.querySelector("aside div:last-of-type > ol")
    remove.innerHTML = ""
}

// body > main > div > aside > div:nth-child(3) > ol


// EX15) Write a function to change the column size for heading in jumbotron

let changeSize = function(){
    let size = document.querySelector(".jumbotron > .col-md-6")
    size.classList.remove("col-md-6")
    size.classList.add("col-md-4")
}

//  EX16) Write a function to remove the "Search" magnifying glass icon

let removeIcon = function() {

}