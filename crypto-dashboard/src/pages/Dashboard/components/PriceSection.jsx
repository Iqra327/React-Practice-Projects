import { Button, Flex, HStack, Icon, Image, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Tag, Text } from "@chakra-ui/react";
import { CustomCard } from "../../../chakra/CustomCard";
import { BsArrowUpRight } from "react-icons/bs";
import { AiFillPlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

const PriceSection = () => {

  const  timeStamps = ['7:15 PM', '8:10 PM', '9:15 PM', '10:05 PM', '11:20 PM']
  
  return (
    <CustomCard>
      <Flex justify="space-between" align='start'>
      <Stack>
        <HStack color='black.80'>
          <Text fontSize='sm'>Current Price</Text>
        </HStack>
        <HStack  spacing='4' align={{
          base: 'flex-start',
          sm: 'center'
        }} flexDir={{
          base: 'column',
          sm: 'row'
        }}>
        <HStack>
          <Text textStyle='h2' fontWeight='medium'>₹26,670.25</Text>
          <HStack fontWeight='medium' color='green.500'>
            <Icon as={BsArrowUpRight} ></Icon>
            <Text fontWeight='medium' fontSize='sm'>0.04%</Text>
          </HStack>
        </HStack>
        </HStack>
      </Stack>
      <HStack>
        <Button leftIcon={<Icon as={AiFillPlusCircle} />}>Buy</Button>
        <Button leftIcon={<Icon as={AiOutlineMinusCircle} />}>Sell</Button>
      </HStack>
      </Flex>

      <Tabs variant='soft-rounded'>
        <Flex justify='end'>
          <TabList bg='black.5' p='3px'>
            {
              ['1H', '1D', '1W', '1M'].map((tab) => (
                <Tab _selected={{
                  bg: 'white'
                }} key={tab} fontSize='sm' p='6px' borderRadius='4'>{tab}</Tab>
              ))
            }
          </TabList>
        </Flex>
        <TabPanels>
          <TabPanel>
            <Image src="/Graph.svg" alt="graph-img" mt='48px'/>
            <HStack justify='space-between'>
              {timeStamps.map((timestamp) => (
                <Text key={timestamp} fontSize='sm' color='black.80'>
                  {timestamp}
                </Text>
              ))}
            </HStack>

          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </CustomCard>
  )
}

export default PriceSection;