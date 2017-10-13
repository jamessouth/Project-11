import React, { Component } from 'react';
import Pics from './Pics';

const Cats = props => {

  return (
  <div className="main-content">
  {(props.loading ? <p>loading....</p> :
    <Pics data={props.pics}/>
    )}
  </div>
);



}


export default Cats;
