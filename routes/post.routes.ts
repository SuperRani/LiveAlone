import { Router } from 'express'
import {Board} from "../interface/Board";

const _connection = require('../controllers/post.controller');
let connection = new _connection();
import cors from "cors";



const router = Router();

router.route('/')

    .get((req, res) => {
        connection.createConnection().then(result => {
             connection.query(result, 'call usp_get_board;').then(getDatas => {
            return getDatas;
        }).then(getDatas => {
            
            console.log('getData 파라미터 값은?',getDatas);
            result.release();
            res.json(getDatas[0]);
       
            
            
        })
    });
    })
    .post((req, res) => {

        connection.createConnection().then(result => {
            const bTitle = req.body.bTitle;
            const bContent = req.body.bContent;
            const bId = req.body.bId;
            
            console.log('bTitle, bContent, bId: 값은?? ',bTitle,bContent, bId );
            
            
            // const newBoard: Board = req.body;
        connection.query2(result, 'CALL usp_post_board(?,?,?)',[bTitle,bContent,bId]).then(postData => {
            return postData;
        }).then(postData => {
            console.log(postData);
            result.release();
        })
    });
    });



router.route('/:bNum')
    .get((req, res) => {
        const bNum = req.params.bNum;
        connection.createConnection().then(result => {
        
        connection.query2(result,`call usp_get_list_board(?)`, [bNum] ).then(getData => {
            console.log('getData? :',getData);
            return getData;
        }).then(getData => {
            console.log('getData 의 값은 머니',getData);
            result.release();
            res.json(getData[0]);
        })
    });
    })
    .delete((req, res) => {
        connection.createConnection().then(result => {
        const bNum = req.params.bNum;
        connection.query2(result, 'call usp_delete_board(?)', [bNum]).then(deleteData => {
            return deleteData;
        }).then(deleteData => {
            console.log(deleteData);
            result.release();
        })
    });
    })
    .put((req, res) => {
        connection.createConnection().then(result => {
        
        const bNum = req.params.bNum;
        const bTitle = req.body.bTitle;
        const bContent = req.body.bContent;
        const bId = req.body.bId;
        
        const updateBoard: Board = req.body;
        connection.query2(result, 'call usp_update_board(?,?,?,?)', [bNum, bTitle, bContent, bId]).then(putData => {
            return putData;
        }).then(putData => {
            console.log(putData);
            result.release();
        })
    });
    });


export default router;



