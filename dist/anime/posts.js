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
class Posts {
    constructor() {
        this.Posts = ({ uri }) => __awaiter(this, void 0, void 0, function* () {
            const url = yield _1.default.get(uri);
            const $ = cheerio_1.default.load(url.data);
            const detail = {
                title: $('.col-md-7.box-content div div').eq(0).find('h3').text(),
                image: $('.col-md-7.box-content div div').eq(1).find('div').eq(0).find('a img').attr('src'),
                desc: $('.col-md-7.box-content div div').eq(1).find('div').eq(0).find('div div').eq(0).text().trim()
            };
            /**
             * List Movie
             */
            const list = [];
            $('.box-body.episode_list table tbody tr td a').each((index, item) => {
                var _a, _b;
                if (((_a = $(item).attr('href')) === null || _a === void 0 ? void 0 : _a.indexOf('batch')) !== -1 || ((_b = $(item).attr('href')) === null || _b === void 0 ? void 0 : _b.indexOf('movie')) !== -1)
                    return;
                list.push({
                    _id: $(item).attr('href'),
                    _title: $(item).text(),
                    _number: Number($(item).text().replace(/\D/g, ''))
                });
            });
            /**
             * List Movie
             */
            const movie = [];
            $('.box-body.episode_list table tbody tr td a').each((index, item) => {
                var _a;
                if (((_a = $(item).attr('href')) === null || _a === void 0 ? void 0 : _a.indexOf('movie')) !== -1) {
                    movie.push({
                        _id: $(item).attr('href'),
                        _title: $(item).text(),
                        _number: Number($(item).text().replace(/\D/g, ''))
                    });
                }
            });
            /**
             * List Batch
             */
            const batch = [];
            $('.box-body.episode_list table tbody tr td a').each((index, item) => {
                var _a;
                if (((_a = $(item).attr('href')) === null || _a === void 0 ? void 0 : _a.indexOf('batch')) !== -1) {
                    batch.push({
                        _id: $(item).attr('href'),
                        _title: $(item).text(),
                        _number: Number($(item).text().replace(/\D/g, ''))
                    });
                }
            });
            const data = {
                detail,
                list: list.sort((a, b) => { return a._number - b._number; }),
                movie,
                batch
            };
            return data;
        });
        this.VideoFree = ({ uri }) => __awaiter(this, void 0, void 0, function* () {
            const url = yield _1.default.get(uri);
            const $ = cheerio_1.default.load(url.data);
            const data = [];
            $('#change-server option').each((index, item) => {
                var _a, _b, _c;
                if ((((_a = $(item).attr('value')) === null || _a === void 0 ? void 0 : _a.indexOf('https://nanifile.com')) !== -1 ||
                    ((_b = $(item).attr('value')) === null || _b === void 0 ? void 0 : _b.indexOf('uservideo.xyz')) !== -1 ||
                    ((_c = $(item).attr('value')) === null || _c === void 0 ? void 0 : _c.indexOf('naniplay.nanime.in')) !== -1) &&
                    $(item).text().replace(/\D/g, '') == "480") {
                    data.push({
                        _id: $(item).attr('value'),
                        _title: $(item).text().replace(/\D/g, ''),
                        _rs: Number($(item).text().replace(/\D/g, ''))
                    });
                }
            });
            return data.sort((a, b) => { return a._rs - b._rs; });
        });
        this.VideoPro = ({ uri }) => __awaiter(this, void 0, void 0, function* () {
            const url = yield _1.default.get(uri);
            const $ = cheerio_1.default.load(url.data);
            const data = [];
            $('#change-server option').each((index, item) => {
                var _a, _b, _c;
                if ((((_a = $(item).attr('value')) === null || _a === void 0 ? void 0 : _a.indexOf('https://nanifile.com')) !== -1 ||
                    ((_b = $(item).attr('value')) === null || _b === void 0 ? void 0 : _b.indexOf('uservideo.xyz')) !== -1 ||
                    ((_c = $(item).attr('value')) === null || _c === void 0 ? void 0 : _c.indexOf('naniplay.nanime.in')) !== -1)) {
                    data.push({
                        _id: $(item).attr('value'),
                        _title: $(item).text().replace(/\D/g, ''),
                        _rs: Number($(item).text().replace(/\D/g, ''))
                    });
                }
            });
            return data.sort((a, b) => { return a._rs - b._rs; });
        });
    }
}
exports.default = new Posts();
