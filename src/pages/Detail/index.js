import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import CartActions from '~/store/ducks/cart';

import {
  Container,
  ProductCard,
  Image,
  DetailsContent,
  Details,
  Name,
  Brand,
  Price,
  Button,
  ButtonText,
} from './styles';

const Detail = ({ navigation }) => {
  const dispatch = useDispatch();
  const product = navigation.getParam('product');

  const { loading, error } = useSelector(state => state.cart);

  const toggleAddProductToCart = (product) => {
    dispatch(CartActions.addProductRequest(product));
  };

  return (
    <Container>
      <ProductCard>
        <Image source={{ uri: product.image }} />
        <DetailsContent>
          <Details>
            <Name>{product.name}</Name>
            <Brand>{product.brand}</Brand>
          </Details>

          <Price>{`R$ ${product.price}`}</Price>
        </DetailsContent>

        <Button onPress={() => toggleAddProductToCart(product)}>
          <ButtonText>{loading ? '...' : 'Adicionar ao carrinho'}</ButtonText>
        </Button>

        {error && <Name>Error!</Name>}
      </ProductCard>
    </Container>
  );
};

export default Detail;
