"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const compression_1 = __importDefault(require("compression"));
const assignId_1 = __importDefault(require("./midleware/assignId"));
require("./midleware/websocket");
require("./midleware");
const manga_1 = __importDefault(require("./route/manga"));
const anime_1 = __importDefault(require("./route/anime"));
const novel_1 = __importDefault(require("./route/novel"));
const javfinder_1 = __importDefault(require("./route/javfinder"));
const app = express_1.default();
app.use(assignId_1.default);
app.use(compression_1.default());
app.use(cors_1.default());
app.use(morgan_1.default(':id :method :url :response-time'));
app.use('/manga', manga_1.default);
app.use('/anime', anime_1.default);
app.use('/novel', novel_1.default);
app.use('/jv', javfinder_1.default);
app.get('/', (req, res) => {
    res.send('data');
});
app.listen(8080);