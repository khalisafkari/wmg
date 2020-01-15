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
class Home {
    constructor() {
        this.Home = ({ page }) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            const url = yield _1.default.get(`${page ? `/page/${page}` : ''}`);
            const $ = cheerio_1.default.load(url.data);
            const posts = $('.col-md-7.box-content .col-sm-3.content-item').map((index, item) => {
                return ({
                    _id: $(item).find('a').attr('href'),
                    _title: $(item).find('h3').contents().eq(-1).text().trim(),
                    _image: $(item).find('a div img').attr('src'),
                    _episode: $(item).find('.episode div').eq(0).text().trim(),
                    _rating: $(item).find('.episode div').eq(1).text().trim()
                });
            }).get();
            const total = Number((_a = $('.col-md-7.box-content .col-md-12.text-center div a').eq(-1).attr('href')) === null || _a === void 0 ? void 0 : _a.replace(/\D/g, ""));
            if (posts.length < 1)
                throw new Error("limit");
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
