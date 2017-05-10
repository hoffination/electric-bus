import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Paper from 'material-ui/Paper'
import FontAwesome from 'react-fontawesome'
import injectTapEventPlugin from 'react-tap-event-plugin'
import StateSelector from './components/stateSelector/StateSelector.js'
import './App.css'

injectTapEventPlugin()

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selection: null
    }

    this.handleStateSelection = this.handleStateSelection.bind(this)
  }

  handleStateSelection(selection) {
    this.setState({
      selection: selection
    })
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          {/* Need to extract this into another header class*/}
          <Paper>
            <div className="App-Header">
              <FontAwesome
                size='4x'
                name="bus"/>
              <h2>How much does an electric bus cost in </h2>
              <StateSelector
                className="State-Selector"
                selection={this.state.selection}
                onChange={this.handleStateSelection}>
              </StateSelector>
            </div>
          </Paper>

          { this.state.selection ?
            <Paper className="State-Detail">
              <h3>{this.state.selection} Detail</h3>
            </Paper>

            : <p>The wheels on the bus go round and round</p>}

        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
