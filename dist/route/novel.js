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
const novel_1 = require("../novel");
const app = express_1.Router();
app.route('/novel')
    .get((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield novel_1.Home.Home({});
        res.status(200).send(data);
    }
    catch (error) {
        res.status(404).send({ code: 404, message: 'limit' });
    }
}));
app.route('/novel/:page')
    .get((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield novel_1.Home.Home({ page: Number(req.params.page) });
        res.status(200).send(data);
    }
    catch (error) {
        res.status(404).send({ code: 404, message: 'limit' });
    }
}));
app.route('/list')
    .get((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield novel_1.List.List();
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
        const data = yield novel_1.Search.Search({ q, page: Number(page) });
        res.status(200).send(data);
    }
    catch (error) {
        res.status(404).send({ code: 404, message: 'limit' });
    }
}));
app.route('/posts')
    .get((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield novel_1.Posts.Post({ uri: req.query.url });
        res.status(200).send(data);
    }
    catch (error) {
        res.status(404).send({ code: 404, message: 'limit' });
    }
}));
app.route('/post')
    .get((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield novel_1.Posts.Posts({ uri: req.query.url });
        res.status(200).send(data);
    }
    catch (error) {
        res.status(403).send({ code: 403, message: 'limit' });
    }
}));
exports.default = app;
