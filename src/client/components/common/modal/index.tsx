import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import './index.less';
import ButtonClose from '../../common/buttonClose/index.tsx';

export function Modal({ children, disableModal }: { children: React.ReactNode; disableModal: () => void }) {
    // Html elements
    const modalOverlay = useRef<HTMLDivElement>(null);
    const modal = useRef<HTMLDivElement>(null);

    function hideModal() {
        if (modalOverlay.current && modal.current) {
            modalOverlay.current.classList.add("hide");
            modal.current.classList.add("hide");

            modal.current.addEventListener("animationend", () => {
                disableModal();
            }); 
        }
    }

    return (
        <div ref={modalOverlay} className="modal-overlay" onClick={hideModal}>
            <div ref={modal} className="modal" onClick={(event) => event.stopPropagation()}>
                {children}
                <ButtonClose onClick={hideModal} />
            </div>
        </div>
    );
}

Modal.propTypes = {
    children: PropTypes.node.isRequired,
    disableModal: PropTypes.func.isRequired,
};
