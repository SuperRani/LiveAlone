
import mysql, {Connection} from 'promise-mysql';
import {createPool,Pool} from 'mysql2/promise';
import dbName from './mysql'

export async function connect(): Promise<Pool> {

    const pool = await createPool(dbName.database);


    pool.getConnection()
        .then(connection =>{
        if(connection != null){
            connection.release();
            connection.rollback();
        }
        
        console.log('쓰레드아이디', connection.threadId);
        console.log('DB IS CONNECTED');
        
    });
    return pool;
}



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

