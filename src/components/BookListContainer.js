import React from "react";
import axios from "axios";

import BookList from "../components/BookList";

/*
const list = [
  {
    id: '',
    title: '',
    cover: '',
    readLink: '',
  },
  {
    id: '',
    title: '',
    cover: '',
    readLink: '',
  },
]
*/

class BookListContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: []
    };

    this.loadDataFromAPI = this.loadDataFromAPI.bind(this);
  }

  componentDidMount() {
    this.loadDataFromAPI(this.props.query);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.query !== this.props.query) {
      this.loadDataFromAPI(nextProps.query);
    }
  }

  loadDataFromAPI(query) {
    if (!query) {
      this.setState({
        list: []
      });

      return;
    }

    axios
      .get(`https://openlibrary.org/search.json?title=${query}`)
      .then(response => {
        const data = response.data;
        const docs = data.docs;

        const list = docs.map(item => {
          return {
            id: "ID",
            title: item.title,
            cover: item.cover_i
              ? `http://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg`
              : undefined,
            readLink: `https://openlibrary.org${item.key}`
          };
        });

        this.setState({
          list: list
        });
      })
      .catch(function(error) {
        // handle error
        console.log(error);
        this.setState({
          list: []
        });
      })
      .finally(function() {
        // always executed
      });
  }

  render() {
    return (
      <div>
        <div>
          {this.state.list.length !== 0 ? (
            <div>
              <BookList list={this.state.list} />
            </div>
          ) : (
            <div>No results</div>
          )}
        </div>
      </div>
    );
  }
}

BookListContainer.defaultProps = {
  query: ""
};

export default BookListContainer;
