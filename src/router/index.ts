import express from 'express'
import authentication from './authentication';
import users from './users';
import balance from './balance';


const router = express.Router();



export default (): express.Router => {
    authentication(router)
    users(router)
    balance(router)
    return router;
}