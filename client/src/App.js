import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Input from "./components/Input";
import SearchButton from "./components/Buttons";
import API from "./utils/API";
import { BookList, BookListItem } from "./components/BookList";
import { Container, Row, Col } from "./components/Grid";

class App extends Component {
  state = {
    books: [],
    bookSearch: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.searchBooks(this.state.bookSearch)

    .then(res => this.setState({ books: res.data }))
      
      .catch(err => console.log(err));
      
  };

  render() {
    return (
      <div>
        <Nav />
        <Jumbotron />
        <Container>
          <Row>
            <Col size="md-12">
              <form>
                <Container >
                  <Row > 
                    <Col size="xs-9 sm-10">
                      <Input
                        name="bookSearch"
                        value={this.state.bookSearch}
                        onChange={this.handleInputChange}
                        placeholder="Search For a Book"
                      />
                    </Col>
                    <Col size="xs-3 sm-2">
                      <SearchButton
                        onClick={this.handleFormSubmit}
                        type="info"
                        className="input-lg"
                      >
                        Search
                      </SearchButton>
                    </Col>
                  </Row>
                </Container>
              </form>
            </Col>
          </Row>
          <br></br>
          <Row>
            <Col size="xs-12">
              {!this.state.books.length ? (
                <h1 className="text-center">No Books to Display</h1>
              ) : (
                <BookList>
                  {this.state.books.map(book => {
                    return (
                      <BookListItem
                        key={book.id}
                        title={book.volumeInfo.title}
                        href={book.volumeInfo.infoLink}
                        description={book.volumeInfo.description}
                        author={book.volumeInfo.authors}
                        thumbnail={book.volumeInfo.imageLinks.thumbnail}
                      />
                    );
                  })}
                </BookList>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
