import {createConnection, getConnectionManager} from "typeorm";

const promise = (async () => {
    const manager = getConnectionManager();
    if(manager.has('default')) {
       const c = manager.get('default');
        if(c.isConnected) {
            return c;
        } else {
            return createConnection();
        }
    } else {
        console.log(123);
        return createConnection();
    }
})()

export const getDatabaseConnection = async () => {
    return promise;
}