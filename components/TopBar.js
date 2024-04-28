import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class TopBar extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Left</Text>
        <Text style={{fontSize: 20}}>{this.props.title}</Text>
        <Text>Right</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    flexDirection: 'row', // row
    backgroundColor: 'yello',
    alignItems: 'center',
    justifyContent: 'space-between', // center, space-around, space-between
  }
});

export default TopBar;