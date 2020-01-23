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
const bookmark_1 = __importDefault(require("./model/bookmark"));
class Bookmarks {
    get({ user_id, url }) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield bookmark_1.default.findOne({ user_id, url });
            return ((_a = data) === null || _a === void 0 ? void 0 : _a._id) ? data : [];
        });
    }
    post({ user_id, url, image, title }) {
        return __awaiter(this, void 0, void 0, function* () {
            const _ = yield bookmark_1.default.findOne({ user_id, url });
            if (_)
                return _;
            const data = new bookmark_1.default({ user_id, image, title, url });
            yield data.save();
            return data;
        });
    }
    delete({ user_id, url }) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield bookmark_1.default.deleteOne({ user_id, url });
            return data;
        });
    }
    list(user_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield bookmark_1.default.find({ user_id });
            return data;
        });
    }
    removeAll(user_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield bookmark_1.default.deleteMany({ user_id });
            return data;
        });
    }
}
exports.default = new Bookmarks();
