"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt("How many films are you watched?", "");
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("How many films are you watched?", "");
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt("One of your favourite movies?", "").trim(),
                  b = prompt("How can you rate it?", "");
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log("Done");
            } else {
                console.log("This is error");
                i--;
            }
                  
        }
    },
    detectFilmsLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log("Not so many movies");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("You are cool guy!");
        } else if (personalMovieDB.count >= 30) {
            console.log("WOW!");
        } else {
            console.log("Error");
        }
    },
    showMyDatabases: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i < 4; i++) {
            const genre = prompt(`Your favourite genre with number ${i}`);
            
            if (genre === '' || genre == null) {
                console.log('You entered incorrect data');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
            
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Your favourite genre with number ${i + 1} is ${item}`);
        });
    }
};
