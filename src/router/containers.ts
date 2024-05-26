import express from 'express'
import { getAllContainers, addContainer } from '../controller/containers'



export default (router: express.Router) => {
    router.get('/containers', getAllContainers)
    router.post('/containers/createContainer', addContainer)

}