import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";
import { SaveButton, ViewButton } from "../Buttons"


export function BookList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

export function BookListItem({
  thumbnail = "https://placehold.it/300x300",
  title,
  description,
  href,
  author
}) {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail src={thumbnail} />
          </Col>
          <Col size="xs-8 sm-9">
            <div className="row">
              <div className="col-12">
                <h3 className="float-left">{title}</h3>
                <SaveButton rel="noreferrer noopener" target="_blank" href={href}>
                </SaveButton>
                <ViewButton href={href}>
                </ViewButton>
              </div>
            </div>
            <div className="col-12">
              <h4 className="float-none">{author}</h4>
              <p>{description}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </li>
  );
}
