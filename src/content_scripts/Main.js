import React, { Component } from 'react'
import Footer from './Footer'

export default class Main extends Component {
    render() {
        const { query } = this.props
        return (
            <div className="widget-container" style={styles.main}>
                {/* replace me..! */}
                <ExampleComponent query={query} />
                <Footer />
            </div>
        )
    }
}

const ExampleComponent = props => (
    <div style={styles.example.container}>
        <i> Ecosia Addon in React says: </i>
        <p style={styles.example.content}> {props.query} </p>
    </div>
)

const styles = {
    main: {
        padding: '0'
    },

    example: {
        container: {
            padding: '30px 10px',
            display: 'flex',
            flexDirection: 'column',
            fontSize: '16px',
            color: '#aaa'
        },

        content: {
            margin: '0',
            fontSize: '24px',
            color: '#4a4a4a',
        }
    }
}