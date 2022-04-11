"use strict";

const numberOfFilms = +prompt("How many films are you watched?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("One of your favourite movies?", "");
const b = prompt("How can you rate it?", "");
const c = prompt("One of your favourite movies?", "");
const d = prompt("How can you rate it?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);