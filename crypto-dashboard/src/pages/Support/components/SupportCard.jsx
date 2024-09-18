import { Box, Button, Card, Checkbox, Flex, FormControl, FormLabel, HStack, Icon, Input, Stack, Text, Textarea } from "@chakra-ui/react";
import { IoMail } from "react-icons/io5";

const SupportCard = ({ leftComponent, icon, title, text }) => {
  return(
    <Flex gap={6} flexDir={{
      base: 'column',
      xl: 'row'
    }}>
      <Stack maxW='24rem'>
        <Icon as={icon} boxSize='6' color='p.purple'/>
        <Text as='h1' textStyle='h1' fontWeight='medium'>{title}</Text>
        <Text fontSize='sm' color='black.60'>{text}</Text>
      </Stack>
      <Box maxW='550px' w='full'>
        {leftComponent}
      </Box>
    </Flex>
  )
};

export default SupportCard;