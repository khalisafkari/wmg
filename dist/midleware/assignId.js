"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = __importDefault(require("uuid"));
function assignId(req, res, next) {
    //@ts-ignore
    req.id = uuid_1.default();
    next();
}
exports.default = assignId;
