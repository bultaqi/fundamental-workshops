import {Movie} from "./Movie.js";
import {listOfMovies} from "./MovieDataProvider.js"



let movieContainer = document.querySelector("#movie-container")

export function movieList() {
    const allTheMovies = listOfMovies()
    
    let loopForhtml = "";

    for (const currentMovieInLoop of allTheMovies) {
        loopForhtml += Movie(currentMovieInLoop)
    }

    movieContainer.innerHTML = `${loopForhtml}`
}