import React from 'react'
import { Container } from 'semantic-ui-react'

const Wrapper = (props) => (
  <Container>
    {props.children}
  </Container>
);

export default Wrapper