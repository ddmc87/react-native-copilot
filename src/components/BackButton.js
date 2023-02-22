// @flow
import React from 'react';
import { View, Text } from 'react-native';

import styles from './style';

type Props = {
  wrapperStyle: Object | number | Array,
  style: Object | number | Array,
  rest: Object | number | Array,
};

const Button = ({ wrapperStyle, style, ...rest }: Props) => (
  <View style={[styles.button2, wrapperStyle]}>
    <Text style={[styles.buttonText2, style]} {...rest} />
  </View>
);

export default Button;
