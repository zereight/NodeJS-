import {
    getMovieById,
    getMovies,
    getMovieByMinimumRating,
    getMovieByMinimumYear
} from "./db";

export const home = (req, res) => {
    res.render("movies", {
        pageTitle: "Movies",
        _movies: getMovies()
    })
};
export const movieDetail = (req, res) => {
    // console.log(req.params.id);
    const movie = getMovieById(req.params.id);
    res.render("detail", {
        pageTitle: movie.title,
        movieInfo: movie
    });
};
export const filterMovie = (req, res) => {
    const {
        query: {
            year
        }
    } = req;
    const {
        query: {
            rating
        }
    } = req;
    // console.log(req);
    if (year) {
        const movie = getMovieByMinimumYear(year);
        res.render("404", {
            pageTitle: "SearchingByYear",
            movieInfos: movie,
            searchByYear: year
        })
    } else if (rating) {
        const movie = getMovieByMinimumRating(rating);
        res.render("404", {
            pageTitle: "SearchingByRating",
            movieInfos: getMovieByMinimumRating(rating),
            searchByRating: rating
        })
    } else {
        res.status(404);
    }
};