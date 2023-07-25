import { Box ,Image ,Text } from '@chakra-ui/react'
import React from 'react'
import img from '../assets/btc.png'
import {motion} from "framer-motion"

const Home = () => {
  return (
    <Box  bgColor={'black'} h={['100vh','250vh']}>
    <motion.div style={{
      height:'80vh'
    }}


    animate={{translateY
    :"40px"}}

    transition={{
      duration:2,
      repeat:Infinity,
      repeatType:'reverse'
    }}
    >
    <Image w={['full']} objectFit={'contain'} src={img} filter={"grayscale(1)"} />
    <Text fontSize={'6xl'} textAlign={'center'} color={'white'}  mt={-15}>
      CryptoMarket
      </Text>
    </motion.div>
    


  

    </Box>

    
    
  )
}

export default Home
