import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './SearchBooks'
import ListBooks from './ListBooks'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  readBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  componentDidMount = () => {
    this.readBooks()
  }

  onMoveBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then((books) => {
      this.readBooks();
    })
  }

  render() {
    return (
      <div className="app">
        <Route path="/search" render={() => (
          <SearchBooks
            books={this.state.books}
            onMoveBook={this.onMoveBook}
          />
        )} />
        <Route exact path="/" render={() => (
          <ListBooks
            books={this.state.books}
            onMoveBook={this.onMoveBook}
          />
        )} />
      </div>
    )
  }
}

export default BooksApp
