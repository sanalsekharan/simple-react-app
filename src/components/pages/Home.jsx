import React, { Component } from 'react';
import HomePageData from './HomePageData.jsx';

export default class Home extends Component{
  constructor(){
    super();
    this.state = {
      name : 'Sanal'
    }
  }
  changeName(name){
    this.setState({name})
  }
  render(){
    return(
      <div>
        <h1>Home Page</h1>
        <HomePageData name = {this.state.name} changedata = {this.changeName.bind(this)}/>
      </div>
    )
  }
}
