// webpack config js 에서는 모던 js안됨(babel 안먹힘)
// 그래서 옛날 js문법으로 코드를 짜야함.
// ()=>{}, export default, export, import 다 안됨

// webpack은 entry와 output을 가지고 있다.

const path = require("path");
//npm install extract-text-webpack-plugin@next
const ExtractCSS = require("extract-text-webpack-plugin");
const autoprefixer = require("autoprefixer");

// package.json에 있음
const MODE = process.env.WEBPACK_ENV;

// __dirname은 언제 어디서든 접근가능한 nodejs의 전역변수로써, 현재 dir를 표시
const ENTRY_FILE = path.resolve(__dirname, "assets", "js", "main.js");
const OUTPUT_DIR = path.join(__dirname, "static");

const config = {
    entry: ENTRY_FILE,
    mode: MODE,
    module: {
        rules: [
            {
                test: /\.(scss)$/, // scss파일을 찾으면
                use: ExtractCSS.extract(
                    // 순서가 바꾸며
                    [// 각 loader검색하면 나와요
                        {
                            loader: 'css-loader'// webpack이 css를 이해할수있게 해줌
                        },
                        {
                            loader: "postcss-loader", // 각 브라우저에 호환되게 prefix붙여줌
                            options: { // autoprefixer검색하면나와요~
                                plugin(){
                                    return [autoprefixer({ browsers: "cover 99.5%" })];
                                }
                            }
                        },
                        {
                            loader: 'sass-loader' // scss를 css로 바꿈
                        }
                ]
                ) //scss파일 만나면 어떤 loader를 실행할거냐
            }
        ]
    },
    output: {
        path: OUTPUT_DIR,
        filename: "[name].js"
    },
    plugins: [new ExtractCSS("styles.css")]
};


module.exports = config;
