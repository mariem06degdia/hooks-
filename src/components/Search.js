import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Search({setSearch}) {
  return (
    <div>
         <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">
        <i className="fa-solid fa-magnifying-glass"></i>
        </InputGroup.Text>
        <Form.Control
          placeholder="Search by title"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={(e)=> setSearch(e.target.value)}
        />
      </InputGroup>
    </div>
  )
}

export default Search