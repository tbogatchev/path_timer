import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

import {
  margin,
  blue,
  paddingVertical,
  paddingHorizontal,
  borderRadius,
} from '../styles';

const stylesheet = StyleSheet.create({
  view: {
    backgroundColor: blue,
    paddingVertical,
    paddingHorizontal,
    borderRadius
  },
  viewDisabled: {
    backgroundColor: 'grey'
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

const Button = React.createClass({

  propTypes: {
    label: React.PropTypes.string,
    onPress: React.PropTypes.func,
    style: React.PropTypes.object
  },

  getDefaultProps() {
    return {
      label: '',
      onPress: () => {},
      style: {}
    };
  },

  render() {
    const { label, onPress, disabled, style, children } = this.props;
    const { touchable, view, text} = style;
    const content = children ? children : label;

    if (disabled) {
      return (
        <View style={[stylesheet.view, stylesheet.viewDisabled, view]}>
          <Text style={[stylesheet.text, stylesheet.textDisabled, text]}>{content}</Text>
        </View>
      );
    }

    return (
      <TouchableHighlight onPress={onPress} style={[stylesheet.touchable, touchable]}>
        <View style={[stylesheet.view, view]}>
          <Text style={[stylesheet.text, text]}>{content}</Text>
        </View>
      </TouchableHighlight>
    );
  }
});

export default Button;