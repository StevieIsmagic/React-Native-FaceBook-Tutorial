import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// class Blink extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { showText: true };

//     //Toggle the state every second
//     setInterval(() => {
//       this.setState(previousState => {
//         return { showText: !previousState.showText };
//       });
//     }, 1000);
//   }
  
//     render() {
//       let display = this.state.showText ? this.props.text : 'BLEEP';
//       return (
//         <Text> {display} </Text>
//       );
//     }
//   }

  export default class LotsOfStyles extends Component {
    render() {
      return (
        <View>
          <Text style={styles.red}> just red </Text>
          <Text style={styles.bigBlue}>just BIG BLUE </Text>
          <Text style={[styles.bigblue, styles.red]}>BIG BLUE, then red</Text>
          <Text style={[styles.red, styles.bigblue]}>red, then BIG BLUE</Text>
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    bigblue: {
      color: 'blue',
      fontWeight: 'bold',
      fontSize: 30,
    },
    red: {
      color: 'red',
    },
  });