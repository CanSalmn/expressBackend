import express from 'express'
import { getAllTransaction, addTransaction } from '../controller/balance'
import { isAuthenticated, isOwner } from '../middlewares'




export default (router: express.Router) => {
    router.get('/balance', getAllTransaction)
    router.post('/balance/createTransaction', addTransaction)
    // router.get('/balance', isAuthenticated, isOwner, getAllTransaction)
    // router.post('/balance/createTransaction', isAuthenticated, isOwner, addTransaction)

}