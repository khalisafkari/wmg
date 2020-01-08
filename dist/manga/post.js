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
class Post {
    constructor() {
        this.Post = ({ uri }) => __awaiter(this, void 0, void 0, function* () {
            const url = yield _1.default.get(uri);
            const $ = cheerio_1.default.load(url.data);
            const $$ = $('.postbody .area .mangainfo').eq(0);
            const genre = $$.find('.topinfo .l tr').eq(5).find('td').eq(-1).find('a')
                .map((index, item) => {
                var _a;
                return ({
                    _id: (_a = $(item).attr('href')) === null || _a === void 0 ? void 0 : _a.replace(/((http(s?))\:\/\/)westmanga.info\/genre\//g, '').replace('/', ''),
                    _title: $(item).text()
                });
            }).get();
            const posts = $$.find('.cl ul li').map((index, item) => {
                return ({
                    _id: $(item).find('span a').attr('href'),
                    _title: $(item).find('span a').text().replace(/([A-Za-z])\w+/g, '').trim(),
                    _pdf: $(item).find('span a').eq(-1).attr('href'),
                    _time: $(item).find('span').eq(-1).text()
                });
            }).get();
            const data = {
                title: {
                    en: $$.find('h1').text(),
                    jp: $$.find('.topinfo .l tr').eq(0).find('td').eq(-1).text().trim(),
                    en_jp: $$.find('.topinfo .l tr').eq(1).find('td').eq(-1).text().trim()
                },
                total: $$.find('.topinfo .l tr').eq(2).find('td').eq(-1).text().trim(),
                status: $$.find('.topinfo .l tr').eq(3).find('td').eq(-1).text().trim(),
                author: $$.find('.topinfo .l tr').eq(4).find('td').eq(-1).text().trim().split(","),
                genre,
                rating: $$.find('.topinfo .l tr').eq(6).find('td').eq(-1).text().trim(),
                date_release: $$.find('.topinfo .l tr').eq(7).find('td').eq(-1).text().trim(),
                latest: {
                    _id: $$.find('.topinfo .l tr').eq(8).find('td a').eq(-1).attr('href'),
                    _title: $$.find('.topinfo .l tr').eq(8).find('td a').eq(-1).text().replace(/([A-Za-z])\w+/g, '').trim()
                },
                data: posts
            };
            return data;
        });
        this.Posts = ({ uri }) => __awaiter(this, void 0, void 0, function* () {
            const url = yield _1.default.get(uri);
            // return cheerio.load(url.data)('#readerarea p').html();
            const $ = cheerio_1.default.load(url.data);
            const posts = $('#readerarea p img').map((index, item) => {
                return ($(item).attr('src'));
            }).get();
            const prev = $('.nextprev a[rel="prev"]').eq(0).attr('href');
            const next = $('.nextprev a[rel="next"]').eq(1).attr('href');
            return {
                data: posts,
                prev: prev ? prev : null,
                next: next ? next : null
            };
        });
    }
}
exports.default = new Post();
