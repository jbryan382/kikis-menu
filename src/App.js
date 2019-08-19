import React, { Component } from 'react'
import Menu1 from './assets/MenuPROOF.jpg'
import Menu2 from './assets/MenuPROOF2.jpg'

class App extends Component {
  render() {
    return (
      <div>
        <img src={Menu1} alt="Lunch Catering" />
        <img src={Menu2} alt="Daily Lunch Specials" />
      </div>
    )
  }
}

export default App
