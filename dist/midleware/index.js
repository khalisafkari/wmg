"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = require("mongoose");
dotenv_1.default.config();
mongoose_1.connect(`${process.env.mongodb}`, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
    console.log('connected db');
})
    .catch((e) => {
    console.log(e);
});
morgan_1.default.token('id', function getId(req) {
    //@ts-ignore
    return req.id;
});
