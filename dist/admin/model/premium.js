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
const PremiumSchema = new mongoose_1.Schema({
    user_id: {
        type: String,
        required: true,
        index: {
            unique: true
        }
    },
    status: {
        type: Boolean,
        required: true,
        default: false
    },
    createAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    buyAt: {
        type: Date,
        required: false,
        default: null
    },
    expiredAt: {
        type: Date,
        required: false,
        default: null
    },
});
exports.default = mongoose_1.default.model('IPremiums', PremiumSchema);
