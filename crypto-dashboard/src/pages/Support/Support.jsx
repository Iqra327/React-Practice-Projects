import DashboardLayout from "../../components/DashboardLayout";
import SupportCard from "./components/SupportCard";
import ContactCard from "./components/ContactCard";
import { IoMail } from "react-icons/io5";
import { AiTwotoneMessage } from "react-icons/ai";
import InfoCard from "../Dashboard/components/InfoCard";
import { Stack } from "@chakra-ui/react";

const Support = () => {
  return (
    <DashboardLayout title='Support'>
      <Stack spacing='5rem'>
      <SupportCard 
        icon={IoMail} 
        leftComponent={<ContactCard />} 
        title='Contact Us' 
        text='Have a question or just want to know more? Feel free to reach out to us.'
      />
      <SupportCard 
        icon={AiTwotoneMessage} 
        leftComponent={
          <InfoCard 
            inverted={true}
            imgUrl='/grid_bg.svg'
            tagText='Contact'
            text='Learn more about our real estate, mortage, and corporation.'
        
        />} 
        title='Live Chat' 
        text='Have a question or just want to know more? Feel free to reach out to us.'
      />
      </Stack>
    </DashboardLayout>
  )
};

export default Support;