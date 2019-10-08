import multer from "multer";

const textMulter = multer({dest:"uploads/txt"});

// input form의 name을 넣기
export const uploadTXT = textMulter.single("txtFile");