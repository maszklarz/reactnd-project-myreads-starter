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

  componentDidMount(books) {
    BooksAPI.getAll().then((books)=>{
      this.setState({ books })
    })
  }

  render() {
    return (
      <div className="app">
        <Route path="/search" render={() => (
          <SearchBooks/>
        )} />
        <Route exact path="/" render={() => (
          <ListBooks
            books={this.state.books}
          />
        )} />
      </div>
    )
  }
}

export default BooksApp
