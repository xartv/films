'use strict';
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

let a = prompt('Ваш последний просмотренный фильм?', '');
let b = prompt('На сколько баллов от 1.0 до 10.0 вы бы его оценили?', '');
let c = prompt('Ваш последний просмотренный фильм?', '');
let d = prompt('На сколько баллов от 1.0 до 10.0 вы бы его оценили?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);