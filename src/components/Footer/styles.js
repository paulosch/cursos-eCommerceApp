import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { colors, metrics } from '~/styles';

export const Container = styled.View`
  background: #fff;
  height: ${metrics.basePadding * 5 + getBottomSpace()}px;
  width: 100%;

  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 0 ${metrics.basePadding * 2}px ${getBottomSpace()}px;
`;

export const Button = styled.TouchableOpacity.attrs({
  hitSlop: {
    top: 5,
    left: 5,
    right: 5,
    bottom: 5,
  },
})``;

export const ControlIcon = styled(Icon).attrs(props => ({
  size: 32,
  color: props.selected ? colors.primary : colors.secondary,
}))``;
