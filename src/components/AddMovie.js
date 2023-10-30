import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function AddMovie({ addMovie }) {
  const [show, setShow] = useState(false);
  const [newMovie, setNewMovie] = useState({
    movieName: "",
    description: "",
    imgUrl: "",
    rating: 1,
  });
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChanges = () => {
    addMovie({ ...newMovie, id: Math.random() });
    handleClose();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add a movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Movie name</Form.Label>
              <Form.Control
                placeholder="type movie name here"
                autoFocus
                value={newMovie.movieName}
                onChange={(e) =>
                  setNewMovie({ ...newMovie, movieName: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Movie description</Form.Label>
              <Form.Control
                placeholder="type movie description here"
                autoFocus
                value={newMovie.description}
                onChange={(e) =>
                  setNewMovie({ ...newMovie, description: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Movie poster</Form.Label>
              <Form.Control
                placeholder="type movie poster url here"
                autoFocus
                value={newMovie.imgUrl}
                onChange={(e) =>
                  setNewMovie({ ...newMovie, imgUrl: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Movie rating</Form.Label>
              <Form.Control
                placeholder="enter movie rating"
                autoFocus
                type="number"
                value={newMovie.rating}
                onChange={(e) =>
                  setNewMovie({ ...newMovie, rating: e.target.value })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddMovie;
