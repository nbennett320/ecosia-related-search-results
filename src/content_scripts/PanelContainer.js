import React, { Component } from 'react'
import Panel from './Panel'

export default class PanelContainer extends Component {
  render() {
    const { content } = this.props
    console.log(content)
    return (
      <div style={styles.main}>
        <span style={styles.header}> Related search results: </span>
        <div style={styles.content}>
          {content.map((el, i) => (
            <Panel 
              key={`${i}`}
              title={el.text}
              link={el.href}
              details={"place holder"}
            />
          ))}
        </div>
      </div>
    )
  }
}

const styles = {
  main: {
    padding: '0',
    display: 'flex',
    flexDirection: 'column',
  },

  header: {
    padding: '10px 26px',
    margin: '0',
    fontSize: '18px',
    color: '#4a4a4a',
    cursor: 'text'
  },

  content: {
    borderTop: '1px solid #ededed',
  }
}