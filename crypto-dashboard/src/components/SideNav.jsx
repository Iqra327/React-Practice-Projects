import {Box, Heading, HStack, Icon, Stack, Text} from '@chakra-ui/react';
import { RxDashboard } from "react-icons/rx";
import { TbArrowsDoubleNeSw } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import { Link, useLocation } from 'react-router-dom';

const SideNav = () => {
  const location = useLocation();

  const isActiveLink = (link)  => {
    return location.pathname === link
  }

  const navLinks = [
    {
      icon: RxDashboard,
      text: 'Dashboard',
      link: '/'
    },
    {
      icon: TbArrowsDoubleNeSw,
      text: 'Transaction',
      link: '/transactions'
    }
  ];
  
  return (
    <Stack 
      justify='space-between' 
      w='256px' 
      h='100vh'
      bg='white'
      >
      <Box>
        <Heading as='h1' fontSize='20px' pt='54px' textAlign='center'>@DOSOMECODING</Heading>
        <Box mx='3' mt='6'>
          {
            navLinks.map((nav) => (
              <Link to={nav.link}  key={nav.text}>
                <HStack
                  bg={isActiveLink(nav.link) ? '#F3F3F7' : 'transparent'}
                  color={isActiveLink(nav.link) ? '#171717' : '#797E82'}  
                  borderRadius = '10px'
                  py='3' 
                  px='4'
                  _hover = {{
                    bg: '#F3F3F7',
                    color: '#171717',
                  }}
                >
                  <Icon as={nav.icon}/>
                  <Text fontSize='14px' fontWeight='medium'>{nav.text}</Text>
                </HStack>
              </Link>
            ))
          }
        </Box>
      </Box>
      
      <Box mx='3' my='6'>
      <Link to='/support'>
        <HStack 
          borderRadius = '10px'
          py='3' 
          px='4'
          bg={isActiveLink('/support') ? '#F3F3F7' : 'transparent'}
          color={isActiveLink('/support') ? '#171717' : '#797E82'}

          _hover = {{
            bg: '#F3F3F7',
            color: '#171717',
          }}
        >
        <BiSupport />
          <Text fontSize='14px' fontWeight='medium'>Support</Text>
      </HStack>
      </Link>
    </Box>
    </Stack>
  )
};

export default SideNav;