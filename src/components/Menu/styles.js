import styled from 'styled-components/native';

import { colors, metrics } from '~/styles';

export const Container = styled.View`
  background: ${colors.ligth};
`;

export const MenuList = styled.FlatList.attrs({
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    height: 56,
    paddingTop: metrics.basePadding * 2,
    backgroundColor: colors.primary,
  },
})``;

export const Categorie = styled.TouchableOpacity.attrs({
  hitSlop: {
    top: 5,
    left: 5,
    right: 5,
    bottom: 5,
  },
})`
  margin: 0 ${metrics.baseMargin * 2}px;
`;

export const Title = styled.Text`
  color: ${props => (props.selected ? colors.white : colors.whiteTransparent)};
  font-weight: bold;
  text-transform: uppercase;
  font-size: 16px;
`;

export const BorderBottom = styled.View`
  width: 100%;
  height: 5px;
  background: ${colors.white};
  margin-top: ${metrics.baseMargin};
`;
