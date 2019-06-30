import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import PagesActions from '~/store/ducks/pages';

import { Container, Button, ControlIcon } from './styles';

const Footer = () => {
  const dispatch = useDispatch();

  const { actualPage } = useSelector(state => state.pages);

  return (
    <Container>
      <Button>
        <ControlIcon name="home" selected />
      </Button>

      <Button>
        <ControlIcon name="shopping-cart" />
      </Button>
    </Container>
  );
};

export default Footer;
