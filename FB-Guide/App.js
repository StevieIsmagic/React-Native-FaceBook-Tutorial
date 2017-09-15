import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default class FlatListBasics extends Component {
  render(){
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {key: 'Stevie'},
            {key: 'Lil Jon'},
            {key: 'Devin'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
            {key: '1Devin'},
            {key: 'J2ackson'},
            {key: 'Ja3mes'},
            {key: 'Joe4l'},
            {key: 'John5'},
            {key: 'Jilli3an'},
            {key: '1Jimmy'},
            {key: 'J2ulie'},
            {key: 'De3vin'},
            {key: 'Jac4kson'},
            {key: 'Jame3s'},
            {key: 'Jo2el'},
            {key: 'Jo2hn'},
            {key: 'Jil2lian'},
            {key: 'Jimm2y'},
            {key: 'martha'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
          />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})