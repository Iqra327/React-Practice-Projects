import { Button, Card, Flex, Icon, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import DashboardLayout from "../../components/DashboardLayout";
import { AiOutlineDownload } from "react-icons/ai";

const Transaction = () => {
  const tabs = [
    {
      name: 'All',
      count: 349
    },
    {
      name: 'Deposit',
      count: 114
    },
    {
      name: 'Withdraw',
      count: 55
    },
    {
      name: 'Trade',
      count: 50
    }, 
  ]
  return (
    <DashboardLayout>
      <Flex justify='flex-end' mt='6' mb='3'>
        <Button leftIcon={<Icon as={AiOutlineDownload} />}>Export CSV</Button>
      </Flex>
      <Card>
      <Tabs>
        <TabList>
          <Tab>One</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
      </Card>
    </DashboardLayout>
  )
};

export default Transaction;