/*
You DONT have to import the Movie with your username.
Because it's a default export we can nickname it whatever we want.
So import Movie from "./models"; will work!
You can do Movie.find() or whatever you need like normal!
*/
import Movie from "./models/Movie";

// Add your magic here!

export const homeController = async (req, res) => {
    try{
        const movies = await Movie.find({}).sort({_id: -1});
        // console.log(movies);
        res.render( "home" , {pageTitle: "Home", movies});
    }catch(error){
        console.log(error);
        res.redirect("/");
    }
};

export const movieDetail = async (req, res) => {
    const { params: {id} } = req;
    try {
        const movie = await Movie.findById( id );
        res.render( "movieDetail", {pageTitle: movie.title, movie} );
    } catch (error) {
        console.log(error);
        res.redirect("/");
    }
};

export const getCreateMovie = (req, res) => {
    res.render("create", {pageTitle: "Create"});
};

export const postCreateMovie = async (req, res) => {
    const {
        body:{
            title,
            year,
            rating,
            synopsis,
            genres
        }
    }= req;
    // console.log(req);
    try {
        const movie = await Movie.create({
            title,
            year, 
            rating, 
            synopsis, 
            genres:genres.split(",") 
        });
        // console.log(movie);
        // res.redirect("/");
        res.redirect(`/${movie._id}`);
    } catch (error) {
        console.log(error);
        res.redirect("/");
    }
};

export const getEditMovie_controller = async (req, res) => {
    const {params:{id}} = req;
    try{
        const movie = await Movie.findById(id);
        res.render( "editMovie" , {pageTitle: "Edit", movie});
    }catch(error){
        console.log(error);
        res.redirect("/");
    }
};

export const postEditMovie_controller = async (req, res) => {
    // console.log(req);
    const { body: {title, year, rating, synopsis, genres},
        params:{id} } = req;
    try{
        await Movie.findOneAndUpdate({_id:id}, {title, year, rating, synopsis, genres:genres.split(",")});
        res.redirect(`/${id}`);
    }catch(error){
        console.log(error);
        res.redirect("/");
    }
    

};

export const deleteMovie_controller = async (req, res)=>{
    const {params:{id}} = req;

    try{
        await Movie.findOneAndRemove({_id : id});
    }catch(error){
        console.log(error);
    }
    res.redirect("/");

};

export const getSearch_controller = async (req, res) => {
    // console.log(req);
    const {query: {rating, year}} = req;
    // console.log(rating);
    // console.log(year);
    let movies = [];
    let searchingBy= null;
    try {
        if(rating){
            movies = await Movie.find({rating});
            searchingBy = "Rating";
        }else if(year){
            movies = await Movie.find({year});
            searchingBy = "Year";
        }
        // console.log(movies);
    } catch (error) {
        console.log(error);
    }
    if(movies.length === 0){
        res.status(400);
    }
    res.render(`search`, {pageTitle: "Search", searchingBy, movies});
};
