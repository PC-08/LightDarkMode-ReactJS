// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {dark: true}

  changeMode = () => {
    const {dark} = this.state

    this.setState({dark: !dark})
  }

  render() {
    const {dark} = this.state
    const card = dark ? 'dark' : 'light'
    const button = dark ? 'Light Mode' : 'Dark Mode'

    return (
      <div className="bg">
        <div className={`${card}`}>
          <h1> Click To Change Mode</h1>
          <button onClick={this.changeMode} className="btn" type="button">
            {button}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
