import React, { Component } from 'react';
import { View } from 'react-native';

  export default class FixedDimensionBasics extends Component {
    render() {
      return (
        <View style={{flex: 1}}>
          <View style={{flex:2, backgroundColor: 'powderblue'}} />
          <View style={{flex:2, backgroundColor: 'skyblue'}} />
          <View style={{flex:2, backgroundColor: 'steelblue'}} />
        </View>
      );
    }
  }
