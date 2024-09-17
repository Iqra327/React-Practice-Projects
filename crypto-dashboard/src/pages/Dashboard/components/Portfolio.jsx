import { Box, Button, Flex, Grid, Heading, HStack, Icon, Stack, Tag, Text, VStack } from "@chakra-ui/react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FaArrowDownLong } from "react-icons/fa6";
import { FaArrowUpLong } from "react-icons/fa6";

const Portfolio = () => {
  return(
    <HStack bg='white' borderRadius='xl' p='6'  justify='space-between' align={{
      base: 'flex-start',
      xl: 'center'
    }} flexDir={{
      base: 'column',
      xl: 'row'
    }} spacing={{
      base: 4,
      xl: 0
    }}>
      <HStack spacing={{
        base: 0,
        xl: 16
      }} align={{
        base: 'flex-start',
        xl: 'center'
      }} flexDir={{
        base: 'column',
        xl: 'row'
      }}>
        <Stack>
          <HStack color='black.80'>
            <Text fontSize='sm'>Total Portfolio Value</Text>
            <Icon as={AiOutlineInfoCircle}/>
          </HStack>
          <Text textStyle='h2' fontWeight='medium'>₹ 112,312.24</Text>
        </Stack>
      
        <Stack>
          <HStack color='black.80'>
            <Text fontSize='sm'>Wallet Balances</Text>
          </HStack>
          <HStack  spacing='4' align={{
            base: 'flex-start',
            sm: 'center'
          }} flexDir={{
            base: 'column',
            sm: 'row'
          }}>
          <HStack>
            <Text textStyle='h2' fontWeight='medium'>22.39401000</Text>
            <Tag colorScheme="gray">BTC</Tag>
          </HStack>
          <HStack>
            <Text textStyle='h2' fontWeight='medium'>₹ 1,300.00</Text>
            <Tag colorScheme="gray">INR</Tag>
          </HStack>
          </HStack>
        </Stack>
      </HStack>
    
      <HStack>
        <Button leftIcon={<Icon as={FaArrowDownLong}/>}>Deposit</Button>
        <Button leftIcon={<Icon as={FaArrowUpLong}/>}> Withdraw</Button>
      </HStack>
    </HStack>
  )
};

export default Portfolio;