import { addMovie } from "./db";

export const addRouter_home = (req, res) => {
    res.render("add");
};

export const addRouter_addMovie = (req, res) => {
    // addMovie(res)
    // console.log(req);
    addMovie(req.body);
    res.redirect("/");
};