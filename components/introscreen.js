import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Button, Vibration } from 'react-native';

class Instructions extends React.Component {
    render() {
    if (this.props.display) {
        return(
            <View>
                <Text style = {styles.text}>
                    When you press start, <Text style={styles.bold}>close your eyes.</Text> A series of vibrations will be sent to you, 
                    and you will have 5 seconds to respond with a touch-screen gesture after each one.{"\n\n"}          
                    Tap the screen in the same pattern as the vibrations to empathize with your mystery messenger.
                </Text>
                <TouchableOpacity style={styles.btn} onPress={this.props.makeDisplayFalse}>
                    <Text style={styles.btnText}>Start</Text>
                </TouchableOpacity>
            </View>
            );
        }
    else {return(<View></View>)}
    };
};

const styles = StyleSheet.create({
    text: {
        fontSize:20,
        lineHeight:20,
        padding: 40,
        alignItems: 'center',
    },
    btn: {
        alignItems: 'center'
    },
    btnText: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    bold: {
        fontWeight: 'bold'
    }
});


export default Instructions;




