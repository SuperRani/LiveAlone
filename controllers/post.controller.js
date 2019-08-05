"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// DB
const database_1 = require("../database/database");
// import pool from '../database/database'
class PostController {
    //get
    getPosts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield database_1.connect();
            try {
                // const sql =  `SELECT @RNUM := @RNUM + 1 AS NO, a.* FROM (SELECT * FROM board  ORDER BY bNum ASC ) a, ( SELECT @RNUM := 0 ) b`;
                const Board = yield conn.query('CALL usp_get_board;');
                console.log('Board 값' + Board);
                return res.json(Board[0]);
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    //get
    getPost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
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
        });
    }
    //       `SELECT A.*, @RNUM := @RNUM + 1 ROWNUM FROM board A, (SELECT @RNUM := 0) R ORDER BY A.bNum`
    //  1.   @rownum := @rownum+1 AS RNUM 은 행을 불러올때마다 1을 더해서 출력하겠다 이다.
    //  2.   SELECT @rownum :=0) AS R 는 @rownum을 0으로 초기화해 SELECT 하겠다 이다.
    //post
    createPost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
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
        });
    }
    //delete
    deletePost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
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
        });
    }
    //update
    updatePost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
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
        });
    }
}
exports.postController = new PostController();
//# sourceMappingURL=post.controller.js.map