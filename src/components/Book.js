import React from "react";

function Book({ title, cover, readLink }) {
  return (
    <div className="book">
      <img src={cover} alt={title} />
      <div>{title}</div>
      <a target="_blank" rel="noopener noreferrer" href={readLink} className="btn btn-info">
        Read book
      </a>
    </div>
  );
}

Book.defaultProps = {
  cover: "https://cdn.nexternal.com/clay2/images/21-W-Skyline-1801.jpg",
  readLink: "#"
};

export default Book;
