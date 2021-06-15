/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { WebView } from 'react-native-webview';

import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar
} from 'react-native';


const App = () => {


  return (
    <View style={[{flex: 1, backgroundColor: "#000"}, Platform.OS === 'ios' ? {paddingTop: 45} : null]}>
      <StatusBar backgroundColor="#000"/>
      <WebView source={{ uri: 'https://sites.google.com/view/al-madina-foundation/home' }} />
    </View>
  );
};

export default App;
