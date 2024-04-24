import { Component } from 'react'
import { Badge, ButtonGroup, Card, Col, Container, Dropdown, DropdownButton, Row } from 'react-bootstrap'
import fantasy from '../data/books/fantasy.json'
import history from '../data/books/history.json'
import horror from '../data/books/horror.json'
import romance from '../data/books/romance.json'
import scifi from '../data/books/scifi.json'

class AllTheBooks extends Component {
  state = {
    genre: fantasy,
  }

  render() {
    console.log('render', this.state.genre[0].category)
    return (
      <Container>
        <ButtonGroup className="mt-2">
          <DropdownButton as={ButtonGroup} title="Category" id="bg-nested-dropdown" variant="dark">
            <Dropdown.Item eventKey="1" onClick={() => this.setState({ genre: fantasy })}>
              Fantasy
            </Dropdown.Item>
            <Dropdown.Item eventKey="2" onClick={() => this.setState({ genre: history })}>
              History
            </Dropdown.Item>
            <Dropdown.Item eventKey="3" onClick={() => this.setState({ genre: horror })}>
              Horror
            </Dropdown.Item>
            <Dropdown.Item eventKey="4" onClick={() => this.setState({ genre: romance })}>
              Romance
            </Dropdown.Item>
            <Dropdown.Item eventKey="5" onClick={() => this.setState({ genre: scifi })}>
              Scifi
            </Dropdown.Item>
          </DropdownButton>
        </ButtonGroup>

        <h1 className="text-center">
          EpiBooks: <span className="fw-normal">{this.state.genre[0].category}</span>
        </h1>
        <Row className="justify-content-center mt-5 row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 row-gap-3">
          {this.state.genre.map((book) => {
            return (
              <Col key={book.asin}>
                <Card>
                  <Card.Img
                    loading="lazy"
                    variant="top"
                    src={book.img}
                    className="w-100 d-block"
                    style={{ aspectRatio: 1 / 1 }}
                  />
                  <Card.Body>
                    <Card.Title style={{ minHeight: '5rem', lineHeight: '1.2rem', fontSize: '1.2rem' }}>
                      {book.title}
                    </Card.Title>
                    <div className="d-flex justify-content-between">
                      <Card.Text>{book.category}</Card.Text>
                      <Badge className="align-self-start p-2 bg-secondary">{book.price}</Badge>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            )
          })}
        </Row>
      </Container>
    )
  }
}

export default AllTheBooks
