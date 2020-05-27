import React, { Component } from 'react'
import Panel from './Panel'
import scrape from './scripts/scrape'

export default class PanelContainer extends Component {
  getDetails = el => {
    const { text, href } = el
    scrape.from(href)
  }

  render() {
    const { content, query } = this.props
    console.log(content)
    return (
      <div style={styles.main}>
        <span style={styles.header} className="cart-title"> Searches related to {query} </span>
        <div style={styles.content}>
          {content.map((el, i) => (
            <Panel 
              key={`${i}`}
              title={el.text}
              link={el.href}
              details={"placeholder"}
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
    cursor: 'text',
    color: '#9b9b9b',
    fontSize: '13px',
  },

  content: {
    borderTop: '1px solid #ededed',
  }
}