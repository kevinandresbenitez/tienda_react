import productController from '../controllers/productController'
import {Router} from "express";

const router = Router();

router.get('/', productController.getProducts);
router.get('/:id', productController.getProductsByID);


export default router