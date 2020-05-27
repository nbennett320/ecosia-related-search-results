import React, { Component } from 'react'
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

export default class Panel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isExpanded: false,
      isHoveringPanel: false,
      isHoveringLink: false
    }
  }

  handleExpand = () => {
    const { link } = this.props
    this.setState({isExpanded: !this.state.isExpanded})
    console.log(link)
    return scrapeResults.scrape(link)
      .then(data => data)
  }

  handleMouseEnterPanel = () => {
    this.setState({isHoveringPanel: true})
  }

  handleMouseLeavePanel = () => {
    this.setState({isHoveringPanel: false})
  }

  handleMouseEnterLink = () => {
    this.setState({isHoveringLink: true})
  }

  handleMouseLeaveLink = () => {
    this.setState({isHoveringLink: false})
  }

  render() {
    const { 
      title,
      link,
      details
    } = this.props
    const { 
      isExpanded,
      isHoveringPanel,
      isHoveringLink
    } = this.state
    console.log(this.props)
    return (
      <ExpansionPanel
        onChange={this.handleExpand}
        onMouseEnter={this.handleMouseEnterPanel}
        onMouseLeave={this.handleMouseLeavePanel}
        style={{
          ...styles.main,
          ...isHoveringPanel
            ? {backgroundColor: '#fcfcfc'}
            : {backgroundColor: '#fff'},
          ...isExpanded
            ? styles.expanded
            : {}
        }}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <a href={link}
            onMouseEnter={this.handleMouseEnterLink}
            onMouseLeave={this.handleMouseLeaveLink}
            style={{
              ...styles.title,
              ...isHoveringLink 
                ? {textDecoration: 'underline'}
                : {textDecoration: 'none'}
            }}
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
    color: '#8c8c8c',
    fontSize: '16px',
    textDecoration: 'none',
  },

  details: {
    marginLeft: '10px',
    color: '#4a4a4a',
    fontSize: '16px',
    textDecoration: 'none',
  },

  expanded: {
    backgroundColor: '#fff',
    borderTop: '1px solid #ededed',
    borderBottom: '1px solid #ededed',
    marginBottom: '0'
  }
}