export const localMiddleware = (req, res, next) => {
    res.locals.home = "Home";
    res.locals.login = "Login";
    res.locals.photos = "Photos";
    res.locals.profile = "Profile";
    next();
};