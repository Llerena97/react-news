import React, { Component } from 'react';

class App extends Component {
  state = {
    news: []
  }
  componentDidMount(){
    this.checkNews();
  }

  checkNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=co&category=sports&apiKey=45ef7c3f82d342ab81ab4897f26da213`;
    const response = await fetch(url);
    const news = await response.json();
    this.setState({
      news: news.articles
    })
  }

  render(){
    return (
      <div className="App">
        <h1>React News</h1>
      </div>
    )
  }
}

export default App;
