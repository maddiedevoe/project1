import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Button, Vibration } from 'react-native';

class Instructions extends React.Component {
    render() {
    if (this.props.display) {
        return(
            <View>
                <TouchableOpacity style={styles.btn} onPress={this.props.runTutorial}>
                    <Text style={styles.btnText}>Run Tutorial</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={this.props.runTest}>
                    <Text style={styles.btnText}>Run Test</Text>
                </TouchableOpacity>
            </View>
            );
        }
    else {return(<View></View>)}
    };
};

const styles = StyleSheet.create({
    btn: {
        alignItems: 'center',
        margin:20
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




