import React from "react";

import SearchForm from "./components/SearchForm";
import BookListContainer from "./components/BookListContainer";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ""
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(formData) {
    const query = formData.title;

    this.setState({
      query: query
    });
  }

  render() {
    return (
      <div className="app container">
        <h1>Tome Tomb</h1>

        <SearchForm onSearch={this.handleSearch} />
        <BookListContainer query={this.state.query} />
      </div>
    );
  }
}

export default App;
