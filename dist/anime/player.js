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
const _1 = __importDefault(require("."));
const cheerio_1 = __importDefault(require("cheerio"));
const Player = ({ uri }) => __awaiter(void 0, void 0, void 0, function* () {
    if (uri.indexOf('uservideo.xyz') !== -1 ||
        uri.indexOf('nanifile.com') !== -1) {
        const url = yield _1.default.get(uri);
        const $ = cheerio_1.default.load(url.data);
        return {
            type: 1,
            url: $('video source').attr('src')
        };
    }
    else {
        const init = yield _1.default.get(uri);
        const url = yield _1.default.post(init.request.res.responseUrl.replace("/v/", "/api/source/"));
        const length = url.data.data.length;
        return {
            type: 0,
            url: url.data.data[length - 1].file
        };
    }
});
exports.default = Player;
