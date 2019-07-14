import React from "react";

function SearchForm({ onSearch }) {
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onSearch({
          title: e.target.title.value
        });
      }}
      className="form-inline"
    >
      <div className="form-group mb-2 mr-2">
        <input
          name="title"
          type="text"
          className="form-control"
          autoComplete="off"
          placeholder="Type text to search books"
        />
      </div>
      <button type="submit" className="btn btn-primary mb-2">
        Search
      </button>
    </form>
  );
}

SearchForm.defaultProps = {
  query: "",
  onSearch: () => {}
};

export default SearchForm;
