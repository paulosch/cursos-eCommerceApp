import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import { colors, metrics } from '~/styles';

export const Container = styled.ScrollView`
  flex: 1;
  padding: ${metrics.basePadding}px ${metrics.basePadding}px;
  background: ${colors.ligth};
`;

export const ProductCard = styled.View`
  background: ${colors.white};
  padding: ${metrics.basePadding}px;
  margin-bottom: ${getBottomSpace() + metrics.basePadding * 2}px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 580px;
`;

export const DetailsContent = styled.View`
  width: 100%;
  margin-top: ${metrics.baseMargin}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const Details = styled.View``;

export const Name = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${colors.black};
`;

export const Brand = styled.Text`
  font-size: 13px;
  color: ${colors.regular};
`;

export const Price = styled.Text`
  font-size: 36px;
  font-weight: bold;
  color: ${colors.success};
`;

export const Button = styled.TouchableOpacity`
  border-radius: ${metrics.baseRadius}px;
  background: ${colors.success};
  align-items: center;
  justify-content: center;
  padding: ${metrics.basePadding}px;
  margin-top: ${metrics.baseMargin};
`;

export const ButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${colors.white};
`;
