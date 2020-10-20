
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Button, Vibration } from 'react-native';
import Instructions from './components/introscreen.js';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      displayInstructions: true,
      runTest: false
    };
  }

  makeDisplayFalse = () => {
    this.setState({
      displayInstructions: false,
      runTest: true
    });
    Vibration.vibrate(angry, true);
  };

  render() {
    return (
      <View>
          <Instructions 
            display={this.state.displayInstructions}
            makeDisplayFalse={this.makeDisplayFalse} />
      </View>
    );
  }
}

//numbers are the time in ms between the vibrations, in order
//on ios vibrations are fixed length, always 400ms
const happy = [100,100,100,100,100]
const sad = [2000,2000,2000]
const angry = [1000,800,600,400,200,100,50,5000]
const love = [500,500,500,500]
const laugh = [1,1,1,1,1]
const like = [10,10,10,2000,10,10,10,2000,2000]



