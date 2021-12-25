import {createConnection, getConnectionManager} from "typeorm";

import 'reflect-metadata'
import {Post} from "../src/entity/Post";
import {User} from "../src/entity/User";
import {Comment} from "src/entity/Comment";
import config from 'ormconfig.json'

const create = async () => {
    // @ts-ignore
    return createConnection({
        ...config,
        entities: [Post, Comment, User]
    });
}

const promise = (async () => {
    const manager = getConnectionManager();
    if (manager.has('default')) {
    const c = manager.get('default');
    if (c.isConnected) {
        await c.close()
        return create();
    }
    return create();
    }
    return create();
})()

export const getDatabaseConnection = async () => {
    return promise;
}