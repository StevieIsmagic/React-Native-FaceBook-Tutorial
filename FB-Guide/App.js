import React, { Component } from 'react';
import { Alert, View, Button, StyleSheet} from 'react-native';

  export default class ButtonBasics extends Component {
    _onPressButton() {
      Alert.alert('You tapped the button!')
    }

    render() {
      return (
       <View style={styles.container}>
         <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title={'Press Me 1'}
            color={'green'}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
          onPress={this._onPressButton}
          title={'Press Me 2'}
          color={'#841584'}
        />
        </View>
        <View style={styles.alternativeLayoutButtonContainer}>
          <Button
          onPress={this._onPressButton}
          title={'Alternate 1'}
        />
        <Button
          onPress={this._onPressButton}
          title={'Alternate 2'}
          color={'#841584'}
        />
      </View>
    </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})