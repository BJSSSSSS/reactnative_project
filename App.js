import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CoinView from './components/CoinViews'; 
import TopBar from './components/TopBar'; 


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          hidden={true}
          backgroundColor='blue'
          barStyle="light-content"
        />
        <TopBar title="Show Me The Coin"/>
        <CoinView style={styles.coinView}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'yellow',
    //flexDirection: 'column',
    //alignItems: 'center',
    //justifyContent: 'center',
  },

  coinView:{
    width: '100%',
    flex: 1,
    flexDirection: 'column', //row
    backgroundColor: 'skyblue',
    //alignItems: 'center',
    //justifyContent: 'space-around', //center, space-around
  }

});



// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }