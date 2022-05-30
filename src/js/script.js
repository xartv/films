'use strict';

/* Задание на урок:
1) Автоматизировать вопросы пользователю про фильмы при помощи цикла
2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять. (К любой строке можно обратиться как 
str.length - и получить её длину)
3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"
4) Потренироваться и переписать цикл еще двумя способами*/

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

let lastSeenMovie;
let lastSeenMovieRating;

// for (let i = 1; i < 3; i++) {
// 	question: for (let j = 1; j > 0; j++) {
// 		lastSeenMovie = prompt('Ваш последний просмотренный фильм?', '');	
// 		if (lastSeenMovie === '' || lastSeenMovie === null || lastSeenMovie.length > 50 || 
// 			lastSeenMovieRating === '' || lastSeenMovieRating === '') {
// 			continue question;
// 		} else {
// 			break question;
// 		}
// 	}
// 	lastSeenMovieRating = prompt('На сколько баллов от 1.0 до 10.0 вы бы его оценили?', '');
// 	personalMovieDB.movies[lastSeenMovie] = lastSeenMovieRating;
// }

// for (let i = 0; i < 2; i++) {
// 	question: while (true) {
// 		lastSeenMovie = prompt('Ваш последний просмотренный фильм?', '');
// 		lastSeenMovieRating = prompt('На сколько баллов от 1.0 до 10.0 вы бы его оценили?', '');	
// 		if (lastSeenMovie === '' || lastSeenMovieRating === '' || lastSeenMovie === null || lastSeenMovieRating === null || 
// 			lastSeenMovie.length > 50) {
// 			continue question;
// 		} else {
// 			break question;
// 		}
// 	}	
// 	personalMovieDB.movies[lastSeenMovie] = lastSeenMovieRating;
// }

for (let i = 1; i < 3; i++) {
	lastSeenMovie = prompt('Ваш последний просмотренный фильм?', '');	
	lastSeenMovieRating = prompt('На сколько баллов от 1.0 до 10.0 вы бы его оценили?', '');
	if (lastSeenMovie !== '' && lastSeenMovieRating !== '' && lastSeenMovie !== null && lastSeenMovieRating !== null && 
		lastSeenMovie.length < 50) {		
		personalMovieDB.movies[lastSeenMovie] = lastSeenMovieRating;
	} else {
		i--;
	}	
}


if (personalMovieDB.count < 10) {
	alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
	alert('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
	alert('Вы киноман');
} else {
	alert('Произошла ошибка');
}

console.log(personalMovieDB);