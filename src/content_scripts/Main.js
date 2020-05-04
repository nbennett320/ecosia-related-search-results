import React, { Component } from 'react'
import PanelContainer from './PanelContainer'
import Footer from './Footer'

export default class Main extends Component {
  render() {
    const { related } = this.props
    console.log(related)
    return (
      <div className="widget-container" style={styles.main}>
        <PanelContainer content={related} />
        <Footer />
      </div>
    )
  }
}
const styles = {
  main: {
    padding: '0'
  }
}