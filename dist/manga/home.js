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
const cheerio_1 = require("cheerio");
const hash_1 = require("../midleware/hash");
class Home {
    constructor() {
        this.Home = ({ page }) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            const url = yield _1.default.get(`/page/${page ? page : 1}/`);
            const $ = cheerio_1.load(url.data);
            let update = $('#content > .postbody > div').eq(0).find('main .items .item').map((index, item) => {
                var _a;
                return ({
                    _id: $(item).find('a').attr('href'),
                    _title: $(item).find('.fixyear h2').text().trim(),
                    _image: ((_a = $(item).find('a div img').attr('src')) === null || _a === void 0 ? void 0 : _a.replace(/(http(s?)):\/\//gi, `https://i${hash_1.getRandomInt(3)}.wp.com/`)) + '?strip=all'
                });
            }).get();
            let tetangga = $('#content > .postbody > div').eq(2).find('main .items .item').map((index, item) => {
                var _a;
                return ({
                    _id: $(item).find('a').attr('href'),
                    _title: $(item).find('.fixyear h2').text().trim(),
                    _image: ((_a = $(item).find('a div img').attr('src')) === null || _a === void 0 ? void 0 : _a.replace(/(http(s?)):\/\//gi, `https://i${hash_1.getRandomInt(3)}.wp.com/`)) + '?strip=all'
                });
            }).get();
            const posts = [...update.slice(0, 3), ...tetangga, ...update.slice(3)];
            const total = Number((_a = $('#content > .postbody > div').eq(2).find('main #paginador li').eq(-1).find('a').attr('href')) === null || _a === void 0 ? void 0 : _a.replace(/\D/g, ''));
            if (!total)
                throw new Error("");
            const data = {
                data: posts,
                length: posts.length,
                current: page ? page : 1,
                total,
            };
            return data;
        });
        this.Top = () => __awaiter(this, void 0, void 0, function* () {
            const url = yield _1.default.get('');
            const $ = cheerio_1.load(url.data);
            const update = $('#slider1 .item').map((index, item) => {
                var _a;
                return ({
                    _id: $(item).find('.imagens a').attr('href'),
                    _title: $(item).find('span').text().trim(),
                    _image: ((_a = $(item).find('.imagens a img').attr('src')) === null || _a === void 0 ? void 0 : _a.replace(/(http(s?)):\/\//gi, `https://i${hash_1.getRandomInt(3)}.wp.com/`)) + '?strip=all'
                });
            }).get();
            const data = {
                data: update,
                length: update.length
            };
            return data;
        });
    }
}
exports.default = new Home();
