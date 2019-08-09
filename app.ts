import express, { Application } from 'express';
import morgan from 'morgan';
import cors from "cors";
import { Router } from 'express'


// Routes
import IndexRoutes from './routes/index.routes'
import PostRoutes from './routes/post.routes'


let app = express();
let router =  express.Router();


export class App {
    
    app: Application;

    constructor(
        public port?: number | string
    ) {
        this.app = express();
        this.settings();
        this.middleware();
        this.routes();
    }

    private settings() {
        this.app.set('port', this.port || process.env.PORT || 5000);
    }

    private middleware() {
        // app.use(cors());
    
    
        const options:cors.CorsOptions = {
            allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
            credentials: true,
            methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
            origin: 'http://localhost:5000/board',
            preflightContinue: false
        };
        
        router.use(cors(options));
    
        router.options("*", cors(options));
  
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    private routes() {
        this.app.use(IndexRoutes);
        this.app.use('/board', PostRoutes);
        
    }

    async listen(): Promise<void> {
        await this.app.listen(this.app.get('port'));
        console.log('Server on port', this.app.get('port'));
    }

}






