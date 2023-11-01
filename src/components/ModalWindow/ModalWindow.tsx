import { createPortal } from 'react-dom';
import { ReactNode } from 'react';

interface IProps {
    children: ReactNode;
    isCloseBtnActive?: boolean;
    onClose?: () => void;
}
const modalWindowRoot = document.querySelector('#modal-window-root') as HTMLDivElement;

export const ModalWindow = ({children, onClose, isCloseBtnActive = true}: IProps) => {

    return createPortal(
        <div className="modal-window fixed w-screen h-screen top-0 left-0 z-10 flex justify-center items-center">
            <div className="box-content bg-white border-none bg-none relative">
                {isCloseBtnActive && 
                <button 
                    type="button" 
                    className="modal-btn-close w-[23px] h-[23px] flex justify-center items-center rounded-xl border-none bg-white absolute top-[15px] right-[15px] cursor-pointer hover:scale-110" 
                    onClick={onClose}
                >
                    <svg id="icon-modal-close-btn" viewBox="0 0 32 32" width="12px" height="12px">
                        <path d="M1.455 0c-0.402 0-0.765 0.163-1.028 0.426v0c-0.263 0.263-0.426 0.627-0.426 1.028s0.163 0.765 0.426 1.028l13.517 13.517-13.517 13.517c-0.263 0.263-0.426 0.627-0.426 1.028s0.163 0.765 0.426 1.028v0c0.263 0.263 0.627 0.426 1.028 0.426s0.765-0.163 1.028-0.426l13.517-13.517 13.517 13.517c0.263 0.263 0.627 0.426 1.028 0.426s0.765-0.163 1.028-0.426v0c0.263-0.263 0.426-0.627 0.426-1.028s-0.163-0.765-0.426-1.028l-13.517-13.517 13.517-13.517c0.263-0.263 0.426-0.627 0.426-1.028s-0.163-0.765-0.426-1.028v0c-0.263-0.263-0.627-0.426-1.028-0.426s-0.765 0.163-1.028 0.426l-13.517 13.517-13.517-13.517c-0.263-0.263-0.627-0.426-1.028-0.426v0z"></path>
                    </svg>
                </button>}
                {children}
            </div>
            
        </div>, modalWindowRoot
    );
};