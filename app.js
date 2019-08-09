"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const _connection = require('./controllers/post.controller');
let connection = new _connection();
// Routes
const index_routes_1 = __importDefault(require("./routes/index.routes"));
const post_routes_1 = __importDefault(require("./routes/post.routes"));
let app = express_1.default();
class App {
    constructor(port) {
        this.port = port;
        this.app = express_1.default();
        this.settings();
        this.middleware();
        this.routes();
    }
    settings() {
        this.app.set('port', this.port || process.env.PORT || 5000);
    }
    middleware() {
        // app.use(cors());
        // app.get('/board', function (req, res, next) {
        //     res.setHeader('Access-Control-Allow-Origin', '*');
        //     res.setHeader("Access-Control-Allow-Credentials", "true");
        //     res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
        //     res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
        //     res.json({msg: 'This is CORS-enabled for all origins!'});
        //
        // });
        // app.use(function(req, res, next) {
        //
        //     res.setHeader('Access-Control-Allow-Origin', '*');
        //     next();
        //
        // });
        this.app.use(morgan_1.default('dev'));
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use(index_routes_1.default);
        this.app.use('/board', post_routes_1.default);
    }
    listen() {
        return __awaiter(this, void 0, void 0, function* () {
            // app.get('/products/:id', function (req, res, next) {}
            yield this.app.listen(this.app.get('port'));
            console.log('Server on port', this.app.get('port'));
        });
    }
}
exports.App = App;
//# sourceMappingURL=app.js.map