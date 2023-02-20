import React from 'react';
import './style.css';
import Section from './section';
import Form from './Form';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Section name={'abdul'} />
      <Form />
    </div>
  );
}
