import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Image, Vibration } from 'react-native';
import {emojinames, imageDict, patternDict, randomEmoji } from '../sharedVars.js';

//have 6 buttons
//call sendVibration that plays a vibration randomly and sets correctEmoji to whichever one is played
//Then when the user selects a button, checkSelection(emoji) is called, which sees if its correct, and either
//records numTries, resets it to 0, and calls sendVibration
class Test extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        correctEmoji: 'angry',
        numTries: 0,
        text: '',
        trials: 0,
        data: []
      };
    };  

    render() {
        //if (this.props.display && this.state.trials == 0) {this.sendVibration(randomEmoji);};
        if (this.props.display) {
            return(
              <View>
                {emojinames.map((name) => (
                  <TouchableOpacity style={styles.cont} onPress={() => this.checkCorrect(name)}>
                      <Image style={styles.img} source={eval(imageDict[name])} />
                  </TouchableOpacity>
                ))}
                <Text style={styles.text}>{this.state.text}</Text>
              </View>
            );
        }
        else {return(<View></View>)}
    };


    //prepares state for next trial, and send vibration
    sendVibration = (emoji) => {
      if (this.state.trials < 5) {
        this.setState({
          correctEmoji: emoji,
          numTries: 0,
          text: 'sending vibration... (trial ' + (this.state.trials+1) + ')',
          trials: this.state.trials + 1
        });
        console.log(eval(patternDict[emoji+this.props.testType]));
        Vibration.vibrate(eval(patternDict[emoji+this.props.testType]));
      }
      else {
        console.log('RESULTS OF TEST ' + this.props.testType);
        console.log(this.state.data)
        this.setState({
          data: [],
          trials: 0
        });
        this.props.exit();
      }
    }

    //called on press of one of the emojis, checks if it is correct 
    //if it is correct, calls sendVibration, if it isn't adjusts state and waits for another guess
    checkCorrect = (emoji) => {
      //console.log('correct: ' + this.state.correctEmoji);
      if (emoji == this.state.correctEmoji) {
        this.state.data.push([this.state.correctEmoji,this.state.numTries+1])
        this.sendVibration(randomEmoji());
      }
      else {
        this.setState({
          numTries: this.state.numTries + 1,
          text: 'incorrect(' + (this.state.numTries+1) + ' attempts), try again'
        });
      }
    }

    
};

  


const styles = StyleSheet.create({
    cont: {
        alignItems: 'center',
        padding:20
    },
    img: {
      height:50,
      width:50
    },
    text: {
      fontWeight: 'bold',
      padding:20
    }
});


export default Test;





