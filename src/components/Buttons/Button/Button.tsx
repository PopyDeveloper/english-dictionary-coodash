import React, {FC} from 'react';
import {Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';
import S from './styles';
import Colors from 'src/contants/Colors';

type Props = {
  label: string;
  color?: string;
} & TouchableOpacityProps;

export const Button: FC<Props> = ({label, color, ...rest}) => {
  return (
    <TouchableOpacity
      style={[S.button, {backgroundColor: color ? color : Colors.primary}]}
      {...rest}>
      <Text style={S.label}>{label}</Text>
    </TouchableOpacity>
  );
};
