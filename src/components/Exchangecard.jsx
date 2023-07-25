import { Text,VStack , Image, Heading } from '@chakra-ui/react'
import React from 'react'

const Exchangecard = ({name , img , rank , url}) => {
  return (
    <a href={url} target={'blank'}> 
    
    <VStack w={40} p={9} borderRadius={'lg'} transition={'all'} m={4}
    css={{
        '&:hover': {transform:'scale(1.2)'
    }}}
    >

    <Image src={img} w={'10'} h={10} 
    objectFit={'contain'} alt='exchange' />

    <Heading size={'md'} noOfLines={1}>{rank}
    </Heading>

    <Text noOfLines={1}>{name}</Text>

    </VStack>
    
    
     </a>
  )
}

export default Exchangecard
