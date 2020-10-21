import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Image } from 'react-native';

class Tutorial extends React.Component {
    render() {
        const angry = require('../images/angry.jpeg');
        const sad = require('../images/sad.jpeg');
        const happy = require('../images/happy.jpeg');
        const laugh = require('../images/laugh.png');
        const like = require('../images/like.jpeg');
        const love = require('../images/love.png');

        if (this.props.display) {
            return(
                <View style={styles.cont}>
                    <Image source={eval(this.props.emoji)} />
                </View>
                );
        }
        else {return(<View></View>)}
    };
};

const styles = StyleSheet.create({
    cont: {
        alignItems: 'center',
        padding:20
    }
});


export default Tutorial;




