const scrape = {
  from: url => {
    console.log("scraping from: ", url)
    const getChildren = url => browser.runtime.sendMessage({
      url: url
    })
    getChildren(url).then(res => console.log(res))
  }
}

export default scrape