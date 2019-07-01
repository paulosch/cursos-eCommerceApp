import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { colors, metrics } from '~/styles';

export const Container = styled.View`
  flex: 1;
  padding: ${metrics.basePadding}px;
  background: ${colors.ligth};
`;

export const ProductList = styled.FlatList.attrs({})``;

export const EmpytCart = styled.Text`
  width: 100%;
  text-align: center;
  font-size: 18px;
`;

export const ItemContent = styled.View`
  padding: ${metrics.basePadding}px;
  margin-bottom: ${metrics.baseMargin}px;
  background: ${colors.white};
  flex-direction: row;
  align-items: center;
`;

export const Image = styled.Image`
  width: 60px;
  height: 100px;
`;

export const DetailsContent = styled.View`
  margin-left: ${metrics.baseMargin}px;
`;

export const Name = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.black};
`;

export const Brand = styled.Text`
  font-size: 12px;
  color: ${colors.secondary};
`;

export const Price = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-top: ${metrics.baseMargin / 2}px;
  color: ${colors.success};
`;

export const ActionsContent = styled.View`
  margin-left: ${metrics.baseMargin * 2}px;
  flex-direction: row;
  margin-left: auto;
  justify-content: center;
  align-items: center;
`;

export const Quantity = styled.TextInput`
  padding: 0 ${metrics.basePadding}px;
  align-items: center;
  align-self: center;
  border: 1px solid ${colors.regular};
  border-radius: ${metrics.baseRadius}px;
`;

export const Button = styled.TouchableOpacity`
  margin-left: ${metrics.baseMargin}px;
`;

export const DeleteIcon = styled(Icon)`
  color: ${colors.regular};
`;

export const Totais = styled.View`
  background: ${colors.white};
  padding: ${metrics.basePadding}px;
  align-items: center;
  justify-content: center;
  margin-top: auto;
`;

export const LabelSubTotal = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${colors.ligth};
`;

export const SubTotal = styled.Text`
  font-size: 36px;
  font-weight: bold;
  color: ${colors.success};
`;
