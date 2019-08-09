import express, { Application } from 'express';
import morgan from 'morgan';

const _connection = require('./controllers/post.controller');
let connection = new _connection();
import {Board} from "./interface/Board";
// Routes
import IndexRoutes from './routes/index.routes'
import PostRoutes from './routes/post.routes'


let app = express();



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
        
        // app.get('/board', function (req, res, next) {
        //     res.setHeader('Access-Control-Allow-Origin', '*');
        //     res.setHeader("Access-Control-Allow-Credentials", "true");
        //     res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
        //     res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
        //     res.json({msg: 'This is CORS-enabled for all origins!'});
        //
        // });
        // app.use(function(req, res, next) {
        //
        //     res.setHeader('Access-Control-Allow-Origin', '*');
        //     next();
        //
        // });
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    private routes() {
        this.app.use(IndexRoutes);
    
        this.app.use('/board', PostRoutes);
        
    }

    async listen(): Promise<void> {
       
        // app.get('/products/:id', function (req, res, next) {}
        
        await this.app.listen(this.app.get('port'));
        console.log('Server on port', this.app.get('port'));
    }

}






