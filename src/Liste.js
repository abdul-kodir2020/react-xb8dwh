import React from 'react';
import ReactDOM from 'react-dom';

function Liste(props){
  
  return props.liste.map((element, i) => (
    <p onClick={props.delete} name={'ligne'+element.id}>
      {element.text}
    </p>
  ));
}


export default Liste;
