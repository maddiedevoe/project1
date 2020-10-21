
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View, Button, Vibration } from 'react-native';
import Instructions from './components/introscreen.js';
import Tutorial from './components/tutorial.js';
import Test from './components/test.js';
import {patternDict, emojinames, randomEmoji} from './sharedVars.js';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.testElement = React.createRef();
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
          <Test ref={this.testElement} display={this.state.displayTest} testType={this.state.recieveType} exit={this.exitToIntroscreen}/>
      </View>
    );
  };


  delay = ms => new Promise(res => setTimeout(res, ms));

  runTutorial = async (type) => {
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
      Vibration.vibrate(eval(patternDict[name+type]));
      await this.delay(7000);
    }
    this.setState({
      displayInstructions: true,
      displayTutorial: false
    });
  };

  runTest = async (type) => {
    this.setState({
      displayInstructions: false,
      displayTest: true,
      recieveType: type
    });
    this.testElement.current.sendVibration(randomEmoji())
  }

  exitToIntroscreen = async () => {
    this.setState({
      displayInstructions: true,
      displayTest: false
    });
  }
}






