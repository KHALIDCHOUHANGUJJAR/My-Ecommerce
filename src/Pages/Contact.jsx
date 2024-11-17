import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { IoMdCall, IoMdMail } from "react-icons/io";
import { toast } from "react-toastify";

const Contact = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    toast.success("Sent message successfully");
    setValidated(true);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center p-6 sm:p-8 md:p-12 gap-8">
      {/* Left Column with Contact Information */}
      <div className="flex flex-col gap-6 lg:w-1/3 w-full">
        <div className="shadow-md p-6 rounded-lg">
          <div className="flex items-center text-xl sm:text-2xl gap-3 font-bold">
            <IoMdCall className="text-2xl sm:text-3xl text-red-600 hover:text-red-800" />
            <h1>Call To Us</h1>
          </div>
          <p>We are available 24/7, 7 days a week.</p>
          <span>Phone: +8801611112222</span>
        </div>
        <div className="shadow-md p-6 rounded-lg">
          <div className="flex items-center text-xl sm:text-2xl gap-3 font-bold">
            <IoMdMail className="text-2xl sm:text-3xl text-red-600 hover:text-red-800" />
            <h1>Write To Us</h1>
          </div>
          <p>Fill out our form and we will contact you within 24 hours.</p>
          <span>Email: customer@exclusive.com</span>
          <span>Email: support@exclusive.com</span>
        </div>
      </div>

      {/* Contact Form */}
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        className="w-full lg:w-2/3 shadow-md p-6 md:p-8 rounded-lg"
      >
        <Row className="mb-3 flex flex-col sm:flex-row gap-4">
          <Form.Group as={Col} className="w-full sm:w-1/3" controlId="validationName">
            <Form.Label>Your Name *</Form.Label>
            <Form.Control required type="text" placeholder="Your Name" />
            <Form.Control.Feedback type="invalid">Please provide your name.</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} className="w-full sm:w-1/3" controlId="validationEmail">
            <Form.Label>Your Email *</Form.Label>
            <Form.Control required type="email" placeholder="Your Email" />
            <Form.Control.Feedback type="invalid">Please provide a valid email.</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} className="w-full sm:w-1/3" controlId="validationPhone">
            <Form.Label>Your Phone *</Form.Label>
            <Form.Control required type="tel" placeholder="Your Phone" />
            <Form.Control.Feedback type="invalid">Please provide your phone number.</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Form.Group className="mb-4" controlId="formMessage">
          <Form.Label>Your Message</Form.Label>
          <Form.Control as="textarea" rows={4} placeholder="Your Message" required />
          <Form.Control.Feedback type="invalid">Please enter your message.</Form.Control.Feedback>
        </Form.Group>
        <Button variant="danger" type="submit" className="rounded-lg w-full">
          Send Message
        </Button>
      </Form>
    </div>
  );
};

export default Contact;
