import React from 'react';

import { Container, Button, ControlIcon } from './styles';

const Footer = () => (
  <Container>
    <Button>
      <ControlIcon name="home" selected />
    </Button>

    <Button>
      <ControlIcon name="shopping-cart" />
    </Button>
  </Container>
);

export default Footer;
