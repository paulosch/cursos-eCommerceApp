import React from 'react';
import { useSelector } from 'react-redux';

import Menu from '~/components/Menu';

import {
  Container,
  ProductsList,
  Product,
  Image,
  Details,
  Name,
  Brand,
  Price,
  Loading,
} from './styles';

const Home = ({ navigation }) => {
  const { data: products, loading } = useSelector(state => state.products);

  const handleProductPress = (product) => {
    navigation.navigate('Detail', { product });
  };

  return (
    <Container>
      <Menu />
      {loading ? (
        <Loading />
      ) : (
        <ProductsList
          data={products}
          keyExtractor={product => String(product.id)}
          numColumns={2}
          renderItem={({ item: product }) => (
            <Product onPress={() => handleProductPress(product)}>
              <Image source={{ uri: product.image }} />
              <Details>
                <Name>{product.name}</Name>
                <Brand>{product.brand}</Brand>
                <Price>{`R$ ${product.price}`}</Price>
              </Details>
            </Product>
          )}
        />
      )}
    </Container>
  );
};

export default Home;
