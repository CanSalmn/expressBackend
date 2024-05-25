import express from 'express'
import { addImage, getCurrentImage } from '../controller/slider'
import { upload } from '../db/slider'



export default (router: express.Router) => {
    // router.get('/image', getMaterial)
    router.post('/image/createImage', upload.single("Image"), addImage)
    router.get('/image', getCurrentImage);

}