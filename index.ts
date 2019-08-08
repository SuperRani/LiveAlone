import { App } from './app'


// import {Board} from "./interface/Board";
// const express = require('express');
// const appEx = express();
// const _connection = require('./controllers/post.controller');
// let connection = new _connection();


async function main() {
    
    const app = new App(5000);
    await app.listen();
}

main();







// let mycp = new MyConnectionPool();
// Object.defineProperty(global, 'mycp', {
//     value: mycp
// });



