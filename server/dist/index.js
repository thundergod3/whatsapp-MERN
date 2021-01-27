"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const routes_1 = __importDefault(require("./routes/"));
const app = express_1.default();
// Middleware
app.use(express_1.default.urlencoded());
app.use(express_1.json());
// Routes
routes_1.default(app);
const PORT = process.env.PORT || 8080;
//# sourceMappingURL=index.js.map