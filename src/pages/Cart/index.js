import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CartActions from '~/store/ducks/cart';

import {
  Container,
  EmpytCart,
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

const Cart = () => {
  const dispatch = useDispatch();

  const { data: products } = useSelector(state => state.cart);

  const calcularSubTotal = () => {
    let subTotal = 0;

    products.map((product) => {
      subTotal += parseFloat(product.price) * parseFloat(product.qty);
    });

    return subTotal;
  };

  const handleChangeQty = (product, qty) => {
    const data = [...products];
    const newProduct = { ...product };
    newProduct.qty = qty;

    const productIndex = data.findIndex(item => item.id === newProduct.id);
    data[productIndex] = newProduct;
    dispatch(CartActions.handleChangeQty(data));
  };

  const removeProduct = (product) => {
    dispatch(CartActions.removeProduct(product));
  };

  return (
    <Container>
      {products.length < 1 ? (
        <EmpytCart>Carrinho vazio</EmpytCart>
      ) : (
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
                <Quantity
                  value={String(product.qty)}
                  keyboardType="numeric"
                  onChangeText={text => handleChangeQty(product, text)}
                />
                <Button onPress={() => removeProduct(product)}>
                  <DeleteIcon name="delete" size={24} />
                </Button>
              </ActionsContent>
            </ItemContent>
          )}
        />
      )}

      <Totais>
        <LabelSubTotal>Subtotal</LabelSubTotal>
        <SubTotal>{`R$ ${products.length > 0 ? calcularSubTotal() : '0.00'}`}</SubTotal>
      </Totais>
    </Container>
  );
};

export default Cart;
