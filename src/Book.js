import React, { Component } from 'react'

class Book extends Component {
  changeShelf = (shelf) => {
    this.props.onChangeShelf(this.props.book, shelf);
  }
  render() {
    return (
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.book.imageLinks ? this.props.book.imageLinks.thumbnail : ''})` }}></div>
            <div className="book-shelf-changer">
              <select defaultValue={this.props.book.shelf ? this.props.book.shelf : 'none'}
                      onChange={(event) => this.changeShelf(event.target.value)}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{this.props.book.title}</div>
          <div className="book-authors">{this.props.book.authors ? this.props.book.authors.join(", ") : ''}</div>
        </div>
    )
  }
}

export default Book
