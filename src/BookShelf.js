import React, { Component } from 'react'
import Book from './Book'

class BookShelf extends Component {
  onMoveBook = (book, shelf) => {
    this.props.onMoveBook(book, shelf);
  }
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            { this.props.books
              .filter(book => book.shelf === this.props.shelf || this.props.shelf === '')
              .map(b => (
                <li key={b.id}>
                  <Book book={b} onChangeShelf={this.onMoveBook}/>
                </li>
              ))
            }
          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf
