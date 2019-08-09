import { App } from './app'




async function main() {
    
    const app = new App(5000);
    await app.listen();
}

main();







// let mycp = new MyConnectionPool();
// Object.defineProperty(global, 'mycp', {
//     value: mycp
// });



