import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CategoriesActions from '~/store/ducks/categories';

import {
  Container, MenuList, Categorie, Title, BorderBottom,
} from './styles';

const Menu = () => {
  const dispatch = useDispatch();

  const { data: categories, activeId } = useSelector(state => state.categories);

  useEffect(() => {
    dispatch(CategoriesActions.categoriesLoadRequest());
  }, [dispatch]);

  const toggleCategorie = (id) => {
    dispatch(CategoriesActions.categoriesToggleActive(id));
  };

  return (
    <Container>
      <MenuList
        horizontal
        pagingEnabled
        data={categories}
        keyExtractor={categorie => String(categorie.id)}
        renderItem={({ item: categorie }) => (
          <Categorie onPress={() => toggleCategorie(categorie.id)}>
            <Title selected={categorie.id === activeId}>{categorie.title}</Title>
            {categorie.id === activeId && <BorderBottom />}
          </Categorie>
        )}
      />
    </Container>
  );
};

export default Menu;
