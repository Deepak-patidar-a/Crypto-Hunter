import React, { useEffect, useState } from 'react'
import { Typography , LinearProgress} from '@mui/material';
import { useParams} from  "react-router-dom";
import CoinInfo from '../components/CoinInfo';
import {CryptoState} from "../CryptoContext";
import axios from "axios";
import { SingleCoin } from "../config/Api";
import { numberWithCommas } from "../components/CoinsTable";
// import ReactHtmlParser from "react-html-parser";


const CoinPage = () => {
// we will fetch id from url using useParams

const { id } = useParams();

const[coin, setCoin ] = useState();

const{currency,symbol}= CryptoState();

const fetchCoin = async () => {
  const {data} = await axios.get(SingleCoin(id));

  setCoin(data);
};

useEffect(() => {
   fetchCoin();
},[]);


if (!coin) return <LinearProgress style={{ backgroundColor: "gold" }} />;

console.log(coin?.description.en.split(". ")[0]);

  return (
    <div className='coinpage'>
    <div className='sidebar'> 
    {/* sidebar  */}
    <img
      src={coin?.Image}
      alt={coin?.name}
      height="200"
      style={{marginBottom:20}}
    />
    <Typography variant="h3" className='heading'>
    {coin?.name}
    </Typography>
    <Typography variant="subtitle1" className='description'>
    console.log(coin?.description.en.split(". ")[0]);
    </Typography>
    <div className='marketData'>
       <span style={{display: "flex"}}>
        <Typography variant='h5' className='heading'>
          Rank:
        </Typography>
        &nbsp; &nbsp;
        <Typography variant='h5' style={{fontFamily: "Montserrat",}}>
        {numberWithCommas(coin?.market_cap_rank)}
        </Typography>
       </span>
       <span style={{ display: "flex" }}>
            <Typography variant="h5" className='heading'>
              Current Price:
            </Typography>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
              style={{
                fontFamily: "Montserrat",
              }}
            >
              {symbol}{" "}
              {numberWithCommas(
                coin?.market_data.current_price[currency.toLowerCase()]
              )}
            </Typography>
          </span>
          <span style={{ display: "flex" }}>
            <Typography variant="h5" className='heading'>
              Market Cap:
            </Typography>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
              style={{
                fontFamily: "Montserrat",
              }}
            >
              {symbol}{" "}
              {numberWithCommas(
                coin?.market_data.market_cap[currency.toLowerCase()]
                  .toString()
                  .slice(0, -6)
              )}
              M
            </Typography>
          </span>
    </div>
    </div>
      <CoinInfo coin={coin}/>
    </div>
  )
}

export default CoinPage
