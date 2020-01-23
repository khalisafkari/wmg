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
const body_parser_1 = __importDefault(require("body-parser"));
const admin_1 = require("../admin");
const jsonparser = body_parser_1.default.json();
const app = express_1.Router();
app.route('/admin')
    .get((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield admin_1.Users.get(req.query.email);
        res.status(200).send(data);
    }
    catch (error) {
        res.status(403).send(error);
    }
}));
app.route('/admin/block')
    .post((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield admin_1.Users.block(req.query.email);
        res.status(200).send(data);
    }
    catch (error) {
        res.status(403).send(error);
    }
}));
app.route('/admin/unblock')
    .post((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield admin_1.Users.unblock(req.query.email);
        res.status(200).send(data);
    }
    catch (error) {
        res.status(403).send(error);
    }
}));
app.route('/premium')
    .get((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield admin_1.Premiums.get(req.query.email);
        res.send(data);
    }
    catch (error) {
        res.status(403).send(error);
    }
}));
app.route('/premium/upgrade')
    .post(jsonparser, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, expired, password } = req.body;
        const data = yield admin_1.Premiums.updatePro(email, expired, password);
        res.status(200).send(data);
    }
    catch (error) {
        res.status(403).send(error);
    }
}));
app.route('/bookmark')
    .get((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email: user_id, url } = req.query;
        const data = yield admin_1.Bookmarks.get({ user_id, url });
        res.status(200).send(data);
    }
    catch (error) {
        res.status(403).send(error);
    }
}))
    .post(jsonparser, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield admin_1.Bookmarks.post(req.body);
        res.status(200).send(data);
    }
    catch (error) {
        res.status(403).send(error);
    }
}))
    .put(jsonparser, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield admin_1.Bookmarks.delete(req.body);
        res.status(200).send(data);
    }
    catch (error) {
        res.status(403).send(error);
    }
}));
app.route('/bookmark/list')
    .get((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield admin_1.Bookmarks.list(req.query.email);
        res.send(data);
    }
    catch (error) {
        res.status(403).send(error);
    }
}));
app.route('/bookmark/list/remove')
    .post((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield admin_1.Bookmarks.removeAll(req.query.email);
        res.send(data);
    }
    catch (error) {
        res.status(403).send(error);
    }
}));
exports.default = app;
