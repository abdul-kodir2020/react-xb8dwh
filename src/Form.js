import React from 'react';
import ReactDOM from 'react-dom';
import Liste from './Liste';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      liste: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const newListe = [this.state.input, ...this.state.liste];
    this.setState({ liste: newListe });
    this.setState({ input: '' });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.input}
            onChange={(e) => this.setState({ input: e.target.value })}
          />

          <button>Submit</button>
        </form>
        <p>{this.state.input}</p>
        <Liste liste={this.state.liste} />
      </div>
    );
  }
}

export default Form;
