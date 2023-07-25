import React from 'react'
import { Button, HStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <HStack bgColor={'black'} p={'4'} shadow={'base'} >
      
      <Button variant={'unstyled'} color={'white'}>
        <Link to={'/'}>
        Home
        </Link>
        </Button>

        <Button variant={'unstyled'} color={'white'}>
        <Link to={'/coins'}>
        Coins
        </Link>
        </Button>


        <Button variant={'unstyled'} color={'white'}>
        <Link to={'/exchange'}>
        Exchange
        </Link>
        </Button>


    </HStack>
  )
}

export default Header
