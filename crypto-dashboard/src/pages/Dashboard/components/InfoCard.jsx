import { Tag, Text } from "@chakra-ui/react";
import { CustomCard } from "../../../chakra/CustomCard";

const InfoCard = ({imgUrl, text, tagText, inverted}) => {
  return(
    <CustomCard  
      bg={inverted ? 'p.purple' : 'white'}
      bgImage={imgUrl} 
      bgSize='cover' 
      bgRepeat='no-repeat'>
      <Tag 
        color={inverted ? 'p.purple' : 'white'} 
        bg={inverted ? 'white' : 'p.purple'}
        borderRadius='full'>
          {tagText}
      </Tag>
      <Text 
        textStyle='h5' 
        fontWeight='medium' 
        mt='4'
        color={inverted ? 'white' : 'black'}>
          {text}
      </Text>
    </CustomCard>
  )
}

export default InfoCard;