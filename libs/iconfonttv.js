import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

var IconfontText = React.createClass({
  render:function(){
    const {from, label, labelSize, labelColor, icon, iconColor, iconSize, position, iconPadding} = this.props;
    var direction = ((position == 'left' || position == 'right')?'row':'column');

    return (
      <View style={[styles.container,{flexDirection: direction}]}>
        {position == 'top'?
          <View style={{paddingBottom: iconPadding}}>
            <Text style={{fontSize: labelSize, color: labelColor}}>{label}</Text>
          </View>: null}
        {position == 'left'?
          <View style={{paddingRight: iconPadding}}>
            <Text style={{fontSize: labelSize, color: labelColor}}>{label}</Text>
          </View>: null}
        <Text style={{fontSize: iconSize, color: iconColor, fontFamily: from}}>
          {icon}
        </Text>
          {position == 'right'?
            <View style={{paddingLeft: iconPadding}}>
              <Text style={{fontSize: labelSize, color: labelColor}}>{label}</Text>
            </View>: null}
          {position == 'bottom'?
            <View style={{paddingTop: iconPadding}}>
              <Text style={{fontSize: labelSize, color: labelColor}}>{label}</Text>
            </View>: null}
        </View>
    );
  }
});

//自定义属性
IconfontText.propTypes = {
  //iconfont显示文本
  label:React.PropTypes.string,
  //iconfont显示的icon(如e606d)
  icon:React.PropTypes.string,
  //字体文件
  from:React.PropTypes.string,
  //icon颜色
  iconColor:React.PropTypes.string,
  //文本相对于icon的位置（left/right/top/bottom/none）
  position:React.PropTypes.string,
  //icon大小
  iconSize:React.PropTypes.number,
  //文本大小
  labelSize:React.PropTypes.number,
  //文本颜色
  labelColor:React.PropTypes.string,
  //图标和文字的间距
  iconPadding:React.PropTypes.number
}

//默认属性
IconfontText.defaultProps = {
  labelSize: 12,
  iconSize: 20,
  labelColor: 'red',
  iconColor: 'red',
  position: 'right',
  iconPadding: 3
}

export default IconfontText;
