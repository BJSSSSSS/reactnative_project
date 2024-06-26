import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';


class CoinDetail extends React.Component {
  render() {
    let date = new Date();
    let now = date.toLocaleString()

    return (
      <View style={styles.container}>
        {/* <Image source={{ uri: "https://bitcoin.org/img/icons/opengraph.png"}} onError={({ nativeEvent: { error } }) => console.warn(error)}/> */}
        
        <Image 
        style={{witdh: 10, height: 70, marginRight: 3, marginLeft: 3}} 
        //source={{uri: this.props.iconUri}} 
        source={require('../assets/doge.png')}
        //source={{uri: "https://bitcoin.org/img/icons/opengraph.png"}}
        />
        <Text style={[styles.text, {flex: 1}]}>{'#' + (this.props.rank || 'Rank')}</Text>
        <Text style={[styles.text, {flex: 1}]}>{this.props.name || 'Name'}</Text>
        <Text style={[styles.text, {flex: 1}]}>{'Price: ' + (this.props.price || 0)}</Text>
        <Text style={[styles.text, {flex: 1}]}>{'Volumn: ' + (this.props.volumn || 0)}</Text>
        <Text style={[styles.text, {flex: 1}]}>{'Updated: ' + (this.props.time || now)}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 80,
    flexDirection: 'row', //row
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'space-around', //center, space-around
    marginTop: 5,
    marginBottom: 5,
  },
  text: {
    color: 'white',
  }
});

export default CoinDetail;
