import { Request, Response } from 'express'

// mysqlConnectionModule 모듈
// import {mysqlConnectionModule} from "../database/database";

// DB
import exportConnection from '../database/database'

// Interfaces
 import { Board } from '../interface/Board'
// import {Pool} from "mysql2/promise";
// import MyConnectionPool = require("../database/database");
//import {mycpInterface} from "../@types/gg/myConnectionPool";
    
    
    
     class PostController{
    
         public async getPosts (req:Request, res:Response): Promise<void>{
             const boards = await exportConnection.pool.query('SELECT * FROM board');
             // const boards = await exportConnection.pool.query('call usp_get_board');
             res.json(boards[0]);
         }
         public async getPost (req: Request,  res: Response): Promise<any>{
             const { bNum } = req.params;
             const board = await exportConnection.pool.query('SELECT * FROM board WHERE bNum = ?', [bNum]);
             if(board.length > 0){
                 return res.json(board[0]);
             }
             res.status(404).json({text: "the board doesn't exists"});
         }
         public async createPost (req: Request, res: Response): Promise<void>{
             const newBoard: Board = req.body;
             await exportConnection.pool.query('INSERT INTO board SET ?', [newBoard]);
             res.json({message: 'New Post Created'});
         }
         public async updatePost (req: Request,  res: Response): Promise<void>{
            const bNum = req.params.bNum;
            const updateBoard: Board = req.body;
            await exportConnection.pool.query('UPDATE board SET ? WHERE bNum = ?', [updateBoard, bNum]);
             res.json({message: 'Post Updated'+ [bNum] + ' ha sido actualizado'});
         }
         public async deletePost (req: Request, res: Response): Promise<void>{
             const bNum = req.params.bNum;
             await exportConnection.pool.query('DELETE FROM board WHERE bNum = ?', [bNum]);
             res.json({message: 'Post deleted' + [bNum]});
         }
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         // //get
         //
         //  getPosts(req: Request, res: Response){
         //     const getBo = mysqlConnectionModule.connect(async (con:any)=> {
         //
         //         // const bo = await con.query('CALL_usp_get_board');
         //
         //          const bo = await con.query('select * from board');
         //
         //         console.log('bo들어있니?' , bo);
         //         return res.send(bo[0]);
         //
         //     });
         //
         // }
        
         
         
  
         
         
         
         
        // //get
        // async getPosts(req: Request, res: Response): Promise<void> {
        //
        //      //const conn = await connect() as Pool;
        //     return new Promise((resolve, reject) => {
        //
        //         //const _mycp = mycp as TEST.mycpInterface;
        //         return mycp.getConnection().then(connection => {
        //             connection.query('CALL usp_get_board;');
        //             connection.release();
        //             return;
        //         }).catch(err => {
        //             console.log(err);
        //         });
        //     }).then(() => {
        //         return;
        //     })
        //     // try {
        //     //
        //     //     // const sql =  `SELECT @RNUM := @RNUM + 1 AS NO, a.* FROM (SELECT * FROM board  ORDER BY bNum ASC ) a, ( SELECT @RNUM := 0 ) b`;
        //     //
        //     //     pool.getConnection((err, connection) => {
        //     //
        //     //     })
        //     //     conn.getConnection().then(connection => {
        //     //         let Board = connection.query('CALL usp_get_board;');
        //     //         console.log('Board 값'+ Board);
        //     //         connection.release();
        //     //     })
        //     //     //const Board = await conn.query('CALL usp_get_board;');
        //     //
        //     //     // return res.json(Board[0]);
        //     //
        //     //
        //     // }catch (e) {
        //     //
        //     //     console.log(e);
        //     // }finally {
        //     //
        //     // }
        // }
        
      
        
        
        
        
        
        
        
        




//         //get
//         async getPost(req: Request, res: Response) {
//             // const conn = await connect();
//             // try {
//             //     const bNum = req.params.bNum;
//             //     // const posts = await conn.query(`call usp_get_list_board(?);`);
//             //     const posts = await conn.query('SELECT * FROM board WHERE bNum = ?', [bNum]);
//             //     if(posts.length > 0 ){
//             //         res.json(posts[0]);
//             //     }
//             // }catch (e) {
//             //     console.log(e);
//             // }
//             console.log('update');
//         }
//
// //       `SELECT A.*, @RNUM := @RNUM + 1 ROWNUM FROM board A, (SELECT @RNUM := 0) R ORDER BY A.bNum`
//
// //  1.   @rownum := @rownum+1 AS RNUM 은 행을 불러올때마다 1을 더해서 출력하겠다 이다.
// //  2.   SELECT @rownum :=0) AS R 는 @rownum을 0으로 초기화해 SELECT 하겠다 이다.
//
//
//         //post
//          async createPost(req: Request, res: Response) {
//             // const conn = await connect();
//             // try {
//             //     const newBoard: Board = req.body;
//             //
//             //     // await conn.query('INSERT INTO board SET ?', [newBoard]);
//             //     await conn.query('CALL usp_add_board(?);', [newBoard]);
//             //
//             //     res.json({
//             //         message: 'New Post Created'
//             //     });
//             //
//             // }catch (e) {
//             //     console.log(e);
//             // }
//
//             console.log('update');
//         }
//
//
//
//         //delete
//          async deletePost(req: Request, res: Response) {
//             // const conn = await connect();
//             // try {
//             //     const bNum = req.params.bNum;
//             //
//             //
//             //     await conn.query('DELETE FROM board WHERE bNum = ?', [bNum]);
//             //     res.json({
//             //         message: 'Post deleted'
//             //     });
//             //
//             // }catch (e) {
//             //     console.log(e);
//             // }
//
//             console.log('update');
//         }
//
//
//         //update
//          async updatePost(req: Request, res: Response) {
//             // const conn = await connect();
//             // try {
//             //     const bNum = req.params.bNum;
//             //     const updateBoard: Board = req.body;
//             //
//             //     await conn.query('UPDATE board set ? WHERE bNum = ?', [updateBoard, bNum]);
//             //     res.json({
//             //         message: 'Post Updated'
//             //     });
//             //
//             // }catch (e) {
//             //     console.log(e);
//             // }
//             console.log('update');
//         }
    
    }
    const postController = new PostController();
     export default postController;











