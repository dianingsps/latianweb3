import React, { Component } from 'react';

class ProfileCustom extends Component {
  constructor(props){
    super(props);
  }
   

  render() {
    return (
      <div>
      <h2>{this.props.nama}</h2>
      <img src="disney.jpg" width="450px"></img>
      </div>
    );
  }
}

export default ProfileCustom;