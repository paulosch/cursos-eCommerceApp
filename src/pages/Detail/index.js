import React from 'react';
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
  const product = navigation.getParam('product');

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

        <Button>
          <ButtonText>Adicionar ao carrinho</ButtonText>
        </Button>
      </ProductCard>
    </Container>
  );
};

export default Detail;
