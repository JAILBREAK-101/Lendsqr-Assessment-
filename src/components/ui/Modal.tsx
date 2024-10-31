import {Icon} from "./icon";
import ReactDOM from "react-dom";
interface ModalInterface {
    body?: any
    footer?: any
    header?: any
    open: boolean
    onClose: any
}
export const Modal = ({body, footer, header,  open, onClose}: ModalInterface) => {
    if (!open) return null
    return ReactDOM.createPortal(
        <>
            <div className="modal-mask" onClick={onClose}>
                <div className="modal-wrapper">
                    <div className="modal-container delete-modal" onClick={e => {
                        // do not close modal if anything inside modal content is clicked
                        e.stopPropagation();
                    }}>

                        <div className="modal-header">
                            {header}
                            <span onClick={onClose} className="modal-close"><Icon name="cancel" viewBox="0 0 18 18"/></span>
                        </div>

                        <div className="modal-body">
                            <div className="modal__fieldset">
                                {body}
                            </div>
                        </div>

                        <div className="modal-footer">
                            {footer}
                        </div>
                    </div>
                </div>
            </div>
        </>,
        document.getElementById('portal') as HTMLElement
    );
}