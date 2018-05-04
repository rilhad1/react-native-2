import React from 'react';
import { View, Text } from 'react-native';
import T from 'prop-types';

import s from './../../styles/styles';

const Count = ({ value }) => (
  <View style={[s.countContainer]}>
    <Text style={[s.countText]}>
      {value}
    </Text>
  </View>
);

Count.defaultProps = {
  value: 0,
};

Count.propTypes = {
  value: T.number,
};

export { Count };
