import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {View, Text, Vibration} from 'react-native';
import {FlingGestureHandler} from 'react-native-gesture-handler';

const LongPressButton = () => (
    <FlingGestureHandler
      onHandlerStateChange={({ nativeEvent }) => {
        if (nativeEvent.state === State.ACTIVE) {
          Alert.alert("I'm flinged!");
        }
      }}>
      <View style={styles.box} />
    </FlingGestureHandler>
  );

export default LongPressButton;
