import express from 'express'
import authentication from './authentication';
import users from './users';
import balance from './balance';
import material from './material';
import slider from './slider';


const router = express.Router();



export default (): express.Router => {
    authentication(router)
    users(router)
    balance(router)
    material(router)
    slider(router)
    return router;
}