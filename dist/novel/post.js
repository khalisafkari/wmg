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
            const data = [];
            const posts = $('.content article .entry-content p').map((index, item) => {
                return ($(item).text().trim());
            }).get();
            for (let i of posts) {
                if (data.indexOf(i) === -1) {
                    data.push(i);
                }
            }
            return data;
        });
        this.Posts = ({ uri }) => __awaiter(this, void 0, void 0, function* () {
            const url = yield _1.default.get(uri);
            const $ = cheerio_1.default.load(url.data);
            const detail = {
                title: $('.content article header h1').text().trim(),
                image: $('.content article .entry-content .maininfo .imgprop img').attr('src'),
                render: $('.content article .entry-content .maininfo span p').text().trim(),
            };
            const posts = $('.content article .entry-content .bxcl ul li a').map((index, item) => {
                return ({
                    _id: $(item).attr('href'),
                    _title: $(item).text(),
                    _number: Number($(item).text().replace(/\D/g, ''))
                });
            }).get();
            const data = {
                detail,
                data: posts.sort((a, b) => { return a._number - b._number; }),
                length: posts.length
            };
            return data;
        });
    }
}
exports.default = new Post();
