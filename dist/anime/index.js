"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
var home_1 = require("./home");
exports.Home = home_1.default;
var ongoing_1 = require("./ongoing");
exports.Ongoing = ongoing_1.default;
var donghua_1 = require("./donghua");
exports.Donghua = donghua_1.default;
var live_action_1 = require("./live-action");
exports.Live = live_action_1.default;
var list_1 = require("./list");
exports.List = list_1.default;
var movie_1 = require("./movie");
exports.Movie = movie_1.default;
var search_1 = require("./search");
exports.Search = search_1.default;
var genre_1 = require("./genre");
exports.Genre = genre_1.default;
var years_1 = require("./years");
exports.Years = years_1.default;
var posts_1 = require("./posts");
exports.Posts = posts_1.default;
var player_1 = require("./player");
exports.Player = player_1.default;
exports.default = axios_1.default.create({
    baseURL: process.env.nanime
});
