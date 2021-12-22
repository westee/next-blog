import "reflect-metadata";
import {createConnection} from "typeorm";
import {Post} from "./entity/Post";

createConnection().then(async connection => {
    console.log(123);
    const posts = await  connection.manager.find(Post);
    console.log(456);

    if(posts.length == 0) {
        await connection.manager.save([1,2,3,4,5,6,7,8,9,10, 11].map(n => {
            return new Post({title: `博客 ${n}`, content: `这是第${n}篇博客`})
        }))
    }
    console.log("Here you can setup and run express/koa/any other framework.");
    await connection.close();
}).catch(error => console.log(error));
