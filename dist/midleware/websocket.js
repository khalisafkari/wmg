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
const ws_1 = __importDefault(require("ws"));
const axios_1 = __importDefault(require("axios"));
const wss = new ws_1.default.Server({ port: 2053 });
wss.on("connection", function getMessage(ws) {
    return __awaiter(this, void 0, void 0, function* () {
        ws.on("message", (message) => onMessage(message, ws));
    });
});
const onMessage = (message, callback) => __awaiter(void 0, void 0, void 0, function* () {
    const data = message.toString().split("::");
    switch (data[0]) {
        case "setting":
            callback.send("setting");
        case "access_token":
            callback.send("access_token");
        case "movie":
            callback.send(JSON.stringify(data[1]));
        case "youtube":
            const url = yield axios_1.default.get(data[1]);
            callback.send(url.data);
        default:
            return;
    }
});
