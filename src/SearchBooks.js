import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookShelf from './BookShelf'

class SearchBooks extends Component {
  state = {
    query: '',
    books: []
  }
  newestQuery = ''  // to imporove typing responsivity in search box

  findShelf = (bookId) => {
    const b = this.props.books.find(
      (book) => (book.id === bookId)
    );
    return (b ? b.shelf : '');
  }

  updateQuery = (query) => {
    this.newestQuery = query;
    if(query === '') {
      // empty query - do not bother searching
      this.setState({ books:[], query });
    }
    else {
      BooksAPI.search(query).then((foundBooks) => {
        // add shelf to each found book
        // Assumption: items of props.books contain at least id and shelf
        if(foundBooks.map) {
          const books = foundBooks.map(book => {
            book.shelf = this.findShelf(book.id);
              return book;
          })
          // if query stored in promise is outdated repeat the search
          if(query !== this.newestQuery)
            this.updateQuery(this.newestQuery);
          else {
            this.setState({ books, query });
          }
        }
      }).catch(this.setState({ books: [], query }));
    }
  }

  onMoveBook = (book, shelf) => {
    this.props.onMoveBook(book, shelf)
  }


  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close search</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input type="text" placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <BookShelf
            title="Found"
            shelf=""
            books={this.state.books}
            onMoveBook={this.onMoveBook}
          />
        </div>
      </div>
    );
  }
}

export default SearchBooks
