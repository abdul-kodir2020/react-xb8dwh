import React from 'react';
import ReactDOM from 'react-dom';

class Liste extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return this.props.liste.map((element, i) => <p>{element}</p>);
  }
}

export default Liste;
