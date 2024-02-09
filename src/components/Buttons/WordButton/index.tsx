import React, {FC} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

type Props = {
  label: string;
} & TouchableOpacityProps;

const {width: WIDTH_SCREEN} = Dimensions.get('screen');

export const WordButton: FC<Props> = ({label, ...props}) => {
  return (
    <TouchableOpacity style={S.container} {...props}>
      <Text style={S.label} numberOfLines={3}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const S = StyleSheet.create({
  container: {
    width: WIDTH_SCREEN / 3 - 10,
    height: 100,
    borderColor: 'ccc',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 2,
    borderRadius: 5,
  },
  label: {
    fontWeight: '600',
    fontSize: 20,
    textAlign: 'center',
    flexWrap: 'wrap',
  },
});
