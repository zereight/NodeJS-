// res.send가 아니고 res.render를 사용함으로써 같은 폴더내의 view engine 인 pug를 불러온다.
// 단, views 폴더는 package.json과 같은 level의 위치에 있어야한다.
export const global_controller = (req, res) => {
    res.render("home", { pageTitle: "Home" });
};
export const login_controller = (req, res) => {
    res.render("login", { pageTitle: "Login" });
};
export const photos_controller = (req, res) => {
    res.render("photos", { pageTitle: "Photos" });
};
export const profile_controller = (req, res) => {
    res.render("profile", { pageTitle: "Profile" });
};