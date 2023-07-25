import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { server } from '..';
import { Container, HStack  } from '@chakra-ui/react';
import Exchangecard from './Exchangecard';
import Error from './Error';
import Loader from './Loader';
const Exchange = () => {
  const [exchanges ,setExchanges]=useState([]);
  const [loading ,setLoading]=useState(true);
  const [error ,setError]=useState(false);
  useEffect (()=>{
    const fetchExchange = async()=>{
      try {
        const{data} = await axios.get(`${server}/exchanges`);
    
    setExchanges(data);
    setLoading(false);
    
      } catch (error) {
    setError(true)
    setLoading(false)    
      }
    };
    fetchExchange();
},[]);

if (error) return <Error message={'Error while fetching data'}/>
  return (
    <Container maxW={'container.xl'}>
      {loading ? <Loader/> : <>
      <HStack wrap={'wrap'} justifyContent={'space-evenly'}>
        {
          exchanges.map(i=>(
            <Exchangecard 
            key={i.id}
            name={i.name} img={i.image} rank={i.trust_score_rank} url={i.url}/>
          ))
        }
      </HStack>
      </>} 
    </Container>
  )
}

export default Exchange
