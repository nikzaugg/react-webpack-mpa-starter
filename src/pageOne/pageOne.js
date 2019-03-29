import React from "react";
import ReactDOM from "react-dom";
import SharedComponent from '../shared/Components/SharedComponent';
import SpecificComponent from './Components/SpecificComponent';
import { Button } from 'semantic-ui-react'
import 'semantic-ui-less/definitions/elements/button.less'

const Index = () => {
  return (
  <div>
    Page 1
    <Button>Click Here</Button>
    <SharedComponent/>
    <SpecificComponent/>
  </div>);
};

ReactDOM.render(<Index />, document.getElementById("index"));