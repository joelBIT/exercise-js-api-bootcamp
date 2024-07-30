'use strict';


const body = document.querySelector('body');


/**
 * Exercise 1
 */

async function getPokemons() {
    fetch('https://majazocom.github.io/Data/pokemons.json')
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
    })
    .then((pokemons) => {
        addElementToDOM('Exercise 1');
        for (let i = 0; i < pokemons.length; i++) {
            console.log(pokemons[i]);
            addElementToDOM(pokemons[i].name);
        }  
    })
    .catch((error) => {
        console.log(error);
    });
}

function addElementToDOM(text) {
    let node = document.createElement("h2");
    node.appendChild(document.createTextNode(`${text}`));
    body.appendChild(node);
}

/**
 * Exercise 2
 */

async function getDogs() {
    fetch('https://majazocom.github.io/Data/dogs.json')
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
    })
    .then((dogs) => {
        addElementToDOM('Exercise 2');
        for (let i = 0; i < dogs.length; i++) {
            console.log(dogs[i].name);
            addElementToDOM(dogs[i].name);
        }
    })
    .catch((error) => {
        console.log(error);
    });
}

/**
 * Exercise 3
 */

async function getBooks() {
    fetch('https://majazocom.github.io/Data/books.json')
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
    })
    .then((books) => {
        addElementToDOM('Exercise 3');
        for (let i = 0; i < books.length; i++) {
            if (books[i].pages < 500) {
                addElementToDOM(books[i].title);
            }
        }
    })
    .catch((error) => {
        console.log(error);
    });
}

/**
 * Exercise 4
 */

async function getAttendees() {
    fetch('https://majazocom.github.io/Data/attendees.json')
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
    })
    .then((attendees) => {
        addElementToDOM('Exercise 4');
        for (let i = 0; i < attendees.length; i++) {
            if (attendees[i].attending) {
                addElementToDOM(attendees[i].name);
                if (attendees[i].allergies.length) {
                    addElementToDOM(attendees[i].name + ' has allergies');
                }
            }
        }
    })
    .catch((error) => {
        console.log(error);
    });
}

getPokemons();
getDogs();
getBooks();
getAttendees();