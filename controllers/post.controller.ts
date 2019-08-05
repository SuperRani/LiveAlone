import { Request, Response } from 'express'
// DB
// import { connect } from '../database/database'


// Interfaces
import { Board } from '../interface/Board'

import {createPool,Pool} from 'mysql2/promise';
import dbName from '../database/mysql'

// import pool from '../database/database'
import {connect} from '../database/database'



// class GamesController{
//     public async getList (req:Request, res:Response): Promise<void>{
//         const games = await pool.query('SELECT * FROM games');
//         res.json(games);
//     }
//     public async getOne (req: Request,  res: Response): Promise<any>{
//         const { id } = req.params;
//         const game = await pool.query('SELECT * FROM games WHERE id = ?', [id]);
//         if(game.length > 0){
//             return res.json(game[0]);
//         }
//         res.status(404).json({text: "the game doesn't exists"});
//     }
//     public async create (req: Request, res: Response): Promise<void>{
//         await pool.query('INSERT INTO games SET ?', [req.body]);
//         res.json({message: 'juego Guardado'});
//     }
//     public async update (req: Request,  res: Response): Promise<void>{
//         const { id } = req.params;
//         await pool.query('UPDATE games SET ? WHERE id = ?', [req.body, id]);
//         res.json({message: 'juego '+ [id] + ' ha sido actualizado'});
//     }
//     public async delete (req: Request, res: Response): Promise<void>{
//         const { id } = req.params;
//         await pool.query('DELETE FROM games WHERE id = ?', [id]);
//         res.json({message: 'juego '+ [id] + ' ha sido eliminado'});
//     }
// }
//
// const gamesControllers = new GamesController();
// export default gamesControllers;






// //get
// export async function getPosts(req: Request, res: Response): Promise<Response | void> {
//     const conn = await connect();
//
//
//     try {
//          const sql = 'CALL usp_get_board;';
//         // const sql =  `SELECT @RNUM := @RNUM + 1 AS NO, a.* FROM (SELECT * FROM board  ORDER BY bNum ASC ) a, ( SELECT @RNUM := 0 ) b`;
//
//         const Board = await conn.query(sql);
//
//         // console.log(Board[0]);
//
//
//
//        await conn.release;
//         return res.json(Board[0]);
//
//
//     }catch (e) {
//         console.log(e);
//
//     }finally {
//
//     }
//
//
//
//
// }


//get
export async function getPosts(req: Request, res: Response): Promise<Response | void> {
    
    try {
        const pool = await createPool(dbName.database);
        pool.getConnection()
            .then(connection =>{
            const Board = connection.query('CALL usp_get_board;');
            
            connection.release();
            console.log('DB IS CONNECTED');
            return res.json(Board);
           
          
        });
        
    }catch (e) {
        console.log(e);
        
    }
    
    
  


    // try {
    //      const sql = 'CALL usp_get_board;';
    //     // const sql =  `SELECT @RNUM := @RNUM + 1 AS NO, a.* FROM (SELECT * FROM board  ORDER BY bNum ASC ) a, ( SELECT @RNUM := 0 ) b`;
    //
    //     const Board = await conn.query(sql);
    //
    //     // console.log(Board[0]);
    //
    //
    //     return res.json(Board[0]);
    //
    //
    // }catch (e) {
    //     console.log(e);
    //
    //
    // }

}




//get
export async function getPost(req: Request, res: Response) {
    // const conn = await connect();
    // try {
    //     const bNum = req.params.bNum;
    //     // const posts = await conn.query(`call usp_get_list_board(?);`);
    //     const posts = await conn.query('SELECT * FROM board WHERE bNum = ?', [bNum]);
    //     if(posts.length > 0 ){
    //         res.json(posts[0]);
    //     }
    // }catch (e) {
    //     console.log(e);
    // }
    console.log('update');
}

//       `SELECT A.*, @RNUM := @RNUM + 1 ROWNUM FROM board A, (SELECT @RNUM := 0) R ORDER BY A.bNum`

//  1.   @rownum := @rownum+1 AS RNUM 은 행을 불러올때마다 1을 더해서 출력하겠다 이다.
//  2.   SELECT @rownum :=0) AS R 는 @rownum을 0으로 초기화해 SELECT 하겠다 이다.



//post
export async function createPost(req: Request, res: Response) {
    // const conn = await connect();
    // try {
    //     const newBoard: Board = req.body;
    //
    //     // await conn.query('INSERT INTO board SET ?', [newBoard]);
    //     await conn.query('CALL usp_add_board(?);', [newBoard]);
    //
    //     res.json({
    //         message: 'New Post Created'
    //     });
    //
    // }catch (e) {
    //     console.log(e);
    // }
    
    
    
    console.log('update');

}



//delete
export async function deletePost(req: Request, res: Response) {
    // const conn = await connect();
    // try {
    //     const bNum = req.params.bNum;
    //
    //
    //     await conn.query('DELETE FROM board WHERE bNum = ?', [bNum]);
    //     res.json({
    //         message: 'Post deleted'
    //     });
    //
    // }catch (e) {
    //     console.log(e);
    // }
    
    console.log('update');
}


//update
export async function updatePost(req: Request, res: Response) {
    // const conn = await connect();
    // try {
    //     const bNum = req.params.bNum;
    //     const updateBoard: Board = req.body;
    //
    //     await conn.query('UPDATE board set ? WHERE bNum = ?', [updateBoard, bNum]);
    //     res.json({
    //         message: 'Post Updated'
    //     });
    //
    // }catch (e) {
    //     console.log(e);
    // }
    console.log('update');
}






