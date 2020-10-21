
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View, Button, Vibration } from 'react-native';
import Instructions from './components/introscreen.js';
import Tutorial from './components/tutorial.js';
import Test from './components/test.js';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      displayInstructions: true,
      displayTest: false,
      displayTutorial: false,
      tutorialEmoji: 'angry'
    };
  };   


  render() {
    return (
      <View>
          <Instructions display={this.state.displayInstructions} runTutorial={this.runTutorial}  runTest={this.runTest}/>
          <Tutorial display={this.state.displayTutorial} emoji={this.state.tutorialEmoji} />
          <Test display={this.state.displayTest}/>
      </View>
    );
  };


  delay = ms => new Promise(res => setTimeout(res, ms));

  runTutorial = async () => {
    this.setState({
      displayInstructions: false,
      displayTutorial: true
    });
    //iterate through array of emoji names
    //set tutorialEmoji to that name
    //vibrate the corresponding vibration
    //await 5 seconds
    let name = '';
    for (let i=0; i<6; i++) {
      name = emojinames[i];
      this.setState({
        tutorialEmoji: name
      })
      Vibration.vibrate(pattern=eval(name+'1'));
      await this.delay(5000);
    }
    this.setState({
      displayInstructions: true,
      displayTutorial: false
    });
    
  };

  runTest = async () => {
    this.setState({
      displayInstructions: false,
      displayTest: true
    });
  }
}


const emojinames = ['happy','angry','sad','love','laugh','like'];

//numbers are the time in ms between the vibrations, in order
//on ios vibrations are fixed length, always 400ms
const happy1 = [100,100,100,100]
const sad1 = [1000,1000]
const angry1 = [500,500,500,500,500]
const love1 = [10,10,10]
const laugh1 = [1,1,1,1,1,1,1,1]
const like1 = [10]



