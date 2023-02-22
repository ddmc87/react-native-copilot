// @flow
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import BackButton from './BackButton';
import Button from './Button';

import styles from './style';

import type { Step } from '../types';

type Props = {
  isFirstStep: boolean,
  isLastStep: boolean,
  handleNext: func,
  handlePrev: func,
  handleStop: func,
  currentStep: Step,
  labels: Object,
};

const Tooltip = ({
  isFirstStep,
  isLastStep,
  handleNext,
  handlePrev,
  handleStop,
  currentStep,
  labels,
}: Props) => (
  <View>
    <View style={styles.tooltipContainer}>
      <Text testID="stepTitle" style={styles.tooltipTitle}>{currentStep.title}</Text>
      <Text testID="stepDescription" style={styles.tooltipText}>{currentStep.text}</Text>
    </View>
    <View style={[styles.bottomBar]}>
      {
        !isFirstStep ?
          <TouchableOpacity onPress={handlePrev} style={{flex:1}}>
            <BackButton>{labels.previous || 'Previous'}</BackButton>
          </TouchableOpacity>
          : null
      }
      {
        !isLastStep ?
          <TouchableOpacity onPress={handleNext} style={{alignSelf: 'flex-end'}}>
            <Button>{labels.next || 'Next'}</Button>
          </TouchableOpacity> :
          <TouchableOpacity onPress={handleStop}>
            <Button>{labels.finish || 'Finish'}</Button>
          </TouchableOpacity>
      }
    </View>
  </View>
);

export default Tooltip;
