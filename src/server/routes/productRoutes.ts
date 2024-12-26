import productController from '../controllers/productController'
import {Router} from "express";

const router = Router();

router.get('/', productController.getProducts);

export default router