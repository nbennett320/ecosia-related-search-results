// you can add background scripts here
// to access more browser permissions
// (that way you can do even cooler stuff
// like async functions (like calling an API))
// read more about it here: 
// https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#Communicating_with_background_scripts
// example use cases:
// https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage
// 
// if you dont need this... just delete this file and read my docs
console.log("Loaded Ecosia Addon in React (E.A.R.) background script.")

browser.runtime.onMessage.addListener(message => {
  console.log(message) 
})