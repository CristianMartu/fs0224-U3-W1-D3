import { ButtonGroup, Container, Dropdown, DropdownButton, Row } from 'react-bootstrap'
import SingleBook from './SingleBook'
import { Component } from 'react'

class BookList extends Component {
  state = {
    list: this.props.data,
    genre: 'fantasy',
  }
  render() {
    return (
      <Container>
        <ButtonGroup className="mt-2">
          <DropdownButton as={ButtonGroup} title="Category" id="bg-nested-dropdown" variant="dark">
            <Dropdown.Item eventKey="1" onClick={() => this.setState({ genre: 'fantasy' })}>
              Fantasy
            </Dropdown.Item>
            <Dropdown.Item eventKey="2" onClick={() => this.setState({ genre: 'history' })}>
              History
            </Dropdown.Item>
            <Dropdown.Item eventKey="3" onClick={() => this.setState({ genre: 'horror' })}>
              Horror
            </Dropdown.Item>
            <Dropdown.Item eventKey="4" onClick={() => this.setState({ genre: 'romance' })}>
              Romance
            </Dropdown.Item>
            <Dropdown.Item eventKey="5" onClick={() => this.setState({ genre: 'scifi' })}>
              Scifi
            </Dropdown.Item>
            <Dropdown.Item eventKey="5" onClick={() => this.setState({ genre: 'all' })}>
              All
            </Dropdown.Item>
          </DropdownButton>
        </ButtonGroup>
        <h1 className="text-center">
          EpiBooks: <span className="fw-normal">{this.state.genre}</span>
        </h1>
        <Row className="justify-content-center mt-5 row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 row-gap-3">
          {this.state.genre !== 'all'
            ? this.state.list
                .filter((book) => book.category === this.state.genre)
                .map((book, i) => <SingleBook type={book} key={'Book: ' + i} />)
            : this.state.list.map((book, i) => <SingleBook type={book} key={'Book: ' + i} />)}
        </Row>
      </Container>
    )
  }
}

export default BookList
