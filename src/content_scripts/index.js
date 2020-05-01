import React from 'react'
import ReactDOM from 'react-dom'
import Main from './Main'
import parse from './parsers/example.js'

console.log("Ecosia Addon in React (E.A.R.) was loaded! Nice!")
const content = document.getElementsByClassName('mainline-top')
const query = document.getElementsByClassName('search-form-input')[0].value

if(parse(query)) {
    ReactDOM.render(<Main query={query} />, content[0])
}