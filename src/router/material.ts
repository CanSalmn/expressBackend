import express from 'express'
import { addMaterial, getMaterial } from '../controller/material'



export default (router: express.Router) => {
    router.get('/material', getMaterial)
    router.post('/material/createMaterial', addMaterial)
    // router.get('/balance', isAuthenticated, isOwner, getAllTransaction)
    // router.post('/balance/createTransaction', isAuthenticated, isOwner, addTransaction)

}