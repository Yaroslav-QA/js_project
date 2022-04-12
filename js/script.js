"use strict";

const numberOfFilms = +prompt("How many films are you watched?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// const a = prompt("One of your favourite movies?", "");
// const b = prompt("How can you rate it?", "");
// const c = prompt("One of your favourite movies?", "");
// const d = prompt("How can you rate it?", "");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

for (let i = 0; i < 2; i++) {
    const a = prompt("One of your favourite movies?", ""),
          b = prompt("How can you rate it?", "");

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log("Done");
    } else {
        console.log("This is error");
        i--;
    }
          
}

if (personalMovieDB.count < 10) {
    console.log("Not so many movies");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("You are cool guy!");
} else if (personalMovieDB.count >= 30) {
    console.log("WOW!");
} else {
    console.log("Error");
}



console.log(personalMovieDB);