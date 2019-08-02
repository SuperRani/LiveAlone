import { createPool, Pool } from 'mysql2/promise';


export async function connect(): Promise<any> {
    const connection = await createPool({
        host: 'localhost',
        user: 'root',
        password: '0000',
        database: 'NewTest',
        connectionLimit: 10
        
      
        
    });
    
    return connection;
}
