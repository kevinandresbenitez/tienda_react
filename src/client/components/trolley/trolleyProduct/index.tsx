import React from "react";
import './index.less';
import { useTrolley } from "../../../contexts/trolley/index.tsx";
import { useTrolleyType} from "../../../types/trolley/index.tsx";
import { Product } from "../../../models/product";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";



/**
 * `TrolleyProduct` displays the details of a product in the shopping cart (trolley) and allows the user to remove the product from the trolley.
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
 * import { TrolleyProduct } from './path/to/TrolleyProduct';
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
 *     <TrolleyProvider>
 *       <TrolleyProduct>{sampleProduct}</TrolleyProduct>
 *       { Other components }
 *     </TrolleyProvider>
 *   );
 * };
 * 
 * export default App;
 * ```
 * 
 * **Hooks Used:**
 * - `useTrolley`: Provides access to the trolley context, specifically the `removeProductOnTrolley` function.
 * 
 * **Context Requirement:**
 * - `TrolleyProduct` must be used within a `TrolleyProvider` component or any component tree where `TrolleyContext` is available. This ensures that `useTrolley` has access to the context required for its functionality.
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
export function TrolleyProduct({children}:{children:Product}){
    const {removeProductOnTrolley}:useTrolleyType = useTrolley();
    
    return (
        <div className="TrolleyProduct">
            <p><strong>Nombre: </strong>{children.name}</p>
            <p><strong>Sku: </strong>{children.id}</p>
            <p><strong>Color de version: </strong>{children.versions[0].nameColor}</p>
            <p><strong>Cantidad: </strong>{children.getStock()}</p>
            <button className="TrolleyProduct__button__remove" onClick={()=>{removeProductOnTrolley(children)}}><FontAwesomeIcon icon={faTrash} /></button>
        </div>
    )
}