import React from 'react';
import { Text, TouchableHighlight } from 'react-native';
import T from 'prop-types';

import s from './../../styles/styles';

const Button = ({ context, onPress }) => (
  <TouchableHighlight
    style={s.button}
    onPress={onPress}
    underlayColor="#b7c879"
  >
    <Text style={[s.butText]}>
      { context }
    </Text>
  </TouchableHighlight>
);

Button.propTypes = {
  context: T.string,
  onPress: T.func,
};

export { Button };
