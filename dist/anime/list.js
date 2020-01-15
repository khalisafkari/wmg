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
const List = () => __awaiter(void 0, void 0, void 0, function* () {
    const url = yield _1.default.get("/index");
    const $ = cheerio_1.default.load(url.data);
    const data = $('.box-body .col-md-6 a').map((index, item) => {
        return ({
            _id: $(item).attr('href'),
            _title: $(item).text().trim()
        });
    }).get();
    return data;
});
exports.default = List;
