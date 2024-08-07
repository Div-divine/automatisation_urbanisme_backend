import { Router } from "express";
import Collection from "../model/collectionModel.js";

const router = Router()

const collectionName = process.env.COLLECTION_NAME

router.get('/collection-data', async (req, res, next)=>{
    try {
        if(!collectionName){
           return res.json({message: 'Enter collection'}) 
        }
        const documents = await Collection.getAllCollectionData(collectionName);
        res.status(200).send(documents)
      } catch (error) {
        console.error('Error retrieving collection data:', error);
      }
})

export default router