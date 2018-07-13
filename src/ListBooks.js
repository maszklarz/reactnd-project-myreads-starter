import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

class ListBooks extends Component {
  onMoveBook = (book, shelf) => {
    this.props.onMoveBook(book, shelf)
  }
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf
              title="Currently Reading"
              shelf="currentlyReading"
              books={this.props.books}
              onMoveBook={this.onMoveBook}
            />
            <BookShelf
              title="Want to Read"
              shelf="wantToRead"
              books={this.props.books}
              onMoveBook={this.onMoveBook}
            />
            <BookShelf
              title="Read"
              shelf="read"
              books={this.props.books}
              onMoveBook={this.onMoveBook}
            />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search" className="open-search">
            Search
          </Link>
        </div>
      </div>
    );
  }
}

export default ListBooks
