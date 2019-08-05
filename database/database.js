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
const promise_mysql_1 = __importDefault(require("promise-mysql"));
// import {createPool,Pool} from 'mysql2/promise';
const mysql_1 = __importDefault(require("./mysql"));
function connect() {
    return __awaiter(this, void 0, void 0, function* () {
        const pool = yield promise_mysql_1.default.createPool(mysql_1.default.database);
        pool.getConnection()
            .then(connection => {
            if (connection != null) {
                pool.releaseConnection(connection);
            }
            console.log('DB IS CONNECTED');
        });
        return pool;
    });
}
exports.connect = connect;
// export async function connect(): Promise<Pool> {
//     const mysql = require('mysql2');
//
//     const pool = mysql.createPool(dbName.database);
//     const promisePool = pool.promise;         //promise 호출 불가
//     await pool.getConnection(function (err:any, connection:any) {
//         if (err) {
//             console.log(err);
//
//         }
//             connection.release();
//     });
//     return pool;
//
// }
//# sourceMappingURL=database.js.map