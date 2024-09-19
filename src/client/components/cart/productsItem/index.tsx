import React from "react";
import './index.less';
import { useCart } from "../../../contexts/cart/index.tsx";
import { useCartType} from "../../../types/cart/index.tsx";
import { Product } from "../../../models/product/index.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";
import {useNotification} from "../../../contexts/notification/index.tsx"
import {useNotificationType} from "../../../types/notification/index.tsx"


/**
 * `CartProductItem` displays the details of a product in the shopping cart (trolley) and allows the user to remove the product from the trolley.
 * 
 * **Features:**
 * - Displays the product's name, SKU, color version, and stock quantity.
 * - Provides a button to remove the product from the trolley.
 * 
 * **Props:**
 * - `children` (Product): The `Product` object to display. It should include properties such as `name`, `id`, `versions`, and a method `getStock()` to retrieve the stock quantity.
 * 
 * **Returns:**
 * A `div` element styled as a product item in the trolley, including:
 * - Product name
 * - SKU (identifier)
 * - Color version
 * - Stock quantity
 * - A remove button to remove the product from the trolley
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
 * - `useCart`: Provides access to the trolley context, specifically the `removeProductOnTrolley` function.
 * 
 * **Context Requirement:**
 * - `CartProductItem` must be used within a `CartProvider` component or any component tree where `CartContext` is available. This ensures that `useTrolley` has access to the context required for its functionality.
 * 
 * **Styling:**
 * - The component is styled using the CSS rules defined in `index.less`. It includes a class for the product details and a remove button.
 * 
 * **Notes:**
 * - Ensure that the `children` prop is a valid `Product` object. Passing incorrect or incomplete data may result in runtime errors.
 * - The `removeProductOnTrolley` function is called when the remove button is clicked, so make sure the trolley's state and context are properly managed.
 * 
 * @param {Product} children - The `Product` object to be displayed in the trolley.
 * @returns A `div` element styled as a product item in the trolley, including product details and a remove button.
 */
export function CartProductItem({children}:{children:Product}){
    const {removeProductOnCart}:useCartType = useCart();
    const {addNotification}:useNotificationType = useNotification();
    

    function removeProductHandle(product:Product){
        removeProductOnCart(children)
        addNotification({content:"Se ha eliminado el producto del carrito",duration:2000,variant:'trash'})
    }

    return (
        <div className="TrolleyProduct">
            <p><strong>Nombre: </strong>{children.name}</p>
            <p><strong>Sku: </strong>{children.id}</p>
            <p><strong>Color de version: </strong>{children.versions[0].nameColor}</p>
            <p><strong>Cantidad: </strong>{children.getStock()}</p>
            <button className="TrolleyProduct__button__remove" onClick={()=>{removeProductHandle(children)}}><FontAwesomeIcon icon={faTrash} /></button>
        </div>
    )
}