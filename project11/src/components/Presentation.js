import React, { Component } from 'react';
import Pics from './Pics';

const Presentation = props => {
console.log(props);
console.log(props.props.match.path);


    return (
      <div>
      {props.props.match.path !== '/search'?
      <div className="main-content">
      {(props.pics.loading ? <p>loading....</p> :
        <Pics data={props.pics.pics}/>
        )}
      </div> :

      props.pics.searchedYet ?
      <div className="main-content">
      {(props.pics.loading ? <p>loading....</p> :
        <Pics data={props.pics.pics}/>
        )}
      </div>:null

    }
    </div>
    );



}
export default Presentation;