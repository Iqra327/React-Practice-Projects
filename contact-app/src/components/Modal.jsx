import { AiOutlineClose } from 'react-icons/ai';

const Modal = ({isOpen, onClose, children}) => {
  return (
    <>
      {isOpen && ( <div className="min-h-[200px] max-w-[80%] bg-white p-4">
        <div className='flex justify-end'>
          <AiOutlineClose onClick={onClose} className='text-2xl cursor-pointer'/>
        </div>
      </div>
      )}
    </>
  )
};

export default Modal;