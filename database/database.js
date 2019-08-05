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
const promise_1 = require("mysql2/promise");
const mysql_1 = __importDefault(require("./mysql"));
function connect() {
    return __awaiter(this, void 0, void 0, function* () {
        // const connection  = await mysql.createConnection({
        //     host: 'localhost',
        //     user: 'root',
        //     password: '0000',
        //     database: 'NewTest',
        // });
        // return connection;
        const pool = yield promise_1.createPool(mysql_1.default.database);
        pool.getConnection().then(connection => {
            connection.release();
            console.log('DB IS CONNECTED');
        });
        return pool;
    });
}
exports.connect = connect;
// export default pool;
//createPool 함수가 프로미스 반환하는데 그냥 바로 접근하셔서 그런거네요 await 이나 then 쓰세요
// const pool = mysql.createPool(dbName.database);
// pool.getConnection().then(connection =>{
//     pool.releaseConnection(connection);
//     console.log('DB IS CONNECTED');
// });
//# sourceMappingURL=database.js.map