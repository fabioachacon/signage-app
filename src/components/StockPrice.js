import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {htmlParser} from '../utils';

const StockPrice = () => {

    const URL_NASDAQ = 'https://br.advfn.com/bolsa-de-valores/nasdaq/NDAQ/cotacao';
    const URL_BOVESPA = 'https://valorinveste.globo.com/cotacoes/ibovespa/';
    const DOLLAR_PRICE_API = 'https://economia.awesomeapi.com.br/json/all';
    const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
    let timerId;

    // const [price, setPrice] = useState({
    //     dollar: '',
    //     ibovespa: {
    //         IbovPrice: '',
    //         points: ''
    //     },
    //     nasdaq: ''
    // });

    const [dollarPrice, setDollarPrice] = useState();
    const [ibovPrice, setIbovPrice] = useState({
        price: null, 
        points: null
    });

    const [nasdaqPrice, setNasdaqPrice] = useState()

    const fetchDollarPrice = async () => {
        try{
            const response = await axios.get(PROXY_URL + DOLLAR_PRICE_API);
            const data = response.data;
            const currentPrice = parseFloat(data.USD.high).toFixed(2);
            console.log('dollar data', response.data.USD.high);

            setDollarPrice(currentPrice);

        }catch(error){
            console.error(error);
        }
    }

    const fetchIboPrice = async () => {
        try{
            const response = await axios.get(PROXY_URL + URL_BOVESPA);
            if (response) {
                const page = htmlParser(response.data);

                const parentNode = page.querySelector('.tabela-data__ticker > div');
                const variationNode = parentNode.firstElementChild.firstElementChild;
                const points = page.querySelector('.tabela-data__ticker__lastQuote');
                const variation = variationNode.innerText;
                const bovPoints = points.innerText;

                setIbovPrice({...ibovPrice, price:variation, points: bovPoints});

            }

        }catch(error){
            console.log(error)
        }
    }

    const fetchNasdaq = async () => {
       try{
          const response = await axios.get(PROXY_URL + URL_NASDAQ);
          if (response) {
              const page = htmlParser(response.data);
              const target = page.querySelector('#qs-current-change');  

              let value = target.innerText.split(' ')[0];
              value = parseFloat(value.replace(',', '.'));
              
              setNasdaqPrice(value);

          }
       }catch(error){
           console.error(error);
       }
    }

    const fetchInfo = () => {
        fetchDollarPrice();
        fetchIboPrice();
        fetchNasdaq();
    }

    const upDateStock = () => {
        timerId = setInterval(fetchInfo, 60000 * 5);
    }

    useEffect(() => {
        fetchInfo();
        upDateStock();
    }, []);
    

    return  (
        <div className="stock">
          <div className="dollar ticker">USD <span className="real-sign">R$ </span><span className="price">{dollarPrice}</span></div>
          <div className="ibovespa ticker">Ibovespa <span className="price">{ibovPrice.price}</span><span className="points">{ibovPrice.points}</span></div>
          <div className="nasdaq ticker">Nasdaq <span className="price">{nasdaqPrice}</span></div>
        </div>
    )
}

export default StockPrice;