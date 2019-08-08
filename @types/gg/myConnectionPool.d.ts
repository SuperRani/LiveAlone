// import MyConnectionPool = require("../../database/database");
// import MyConnectionPool from "../../database/database";
//



//
// declare class mycp implements TEST.mycpInterface {
//     constructor();
//     connect(): Promise<any>;
//     getConnection(): Promise<any>;
// }
//
// declare namespace TEST {
//     export interface mycpInterface {
//         connect(): Promise<any>;
//         getConnection(): Promise<any>;
//     }
// }



export interface MysqlImp {
    createConnection(): Promise<any>;
    query(connection: any, queryString: string): Promise<any>;
}

declare class __MysqlConnection implements MysqlImp {
    constructor();
    createConnection(): Promise<any>;
    query(connection: any, queryString: string): Promise<any>;
}


//function connect(fn) {
//    return async function(...args) {
//    }
// }
