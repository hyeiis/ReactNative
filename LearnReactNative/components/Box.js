import React from 'react';
import {View, StyleSheet} from 'react-native';

function Box({rounded, size, color}) {
  //여러 스타일을 적용하고 싶을 때 - 배열 형태로 설정
  return (
    <View
      style={[
        styles.box,
        rounded && styles.rounded,
        sizes[size],
        {
          backgroundColor: color,
        },
      ]}
    />
  );
}

Box.defaultProps = {
  size: 'medium',
  color: 'black',
};

const styles = StyleSheet.create({
  box: {
    width: 64,
    height: 64,
    backgroundColor: 'black',
  },
  rounded: {
    borderRadius: 16,
  },
  small: {
    width: 32,
    height: 32,
  },
  medium: {
    width: 64,
    height: 64,
  },
  large: {
    width: 128,
    height: 128,
  },
});

const sizes = {
  small: styles.small,
  medium: styles.medium,
  large: styles.large,
};

export default Box;
