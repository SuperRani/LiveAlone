// import { createPool, Pool } from 'mysql2/promise';
//
//
// export async function connect(): Promise<any> {
//     const connection = await createPool({
//         host: 'localhost',
//         user: 'root',
//         password: '0000',
//         database: 'NewTest',
//         connectionLimit: 10
//
//     });
//
//     return connection;
// }
import mysql, {Connection} from 'promise-mysql';
import {createPool,Pool} from 'mysql2/promise';
import dbName from './mysql'

export async function connect(): Promise<Pool> {
    // const connection  = await mysql.createConnection({
    //     host: 'localhost',
    //     user: 'root',
    //     password: '0000',
    //     database: 'NewTest',
    // });
    // return connection;
    
    
    const pool = await createPool(dbName.database);
    pool.getConnection().then(connection =>{
        connection.release();
        console.log('DB IS CONNECTED');
    });

    return pool;
}

// export default pool;
//createPool 함수가 프로미스 반환하는데 그냥 바로 접근하셔서 그런거네요 await 이나 then 쓰세요


// const pool = mysql.createPool(dbName.database);
// pool.getConnection().then(connection =>{
//     pool.releaseConnection(connection);
//     console.log('DB IS CONNECTED');
// });
