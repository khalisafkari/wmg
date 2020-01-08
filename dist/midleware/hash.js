"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_js_1 = require("crypto-js");
exports.encrypt = (string) => {
    //@ts-ignore
    return crypto_js_1.AES.encrypt(string, process.env.hash).toString();
};
exports.decrypt = (string) => {
    //@ts-ignore
    return crypto_js_1.AES.decrypt(string, process.env.hash).toString(crypto_js_1.enc.Utf8);
};
exports.getRandomInt = (int) => {
    return Math.floor(Math.random() * Math.floor(int));
};
