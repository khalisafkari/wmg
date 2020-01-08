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
class Donghua {
    constructor() {
        this.Donghua = ({ page }) => __awaiter(this, void 0, void 0, function* () {
            const url = yield _1.default.get(`/genre/donghua/page/${page ? page : 1}`);
            const $ = cheerio_1.default.load(url.data);
            const posts = $('.col-md-7.box-content .col-sm-3.content-item').map((index, item) => {
                return ({
                    _id: $(item).find('a').attr('href'),
                    _title: $(item).find('div').eq(1).text().trim(),
                    _image: $(item).find('a div img').attr('src'),
                    _episode: $(item).find('.episode div').eq(0).text().trim(),
                    _rating: $(item).find('.episode div').eq(1).text().trim()
                });
            }).get();
            const total = Number($('.col-md-7.box-content .col-md-12.text-center div a').eq(-2).text());
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
exports.default = new Donghua();
