import React, { Component } from 'react';
// import api from '../utils/api'
import axios  from 'axios'
class test extends Component{
  constructor(){
    super()
    this.state = {
      blogData:[],
      loaded: true
    }
  }
  componentDidMount(){
      this.apiCall();
  }
  handleChange(e) {
    this.props.changedata(e.target.value)
  }
  apiCall(){
    const encodedURI = window.encodeURI('https://myblog-46a92.firebaseio.com/posts.json/');
    return axios.get(encodedURI).then(function(response){
        return response
      }.bind(this)).then(function(data){
        const rawdata = data.data;
        const blogdata = []
        for (var key in rawdata) {
        }
        this.setState({blogData:rawdata});
        this.setState({loaded: false});
      }.bind(this))
  }
  render(){
    let author = Object.keys(this.state.blogData).map(function(key, index,data){

        return (<div key = {key}className="blogContainer">
            <p>Title: {this.state.blogData[key].title}</p>
            <article>{this.state.blogData[key].content}</article>
        </div>)
    }.bind(this))
    return(
        <div>
          <h1>{this.props.name}</h1>
            {this.state.loaded
                ?<div className='loader'></div>
                :<div>{author}</div>
            }



        </div>
    );
  }
}

export default test;
