import { Component } from 'react'
import { Badge, Card, Col } from 'react-bootstrap'

class SingleBook extends Component {
  render() {
    return (
      <Col key={this.props.type.asin}>
        <Card>
          <Card.Img
            loading="lazy"
            variant="top"
            src={this.props.type.img}
            className="w-100 d-block"
            style={{ aspectRatio: 1 / 1 }}
          />
          <Card.Body>
            <Card.Title style={{ minHeight: '5rem', lineHeight: '1.2rem', fontSize: '1.2rem' }}>
              {this.props.type.title}
            </Card.Title>
            <div className="d-flex justify-content-between">
              <Card.Text>{this.props.type.category}</Card.Text>
              <Badge className="align-self-start p-2 bg-secondary">{this.props.type.price}</Badge>
            </div>
          </Card.Body>
        </Card>
      </Col>
    )
  }
}

export default SingleBook
