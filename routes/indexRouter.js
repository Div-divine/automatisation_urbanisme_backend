import { Router } from "express";

const router = Router()

router.get('/', (req, res, next)=>{
    res.send({message: 'Welcom to app backend'})
})

export default router