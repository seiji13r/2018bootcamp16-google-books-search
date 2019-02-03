import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Heading from "../components/Heading";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import BookComponent from "../components/BookComponent"

class Saved extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Heading />
        <Row>
          <Col size="md-12">
          {this.state.books.map((book, item) => {
              return (
                (
                  book["title"] &&
                  book["authors"] &&
                  book["description"] &&
                  book["image"]
                ) ? (
                  <BookComponent
                    item={item}
                    id_googlebooks={book["id"]}
                    title={book["title"]}
                    authors={book["authors"]}
                    description={book["description"]}
                    image={book["image"]}
                    link={book["link"]}
                  >
                    <DeleteBtn className="btn btn-danger" onClick={() => this.deleteBook(book["_id"])} />
                  </BookComponent>
                ) : (
                  <h3>No Results to Display</h3>
                )
              );
            })}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Saved;
