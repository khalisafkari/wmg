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
class Home {
    constructor() {
        this.Home = ({ page }) => __awaiter(this, void 0, void 0, function* () {
            const url = yield _1.default.get(`/page/${page ? page : 1}/`);
            const $ = cheerio_1.default.load(url.data);
            const posts = $('.content article').map((index, item) => {
                var _a;
                return ({
                    _id: $(item).find('.thumb a').attr('href'),
                    _title: $(item).find('.lqx header h2 a').text().trim(),
                    _image: (_a = $(item).find('.thumb a img').attr('src')) === null || _a === void 0 ? void 0 : _a.replace(/(http(s?)):\/\//gi, `https://i${hash_1.getRandomInt(3)}.wp.com/`),
                    _render: $(item).find('.lqx .entry-content').text().trim()
                });
            }).get();
            const total = Number($('.content .pagination a').eq(-2).text());
            const data = {
                data: posts,
                length: posts.length,
                current: page ? page : 1,
                total
            };
            return data;
        });
    }
}
exports.default = new Home();
