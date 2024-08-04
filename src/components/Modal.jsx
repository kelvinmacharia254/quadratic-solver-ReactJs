
// eslint-disable-next-line react/prop-types
import {forwardRef, useRef} from "react";



const Modal = forwardRef(({onClickModalButton}, ref) => {
    function handleClick(event) {
    onClickModalButton(event.target.value)
}
     return(
        <>
            <dialog ref = {ref}>
                <p>Are you sure you want to clear your solution?</p>
                <form method="dialog">
                    <button value="cancel-modal">Cancel</button>
                    <button onClick={(event)=>handleClick(event)} value="confirm-clear">Yes</button>
                </form>
            </dialog>
        </>
    )
})

export default Modal;