import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtnInline } from "../components/Form";

import axios from "axios";
import Heading from "../components/Heading";
import BookComponent from "../components/BookComponent"

class Search extends Component {
  state = {
    books: [],
    search: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${this.state.search}&maxResults=20`)
      .then(resBooks => {
        console.log('Successful Search');
        this.setState({ //redirect to login page
          books: resBooks.data.items
        })
      }).catch(error => {
        console.log('signup error: ')
        console.log(error)
      })

    console.log("Search Clicked!!");
  };

  saveBook = (index) => {
    const book = this.state.books[index];
    const dbBook = {
      id_googlebooks: book["id"],
      title: book["volumeInfo"]["title"],
      authors: book["volumeInfo"]["authors"].join(", "),
      description: book["volumeInfo"]["description"],
      image: book["volumeInfo"]["imageLinks"]["smallThumbnail"],
      link: book["volumeInfo"]["infoLink"]
    };
    
    API.getBookIdGoogle(book["id"])
      .then(res => {
        console.log(res)
        if (!res.data){
          API.saveBook(dbBook)
            .then(res => console.log(dbBook))
            .catch(err => console.log(err));
        } else {
          console.log("Add Book Error: This Book has been saved already");
        }
      })
      .catch(err => console.log(err));
  
  }

  render() {
    return (
      <Container className="container">
        <Heading />
        <Container>
          <Row>
            <Col size="md-12">
              <form className="form-inline my-3" onSubmit={this.handleFormSubmit}>
              <Input
                value={this.state.search}
                onChange={this.handleInputChange}
                name="search"
                placeholder="Search"
                />
              <FormBtnInline
                disabled={!(this.state.search)}
                onClick={this.handleFormSubmit}
                >
                Search Book
              </FormBtnInline>
              </form>
            </Col>
          </Row>
        </Container>
        <Container>
        <Row>
          <Col size="md-12">
            {this.state.books.map((book, item) => {
              return (
                (
                  book["volumeInfo"]["title"] &&
                  book["volumeInfo"]["authors"] &&
                  book["volumeInfo"]["description"] &&
                  book["volumeInfo"]["imageLinks"]
                ) ? (
                  <BookComponent
                    item={item}
                    id_googlebooks={book["id"]}
                    title={book["volumeInfo"]["title"]}
                    authors={book["volumeInfo"]["authors"].join(", ")}
                    description={book["volumeInfo"]["description"]}
                    image={book["volumeInfo"]["imageLinks"]["smallThumbnail"]}
                    link={book["volumeInfo"]["infoLink"]}
                  >
                    <button className="btn btn-primary" onClick={() => this.saveBook(item)}>Save</button>
                  </BookComponent>
                ) : ("")
              );
            })}
          </Col>
        </Row>
      </Container>
    </Container>
    );
  }
}

export default Search;
