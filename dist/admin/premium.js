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
const premium_1 = __importDefault(require("./model/premium"));
const ms_1 = __importDefault(require("ms"));
class Premiums {
    get(user_id) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield premium_1.default.findOne({ user_id });
            if (!((_a = data) === null || _a === void 0 ? void 0 : _a.user_id))
                return yield this.post(user_id);
            return data;
        });
    }
    post(user_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = new premium_1.default({ user_id });
            yield data.save();
            return data;
        });
    }
    updatePro(user_id, expired, password) {
        return __awaiter(this, void 0, void 0, function* () {
            if (password === process.env.hash) {
                const data = yield premium_1.default.updateOne({ user_id }, { $set: {
                        status: true,
                        expiredAt: new Date(Date.now() + ms_1.default(`${expired} days`)),
                        buyAt: Date.now()
                    } });
                return data;
            }
            else {
                throw '<iframe width="853" height="480" src="https://www.youtube.com/embed/PCKRvubXhUQ?list=RDJemSpKjytEU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
            }
        });
    }
}
exports.default = new Premiums();
