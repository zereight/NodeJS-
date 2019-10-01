import { getMovieById, getMovies } from "./db";

export const home = (req, res) =>
    res.render("movies", { movies: getMovies(), pageTitle: "Movies!" });

export const movieDetail = (req, res) => {
    const {
        params: { id }
    } = req;
    const movie = getMovieById(id);
    if (!movie) {
        return res.render("404", { pageTitle: "Movie not found" });
    }
    console.log(movie.title);
    return res.render("detail", { pageTitle: movie.title, movie: movie });
};

/*
Write the controller or controllers you need to render the form
and to handle the submission
*/