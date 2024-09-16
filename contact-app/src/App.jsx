import Navbar from "./components/Navbar";
import { FiSearch } from "react-icons/fi";
import { FaCirclePlus } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import ContactCard from "./components/ContactCard";
import AddUpdateContact from "./components/AddUpdateContact";
import useDisclose from "./hooks/useDisclose";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotFoundContact from "./components/NotFoundContact";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const {isOpen, onClose, onOpen} = useDisclose();

  //data from firestore
  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");

        onSnapshot(contactsRef, (snapshot) => {
          const contactLists = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setContacts(contactLists);
          return contactLists;
        })
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);

  //filter contacts for search value
  const filterContacts = (e) => {
    const value = e.target.value;

    const contactsRef = collection(db, "contacts");

    onSnapshot(contactsRef, (snapshot) => {
      const contactLists = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      const filteredContacts = contactLists.filter((contact) => contact.name.toLowerCase().includes(value.toLowerCase()));

      setContacts(filteredContacts);
      return filteredContacts;
    })
  };

  return (
    <>
      <div className="mx-auto max-w-[370px] px-4">
        <Navbar />
        <div className="flex items-center gap-2">
          
          <div className="relative flex flex-grow items-center">
            <FiSearch className="absolute ml-1 text-3xl text-white" />
            <input
              onChange={filterContacts}
              type="text"
              className="h-10 flex-grow rounded-md border border-white bg-transparent pl-10 text-white"
            />
          </div>
          <FaCirclePlus className="cursor-pointer text-4xl text-white" onClick={onOpen}/>
        </div>
        
        {/* contact card display */}
        <div className="mt-5 flex flex-col gap-3">
          {contacts.length <= 0 ? <NotFoundContact /> : contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact}/>
          ))}
        </div>
      </div>
      
      {/* modal appearing on screen */}
      <AddUpdateContact isOpen={isOpen} onClose={onClose}/>
      
      {/* toast */}
      <ToastContainer position="bottom-center" />
    </>
  );
};

export default App;