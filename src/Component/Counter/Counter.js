import React from 'react';
import { View } from 'react-native';
import T from 'prop-types';

import { Count } from '../Count/Count';
import s from './../../styles/styles';


const Counter = ({ IncrementButton, DecrementButton, counter }) => (
  <View style={[s.container]}>
    <Count value={counter} />
    <View style={[s.containerBut]}>
      <DecrementButton />
      <IncrementButton />
    </View>
  </View>
);

Counter.propTypes = {
  IncrementButton: T.func,
  DecrementButton: T.func,
  counter: T.number,
};

export { Counter };
