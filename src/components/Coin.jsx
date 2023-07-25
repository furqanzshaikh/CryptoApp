import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { server } from '..';
import { Button, Container, HStack, Radio, RadioGroup  } from '@chakra-ui/react';
import Error from './Error';
import Loader from './Loader';
import Coincard from './Coincard';
const Coin = () => {
  const [coins ,setCoins]=useState([]);
  const [loading ,setLoading]=useState(true);
  const [error ,setError]=useState(false);
  const [currency ,setCurreny]=useState('inr');
  const currencySymbol = currency==='inr' ? "₹" :currency === 'eur' ? "€" : '$'
  const [page ,setPage]=useState(1);

  const changepage = (page)=>{
    setPage(page)
    setLoading(true)
  }

const btns = new Array(132).fill(1)
  useEffect (()=>{
    const fetchCoins = async()=>{
      try {
        const{data} = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);
    
    setCoins(data);
    setLoading(false);
    
      } catch (error) {
    setError(true)
    setLoading(false)    
      }
    };
    fetchCoins();
},[currency,page]);

if (error) return <Error message={'Error while fetching data'}/>
  return (
    <Container maxW={'container.xl'}>
      {loading ? <Loader/> : <>

    <RadioGroup value={currency} onChange={setCurreny} p={8}>
      <HStack spacing={6} >
        <Radio value='inr'>₹ INR</Radio>
        <Radio value='eur'>€ EURO</Radio>
        <Radio value='usd'>$ USD</Radio>
      </HStack>
    </RadioGroup>


      <HStack wrap={'wrap'} justifyContent={'space-evenly'}>
        {
          coins.map(i=>(
            <Coincard 
            id={i.id}
            key={i.id}
            name={i.name} 
            img={i.image} 
            price={i.current_price}
            currencySymbol={currencySymbol}
            />
          ))
        }
      </HStack>
      </>} 
        <HStack w={'full'} overflowX={'auto'} p={8}>

        {
          btns.map((item,index)=>
        <Button key={index} bgColor={'blackAlpha.800'}
        color={'white'} onClick={()=> changepage(index+1)}>
          {index+1}
        </Button>
          )
        }


        </HStack>

    </Container>
  )
}

export default Coin
