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
import IconfontText,{glypyMapMaker} from 'react-native-iconfont-text';

var glypy = glypyMapMaker({
  Youle: 'e958',
  Audio: 'e95b',
  Mine: 'e96b',
  Pro: 'e971',
  Rss: 'ea9c'
});

class example extends Component {
  render() {
    return (
      <View style={styles.container}>
      <IconfontText from={'iconfont'} icon={glypy.Youle} position='top' label='text1' labelSize={12} iconPadding={1}/>
      <IconfontText from={'iconfont'} icon={glypy.Audio} position='left' label='text2' labelSize={12} iconPadding={1}/>
      <IconfontText from={'iconfont'} icon={glypy.Mine} position='right' label='text3' labelSize={12} iconPadding={1}/>
      <IconfontText from={'iconfont'} icon={glypy.Pro} position='bottom' label='text4' labelSize={12} iconPadding={1}/>
      <IconfontText from={'iconfont'} icon={glypy.Rss} position='none' label='text5' labelSize={12} iconPadding={1}/>
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
