import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React, {useState} from 'react';
import CoinDetail from './CoinDetail'; 
import { getCoinIconUri } from '../libs/Constants';
import axios from 'axios'

const sampleData = [
  {
     "id": "Bitcoin",
     "name": "Bitcoin",
     "symbol": "BTC",
     "rank": "1",
     "price_usd": "9195.6",
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
    "rank": "2",
    "price_usd": "103.6",
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
    "id": "bficgold",
    "name": "bficgold",
    "symbol": "bficgold",
    "rank": "3",
    "price_usd": "505.6",
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
    "id": "vechain",
    "name": "vechain",
    "symbol": "vechain",
    "rank": "4",
    "price_usd": "300.6",
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
    "id": "cowrie",
    "name": "cowrie",
    "symbol": "cowrie",
    "rank": "5",
    "price_usd": "10.6",
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
    "id": "ozone-chain",
    "name": "ozone-chain",
    "symbol": "ozone-chain",
    "rank": "6",
    "price_usd": "5.6",
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
    "id": "Ethereum",
    "name": "Ethereum",
    "symbol": "Ethereum",
    "rank": "7",
    "price_usd": "465.6",
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

class CoinView extends React.Component {

  render() {

    let detailCells = sampleData.map( (data, index) =>  {
      const{rank, name, price_usd, market_cap_usd, last_updated} = data;
      return(
        <CoinDetail
          key={index}
          rank={rank}
          name={name}
          price={price_usd}
          volumn={market_cap_usd}
          iconUri={getCoinIconUri(name)}
        />
      )
    });

    return (
      <View style={this.props.style}>{/* Ready to get style from a parent component */}
        {detailCells}
      </View>
    );
  }
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
