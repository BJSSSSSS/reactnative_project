import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react';
import CoinDetail from './CoinDetail'; 
import axios from 'axios'

const sampleData = [
  {
     "id": "bitcoin",
     "name": "BitCoin",
     "symbol": "BTC",
     "rank": "1",
     "price_usd": "6195.6",
     "price_btc": "1.0",
     "24h_volume_usd": "8119580000.0",
     "market_cap_usd": "103323711420",
     "available_supply": "16676950.0",
     "total_supply": "16676950.0",
     "max_supply": "21000000.0",
     "percent_change_1h": "-1.8",
     "percent_change_24h": "4.19",
     "percent_change_7d": "-15.65",
     "last_updated": "1510556652"
  },
  {
    "id": "ripple",
    "name": "Ripple",
    "symbol": "BTC",
    "rank": "1",
    "price_usd": "6195.6",
    "price_btc": "1.0",
    "24h_volume_usd": "8119580000.0",
    "market_cap_usd": "103323711420",
    "available_supply": "16676950.0",
    "total_supply": "16676950.0",
    "max_supply": "21000000.0",
    "percent_change_1h": "-1.8",
    "percent_change_24h": "4.19",
    "percent_change_7d": "-15.65",
    "last_updated": "1510556652"
  },
  {
    "id": "ripple",
    "name": "Ripple",
    "symbol": "BTC",
    "rank": "1",
    "price_usd": "6195.6",
    "price_btc": "1.0",
    "24h_volume_usd": "8119580000.0",
    "market_cap_usd": "103323711420",
    "available_supply": "16676950.0",
    "total_supply": "16676950.0",
    "max_supply": "21000000.0",
    "percent_change_1h": "-1.8",
    "percent_change_24h": "4.19",
    "percent_change_7d": "-15.65",
    "last_updated": "1510556652"
  },
  {
    "id": "ripple",
    "name": "Ripple",
    "symbol": "BTC",
    "rank": "1",
    "price_usd": "6195.6",
    "price_btc": "1.0",
    "24h_volume_usd": "8119580000.0",
    "market_cap_usd": "103323711420",
    "available_supply": "16676950.0",
    "total_supply": "16676950.0",
    "max_supply": "21000000.0",
    "percent_change_1h": "-1.8",
    "percent_change_24h": "4.19",
    "percent_change_7d": "-15.65",
    "last_updated": "1510556652"
  },
  {
    "id": "ripple",
    "name": "Ripple",
    "symbol": "BTC",
    "rank": "1",
    "price_usd": "6195.6",
    "price_btc": "1.0",
    "24h_volume_usd": "8119580000.0",
    "market_cap_usd": "103323711420",
    "available_supply": "16676950.0",
    "total_supply": "16676950.0",
    "max_supply": "21000000.0",
    "percent_change_1h": "-1.8",
    "percent_change_24h": "4.19",
    "percent_change_7d": "-15.65",
    "last_updated": "1510556652"
  }
]

//const axios = require('axios');

// let response = null;
// new Promise(async (resolve, reject) => {
//   try {
//     response = await axios.get('https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
//       headers: {
//         'X-CMC_PRO_API_KEY': 'a618eedd-fdcd-446a-85f2-e5a2aec9c6cd',
//       },
//     });
//   } catch(ex) {
//     response = null;
//     // error
//     console.log(ex);
//     reject(ex);
//   }
//   if (response) {
//     // success
//     const json = response.data;
//     console.log(json);
//     resolve(json);
//   }
// });

// 미사용

class CoinView extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      coinDatas: [],
      isLoaded: false
    };
  }

  _getCoinDatas(limit){
    // this.setState({
    //   isLoaded: false
    // });

    fetch(
      `https://api.coingecko.com/api/v3/search/trending`
    )
    .then(response => response.json())
    .then(data => {
      this.setState({
        coinDatas: data,
        isLoaded: true
      });

      // console.log(coinDatas);
      // console.log(data);

    });
  }
  
  componentDidMount(){
    this._getCoinDatas(30);
  
    setInterval(() => {
      this._getCoinDatas(10);
      console.log('toggled!');
    }, 10000);
  }

  render() {
      let detailCells = this.state.coinDatas.map( (data, index) =>  {
        const{rank, name, price_usd, market_cap_usd, last_updated} = data;
        return(
          <CoinDetail
            key={index}
            rank={rank}
            name={name}
            price={price_usd}
            volumn={market_cap_usd}
          />
        )
      });

      return (
        <View style={this.props.style}>{/* Ready to get style from a parent component */}
          {detailCells}
        </View>
      );
    }

  // render() {
  //   //console.log('here');
  //   let coinDetailCells = (
  //     <View>
  //       <CoinDetail></CoinDetail>
  //       <CoinDetail></CoinDetail>
  //       <CoinDetail></CoinDetail>
  //       <CoinDetail></CoinDetail>
  //     </View>
  //   );

  //   let detailCells = [];

  //   //console.log(this.state.coinDatas);
  //   //console.log(this.state.coinDatas.length);
  //   //console.log('hi');
  
  //   for (var i = 0; i < 10; i++){

  //     //console.log('here');
  //     //console.log(this.state.coinDatas);
  //     //console.log(this.state.coinDatas[1]);

  //     let data = this.state.coinDatas[i];

  //     //console.log(data);

  //     // let coinDetail = (
  //     //   <CoinDetail
  //     //     //key={data.index}
  //     //     //rank={data.coins_count}
  //     //     //name={data.name}
  //     //     //price={data.price_btc}
  //     //     //volumn={data.market_cap_btc}
  //     //   />
  //     // )
  //     // detailCells.push(coinDetail);
  //   }

  //   return (
  //     <View style={this.props.style}>{/* Ready to get style from a parent component */}
  //       {detailCells}
  //     </View>
  //   );
  // }
}




const styles = StyleSheet.create({
  container: {
    // width: '50%',
    flex: 1,
    flexDirection: 'column', //row
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'space-around', //center, space-around
  },
});

export default CoinView;
