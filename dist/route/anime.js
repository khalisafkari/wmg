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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const anime_1 = require("../anime");
const request_1 = __importDefault(require("request"));
const app = express_1.Router();
app.route('/anime')
    .get((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield anime_1.Home.Home({});
        res.status(200).send(data);
    }
    catch (error) {
        res.status(404).send({ code: 404, message: 'limit' });
    }
}));
app.route('/anime/:page')
    .get((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const page = Number(req.params.page);
        const data = yield anime_1.Home.Home({ page });
        res.status(200).send(data);
    }
    catch (error) {
        res.status(404).send({ code: 404, message: 'limit' });
    }
}));
app.route('/ongoing')
    .get((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield anime_1.Ongoing.Ongoing({});
        res.status(200).send(data);
    }
    catch (error) {
        res.status(404).send({ code: 404, message: 'limit' });
    }
}));
app.route('/ongoing/:page')
    .get((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const page = Number(req.params.page);
        const data = yield anime_1.Ongoing.Ongoing({ page });
        res.status(200).send(data);
    }
    catch (error) {
        res.status(404).send({ code: 404, message: 'limit' });
    }
}));
app.route('/donghua')
    .get((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield anime_1.Donghua.Donghua({});
        res.status(200).send(data);
    }
    catch (error) {
        res.status(404).send({ code: 404, message: 'limit' });
    }
}));
app.route('/donghua/:page')
    .get((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const page = Number(req.params.page);
        const data = yield anime_1.Donghua.Donghua({ page });
        res.status(200).send(data);
    }
    catch (error) {
        res.status(404).send({ code: 404, message: 'limit' });
    }
}));
app.route('/live')
    .get((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield anime_1.Live.Live({});
        res.status(200).send(data);
    }
    catch (error) {
        res.status(404).send({ code: 404, message: 'limit' });
    }
}));
app.route('/live/:page')
    .get((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const page = Number(req.params.page);
        const data = yield anime_1.Live.Live({ page });
        res.status(200).send(data);
    }
    catch (error) {
        res.status(404).send({ code: 404, message: 'limit' });
    }
}));
app.route('/list')
    .get((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield anime_1.List();
        res.status(200).send(data);
    }
    catch (error) {
        res.status(404).send({ code: 404, message: 'limit' });
    }
}));
app.route('/movie')
    .get((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield anime_1.Movie.Movie({});
        res.status(200).send(data);
    }
    catch (error) {
        res.status(404).send({ code: 404, message: 'limit' });
    }
}));
app.route('/movie/:page')
    .get((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const page = Number(req.params.page);
        const data = yield anime_1.Movie.Movie({ page });
        res.status(200).send(data);
    }
    catch (error) {
        res.status(404).send({ code: 404, message: 'limit' });
    }
}));
app.route('/search')
    .get((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { q, page } = req.query;
        const data = yield anime_1.Search.Search({ q, page: Number(page) });
        res.status(200).send(data);
    }
    catch (error) {
        res.status(404).send({ code: 404, message: 'limit' });
    }
}));
app.route('/genre')
    .get((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield anime_1.Genre.Genre();
        res.status(200).send(data);
    }
    catch (error) {
        res.status(404).send({ code: 404, message: 'limit' });
    }
}));
app.route('/genre/:genre')
    .get((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { genre } = req.params;
        const data = yield anime_1.Genre.PostByGenre({ genre });
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
        const data = yield anime_1.Genre.PostByGenre({ genre, page: Number(page) });
        res.status(200).send(data);
    }
    catch (error) {
        res.status(404).send({ code: 404, message: 'limit' });
    }
}));
app.route('/years')
    .get((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield anime_1.Years.Years();
        res.status(200).send(data);
    }
    catch (error) {
        res.status(404).send({ code: 404, message: 'limit' });
    }
}));
app.route('/years/:years')
    .get((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { years } = req.params;
        const data = yield anime_1.Years.PostsByYears({ years: Number(years) });
        res.status(200).send(data);
    }
    catch (error) {
        res.status(404).send({ code: 404, message: 'limit' });
    }
}));
app.route('/years/:years/:page')
    .get((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { years, page } = req.params;
        const data = yield anime_1.Years.PostsByYears({ years: Number(years), page: Number(page) });
        res.status(200).send(data);
    }
    catch (error) {
        res.status(404).send({ code: 404, message: 'limit' });
    }
}));
app.route('/posts')
    .get((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield anime_1.Posts.Posts({ uri: req.query.url });
        res.status(200).send(data);
    }
    catch (error) {
        res.status(404).send({ code: 404, message: 'limit' });
    }
}));
app.route('/post/free')
    .get((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield anime_1.Posts.VideoFree({ uri: req.query.url });
        res.status(200).send(data);
    }
    catch (error) {
        res.status(404).send({ code: 404, message: 'limit' });
    }
}));
app.route('/post/pro')
    .get((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield anime_1.Posts.VideoPro({ uri: req.query.url });
        res.status(200).send(data);
    }
    catch (error) {
        res.status(404).send({ code: 404, message: 'limit' });
    }
}));
app.route('/player')
    .get((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { type, url } = yield anime_1.Player({ uri: req.query.url });
        if (type) {
            res.status(301).redirect(url);
        }
        else {
            request_1.default(url).pipe(res);
        }
    }
    catch (error) {
        res.status(403).send({ code: 403, message: 'limit' });
    }
}));
exports.default = app;
