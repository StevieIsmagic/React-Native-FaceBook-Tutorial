import React, { Component } from 'react';
import { View } from 'react-native';

  export default class JustifyContentBasics extends Component {
    render() {
      return (
        <View style={{
          flex: 1, 
          flexDirection: 'row',
          justifyContent: 'space-around',
          }}>
          <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
        </View>
      );
    }
  }
