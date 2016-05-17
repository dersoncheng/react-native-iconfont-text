/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import IconfontText from './iconfonttv';
import {glypyMapMaker} from './util';

var glypy = glypyMapMaker({
  Youle: 'e6f6',
  Audio: 'e6fb',
  Mine: 'e6f8',
  Pro: 'e6fa'
});

class example extends Component {
  render() {
    return (
      <View style={styles.container}>
        <IconfontText from={'iconfont'} icon={glypy.Audio} position='bottom' label='text' labelSize={12} iconPadding={1}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('example', () => example);
