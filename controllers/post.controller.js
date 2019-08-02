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
//get
function getPosts(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_1.connect();
        try {
            const sql = 'CALL usp_get_board;';
            // const sql =  `SELECT @RNUM := @RNUM + 1 AS NO, a.* FROM (SELECT * FROM board  ORDER BY bNum ASC ) a, ( SELECT @RNUM := 0 ) b`;
            const Board = yield conn.query(sql);
            // console.log(Board[0]);
            return res.json(Board[0]);
        }
        catch (e) {
            console.log(e);
        }
        finally {
            yield conn.release;
        }
    });
}
exports.getPosts = getPosts;
//get
function getPost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_1.connect();
        try {
            const bNum = req.params.bNum;
            // const posts = await conn.query(`call usp_get_list_board(?);`);
            const posts = yield conn.query('SELECT * FROM board WHERE bNum = ?', [bNum]);
            if (posts.length > 0) {
                res.json(posts[0]);
            }
        }
        catch (e) {
            console.log(e);
        }
        finally {
            yield conn.release;
        }
    });
}
exports.getPost = getPost;
//       `SELECT A.*, @RNUM := @RNUM + 1 ROWNUM FROM board A, (SELECT @RNUM := 0) R ORDER BY A.bNum`
//  1.   @rownum := @rownum+1 AS RNUM 은 행을 불러올때마다 1을 더해서 출력하겠다 이다.
//  2.   SELECT @rownum :=0) AS R 는 @rownum을 0으로 초기화해 SELECT 하겠다 이다.
//post
function createPost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_1.connect();
        try {
            const newBoard = req.body;
            // await conn.query('INSERT INTO board SET ?', [newBoard]);
            yield conn.query('CALL usp_add_board(?);', [newBoard]);
            res.json({
                message: 'New Post Created'
            });
        }
        catch (e) {
            console.log(e);
        }
        finally {
            yield conn.release;
        }
    });
}
exports.createPost = createPost;
//delete
function deletePost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_1.connect();
        try {
            const bNum = req.params.bNum;
            yield conn.query('DELETE FROM board WHERE bNum = ?', [bNum]);
            res.json({
                message: 'Post deleted'
            });
        }
        catch (e) {
            console.log(e);
        }
        finally {
            yield conn.release;
        }
    });
}
exports.deletePost = deletePost;
//update
function updatePost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_1.connect();
        try {
            const bNum = req.params.bNum;
            const updateBoard = req.body;
            yield conn.query('UPDATE board set ? WHERE bNum = ?', [updateBoard, bNum]);
            res.json({
                message: 'Post Updated'
            });
        }
        catch (e) {
            console.log(e);
        }
        finally {
            yield conn.release;
        }
    });
}
exports.updatePost = updatePost;
//# sourceMappingURL=post.controller.js.map