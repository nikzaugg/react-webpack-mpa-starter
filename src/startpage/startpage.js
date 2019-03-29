import React from 'react'
import ReactDOM from "react-dom";
import { Grid, Button } from 'semantic-ui-react';
import Wrapper from '../shared/Components/Wrapper';
import Carousel from '../shared/Components/Carousel';
import '../styles-global.less';
import 'semantic-ui-less/semantic.less';

const Startpage = () => (
  <Wrapper>
    <Grid celled>
      <Grid.Row>
        <Grid.Column>
          <Carousel />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={3}>
          x
      </Grid.Column>
        <Grid.Column width={13}>
          x
      </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column width={3}>
          x
      </Grid.Column>
        <Grid.Column width={10}>
          x
      </Grid.Column>
        <Grid.Column width={3}>
          x
      </Grid.Column>
      </Grid.Row>
    </Grid>
    <Button color='red'>Click</Button>
  </Wrapper>
)

ReactDOM.render(<Startpage />, document.getElementById("index"));