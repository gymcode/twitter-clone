import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { MonoText } from '../components/StyledText';

const HomeScreen = ()=>{
  return(
    <View style={{backgroundColor: 'blue', flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Text style={{fontSize: 25, color: '#fff'}}> Hello World </Text>
    </View>
  )
}

export default HomeScreen;