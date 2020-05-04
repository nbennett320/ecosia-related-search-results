import React, { Component } from 'react'
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

export default class Panel extends Component {
  render() {
    const { 
      title,
      link,
      details
    } = this.props
    console.log(this.props)
    return (
      <ExpansionPanel style={styles.main}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <a href={link}
            style={styles.title}
          > 
            {title} 
          </a>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <p style={styles.details}> {details} </p>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
  }
}

const styles = {
  main: {
    boxShadow: 'none'
  },

  title: {
    marginLeft: '10px',
    color: '#9b9b9b',
    fontSize: '16px',
    textDecoration: 'none',
  },

  details: {
    marginLeft: '10px',
    color: '#4a4a4a',
    fontSize: '16px',
    textDecoration: 'none',
  }
}