import fs from "fs";

export const homeController = (req, res) => {
    res.render("home", {siteName: "PDF2PNG"} );
};

export const getConvertController = (req, res)=>{
    // console.log(req);
    // res.render("convert", {siteName:"Contents", content: "123"});
};

export const postConvertController = (req, res)=>{
    // console.log(req);
    const {file:{path}} = req;
    fs.open( path , 'r', (err, fd) => {
        if (err) throw err;

        const txt = fs.readFileSync(path);
        res.render("convert", {siteName:"Contents", content: txt});
        fs.close(fd, (err) => {
          if (err) throw err;
        });
      });
    
};