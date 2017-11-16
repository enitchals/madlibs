import React from 'react';

const Print = props => {
  return (
    <div>
      Verb ending in -ing:
      <input type="text" value={props.thisWord} onChange={props.changeHandler} /> </br>
      Plural Noun:
      <input type="text" value={props.thisWord} onChange={props.changeHandler} /> </br>
   </div>
    )
}