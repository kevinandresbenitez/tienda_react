import React from "react";
import './index.less';
import { useCart } from "../../../../contexts/cart/index.tsx";
import { useCartType} from "../../../../types/cart/index.tsx";
import { Product } from "../../../../models/product/index.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons/faArrowUpRightFromSquare";
import {useNotification} from "../../../../contexts/notification/index.tsx"
import {useNotificationType} from "../../../../types/notification/index.tsx"
import { Link } from "react-router-dom";


/**
 * `CartProductItem` displays the details of a product in the shopping cart (cart) and allows the user to remove the product from the cart.
 * 
 * **Features:**
 * - Displays the product's name, SKU, color version, and stock quantity.
 * - Provides a button to remove the product from the cart.
 * 
 * **Props:**
 * - `children` (Product): The `Product` object to display. It should include properties such as `name`, `id`, `versions`, and a method `getStock()` to retrieve the stock quantity.
 * 
 * **Returns:**
 * A `div` element styled as a product item in the cart, including:
 * - Product name
 * - SKU (identifier)
 * - Color version
 * - Stock quantity
 * - A remove button to remove the product from the cart
 * 
 * **Usage Example:**
 * ```tsx
 * import React from 'react';
 * import { CartProductItem } from './path/to/CartProductItem';
 * import { Product } from '../../../models/product';
 * 
 * const sampleProduct: Product = {
 *   id: '123',
 *   name: 'Sample Product',
 *   versions: [{ nameColor: 'Red' }],
 *   getStock: () => 10
 * };
 * 
* const App = () => {
 *   return (
 *     <CartProvider>
 *       <CartProductItem>{sampleProduct}</CartProductItem>
 *       { Other components }
 *     </CartProvider>
 *   );
 * };
 * 
 * export default App;
 * ```
 * 
 * **Hooks Used:**
 * - `useCart`: Provides access to the cart context, specifically the `removeProductOncart` function.
 * 
 * **Context Requirement:**
 * - `CartProductItem` must be used within a `CartProvider` component or any component tree where `CartContext` is available. This ensures that `usecart` has access to the context required for its functionality.
 * 
 * **Styling:**
 * - The component is styled using the CSS rules defined in `index.less`. It includes a class for the product details and a remove button.
 * 
 * **Notes:**
 * - Ensure that the `children` prop is a valid `Product` object. Passing incorrect or incomplete data may result in runtime errors.
 * - The `removeProductOncart` function is called when the remove button is clicked, so make sure the cart's state and context are properly managed.
 * 
 * @param {Product} children - The `Product` object to be displayed in the cart.
 * @returns A `div` element styled as a product item in the cart, including product details and a remove button.
 */
export function CartProductItem({children:product}:{children:Product}){
    const {removeProductOnCart}:useCartType = useCart();
    const {addNotification}:useNotificationType = useNotification();
    

    function removeProductHandle(product:Product){
        removeProductOnCart(product)
        addNotification({content:"Se ha eliminado el producto del carrito",duration:2000,variant:'trash'})
    }

    return (
        <div className="cartProduct">
            <strong className="cartProduct__title">{product.name}</strong>
            <p className="cartProduct__sku">Sku: {product.id}</p>
            <p className="cartProduct__version">Color de version: {product.versions[0].nameColor}</p>
            <p className="cartProduct__count">Cantidad: {product.getStock()}</p>
            <Link to={`/product/${product.id}`} className="cartProduct__button__link" ><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></Link>
            <button className="cartProduct__button__remove" onClick={()=>{removeProductHandle(product)}}><FontAwesomeIcon icon={faTrash} /></button>
        </div>
    )
}