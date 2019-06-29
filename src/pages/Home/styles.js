import styled from 'styled-components/native';

import { colors, metrics } from '~/styles';

export const Container = styled.View`
  flex: 1;
  background: ${colors.ligth};
`;

export const ProductsList = styled.FlatList.attrs({
  // paddingTop: metrics.basePadding * 2,
  // paddingRight: metrics.basePadding * 2,
})``;

export const Product = styled.TouchableOpacity.attrs({})`
  background: ${colors.white};
  flex-grow: 1;
  flex-basis: 0;
  margin: ${metrics.baseMargin}px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 260px;
`;

export const Details = styled.View`
  padding: ${metrics.basePadding}px;
`;

export const Name = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${colors.black};
`;

export const Brand = styled.Text`
  font-size: 13px;
  color: ${colors.ligth};
`;

export const Price = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${colors.success};
`;

export const Loading = styled.ActivityIndicator.attrs({
  size: 'large',
  color: colors.primary,
})`
  margin-top: 50px;
`;
