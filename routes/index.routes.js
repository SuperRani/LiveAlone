"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_controller_1 = require("../controllers/index.controller");
const cors_1 = __importDefault(require("cors"));
const router = express_1.Router();
router.use(cors_1.default());
router.route('/')
    .get(index_controller_1.indexWelcome);
exports.default = router;
//# sourceMappingURL=index.routes.js.map