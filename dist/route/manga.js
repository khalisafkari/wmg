"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const manga_1 = require("../manga");
const app = express_1.Router();
app.route('/manga')
    .get((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield manga_1.Home.Home({});
        res.status(200).send(data);
    }
    catch (error) {
        res.status(404).send({ code: 404, message: 'limit' });
    }
}));
app.route('/manga/:page')
    .get((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const page = Number(req.params.page);
        const data = yield manga_1.Home.Home({ page });
        res.status(200).send(data);
    }
    catch (error) {
        res.status(404).send({ code: 404, message: 'limit' });
    }
}));
app.route('/top')
    .get((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield manga_1.Home.Top();
        res.status(200).send(data);
    }
    catch (error) {
        res.status(404).send({ code: 404, message: 'limit' });
    }
}));
app.route('/list')
    .get((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield manga_1.List.List({});
        res.status(200).send(data);
    }
    catch (error) {
        res.status(404).send({ code: 404, message: 'limit' });
    }
}));
app.route('/list/:page')
    .get((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const page = Number(req.params.page);
        const data = yield manga_1.List.List({ page });
        res.status(200).send(data);
    }
    catch (error) {
        res.status(404).send({ code: 404, message: 'limit' });
    }
}));
app.route('/genre')
    .get((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield manga_1.Genre.genreAvailable();
    res.status(200).send(data);
}));
app.route('/genre/:genre')
    .get((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { genre } = req.params;
        const data = yield manga_1.Genre.postByGenre({ genre });
        res.status(200).send(data);
    }
    catch (error) {
        res.status(404).send({ code: 404, message: 'limit' });
    }
}));
app.route('/genre/:genre/:page')
    .get((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { genre, page } = req.params;
        const data = yield manga_1.Genre.postByGenre({ genre, page: Number(page) });
        res.status(200).send(data);
    }
    catch (error) {
        res.status(404).send({ code: 404, message: 'limit' });
    }
}));
app.route('/search')
    .get((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { q, genre } = req.query;
        const data = yield manga_1.Search.Search({ search: q, genre: genre.toLowerCase() });
        res.status(200).send(data);
    }
    catch (error) {
        res.status(404).send({ code: 404, message: 'limit' });
    }
}));
app.route('/post')
    .get((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { url } = req.query;
        const data = yield manga_1.Post.Post({ uri: url });
        res.status(200).send(data);
    }
    catch (error) {
        res.status(403).send({ code: 403, message: 'page is error' });
    }
}));
app.route('/posts')
    .get((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { url } = req.query;
        const data = yield manga_1.Post.Posts({ uri: url });
        res.status(200).send(data);
    }
    catch (error) {
        res.status(403).send({ code: 403, message: 'page is error' });
    }
}));
// app.route('/posts')
// .get(async(req:Request,res:Response)=>{
//     const {url} = req.query;
//     const data = await Post.Posts({uri:url})
//     res.send(`
//     <!DOCTYPE html>
//     <html>
//     <head>
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <style>
//             body a img {
//             font-family: Open Sans;
//             font: normal normal 12px "Open Sans","Segoe UI", Arial, sans-serif;
//             line-height: 1;
//             text-align: center;
//             color: #3C97F3;
//             box-sizing: border-box;
//             font-size: 100%;
//             direction: ltr;
//             height: auto;
//             padding: 0;
//             border: 0;
//             vertical-align: baseline;
//             display: block;
//             margin: auto;
//             max-width: 100%!important;
//             }
//         </style>
//     </head>
//     <body style="
//             display: flex;
//             flex-direction: column;
//             flex: 1;
//             margin: auto;
//         ">
//         ${data}
//     </body>
//     </html>
//     `)
// })
exports.default = app;
