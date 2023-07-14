import React from "react";
import {
  Card,
  ListGroup,
  Button,
} from "react-bootstrap";

const FeedData = [
  {
    title: "Analiz 1",
    icon: "bi bi-bell",
    color: "primary",
    date: "6 minute ago",
  },
  {
    title: "Analiz 2",
    icon: "bi bi-person",
    color: "info",
    date: "6 minute ago",
  },
  {
    title: "Analiz 3",
    icon: "bi bi-hdd",
    color: "danger",
    date: "6 minute ago",
  },
  {
    title: "Analiz 4",
    icon: "bi bi-bag-check",
    color: "success",
    date: "6 minute ago",
  },
  {
    title: "Analiz 5",
    icon: "bi bi-bell",
    color: "dark",
    date: "6 minute ago",
  }
];

const Feeds = () => {
  return (
    <Card>
      <Card.Body>
        <Card.Title as="h5">Analizler</Card.Title>
        <Card.Subtitle className="mb-2 text-muted" as="h6">
          Widget you can use
        </Card.Subtitle>
        <ListGroup  className="mt-4">
          {FeedData.map((feed, index) => (
            <ListGroup.Item
              key={index}
              action
              href="/"
              as="a"
              className="d-flex align-items-center p-3 border-0"
            >
              <Button
                className="rounded-circle me-3"
                size="sm"
                color={feed.color}
              >
                <i class="bi bi-graph-up"></i>
              </Button>
              {feed.title}
              <small className="ms-auto text-muted text-small">
                {feed.date}
              </small>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default Feeds;
