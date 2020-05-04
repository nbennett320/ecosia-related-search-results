import React from 'react'
import ReactDOM from 'react-dom'
import Main from './Main'

console.log("Ecosia Addon in React (E.A.R.) was loaded! Nice!")
const content = document.getElementsByClassName('mainline-top')
const query = document.getElementsByClassName('search-form-input')[0].value
const children = document.getElementsByClassName('related-searches-container')[0].children
const related = Array.from(children).map(el => {
  if(el.localName !== "span") {
    return {
      href: el.href,
      search: el.search,
      text: el.innerText
    }
  }
}).filter(el => {
  if(el) return el
})

if(related.length > 0) {
  ReactDOM.render(<Main related={related} />, content[0])
}