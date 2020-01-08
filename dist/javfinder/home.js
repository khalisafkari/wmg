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
        this.Home = ({ uri }) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            const url = yield _1.default.get("http://185.201.9.72:3003/?url=" + uri);
            const $ = cheerio_1.default.load(url.data);
            const data = $('.col-md-3.text-center.main-item div').map((index, item) => {
                return ({
                    _id: 'https://javfinder.sh' + $(item).find('a').attr('href'),
                    _title: $(item).find('h5').text(),
                    _image: $(item).find('a img').attr('data-src'),
                    _star: $(item).find('p a').text(),
                    _time: $(item).find('.time-video').text(),
                    _bd: $(item).find('.bagde').text()
                });
            }).get();
            return {
                data,
                page: Number((_a = $('.pagination li').eq(-1).find('a').attr('href')) === null || _a === void 0 ? void 0 : _a.replace(/\D/g, ''))
            };
        });
    }
}
exports.default = new Home();
