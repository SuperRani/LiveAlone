import { Router } from 'express'
import {Board} from "../interface/Board";

const _connection = require('../controllers/post.controller');
let connection = new _connection();




const router = Router();
router.route('/')

    .get((req, res) => {
        connection.createConnection().then(result => {
             connection.query(result, 'call usp_get_board;').then(getDatas => {
            return getDatas;
        }).then(getDatas => {
            
            console.log('getData 파라미터 값은?',getDatas);
            result.release();
            return res.json(getDatas[0]);
       
            
            
        })
    });
    })
    .post((req, res) => {
        
        connection.createConnection().then(result => {
            const newBoard: Board = req.body;
        connection.query([newBoard,result], 'CALL usp_add_board').then(postData => {
            return postData;
        }).then(postData => {
            console.log(postData);
            result.release();
        })
    });
    });
    


router.route('/:bNum')
    .get((req, res) => {
        connection.createConnection().then(result => {
        const bNum = req.params.bNum;
        connection.query(result, 'SELECT * FROM board WHERE bNum = ?', [bNum]).then(getData => {
            return getData;
        }).then(getData => {
            console.log(getData);
            result.release();
            res.json(getData[0]);
        })
    });
    })
    .delete((req, res) => {
        connection.createConnection().then(result => {
        const bNum = req.params.bNum;
        connection.query(result, 'DELETE FROM board WHERE bNum = ?', [bNum]).then(deleteData => {
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
        const updateBoard: Board = req.body;
        connection.query(result, 'UPDATE board set ? WHERE bNum = ?', [updateBoard, bNum]).then(putData => {
            return putData;
        }).then(putData => {
            console.log(putData);
            result.release();
        })
    });
    });
    

export default router;




// const router = Router();
// router.route('/')
//
//     .get(postController.getPosts)
//     .post(postController.createPost);
//
//
// router.route('/:bNum')
//     .get(postController.getPost)
//     .delete(postController.deletePost)
//     .put(postController.updatePost);
//
// export default router;


