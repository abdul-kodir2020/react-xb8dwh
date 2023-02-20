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
    this.deleteLine = this.deleteLine.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const newInput = {
      id:String(Math.floor(Math.random() * 100000)),
      text: this.state.input
    }
    const newListe = [newInput, ...this.state.liste];
    this.setState({ liste: newListe });
    this.setState({ input: '' });
  }
  
  deleteLine(e){
    const newListe = this.state.liste.filter(lis => lis.id !== (e.target.getAttribute('name').substring(5)))
    this.setState({liste: newListe})
    console.log(newListe)
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
        <Liste liste={this.state.liste} delete={this.deleteLine}/>
      </div>
    );
  }
}

export default Form;
