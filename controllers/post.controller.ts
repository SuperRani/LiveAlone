import { Request, Response } from 'express'
// DB
import { connect } from '../database/database'

// Interfaces
import { Board } from '../interface/Board'
import {Pool} from "mysql2/promise";


    class PostController{
        //get
        async getPosts(req: Request, res: Response): Promise<Response | void> {
        
            const conn = await connect();
            try {
            
                // const sql =  `SELECT @RNUM := @RNUM + 1 AS NO, a.* FROM (SELECT * FROM board  ORDER BY bNum ASC ) a, ( SELECT @RNUM := 0 ) b`;
                const Board = await conn.query('CALL usp_get_board;');
                console.log('Board 값'+ Board);
                
                return res.json(Board[0]);
                
            
            }catch (e) {
            
                console.log(e);
            }
        }




        //get
        async getPost(req: Request, res: Response) {
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
         async createPost(req: Request, res: Response) {
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
         async deletePost(req: Request, res: Response) {
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
         async updatePost(req: Request, res: Response) {
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
     
    }
    export const postController = new PostController();


    









