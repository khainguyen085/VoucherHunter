import React from "react";
import { Row, Card, Col } from "react-bootstrap";
const News = () => {
  return (
    <div>
      <Row xs={1} md={4} className="g-4" style={{ padding: "10px" }}>
        {Array.from({ length: 8 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Img variant="top" src="https://cdn1.hoanghamobile.com/tin-tuc/wp-content/uploads/2020/03/nhung-smartphone-chup-anh-dep-1.jpg" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}
export default News;
