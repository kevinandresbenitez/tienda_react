import productController from '../controllers/product.controller'
import {Router} from "express";

const router = Router();

router.get('/', productController.getProducts);
router.get('/:id', productController.getProductsByID);


export default router