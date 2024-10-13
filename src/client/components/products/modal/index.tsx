import React, { useRef, useState ,useEffect} from "react";
import PropTypes from 'prop-types';
import { Product} from "../../../models/product/index.tsx";
import {Modal as ModalCommon} from "../../common/modal/index.tsx";
import { ProductContent } from "../index.tsx";


export default function Modal({children:product,disableModal}:{children:Product,disableModal: () => void }){

    return(
        <ModalCommon disableModal={disableModal}>
            <ProductContent versionContent="lite">{product}</ProductContent>
        </ModalCommon>
    )
}
