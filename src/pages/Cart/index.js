import React from 'react';

import {
  Container,
  ProductList,
  ItemContent,
  Image,
  DetailsContent,
  Name,
  Brand,
  Price,
  ActionsContent,
  Quantity,
  Button,
  DeleteIcon,
  Totais,
  LabelSubTotal,
  SubTotal,
} from './styles';

const products = [];

const Cart = () => (
  <Container>
    <ProductList
      data={products}
      keyExtractor={product => String(product.id)}
      renderItem={({ item: product }) => (
        <ItemContent>
          <Image source={{ uri: product.image }} />

          <DetailsContent>
            <Name>{product.name}</Name>
            <Brand>{product.brand}</Brand>
            <Price>{`R$ ${product.price}`}</Price>
          </DetailsContent>

          <ActionsContent>
            <Quantity value={String(product.qty)} />
            <Button>
              <DeleteIcon name="delete" size={24} />
            </Button>
          </ActionsContent>
        </ItemContent>
      )}
    />

    <Totais>
      <LabelSubTotal>Subtotal</LabelSubTotal>
      <SubTotal>R$ 200,00</SubTotal>
    </Totais>
  </Container>
);

export default Cart;
