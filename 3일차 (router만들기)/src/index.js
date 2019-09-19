import express from "express";

const app = express();
const my_routers = express.Router();
// Codesanbox does not need PORT :)

// middle wares
const print_console = (req, res, next) => {
    console.log("I'm a middleware");
    next();
};
const blocking_protected = (req, res, next) => {
    // console.log(req);
    const { originalUrl: _url } = req;
    // console.log(_url);
    if (_url === "/protected") {
        res.redirect("/");
    }
    next();
};

// routes
my_routers.get("/", (req, res) => {
    res.send("Home");
});
my_routers.get("/about-us", (req, res) => {
    res.send("About Us");
});
my_routers.get("/contact", (req, res) => {
    res.send("Contact");
});
my_routers.get("/protected", (req, res) => {
    //
});


app.use(print_console);
app.use(blocking_protected);

app.use(my_routers);

app.listen(4000, () => console.log(`Listening!`));