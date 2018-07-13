# My Reads App
This is the seventh project in Google Udacity FEND Nanodegree Scholarship.

## Author
Made by Mariola Karpiewska based on initial, static code provided by the Udacity.

## Usage
The main screen shows three shelves. Each shelf contains books dedicated to it by the user with the control attached to each book. The shelf is either: Currently Reading, Want to Read, or Read. The book can be removed from the screen by selecting the shelf option None. Additional books can be added via Search screen. The screen is accessible by button on the main screen. The available books appear on the Search screen while user types the searched phrase in the search box. The books also have attached controls to put them to required shelf.

## Installation
1. Clone the git repository
2. Go to the project's main directory and type ```npm install```
3. Run the server with ```npm start```
Note, make sure there is nothing else running on the localhost port 3000. If so, stop it firts.
4. Navigate with your browser to ```localhost:3000```

## Code Description
### The application structure
The application is built based on a React framework. The UI is composed of React components with following hierarchy:
```
BooksApp
|--ListBooks
|  |--BookShelf - currently reading
|     |--Book
|     |--...
|  |--BookShelf - want to read
|     |--Book
|     |--...
|  |--BookShelf - read
|     |--Book
|     |--...
|--SearchBooks
   |--BookShelf - search results
      |--Book
|     |--...
```
Each component is defined in respective *.js file.
### Main screen
The BooksApp component's state keeps a single list of books that are available on the shelves. The array is gathered from the remote storage by BooksAPI.getAll(). The items on the list hold information on the book assignments to shelves and are filtered out by respective BookShelf components based on it.
### Search screen
The SearchBooks component's state also contains an array of books. The contents of the array is gathered by BooksAPI.search() though, and depends on the search phrase (the phrase, called query, makes a part of the state as well). The freshly gathered book items do not know their shelves. The information is completed by findShelf() based on the list of books kept in the BooksApp's state.
### Data flow
The Book component contains a control that allows selection of the book's shelf. The default state is based on the "shelf" property of the book object. The onChange event sends the information on the modified book/shelf up to the BooksApp component through a chain of functions hooked to props. The BooksAPI.update() then modifies the remote database. The new list of books is gathered back to the BooksApp's state and the modified UI widgets are rendered accordingly in every screen.
### Navigation
The screen selection is driven by Link object (setting the navigation bar contents) and Router object (detecting changes in navigation bar). This makes the application intuitively reacting to the  browser's navigation buttons.

## Dependencies
- [React](https://reactjs.org/)
- react-router-dom - the library provides Link and Route objects
- BooksAPI - a library provided by Udacity to grab books data from remote server


## Contributing

Pull requests will be accepted occasionally, as soon as I practice to learn how to do it ;-)
