import { deleteDoc, doc } from "firebase/firestore";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import { db } from "../config/firebase";
import AddUpdateContact from "./AddUpdateContact";
import useDisclose from "../hooks/useDisclose";
import { toast } from "react-toastify";

const ContactCard = ({contact}) => {

  const {isOpen, onClose, onOpen} = useDisclose();
  
  const deleteContact =async (id) => {
    try {
      await deleteDoc(doc(db, 'contacts', id));
      toast.success("Contact Deleted Successfully!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div
      key={contact.id}
      className="bg-yellow flex items-center justify-between rounded-lg p-2"
      >
        <div className="flex items-center gap-1">
          <HiOutlineUserCircle className="text-orange text-4xl" />
          <div className="">
            <h2 className="font-medium">{contact.name}</h2>
            <p className="text-sm">{contact.email}</p>
          </div>
        </div>
        
        <div className="flex text-3xl gap-1">
          <RiEditCircleLine className="cursor-pointer" onClick={onOpen}/>
          <IoMdTrash onClick={() => deleteContact(contact.id)} className="text-orange cursor-pointer" />
        </div>
      </div>
      <AddUpdateContact contact={contact} isUpdate isOpen={isOpen} onClose={onClose}/>
    </>
  )
}

export default ContactCard;