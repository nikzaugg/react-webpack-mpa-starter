import React from 'react'
import ReactDOM from "react-dom";
import { Grid } from 'semantic-ui-react';
import Wrapper from '../shared/Components/Wrapper';
import '../styles-global.less';

const Startpage = () => (
  <Wrapper>
    <Grid celled>
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
  </Wrapper>
)

ReactDOM.render(<Startpage />, document.getElementById("index"));