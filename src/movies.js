// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const arrayOfDirectors = moviesArray.map(movies => movies.director)
    return arrayOfDirectors
}

///BONUS A FAIRE +++++++++++++

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if (moviesArray.length === 0) {
        return 0
    }
    const spielbergMovies = moviesArray.filter(movie => (movie.director === "Steven Spielberg" && movie.genre.includes("Drama")))
    return spielbergMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0
    }
    const sumOfScores = moviesArray.map(movie => (movie.score)).filter(score => score).reduce((acc, value) => acc + value, 0)
    const averageScores = sumOfScores / moviesArray.length
    //console.log(`the movies score of ${moviesArray.map(movie => (movie.score))} is ${sumOfScores} for ${moviesArray.length} movies and The average is ${Number(averageScores.toFixed(2))}`);
    return Number(averageScores.toFixed(2))

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const arrayOfDramas = moviesArray.filter(movie => (movie.genre.includes("Drama")))
    if (arrayOfDramas.length === 0) {
        return 0
    }
    const sumOfScores = arrayOfDramas.map(movie => (movie.score)).reduce((acc, value) => acc + value, 0)
    const averageScores = sumOfScores / arrayOfDramas.length
    return Number(averageScores.toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    //const alphabet = moviesArray.filter(movie => movie.title).sort((a, b)=>)
    //console.log(alphabet)
    const filteredMoviesByYear = moviesArray.slice().sort((a, b) => a.year - b.year)

    return filteredMoviesByYear
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const arrayOfOrderedTitles = moviesArray.map(movie => movie.title).sort()
    return arrayOfOrderedTitles.slice(0, 20)

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    let movieWithDurationInMin = []
    moviesArray.forEach(movie => {
        let arrayOfDuration
        let durationInMinutes
        if (movie.duration.includes('h')) {
            if (movie.duration.includes('min')) {
                arrayOfDuration = movie.duration.slice(0, -3).split('h ')
                durationInMinutes = parseInt(arrayOfDuration[0]) * 60 + parseInt(arrayOfDuration[1])
            } else {
                arrayOfDuration = movie.duration.split('h ')
                durationInMinutes = parseInt(arrayOfDuration[0]) * 60
            }
        }
        if (movie.duration.includes("min") && !movie.duration.includes('h')) {
            arrayOfDuration = movie.duration.slice(0, -3)
            durationInMinutes = parseInt(arrayOfDuration)
        }

        const newMovieObj = {
            title: movie.title,
            year: movie.year,
            director: movie.director,
            duration: durationInMinutes,
            genre: movie.genre,
            score: movie.score,
        }
        movieWithDurationInMin.push(newMovieObj)
    });
    return movieWithDurationInMin
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    const arrayOfAllYears = []
    moviesArray.forEach(function (movie) {
        if (!arrayOfAllYears.includes(movie.year)) {
            arrayOfAllYears.push(movie.year)
        }
    })
    //console.log(arrayOfAllYears)

}

