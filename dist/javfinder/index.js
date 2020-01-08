"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
var home_1 = require("./home");
exports.Home = home_1.default;
exports.default = axios_1.default.create({
    baseURL: process.env.javfinder
});
