import React from 'react';
import ReactDOM from 'react-dom';

class Section extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Section {this.props.name}</h1>
      </div>
    );
  }
}

export default Section;
