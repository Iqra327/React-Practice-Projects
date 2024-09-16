import { createPortal } from 'react-dom';
import { AiOutlineClose } from 'react-icons/ai';

const Modal = ({isOpen, onClose, children}) => {
  return createPortal(
    <>
      {isOpen && (
        <div className='flex absolute top-0 backdrop-blur h-screen w-screen z-50'>
          <div className="relative z-[60] min-h-[200px] max-w-[500px] w-[100%] bg-white p-4 m-auto">
            <div className='flex justify-end'>
              <AiOutlineClose onClick={onClose} className='text-2xl cursor-pointer'/>
            </div>
            {children}
          </div>
        </div>
      )}
    </>
  , document.getElementById('modal-root'));
};

export default Modal;