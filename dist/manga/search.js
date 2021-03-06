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
const hash_1 = require("../midleware/hash");
class Search {
    constructor() {
        this.Search = ({ search, genre }) => __awaiter(this, void 0, void 0, function* () {
            const url = yield _1.default.get(`/?s=${search}&post_type=manga&genre=${genre ? genre : ''}`);
            const $ = cheerio_1.default.load(url.data);
            const posts = $('.result-search').map((index, item) => {
                var _a;
                return ({
                    _id: $(item).find('.kanan_search header span a').attr('href'),
                    _title: $(item).find('.kanan_search header span a').text().trim(),
                    _image: `${(_a = $(item).find('.fletch div img').attr('src')) === null || _a === void 0 ? void 0 : _a.replace(/(http(s?)):\/\//gi, `https://i${hash_1.getRandomInt(3)}.wp.com/`)}?strip=all`,
                    _genre: $(item).find('.kanan_search div ul li').eq(1).find('a').map((i, t) => {
                        return ({
                            _id: $(t).attr('href'),
                            _title: $(t).text().trim()
                        });
                    }).get()
                });
            }).get();
            if (!posts.length)
                throw new Error("404");
            return posts;
        });
    }
}
exports.default = new Search();
