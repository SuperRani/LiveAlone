
// import * as Bluebird from 'bluebird';
// import {createPool,Pool} from 'mysql2/promise';
// import dbName from './mysql'
// import {MysqlImp} from "../@types/gg/myConnectionPool";
// import mysql from 'mysql';
// import {mycpInterface, TEST} from "../@types/gg/myConnectionPool";


// let mysql = require('mysql');



//
// class connectPoolClass implements MysqlImp{
//     private pool: any;
//     constructor() {
//         const mysql = require('mysql');
//         this.pool = mysql.createPool({
//             host: 'localhost',
//             user: 'root',
//             password: '0000',
//             database: 'NewTest',
//             connectionLimit: 10
//         });
//     }
//
//     public createConnection = (): Promise<any> => {
//         return new Promise((resolve, reject) => {
//             this.pool.getConnection((err, connection) => {
//                 if(err) {
//                     reject(err);
//                 }
//                 resolve(connection);
//             });
//         });
//     };
//
//     public query = (connection: any, queryString: string): Promise<any> => {
//         return new Promise((resolve, reject) => {
//             connection.query(queryString, (err, result) => {
//                 if(err)
//                     reject(err);
//                 resolve(result);
//             });
//         })
//     }
//
//
//
// }
//
// export = connectPoolClass;























// const pool = mysql.createPool(dbName.database);

// //class 생성방법 ... 실패..
// class connection {
//     private pool: any;
//     constructor() {
//         const mysql = require('mysql');
//         this.pool = mysql.createPool({
//             connectionLimit: 10,
//             host: "localhost",
//             user: "root",
//             password: "funple",
//             database: "Account"
//         });
//     }
//
//     connect = (): Promise<any> => {
//         console.log('pool은?', this.pool)
//         return new Promise((resolve, reject) => {
//             if(this.pool === undefined) {
//                 reject();
//             }
//
//             return this.pool!.getConnection((err: any, connection: any) => {
//                 if(connection) {
//                     // this.pool!.releaseConnection(connection);
//                     resolve(connection);
//
//                     this.pool!.release();
//                     resolve(this.pool!);
//
//                 }
//                 else {
//                     reject("failed");
//                 }
//             });
//         });
//     }
//
//
// }
// const exportConnection = new connection();
// export default exportConnection;
//




//
// class MyConnectionPool implements TEST.mycpInterface {
//     private pool: any;
//     constructor() {
//         if(this.pool === undefined)
//             this.pool = mysql.createPool(dbName.database);
//     }
//
//     connect = (): Promise<any> => {
//         return new Promise((resolve, reject) => {
//             if(this.pool === undefined) {
//                 reject();
//             }
//
//             return this.pool!.getConnection((err: any, connection: any) => {
//                 if(connection) {
//                     this.pool!.releaseConnection(connection);
//                     resolve(this.pool!);
//                 }
//                 else {
//                     reject("");
//                 }
//             })
//         })
//     }
//
//     getConnection = (): Promise<any> => {
//         return new Promise((resolve, reject) => {
//             if(this.pool === undefined) {
//                 reject();
//             }
//
//             return this.pool!.getConnection((err: any, connection: any) => {
//                 if(connection) {
//                     resolve(connection);
//                 }
//                 else {
//                     reject("connection failed");
//                 }
//             })
//         })
//     }
// }
//
// export = MyConnectionPool;








    
    
    
    // const promiseMysql = require('mysql');
    // const pool = promiseMysql.createPool(dbName.database);



//     export module mysqlConnectionModule {
//
//
//         //connect는 함수입니다     const connect = a => b => c    , a를 입력받아서 (b => c)를 반환합니다.     b => c는 b를 입력받아서 c를 반환하는 함수입니다.     즉 connect는 a를 입력받아서 함수를 반환합니다
//         //function connect(fn) {
//         //    return async function(...args) {
//         //    }
//         // }
//
//     export const connect = fn => async (...args) => {
//         /* DB 커넥션을 한다. */
//         const con: any = await pool.getConnection();
//         /* 로직에 con과 args(넘겨받은 paramter)를 넘겨준다. */
//         await fn(con, ...args).then(result => {
//             /* con을 닫아준다. */
//             con.connection.release();
//             return result;
//         }).catch(error => {
//             /* 에러시 con을 닫아준다. */
//             con.connection.release();
//             throw error;
//         });
//
//     };
// }
    



    // function connect(fn) {
    //     return async function(...args) {
    //     }
    // }
    // export const transaction = fn => async (...args) => {
    //     /* DB 커넥션을 한다. */
    //     const con: any = await pool.getConnection();
    //     /* 트렌젝션 시작 */
    //     await con.connection.beginTransaction();
    //     /* 비지니스 로직에 con을 넘겨준다. */
    //     const result = await fn(con, ...args).catch(async (error) => {
    //         /* rollback을 진행한다. */
    //         await con.rollback();
    //         /* 에러시 con을 닫아준다. */
    //         con.connection.release();
    //         throw error;
    //     });
    //     /* commit을 해준다. */
    //     await con.commit();
    //     /* con을 닫아준다. */
    //     con.connection.release();
    //     return result;
    //     }
    
    
    




















// export async function connect(): Promise<any> {
//     // const conn = await connect();
//     const pool = await mysql.createPool(dbName.database);
//
//     //connect()를 매번 호출하지말구요
//     //connect()는 한번만 호출되고 그 결과를 보관하고 있다가 사용하세요
//
//     return new Promise((resolve, reject) => {
//         //resolve(pool);
//         return pool.getConnection().then(connection => {
//             if(connection) {
//                 pool.releaseConnection(connection);
//                 resolve(pool);
//             }
//             else {
//                 reject("");
//             }
//         })
//     });
//     pool.getConnection()
//                 .then(connection => {
//                     if (connection) {
//                         pool.releaseConnection(connection);
//                     }
//             console.log('DB IS CONNECTED');
//
// });
    
    // return pool;
    
//}



