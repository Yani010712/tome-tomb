import React from "react";

import Book from "./Book";

function BookList({ list }) {
  return (
    <div>
      {list.map(props => (
        <Book
          key={props.readLink /* find unique props to use here */}
          title={props.title}
          cover={props.cover}
          readLink={props.readLink}
        />
      ))}
    </div>
  );
}

BookList.defaultProps = {
  list: []
};

export default BookList;
