import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>     
        <Text style={styles.child}>1</Text>  
        <Text style={styles.child}> HIIIII</Text>
        <Text style={styles.child}>"2" </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  child: {
    height: 100,
    width: 100,
    backgroundColor: 'white',
  }
});
