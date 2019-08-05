"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_1 = require("mysql2/promise");
const mysql_1 = __importDefault(require("../database/mysql"));
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
function getPosts(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const pool = yield promise_1.createPool(mysql_1.default.database);
            pool.getConnection()
                .then(connection => {
                const Board = connection.query('CALL usp_get_board;');
                connection.release();
                console.log('DB IS CONNECTED');
                return res.json(Board);
            });
        }
        catch (e) {
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
    });
}
exports.getPosts = getPosts;
//get
function getPost(req, res) {
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
exports.getPost = getPost;
//       `SELECT A.*, @RNUM := @RNUM + 1 ROWNUM FROM board A, (SELECT @RNUM := 0) R ORDER BY A.bNum`
//  1.   @rownum := @rownum+1 AS RNUM 은 행을 불러올때마다 1을 더해서 출력하겠다 이다.
//  2.   SELECT @rownum :=0) AS R 는 @rownum을 0으로 초기화해 SELECT 하겠다 이다.
//post
function createPost(req, res) {
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
exports.createPost = createPost;
//delete
function deletePost(req, res) {
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
exports.deletePost = deletePost;
//update
function updatePost(req, res) {
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
exports.updatePost = updatePost;
//# sourceMappingURL=post.controller.js.map