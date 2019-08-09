import { Router } from 'express'
import { indexWelcome } from '../controllers/index.controller'
import cors from 'cors';


const router = Router();
router.use(cors());
router.route('/')
    .get(indexWelcome);

export default router;
