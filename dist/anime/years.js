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
const cheerio_1 = __importDefault(require("cheerio"));
const _1 = __importDefault(require("."));
class Years {
    constructor() {
        this.Years = () => __awaiter(this, void 0, void 0, function* () {
            const url = yield _1.default.get("");
            const $ = cheerio_1.default.load(url.data);
            const data = $('.col-md-3.box-content')
                .find('div')
                .eq(-1)
                .find('.box-body a')
                .map((index, item) => {
                var _a;
                return ({
                    _id: (_a = $(item).attr('href')) === null || _a === void 0 ? void 0 : _a.replace(/\/year_\//g, ''),
                    _title: Number($(item).text().replace(/\D/g, ""))
                });
            }).get();
            return data;
        });
        this.PostsByYears = ({ years, page }) => __awaiter(this, void 0, void 0, function* () {
            const url = yield _1.default.get(`/year_/${years ? years : 2019}/page/${page ? page : 1}`);
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
exports.default = new Years();
