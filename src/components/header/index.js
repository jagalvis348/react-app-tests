import React from 'react'
import logo from '../../assets/images/logo.svg'
import './header.css'

export default (props) => (
  <header className="Header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      {props.text}
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </header>
)
