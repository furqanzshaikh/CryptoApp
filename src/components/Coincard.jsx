import { Text,VStack , Image, Heading } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Coincard = ({name , id, price, symbol ,img ,  currencySymbol="₹"}) => {
  return (
    <Link to={`/coin/${id}`} > 
    
    <VStack w={40} p={8} borderRadius={'lg'} transition={'all 0.3s'} m={4}
    css={{
        '&:hover': {transform:'scale(1.2)'
    }}}
    >

    <Image src={img} w={'10'} h={10} 
    objectFit={'contain'} alt='exchange' />

    <Heading size={'md'} noOfLines={1}>{symbol}
    </Heading>

    <Text noOfLines={1}>{name}</Text>
    <Text noOfLines={1}>{price ? `${currencySymbol}${price}` : "NA"}</Text>
    

    </VStack>
    
    
     </Link>
  )
}

export default Coincard
