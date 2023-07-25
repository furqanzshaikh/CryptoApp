import { Badge, Box, Button, Container, HStack, Image, Progress, Radio, RadioGroup, Stat, StatArrow, StatHelpText, StatLabel, StatNumber, Text, VStack  } from '@chakra-ui/react';
import React from 'react'
import Loader from './Loader';
import {useState} from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import { server } from '..';
import { useParams } from 'react-router-dom';
import Error from './Error';
import Chart from './Chart';
const Coindetails = () => {
  
  const [coin ,setCoin]=useState({});
  const [loading ,setLoading]=useState(true);
  const [error ,setError]=useState(false);
  const [currency ,setCurreny]=useState('inr');


  const [days ,setDays]=useState("24h")
  const [chartarr, setChartarr] =useState([])
  const currencySymbol = currency==='inr' ? "₹" :currency === 'eur' ? "€" : '$'
const btns =[ '24h' ,'7d', '14d','30d','60d','200d','1y','max']

const switchChartStats = (key)=>{
switch (key) {
  case '24h':
    setDays('24h');
    setLoading(true);
    break;

    case '7d':
      setDays('7d');
      setLoading(true);
      break;

      case '14d':
        setDays('14d');
        setLoading(true);
        break;


      case '30d':
      setDays('30d');
      setLoading(true);
      break;

      case '60d':
      setDays('60d');
      setLoading(true);
      break;

      case '200d':
      setDays('200d');
      setLoading(true);
      break;

      case '1y':
      setDays('365d');
      setLoading(true);
      break;


      case 'max':
      setDays('max');
      setLoading(true);
      break;
  default:
    setDays('24h');
    setLoading(true);
    break;
}
};

  const params = useParams()

  useEffect (()=>{
    const fetchCoin = async()=>{
      try {
        const{data} = await axios.get(`${server}/coins/${params.id}`);
        const {data:chartdata} = await  axios.get(`${server}/coins/${params.id}/market_chart?vs_currency=${currency}&days=${days}`);
 



        
    setCoin(data);
    setLoading(false);
    setChartarr(chartdata.prices)

      } catch (error) {
    setError(true)
    setLoading(false)    
      }
    };
    fetchCoin();
  },[params.id,currency,days]);
  
  if (error) return <Error message={'Error while fetching data'}/>

  
  return (
    <Container maxW={'container.xl'}>
      {
        loading ? <Loader/>: <><Box width={'full'} borderWidth={1}>
          <Chart  days={days} arr={chartarr} currency={currencySymbol} />
                    </Box>


          <HStack p='4' m={4} overflowX={'auto'} > 
{
  btns.map((i)=>
  <Button  key={i} onClick={()=>switchChartStats(i)}>{i}</Button>
  )
}

          </HStack>

    <RadioGroup onChange={setCurreny} p={8}>
      <HStack spacing={6} >
        <Radio value='inr'>₹ INR</Radio>
        <Radio value='eur'>€ EURO</Radio>
        <Radio value='usd'>$ USD</Radio>
      </HStack>
    </RadioGroup>

        <VStack spacing={4} padding={16} alignItems={'flex-start'}>

          <Text fontSize={'small'} p={16} alignSelf={'center'} opacity={0.7}>Last Updated On {Date(coin.market_data.last_updated).split("G")[0] }</Text>
          <Image w={16} h={16} objectFit={'contain'}  src={coin.image.large} />

          <Stat>


          <StatLabel>{coin.name}</StatLabel>
          <StatNumber>{currencySymbol}{coin.market_data.current_price[currency]}
          </StatNumber>
          <StatHelpText > 
            <StatArrow type={'coin.market_data.price_change_percentage_24h' >0 ? "increase" : "decrease"}/>
            {coin.market_data.price_change_percentage_24h}%
          </StatHelpText>




          </Stat>
        <Badge fontSize={'2xl'} bgColor={'blackAlpha.500'} color={'white'}>

          {`#${coin.market_cap_rank}`}
        </Badge>
        
        <Custombar  high={`${currencySymbol}${coin.market_data.high_24h[currency]}`}  
        low={`${currencySymbol}${coin.market_data.low_24h[currency]}`} 
        />

        <Box w={'full'}  p={4} ></Box>
        </VStack>
        <Item title={'Max supply'} value={coin.market_data.max_supply} />
        <Item title={"Circulating supply"} value={coin.market_data.circulating_supply}/>
        <Item title={"Market Capital"} value={`${currencySymbol}${coin.market_data.market_cap[currency]}`}/>
        
        <Item title={"All Time Low"} value={`${currencySymbol}${coin.market_data.atl[currency]}`}/>
         

         
        <Item title={"All Time High"} value={`${currencySymbol}${coin.market_data.ath[currency]}`}/>
          </>

        
      }
    </Container>

  
  )
}

const Item =({title,value})=>(
  <HStack justifyContent={'space-between'} w={'full'} my={'4'}><Text fontFamily={'Bebas Neue'} letterSpacing={'widest'}>{title}</Text>
  <Text>{value}</Text>  
  </HStack>
)



const Custombar = ({high,low})=>(
  <VStack w={'full'}>
    <Progress value={50} colorScheme={'teal'}  w={'full'}/>
    <HStack justifyContent={'space-between'} w={'full'}  >
      <Badge children={low} />
      <Text fontSize={'sm'} >24 H Range</Text>
      <Badge children={high} colorScheme='green'/>
    </HStack>
  </VStack>
)

export default Coindetails
