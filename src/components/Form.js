import React, { Component } from 'react';

class Form extends Component {
  state = {
    category: 'general'
  }

  handleCategory = e => {
    this.setState({
      category: e.target.value
    }, () => {
      this.props.checkNews(this.state.category)
    })
  }

  render(){
    return (
      <div className="searcher row">
        <div className="col s12 m8 offset-m2">
          <form>
            <h2>Find News by Category</h2>
            <div className="input-field col s12 m8 offset-m2">
              <select onChange={this.handleCategory}>
                <option value="general" defaultValue>General</option>
                <option value="entertainment">Entertainment</option>
                <option value="business">Business</option>
                <option value="technology">Technology</option>
                <option value="sports">Sports</option>
                <option value="science">Science</option>
                <option value="health">Health</option>
              </select>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Form;
