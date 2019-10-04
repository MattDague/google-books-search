## google-books-search

https://googlebookssearcher.herokuapp.com/

Welcome to the google books search app! The purpose of this app is to allow the user to search the Google Books API and the app will display the top 10 returns for that book! The user will also be able to save books to a database so that they have a list of their favorites.

## How it works

The app is designed using reactJS to make the api calls, display the pages and React Router to help pick which page to show. The page is built using a multitude of components that make up each major element of the page. When a user types in a book that information is pulled to search the google books API. After a response is recieved the JSON information is passed to the BookList component which then renders for each book returned. After this the user may click the save or view button to either save it to the database or view the book info on its google page. When the user clicks the saved books tab they are displayed a list from MongoDB of each book they have saved.

## Technologies Used

 - ReactJS
 - NPM
 - JavaScript
 - BootStrap
 - Google Books API
 - React Router
 - Mongodb
 - Mongoose
