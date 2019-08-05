import { Router } from 'express'
import  {postController} from '../controllers/post.controller'
const router = Router();

router.route('/')
    
    .get(postController.getPosts)
    .post(postController.createPost);
    

router.route('/:bNum')
    .get(postController.getPost)
    .delete(postController.deletePost)
    .put(postController.updatePost);

export default router;

