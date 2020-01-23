"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const BookmarkSchema = new mongoose_1.Schema({
    user_id: {
        type: String,
        required: true
    },
    url: {
        required: true,
        type: String
    },
    image: {
        required: true,
        type: String
    },
    title: {
        required: true,
        type: String
    },
    createAt: {
        default: Date.now,
        required: true,
        type: Date
    },
    updateAt: {
        default: Date.now,
        required: true,
        type: Date
    }
});
exports.default = mongoose_1.default.model('IBookmark', BookmarkSchema);
