import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import ListNews from './components/ListNews';

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
      <Fragment>
        <Header
          title="React News"
          />
        <div className="container white container-news">
          <ListNews
            news={this.state.news}
            />
        </div>
      </Fragment>
    )
  }
}

export default App;
