import React, {useState} from 'react'
import axios from 'axios'
import{Container, Form , Button} from 'react-bootstrap'

const CompForma = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    comment: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/contact', formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <Container>
     <Form onSubmit={handleSubmit}>
       <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" name='firstName' value={formData.firstName} onChange={handleChange} />
      </Form.Group>
       <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" name='lastName' value={formData.lastName} onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' value={formData.email} onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} name='comment' value={formData.comment} onChange={handleChange} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
    </Container>
  )
}

export default CompForma
