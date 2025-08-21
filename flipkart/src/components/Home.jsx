import React, { Component } from 'react'
import Header from './Header/Header'
import Body from './Body/Body'

export class Home extends Component {
  render() {
    return (
      <div style={{backgroundColor: "#e4e2e264"}}>
        <Header/>
        <Body/>
      </div> 
    )
  }
}

export default Home